import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import * as path from 'node:path';
import { getDirname } from './util/node.js';

const publicPath = path.resolve(getDirname(import.meta.url), '..', 'public');
const indexHtmlPath = path.join(publicPath, 'index.html');

const app = new Koa();

app.use(mount('/', serve(publicPath)));

app.use(async (ctx) => {
    ctx.redirect('/');
});

export { app };
