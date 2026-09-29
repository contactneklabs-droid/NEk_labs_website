import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

export const runtime = 'edge';

const hasRedisConfig = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;
let redisClient: Redis | null = null;
if (hasRedisConfig) {
  redisClient = Redis.fromEnv();
}

export const defaultNekCardData = {
  name: "Bharath Chavan",
  handle: "@nek_labs",
  role: "Founder · Builder",
  classType: "Creative Technologist",
  system: "Engineering digital systems where the web is a playground for automation and high-end aesthetics.",
  profileImage: "https://res.cloudinary.com/wak9cipn/image/upload/f_auto,q_auto/v1789490948/IMG_9303-3.jpg",
  imageId: "",
};

export async function GET() {
  try {
    if (redisClient) {
      const data = await redisClient.get('cms:nekcard');
      if (data) {
        return NextResponse.json({ success: true, data });
      }
    }
    return NextResponse.json({ success: true, data: defaultNekCardData });
  } catch (error) {
    console.error('Error fetching NekCard data:', error);
    return NextResponse.json({ success: true, data: defaultNekCardData });
  }
}
