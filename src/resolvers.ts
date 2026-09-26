import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const resolvers = {
    Query: {
        schools:() => prisma.school.findMany({ include: { classes: true, students: true }}),
        school: (_: unknown, args: { id: number }) => 
            prisma.school.findUnique({
                where: { id: args.id },
                include: { classes: true, students: true }
            })
    },
    Mutation: {
        createSchool: (_: unknown, args: { name: string }) =>
            prisma.school.create({ data: { name: args.name }})
    }
}