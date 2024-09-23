 import express from 'express'
 import { PrismaClient } from '@prisma/client'

 const prisma = new PrismaClient()
 const a = express()
 a.use(express.json())

 const usuarios = []

 a.post('/users', async(req,res) => { // rota parar criar o usuario

    await prisma.user.create({
      data: {
         email: req.body.email,
         name: req.body.name,
          age: req.body.age
      }
    })
    console.log(req)
    usuarios.push(req.body)

    res.status(201).json(req.body)
 })

 a.get('/users', async(req, res) => { // rota de recebimento 

    const users = await prisma.user.findMany
    res.status(200).json(usuarios)

 })

 a.put('/users/:id', async(req,res) => { // rota parar criar o usuario

   await prisma.user.update({
      where: {
         id:req.params.id
      },
     data: {
        email: req.body.email,
        name: req.body.name,
         age: req.body.age
     }
   })
   console.log(req)
   usuarios.push(req.body)

   res.status(201).json(req.body)
})

a.delete('/usuarios/:id', async(req,res) => {
   await prisma.user.delete({
      where: {
         id: req.params.id

      }
   })
   res.status(200).json(req.body)
})
 a.listen(3000)
 