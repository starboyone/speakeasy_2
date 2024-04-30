import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

type Props = {
    id: number
}

export const Card = ({ id }: Props) => {
    
    return (
        <div className="border-2 rounded-xl h-[150px] my-5 bg-slate-50">
            <div className="border-b-2 p-2">
                <div className="flex items-center justify-between w-full">
                    <p className="font-bold ml-2">
                        {id}
                    </p>
                    <Button variant="ghost" size="sm">
                        <Image src="/trash.svg" height={16} width={16} alt="Delete" />
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-between w-full p-4 space-x-4">
                <Input type="text" className="" placeholder="Enter word" />
                <Input type="text" className="" placeholder="Enter translate"/>
                <Input type="file" className="bg-green-100 hover:bg-green-200 min-w-[115px] w-1/4"/>
            </div>
        </div>
    )
}