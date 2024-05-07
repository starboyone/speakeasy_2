"use client";

import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { courses } from "@/db/schema";

 type Props = {
     title: string;
     imgSrc: string;
     courses: typeof courses.$inferSelect[];
 }

export const NavigationMenuUserProgress = ({title, imgSrc, courses}: Props) => {
     return(
        <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="">
                            <Image src={imgSrc} height={32} width={32} alt={title} className="rounded-md drop-shadow-md" />
                        </NavigationMenuTrigger>      
                        <NavigationMenuContent className="min-w-[200px]">
                            <div className="py-2 px-4 text-slate-700 font-bold border-b-2">
                                My courses
                            </div>
                            {courses.map((course) => (
                                <div key={course.id}>
                                    <NavigationMenuLink href="/courses" className="flex items-center gap-x-4 py-4 px-4 select-none rounded-md no-underline outline-none transition-colors hover:bg-accent">
                                        <Image src={course.imgSrc} height={32} width={32} alt={course.title} className="rounded-md drop-shadow-md" />
                                        <p className="text-slate-700">{course.title}</p>
                                    </NavigationMenuLink>
                                </div>
                            ))}  
                            <div className="absolute -left-1/2 -top-2 w-0 h-0 border-x-8 border-x-transparent
                            border-t-8 transform -translate-x-1/2"/>
                        </NavigationMenuContent>
                    </NavigationMenuItem>   
                </NavigationMenuList>
                
            </NavigationMenu>
     )
 }