"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { useState } from "react";
import { Header } from "./header";

type Props = {
    initialLessonId: number,
    initialPercentage: number,
    initialHearts: number,
    initialLessonChallenges: (typeof challenges.$inferSelect & {
        completed: boolean,
        challengeOptions: typeof challengeOptions.$inferSelect[]
    })[],
}

export const Quiz = ({initialLessonId, initialPercentage, initialHearts, initialLessonChallenges} : Props) => {
    const [hearts, setHearts] = useState(initialHearts);
    const [percentage, setPercentage] = useState(initialPercentage);

    return (
        <>
            <Header hearts={hearts} percentage={percentage}/>
        </>
    )
}