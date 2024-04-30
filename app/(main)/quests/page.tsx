import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { quests } from "@/constans";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";


const QuestsPage = async() => {
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
                <UserProgress hearts={userProgress.hearts} points={userProgress.points} activeCourses={userProgress.activeCourse} />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image src="quests.svg" height={90} width={90} alt="Shop" />
                    <h1 className="text-center font-bold text-2xl text-neutral-800 my-6">
                        Quests
                    </h1>
                    <p className="text-center text-muted-foreground text-lg mb-6">
                        Complete quests by earning points.
                    </p>
                    <ul className="w-full">
                        {quests.map((quest) => {
                            const progress = (userProgress.points / quest.value) * 100;
                            return(
                                <div key={quest.title} className="p-4 space-y-4 border-t-2">
                                    <div className="flex items-center w-full gap-x-4">
                                        <Image src="/coin.svg" height={40} width={40} alt="Coin" />
                                    <div className="flex items-center justify-between w-full">
                                        <p className="text-neutral-700 text-xl font-bold">
                                            {quest.title} 
                                        </p>
                                        {progress >= 100 ? (
                                            <p className="text-green-500 font-bold">Completed</p>
                                        ) : (
                                            <p className="text-neutral-500 font-bold">{userProgress.points} / {quest.value}</p>
                                        )}
                                    </div>
                                    
                                    </div><Progress value={progress} className="h-3"/>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </FeedWrapper>
        </div>
    )
}

export default QuestsPage;