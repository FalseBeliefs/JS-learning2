import users from './routers/users'
import courses from './routers/courses'
import sections from './routers/sections'
import express from 'express'

let app = express()
app.use(express.json())

app.use('/users', users)
app.use('/courses', courses)
app.use('/sections', sections)

app.listen(9003)

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