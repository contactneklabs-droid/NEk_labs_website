import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'wak9cipn',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const redisClient = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) ? Redis.fromEnv() : null;

export async function POST(request: Request) {
  try {
    // Secure the route with a simple password check
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const action = formData.get('action') as string;

    if (action === 'update_info') {
      const payload = {
        name: formData.get('name') as string,
        handle: formData.get('handle') as string,
        role: formData.get('role') as string,
        classType: formData.get('classType') as string,
        system: formData.get('system') as string,
        profileImage: formData.get('profileImage') as string,
        imageId: formData.get('imageId') as string,
      };

      if (redisClient) {
        await redisClient.set('cms:nekcard', payload);
      } else {
        console.warn('Redis is not configured. CMS data will not persist.');
      }
      return NextResponse.json({ success: true, data: payload });
    }

    if (action === 'upload_image') {
      const file = formData.get('image') as File;
      if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

      // Convert file to base64 for Cloudinary upload
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64Data = buffer.toString('base64');
      const dataUri = `data:${file.type};base64,${base64Data}`;

      const uploadResponse = await cloudinary.uploader.upload(dataUri, {
        folder: 'nek_labs_cms',
      });

      return NextResponse.json({ 
        success: true, 
        url: uploadResponse.secure_url,
        public_id: uploadResponse.public_id 
      });
    }

    if (action === 'delete_image') {
      const publicId = formData.get('public_id') as string;
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error: any) {
    console.error('CMS API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
