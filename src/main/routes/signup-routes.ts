import { Router, Request, Response } from 'express'

export default (router: Router): void => {
  router.post('/singup', (req: Request, res: Response) => {
    res.send({ ok: 'ok' })
  })
}
