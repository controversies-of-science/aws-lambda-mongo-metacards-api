'use strict';

import { MongoClient } from "mongodb";

const 
  METACARDS = 'metacards';

module.exports.list = (event, context, callback) => {
  MongoClient.connect(process.env.MLABDB, (err, db) => {
      if (err) { throw err; }
      db.collection(METACARDS).find();
      db.close();
      context.done();
  });

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
