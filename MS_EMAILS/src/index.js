const express = require('express');
const { Kafka } = require('kafkajs');
const Consumer = require('./ServiceKafka/consumer');
const app = express();

app.use(express.json());

app.listen(3000);

const consu = new Consumer('test');

consu.consume({ topic: 'test-topic', fromBeginning: true });

// const fun = async () => {
//   const kafka = new Kafka({
//     brokers: ['localhost:9092'],
//   });

//   const producer = kafka.producer();

//   await producer.connect();

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

//   console.log('asdkndas');
// };

// fun();
