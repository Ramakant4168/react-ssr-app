import Express from 'express'
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.config.dev-client';
const compression = require('compression');

const render = require('../dist/assets/server')

const app = Express()
const port = process.env.PORT|| 3000 

app.use(compression());

const compiler = webpack(webpackConfig);

app.use('/static', Express.static('static'))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.use('*', render.default)


app.listen(port,()=>{
    console.log(`server listening on ${port}`)
  })
