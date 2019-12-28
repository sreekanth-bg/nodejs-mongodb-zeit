// server.js

const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 4000;

// << db setup >>
const db = require("./db");
const dbName = "data";
const collectionName = "movies";

// << db init >>
db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    // get all items
    dbCollection.find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });

    // << db CRUD routes >>

    server.post("/items", (request, response) => {
        const item = request.body;
        dbCollection.insertOne(item, (error, result) => { // callback of insertOne
            if (error) throw error;
            // return updated list
            dbCollection.find().toArray((_error, _result) => { // callback of find
                if (_error) throw _error;
                response.json(_result);
            });
        });
    });

    server.get("/items/:id", (request, response) => {
        const itemId = request.params.id;

        dbCollection.findOne({ id: itemId }, (error, result) => {
            if (error) throw error;
            // return item
            response.json(result);
        });
    });

}, function (err) { // failureCallback
    throw (err);
});



server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
