import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    value: number;
    variant: "points" | "diamonds";
}

export const ResultCard = ({ value, variant }: Props) => {
    const imgSrc = variant === "points" ? "/coin.svg" : "/diamond.svg";

    return (
        <div className={cn(
            "rounded-xl border-2 w-full",
            variant === "points" && "bg-yellow-500 border-yellow-500",
            variant === "diamonds" && "bg-sky-500 border-sky-500"
        )}>
            <div className={cn(
                "p-1.5 text-white rounded-t-xl font-bold text-center uppercase text-xs",
                variant === "points" && "",
                variant === "diamonds" && ""
            )}>
                {variant === "points" && "Очки опыта"}
                {variant === "diamonds" && "Кристаллы"}
            </div>
            <div className={cn(
                "bg-white rounded-xl flex items-center justify-center p-4 font-bold text-lg",
                variant === "points" && "text-yellow-500",
                variant === "diamonds" && "text-sky-500"
            )}>
                <Image src={imgSrc} height={30} width={30} alt="Icon" className="mx-1"/>
                {value}
            </div>
        </div>
    )
}