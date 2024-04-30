import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import exp from "constants"
import Image from "next/image";
import { redirect } from "next/navigation";

const LeaderboardPage = async() => {
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
        <div className="flex flex-row-reverse">
            <StickyWrapper>
                <UserProgress activeCourses={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image src="/leaderboard.svg" height={90} width={90} alt="Leaderboard" className="mx-auto"/>
                    <h1 className="text-centet font-bold text-2xl text-neutral-800 my-6">
                        Leaderboard
                    </h1>
                    <p className="text-center text-muted-foreground text-lg mb-6">
                        See where you stand among others learners.
                    </p>
                </div>
            </FeedWrapper>
        </div>
    )
}

export default LeaderboardPage;