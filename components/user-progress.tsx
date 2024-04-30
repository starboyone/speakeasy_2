import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { courses } from "@/db/schema";

type Props = {
    hearts: number;
    points: number;
    activeCourses: typeof courses.$inferInsert;
}

export const UserProgress = ({ hearts, points, activeCourses }: Props) => {
    
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/shop">
                <Button variant="ghost" className="text-rose-500">
                    {hearts} ❤️ 
                </Button>
            </Link>
            <Link href="/shop">
                <Button variant="ghost" className="text-yellow-500">
                    {points}
                    <Image src="/coin.svg" height={20} width={20} alt="Coin" className="mx-1"/> 
                </Button>
            </Link>
            <Link href="/learn">
                <Button variant="ghost">
                    <Image src={activeCourses.imgSrc} height={32} width={32} alt={activeCourses.title} className="rounded-md drop-shadow-md" />
                </Button>
            </Link>
        </div>
    );
};