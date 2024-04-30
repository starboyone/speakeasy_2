import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
import Image from "next/image";

const CoursesPage = async () => {
    const coursesData =  getCourses();
    const userProgressData =  getUserProgress();

    const [
        courses,
        userProgress
    ] = await Promise.all([
        coursesData,
        userProgressData    
    ])

    return (
        <div className="h-full max-w-[912px] px-3 mx-auto">
            <h1 className="font-bold text-2xl text-neutral-700">
                 Language Courses
            </h1>
            <List courses={courses} activeCourseId={userProgress?.activeCourseId}/>
            <Image src="/bongo-cat.gif" height={300} width={300} alt="Toothless Dancing" className="mx-auto my-10"/>
        </div>
    )
}

export default CoursesPage;