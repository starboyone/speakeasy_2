import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import Image from "next/image";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { Quests } from "@/components/quests";
import { getCourseProgress, getLessonPercentage, getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Promo } from "@/components/promo";
import { Unit } from "./unit";
import { lessons, units as unitsSchema } from "@/db/schema";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();

    const [
        userProgress,
        units,
        courseProgress,
        lessonPercentage
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData
    ])

    if(!userProgress || !userProgress?.activeCourse) {
        redirect("/courses");
    }

    if(!courseProgress) {
        redirect("/courses");
    }

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress hearts={userProgress.hearts} points={userProgress.points} diamonds={userProgress.diamonds} activeCourses={userProgress.activeCourse}/>
                <Promo/>
                <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title}/>
                {units.map((unit) => (
                    <div key={unit.id} className="mb-10">
                        <Unit id={unit.id} title={unit.title} description={unit.description} order={unit.order} lessons={unit.lessons} activeLesson={courseProgress.activeLesson as typeof lessons.$inferSelect & {unit: typeof unitsSchema.$inferSelect} | undefined} activeLessonPercentage={lessonPercentage} />
                    </div>
                ))}
            </FeedWrapper>
        </div>
    )
}

export default LearnPage;