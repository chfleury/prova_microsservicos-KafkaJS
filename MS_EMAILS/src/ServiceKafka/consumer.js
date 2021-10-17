import { Kafka } from 'kafkajs';

export default class Consumer {
  constructor(groupId) {
    const kafka = new Kafka({
      brokers: ['localhost:9092'],
    });

    this.consumer = kafka.consumer({ groupId });
  }

  async consume({ topic, fromBeginning }) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log('-----------------------');
        console.log(message.value.toString());
      },
    });
  }
}
