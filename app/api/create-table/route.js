import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(_req) {
  try {
    const result = await sql`CREATE TABLE Grudges ( NAME VARCHAR(255));`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}