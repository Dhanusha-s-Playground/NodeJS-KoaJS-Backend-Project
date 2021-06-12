const Koa = require('koa');

const app = new Koa();
require('dotenv').config({path: 'resources/.env'});

/* testing purposes. */
app.use(ctx => {
    console.log('koa works!');
    ctx.response.body = 'Hello Koa!';
});

app.listen(process.env.PORT_NO, (err) => {
    if (err) {
        console.error(`Something went wrong when starting the server.`, err);
    } else {
        console.log(`Server started successfully at port no: ${process.env.PORT_NO}`);
    }
});
