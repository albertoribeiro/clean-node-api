import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should retur an account on success', async () => {
    await request(app)
      .post('/api/singup')
      .send({
        name: 'Alberto',
        email: 'alberto.r.flavio@gmail.com',
        password: 'edcba23@fr4T',
        passwordConfirmation: 'edcba23@fr4T'
      })
      .expect(200)
  })
})
