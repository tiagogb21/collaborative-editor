'use client';

import { parseStringify } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { liveblocks } from "../../liveblocks";

export const updateDocument = async (roomId: string, title: string) => {
    try {
        const updatedRoom = await liveblocks.updateRoom(roomId, {
            metadata: {
                title,
            },
        });

        revalidatePath(`/documents/${roomId}`);

        return parseStringify(updatedRoom);
    } catch (error) {
        console.log(`Error happened while updating a room: ${error}`);
    }
};