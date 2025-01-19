import { NextResponse } from 'next/server';
import data from '@/data/FAQ.json';

export async function GET() {
  return NextResponse.json(data);
}