import { Progress } from "@/components/ui/progress"
import { X } from "lucide-react"
import Image from "next/image"

type Props = {
    hearts: number,
    percentage: number
}

export const Header = ({ hearts, percentage}: Props) => {

    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px]
        mx-auto w-full">
            <X onClick={ () => window.history.back() } className="text-slate-500 hover:opacity-75 transition cursor-pointer"/> 
            <Progress value={percentage}/>
            <div className="text-rose-500 flex items-center font-bold ">
                {hearts} <Image src="/heart.svg" height={20} width={20} alt="Heart" className="ml-2"/>
            </div>
        </header>
    )
}