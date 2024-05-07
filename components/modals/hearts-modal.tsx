"use client";

import { useHeartsModal } from "@/store/use-hearts-modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useHeartsModal();
    
    useEffect(() => setIsClient(true), []);

    if(!isClient){
        return null;
    }


    return(
        <>
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <div className="flex items-center justify-center w-full mb-5">
                        <Image src="/mascot.svg" height={80} width={80} alt="Mascot"/>
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        У вас закончились сердечки!
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Дождитесь пока сердечки восстановятся или купите их в магазине.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-row gap-x-4 w-full">  
                        <Button variant="primary" className="w-full" onClick={() =>{close(); router.push("/shop")} }>
                            Купить сердечки
                        </Button>
                        <Button variant="primaryOutline" className="w-full" onClick={close}>
                            Нет, спасибо
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}