import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding database...");

        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "English",
                imgSrc: "/gb.svg"
            },
            {
                id: 2,
                title: "Spanish",
                imgSrc: "/es.svg"
            },
            {
                id: 3,
                title: "Japanese",
                imgSrc: "/jp.svg"
            },
            {
                id: 4,
                title: "Chinese",
                imgSrc: "/cn.svg"
            },
        ])

        await db.insert(schema.units).values([
            {
                id: 1,
                courseId: 1,
                title: "Unit 1",
                description: "Learn the basics of English",
                order: 1
            },
            {
                id: 2,
                courseId: 1,
                title: "Unit 2",
                description: "Learn the basics of English",
                order: 1
            }
        ])

        await db.insert(schema.lessons).values([
            {
                id: 1,
                unitId: 1,
                order: 1,
                title: "Nouns"
            },
            {
                id: 2,
                unitId: 1,
                order: 2,
                title: "Verbs"
            },
            {
                id: 3,
                unitId: 1,
                order: 3,
                title: "Verbs"
            },
            {
                id: 4,
                unitId: 1,
                order: 4,
                title: "Verbs"
            },
            {
                id: 5,
                unitId: 1,
                order: 5,
                title: "Verbs"
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                question: 'Which one of these is the "the man"?',
                order: 1
            },
        ])

        await db.insert(schema.challengeOptions).values([
            {
                id: 1,
                challengeId: 1,
                imgSrc: "/man.svg",
                audioSrc: "/en_man.mp3",
                text: "the man",
                correct: true
            },
            {
                id: 2,
                challengeId: 1,
                imgSrc: "/woman.svg",
                audioSrc: "/en_woman.mp3",
                text: "the woman",
                correct: false
            },
            {
                id: 3,
                challengeId: 1,
                imgSrc: "/baby.svg",
                audioSrc: "/en_baby.mp3",
                text: "the baby",
                correct: false
            }
        ])

        console.log("Database seeded successfully");
        
        
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed database");
    }
}

main();