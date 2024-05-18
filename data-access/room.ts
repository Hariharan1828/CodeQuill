import { db } from '@/db';
import { unstable_noStore } from 'next/cache';

export async function getRoom () {
    unstable_noStore();
  const rooms = await db.query.rooms.findMany();
    return rooms;
}

