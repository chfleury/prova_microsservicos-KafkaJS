const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000);

const fun = async () => {
  const { Kafka } = require('kafkajs');

  const kafka = new Kafka({
    brokers: ['kafka:29092'],
  });

  const producer = kafka.producer();

  await producer.connect();

  //   await producer.send({
  //     topic: 'test-topic',
  //     messages: [{ value: 'Hello KafkaJS user!' }],
  //   });

  //   await producer.disconnect();

  //   const consumer = kafka.consumer({ groupId: 'test-group' });

  //   await consumer.connect();
  //   await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  //   await consumer.run({
  //     eachMessage: async ({ topic, partition, message }) => {
  //       console.log({
  //         value: message.value.toString(),
  //       });
  //     },
  //   });
};

fun();
