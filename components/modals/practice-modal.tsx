"use client";

import { usePracticeModal } from "@/store/use-practice-modal";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import Image from "next/image";
import { Button } from "../ui/button";

export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = usePracticeModal();
    
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
                        <Image src="/heart.svg" height={100} width={100} alt="Heart"/>
                    </div>
                    <DialogTitle className="text-center font-bold text-2xl">
                        Тренировочное занятие
                    </DialogTitle>
                    <DialogDescription className="text-center text-base">
                        Вы не можете потерять сердечки или получить очки опыта и кристаллы в тренировочном занятии.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-row gap-x-4 w-full">  
                        <Button variant="primary" className="w-full" onClick={close}>
                            Я понял(a)
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        </>
    )
}