import { Collection, MongoClient } from 'mongodb'
export const MongoHelper = {
  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    console.log('URL MONGO -> ', uri)
    this.client = await MongoClient.connect(uri)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    !this.client && await this.connect(this.uri)
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { ...plainCollection } = collection
    const { _id, ...collectionWithoutId } = plainCollection
    const returnCollection = { ...collectionWithoutId, id: _id }
    return returnCollection
  }

}
