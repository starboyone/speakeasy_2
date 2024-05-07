
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { createElement } from "react";
import { List } from "./list";

const CreatorPage = async() => {
    const userProgressData = await getUserProgress();

    const [
        userProgress
    ] = await Promise.all([
        userProgressData
    ]);

    if(!userProgress || !userProgress?.activeCourse) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress hearts={userProgress.hearts} points={userProgress.points} diamonds={userProgress.diamonds} activeCourses={userProgress.activeCourse} />
            </StickyWrapper>
            <FeedWrapper>
            <div className="pb-3 border-b-2 mb-5 sticky top-0 bg-white lg:pt-[28px] lg:mt-[-28px]">
                <div className="bg-white flex items-center justify-between w-full text-neutral-400">
                    <h1 className="font-bold text-lg">
                        Create your unit
                    </h1>

                    <Button variant="secondary" size="sm">
                        Create
                    </Button>   
                </div>
            </div>

            <List />

            </FeedWrapper>
        </div>
    )
}

export default CreatorPage;