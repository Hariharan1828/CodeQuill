"use server";

import { db } from "@/db";
import { Room, rooms } from "@/db/schema";
import { getSession } from "@/lib/auth";

export async function createRoomAction(roomData: Omit<Room,"id"|"userId">) {
    const session = await getSession();

    if(!session){
        throw new Error("Unauthorized");
    }
    await db.insert(rooms).values({...roomData, userId:session.user.id});
}
