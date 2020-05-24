import * as express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Hello from express'));
app.get('/product', (req, res) => res.send('Got a request for products'));
app.get('/reviews', (req, res) => res.send('Got a request for reviews'));

const server = app.listen(8080, 'localhost', () => {
  const { address, port } = server.address();
  console.log(`Listening on http://${address}:${port}`);
});
