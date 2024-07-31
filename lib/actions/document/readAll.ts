'use client';

import { parseStringify } from "@/lib/utils";
import { liveblocks } from "../../liveblocks";

export const getDocuments = async (email: string) => {
    try {
        const rooms = await liveblocks.getRooms({ userId: email });

        return parseStringify(rooms);
    } catch (error) {
        console.log(`Error happened while getting rooms: ${error}`);
    }
};