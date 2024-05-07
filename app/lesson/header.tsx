import { Progress } from "@/components/ui/progress"
import { useExitModal } from "@/store/use-exit-modal"
import { X } from "lucide-react"
import Image from "next/image"

type Props = {
    hearts: number,
    percentage: number
}

export const Header = ({ hearts, percentage}: Props) => {
    const { open } = useExitModal();

    return (
        <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px]
        mx-auto w-full">
            <X onClick={ open } width={35} height={35} className="text-slate-500 hover:opacity-75 transition cursor-pointer"/> 
            <Progress value={percentage}/>
            <div className="text-rose-500 flex items-center font-bold ">
                {hearts} <Image src="/heart.svg" height={20} width={20} alt="Heart" className="ml-2"/>
            </div>
        </header>
    )
}