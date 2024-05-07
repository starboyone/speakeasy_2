import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {

    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/ru.svg" height={32} width={40} alt="Russian" className="mr-4 rounded-md drop-shadow-md"/>
                    Russian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/ua.svg" height={32} width={40} alt="Ukrainian" className="mr-4 rounded-md drop-shadow-md"/>
                    Ukrainian
                </Button>
                
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="by.svg" height={32} width={40} alt="Belarus" className="mr-4 rounded-md drop-shadow-md"/>
                    Belarusian
                </Button>
            </div>
        </footer>
    )
}