import express from 'express'
const app = express()
const port = 3003

import router from './router.js';

// Registra as rotas na raiz da aplicação
app.use(router);
// Permite que o express entenda requisições com o corpo no formato JSON
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})