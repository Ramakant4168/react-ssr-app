import Express from 'express'
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config.dev-client';

const render = require('../dist/assets/server')

const app = Express()
const port = process.env.PORT|| 3000 

const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('*', render.default)


app.listen(port,()=>{
    console.log(`server listening on ${port}`)
  })
