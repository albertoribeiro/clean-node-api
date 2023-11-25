import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('Signup Routes', () => {
  beforeAll(async () => {
    const mongoURL: string = process.env.MONGO_URL ?? ''
    await MongoHelper.connect(mongoURL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test('Should retur an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Alberto',
        email: 'alberto.r.flavio@gmail.com',
        password: 'edcba23@fr4T',
        passwordConfirmation: 'edcba23@fr4T'
      })
      .expect(200)
  })
})
