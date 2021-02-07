const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const graphqlServer = require('./graphqlServer');

const app = express();
app.use(require('cookie-parser')());
graphqlServer.applyMiddleware({ app });
const port = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            autoCreate: true,
        });

        /* eslint-disable-next-line no-console */
        app.listen(port, () => console.log(`express started on port ${port}...`));
    } catch (e) {
        /* eslint-disable-next-line no-console */
        console.log(`error while connected to mongoose. Message: ${e.message}`);
        /* eslint-disable-next-line no-undef */
        process.exit(1);
    }
}

start();
