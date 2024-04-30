import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {

    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/gb.svg" height={32} width={40} alt="English" className="mr-4 rounded-md"/>
                    English
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/ru.svg" height={32} width={40} alt="Russian" className="mr-4 rounded-md"/>
                    Russian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="by.svg" height={32} width={40} alt="Belarus" className="mr-4 rounded-md"/>
                    Belarus
                </Button>
            </div>
        </footer>
    )
}