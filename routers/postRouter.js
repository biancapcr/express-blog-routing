// importo express e creo router
const express = require('express');
const router = express.Router();

// definisco rotta index
router.get('/', (req, res) => {
    res.send('Elenco post')
});

// definisco rotta show
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Post con id ${id}`)
});

// definisco rotta store
router.post('/', (req,res) => {
  res.send(`Crea nuovo post`);
});

// definisco rotta modify
router.patch('/:id',(req,res) => {
    const id = req.params.id;
    res.send(`Modifica post ${req.params.id}`);
});

// definisco rotta update 
router.put('/:id',(req,res) => {
    const id = req.params.id;
    res.send(`Aggiorna post ${req.params.id}`);
});