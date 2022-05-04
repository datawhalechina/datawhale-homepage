import express from 'express';
import { config } from './config';
import compression from 'compression';

const main = async () => {
  const app = express();
  const port = 8081;
  app.use(compression());
  app.use('/', express.static(config.staticFilePath));
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};

main();
