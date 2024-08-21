import { PrismaClient } from '@prisma/client'
import express from 'express'


let app = express.Router()

// How do we connect this export to the user router is main.ts?
export default app;


const prisma = new PrismaClient()


app.get('/', async(req, res) =>{
    const users = await prisma.user.findMany()
    res.send(users)
})


app.post('/register', async(req, res) => {
    let {first_name, last_name, email} = req.body
    console.log("Went here")
    // Implement try, catch block for failed unique email
    await prisma.user.create({
        data: {
            first_name,
            last_name,
            email
        }
    })
    res.status(204).send();
    // setTimeout( () => {res.redirect('/start.html')} , 30000 )
    // res.redirect('/start.html')
})


app.delete('/all', async(req, res) => {
    await prisma.user.deleteMany({})
    res.send("GOOD!")
})


app.delete('/:id', async(req, res) => {
    await prisma.user.delete({
        where: {
            user_id: parseInt(req.params.id)
        }
    })
    const users = await prisma.user.findMany()
    res.send(users)
})



