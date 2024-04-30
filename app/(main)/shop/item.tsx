import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {
    imgSrc: string;
    title: string;
    price: number;
}

export const Item = ({ imgSrc, title, price }: Props) => {
    return (
        <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
                    <Image src={imgSrc} height={100} width={100} alt={title} className="border-b-2"/>
                    <div className="flex-1">
                        <p className="font-bold text-base lg:text-xl mx-6 text-neutral-700 text-center">
                            {title}
                        </p>
                    </div>
                    <Button>
                        <div className="flex items-center">
                            <p>
                                {price}   
                            </p>
                            <Image src="/coin.svg" height={20} width={20} alt="Coin" className="mx-1"/> 
                        </div>
                    </Button>
                </div>
    )
}