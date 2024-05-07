
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { courses } from "@/db/schema";
import { getCourses } from "@/db/queries";
import { NavigationMenuUserProgress } from "./navigation-menu-user-progress";

type Props = {
    hearts: number;
    points: number;
    diamonds: number
    activeCourses: typeof courses.$inferInsert;
}

export const UserProgress = async ({ hearts, points, diamonds, activeCourses }: Props) => {
    const coursesData = getCourses();

    const [coursesList] = await Promise.all([coursesData]);

    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <NavigationMenuUserProgress title={activeCourses.title} imgSrc={activeCourses.imgSrc} courses={coursesList}/>
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    {hearts}
                    <Image src="/heart.svg" height={25} width={25} alt="Heart" className="mx-1"/>  
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-yellow-500">
                    {points}
                    <Image src="/coin.svg" height={25} width={25} alt="Coin" className=""/> 
                </Button>
            </Link>
            {/* TODO: add crystals for shop*/}
            <Link href="/shop">
                <Button variant="ghost" className="text-sky-500">
                    {diamonds}
                    <Image src="/diamond.svg" height={20} width={20} alt="Diamond" className="mx-1"/> 
                </Button>
            </Link>
        </div>
    );
};