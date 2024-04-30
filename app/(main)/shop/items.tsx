"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Item } from "./item";

type Props = {
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
}

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {

    return (
        <div>
            <ul className="w-full">
                <Item imgSrc="/toothless-dancing.gif" title="Toothless" price={50} />
                <Item imgSrc="/cat-dancing.gif" title="Cat" price={20} />
            </ul>
        </div>
    )
}