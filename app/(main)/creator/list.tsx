"use client";

import { Button } from "@/components/ui/button";
import { Card } from "./card";
import { createElement } from "react";
import { index } from "drizzle-orm/mysql-core";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const List = () => {
    const onClick = () => {
        console.log("clicked");
    }

    return (
        
        <div>
            <div className="w-full py-5">
                <Input className="w-full font-bold" placeholder="Enter name of unit"/>
                <div className="flex items-center justify-between space-x-5 py-3">              
                    <div className="w-1/2">
                        <Textarea className="resize-none font-bold" placeholder="Enter description of unit"/>
                    </div>
                    <div className="flex flex-col space-y-4 w-1/2 my-4 ">
                            <Input/>
                            <Input/>
                        </div>
                </div>  
            </div>
            <Card id={1}/>
            <Card id={2}/>
            <Card id={3}/>
            <Card id={4}/>
            <Card id={5}/>
            
            <Button variant="super" className="w-full h-[110px]" onClick={onClick}>
                + Add card
            </Button>

            <div className="w-full flex items-center justify-end my-4">
                <Button variant="secondary" size="lg">
                    Create
                </Button>
            </div>
        </div>
    )
}