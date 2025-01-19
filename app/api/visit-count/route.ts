import { NextResponse } from 'next/server';
import { incrementVisitCount, getVisitCount } from '@/app/lib/redis';

export async function GET() {
  const count = await getVisitCount();
  return NextResponse.json({ count });
}

export async function POST() {
  const newCount = await incrementVisitCount();
  return NextResponse.json({ count: newCount });
} 