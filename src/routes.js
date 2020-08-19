import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'

const router = Router()

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users', (req, res) => {
  return res.json({ message: 'Hello World!s' })
})

export { router }