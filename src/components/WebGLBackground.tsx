"use client";

import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const vertex = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  // Generic noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                       -0.577350269189626,  // -1.0 + 2.0 * C.x
                        0.024390243902439); // 1.0 / 41.0
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    st.x *= uResolution.x / uResolution.y;

    // Subtle reaction to mouse
    vec2 mouseOffset = (uMouse - 0.5) * 0.5;
    st += mouseOffset;

    // Base noise for texture
    float n = snoise(st * 1.5 + uTime * 0.1);
    
    // Very subtle monochrome coloring
    vec3 color = vec3(0.02) + vec3(0.04) * clamp(n, 0.0, 1.0);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function WebGLBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const renderer = new Renderer({ alpha: true, dpr: 1 }); // Reduce dpr for performance if needed
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    rendererRef.current = renderer;

    const geometry = new Triangle(gl);
    
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [0, 0] },
        uMouse: { value: [0.5, 0.5] }
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    // Handle resize
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      program.uniforms.uResolution.value = [window.innerWidth, window.innerHeight];
    };
    window.addEventListener('resize', resize, false);
    resize();

    // Handle mouse
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX / window.innerWidth;
      targetMouseY = 1.0 - (e.clientY / window.innerHeight); // Invert Y for webgl
    };
    window.addEventListener('mousemove', onMouseMove, false);

    // Render loop
    let animationId: number;
    const update = (t: number) => {
      animationId = requestAnimationFrame(update);
      
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      
      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uMouse.value = [mouseX, mouseY];
      
      renderer.render({ scene: mesh });
    };
    animationId = requestAnimationFrame(update);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (container && gl.canvas.parentNode) {
        container.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[-1] pointer-events-none opacity-50"
      aria-hidden="true"
    />
  );
}
