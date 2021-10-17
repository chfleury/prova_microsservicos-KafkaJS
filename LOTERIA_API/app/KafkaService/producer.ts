import { Kafka } from 'kafkajs'

export default class Producer {
  private producer
  constructor() {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
    })

    this.producer = kafka.producer()
  }

  public async produce({ topic, messages }) {
    await this.producer.connect()
    await this.producer.send({
      topic,
      messages,
    })

    await this.producer.disconnect()
  }
}
