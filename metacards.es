'use strict';

let MongoClient = require('mongodb').MongoClient

const 
    METACARDS = 'metacards';

module.exports.list = (event, context, callback) => {
    MongoClient.connect(process.env.MLABDB, (err, db) => {
        if (err) { throw err; }

        db.collection(METACARDS)
            .find()
            .toArray((err, docs) => {

            if (error) {
                console.error(error);
                callback(new Error('Couldn\'t fetch the metacard data.'));
            } else {
                const response = {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: JSON.stringify(docs),
                        input: event
                    });
                };

                callback(null, response);
            }

            db.close();
            context.done();
        }
    });
};
