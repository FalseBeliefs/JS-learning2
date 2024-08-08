import { PrismaClient } from "@prisma/client";
import express from "express"

let app = express.Router()
app.use(express.json())
export default app

let prisma = new PrismaClient()

app.get('/', async(req, res) => {
    const sections = await prisma.section.findMany();
    res.send(sections);
});


app.post('/', async(req, res) => {
    let {title, description, content, courseID} = req.body
    const createdSection = await prisma.section.create({
        data: {
            title: title,
            description: description,
            content: content,
            courseId: courseID
        }
    })
})