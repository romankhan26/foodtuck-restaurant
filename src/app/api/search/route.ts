import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Adjust path as needed

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  try {
    // Query both products and routes
    const queryString = `
      *[
        (_type == "product" && name match "${query}*") || 
        (_type == "route" && title match "${query}*")
      ] {
        _type,
        title,
        name,
        description,
        slug
      }
    `;
    const results = await client.fetch(queryString);

    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' });
  }
}

