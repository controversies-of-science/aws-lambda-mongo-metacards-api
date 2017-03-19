if (!global._babelPolyfill) {
    require('babel-polyfill');
}

let MongoClient = require('mongodb').MongoClient;

const 
    METACARDS = 'metacards';

module.exports.list = (event, context, callback) => {
    MongoClient.connect(process.env.MLABDB, (connectError, db) => {
        if (connectError) { throw connectError; }

        db.collection(METACARDS)
            .find()
            .toArray((queryError, docs) => {

            if (queryError) {
                console.error(queryError);
                callback(new Error('Couldn\'t fetch the metacard data.'));
            } else {
                const response = {
                    statusCode: 200,
                    body: docs
                };

                callback(null, response);
            }

            db.close();
            context.done();
        });
    });
};
