import { Collection, MongoClient } from 'mongodb'
export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (url: string): Promise<void> {
    console.log('URL MONGO -> ', url)
    this.client = await MongoClient.connect(url)
  },
  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { ...plainCollection } = collection
    const { _id, ...collectionWithoutId } = plainCollection
    const returnCollection = { ...collectionWithoutId, id: _id }
    return returnCollection
  }

}
