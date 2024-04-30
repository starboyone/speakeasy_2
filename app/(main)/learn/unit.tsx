
import { lessons, units } from "@/db/schema"
import { UnitBanner } from "./unit-banner"
import { Button } from "@/components/ui/button"
import { LessonButton } from "./lesson-button"

type Props = {
    id: number
    title: string,
    description: string,
    order: number,
    lessons: (typeof lessons.$inferSelect & {
        completed: boolean
    })[],
    activeLesson: typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
    } | undefined,
    activeLessonPercentage: number
}
export const Unit = ({id, title, description, order, lessons, activeLesson, activeLessonPercentage}: Props) => {

    return (
        <>
            <UnitBanner title={title} description={description}/>
            <div className="flex items-center flex-col relative">
                {lessons.map((lesson, index) => {
                    const isCurrent = lesson.id === activeLesson?.id;
                    const isLocked = !lesson.completed && !isCurrent;

                    return (
                        <LessonButton key={lesson.id} id={lesson.id} index={index} totalCount={lessons.length - 1} locked={isLocked} current={isCurrent} percentage={activeLessonPercentage}/>
                    )
                })}
            </div>
        </>
    )
}