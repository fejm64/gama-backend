const express = require('express');
const Candidato = require('../models/candidatos');
const axios = require('axios');

const router = express.Router();
router.post('/registrar', async (req, res) => { 
   
  let consultaCep = 'https://viacep.com.br/ws/'+ req.body.cep + '/json';    
  await axios.get(consultaCep)
  .then(function (response) {    
    req.body.logradouro = response.data.logradouro;
    req.body.bairro = response.data.bairro;
    req.body.cidade = response.data.localidade;
    req.body.estado = response.data.uf;      
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }); 
  
  try {     
    const candidato = await Candidato.create(req.body);     
    return res.send({ candidato });
  } catch (err) {
      if(err.keyPattern.cpf == 1) {
        return res.status(400).send({ error: 'Candidato já existe!' });
      } else {
        console.log(err);
        return res.status(400).send({ error: 'Cadastro falhou!' });
      }
  }
});

module.exports = app => app.use('/cadastro', router);