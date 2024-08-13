import users from './routers/users'
import courses from './routers/courses'
import sections from './routers/sections'
import express from 'express'
import cors from 'cors'
import path from "path";

let app = express()
app.use(cors())
app.use(express.json()) //Maybe redundant
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './front_end')));


app.use('/users', users)
app.use('/courses', courses)
app.use('/sections', sections)

app.listen(9002)

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice2@prisma.io',
//     },
//   })
//   console.log(user)
// }
//
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })