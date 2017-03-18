'use strict';

let MongoClient = require('mongodb').MongoClient;

const 
    CARDS = 'cards';

module.exports.get = (event, context, callback) => {
    MongoClient.connect(process.env.MLABDB, (err, db) => {
        if (err) { throw err; }

        db.collection(CARDS)
            .find({"_id": event.pathParameters.id})
            .toArray((err, docs) => {

            if (error) {
                console.error(error);
                callback(new Error('Couldn\'t fetch the controversy card.'));
            } else {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: JSON.stringify(docs),
                        input: event
                    })
                };

                callback(null, response);                
            }

            db.close();
            context.done();
        });
    });
};
