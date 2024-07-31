'use client';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { liveblocks } from "../../liveblocks";

export const deleteDocument = async (roomId: string) => {
    try {
        await liveblocks.deleteRoom(roomId);
        revalidatePath("/");
        redirect("/");
    } catch (error) {
        console.log(`Error happened while deleting a room: ${error}`);
    }
};
