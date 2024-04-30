import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";

const ShopPage = async () => {
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
                    <Image src="/shop.svg" height={90} width={90} alt="Shop" />
                    <h1 className="text-center font-bold text-2xl text-neutral-800 my-6">
                        Shop
                    </h1>
                    <p className="text-center text-muted-foreground text-lg mb-6">
                        Spend your points for customize your app.
                    </p>
                    <Items hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={false}/>
                </div>
            </FeedWrapper>
        </div>
    )
}

export default ShopPage;