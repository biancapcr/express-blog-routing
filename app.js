//console.log("Hello World");
// importo express
const express = require('express');
// creo l’applicazione
const app = express();
// imposto la porta
const port = 3000;
// definizione rotta base
app.get('/', (req, res) => {
  res.send('Benvenuto nel mio blog');
});
// avvio server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});