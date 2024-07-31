'use client';

import { nanoid } from "nanoid";

import { getAccessType, parseStringify } from "@/lib/utils";
import { liveblocks } from "../../liveblocks";
import { revalidatePath } from "next/cache";

export const updateDocumentAccess = async ({
    roomId,
    email,
    userType,
    updatedBy,
}: ShareDocumentParams) => {
    try {
        const usersAccesses: RoomAccesses = {
            [email]: getAccessType(userType) as AccessType,
        };

        const room = await liveblocks.updateRoom(roomId, {
            usersAccesses,
        });

        if (room) {
            const notificationId = nanoid();

            await liveblocks.triggerInboxNotification({
                userId: email,
                kind: "$documentAccess",
                subjectId: notificationId,
                activityData: {
                    userType,
                    title: `You have been granted ${userType} access to the document by ${updatedBy.name}`,
                    updatedBy: updatedBy.name,
                    avatar: updatedBy.avatar,
                    email: updatedBy.email,
                },
                roomId,
            });
        }

        revalidatePath(`/documents/${roomId}`);
        return parseStringify(room);
    } catch (error) {
        console.log(`Error happened while updating a room access: ${error}`);
    }
};