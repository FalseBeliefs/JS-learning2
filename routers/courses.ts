import { PrismaClient } from '@prisma/client'
import express from 'express'

let app = express.Router()
app.use(express.json())
export default app;

const prisma = new PrismaClient()


app.get('/', async(req, res) => {
    const courses = await prisma.course.findMany();
    res.send(courses)
});


app.post('/', async(req, res) => {
    let {title, description, content, authorId} = req.body

    const createdCourse = await prisma.course.create({
        data: {
            title: title,
            description: description,
            content: content,
            authorId: authorId,
            owner: authorId
        }
    })
    res.send(createdCourse)
})


app.delete('/:id', async(req, res) => {
    await prisma.course.delete({
        where: {
            course_id: parseInt(req.params.id)
        }
    })
    const courses = await prisma.course.findMany()
    res.send(courses)
})