"use client";

import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import Loader from "../Loader";
import { Header } from "../Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Editor } from "../editor/Editor";

function CollaborativeRoom() {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<Loader />}>
                <div className="collaborative-room">
                    <Header className="flex w-fit items-center justify-center gap-2">
                        <div>
                            <p className="document-title">Share</p>
                        </div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    );
}

export default CollaborativeRoom;
