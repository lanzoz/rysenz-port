import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const portfolioPath = path.join(process.cwd(), 'public', 'portfolio', 'code');
    const files = fs.readdirSync(portfolioPath);
    
    const imageFiles = files.filter(file => 
      /\.(png|jpe?g|gif|bmp|webp|svg)$/i.test(file)
    );
    
    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading portfolio directory:', error);
    return NextResponse.json(
      { error: 'Unable to read portfolio images' }, 
      { status: 500 }
    );
  }
}

export async function POST(request) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function PUT(request) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}

export async function DELETE(request) {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}