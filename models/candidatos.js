const mongoose = require("../database");
//const shortid = require('shortid');

const CandidatoSchema = new mongoose.Schema({
  /* O banco já forne um id único (_id)
  id: {
    type: String,
    default: shortid.generate,
  },
  */
  nome: {
    type: String,
    require: true,
  },

  cpf: {
    type: String,
    unique: true,
    require: true,
  },

  rg: {
    type: String,
    require: false,
  },

  email_: {
    type: String,
    require: true,
    lowercase: true,
  },

  nascimento: {
    type: Date,
    require: true,
  },

  estadoCivil: {
    type: String,
    require: false,
  },

  genero: {
    type: String,
    require: false,
  },

  cargo: {
    type: String,
    require: true,
  },

  logradouro: {
    type: String,
    require: true,
  },

  numeroLogradouro: {
    type: String,
    require: true,
  },

  bairro: {
    type: String,
    require: true,
  },

  cidade: {
    type: String,
    require: true,
  },

  estado: {
    type: String,
    require: true,
  },

  cep: {
    type: String,
    require: true,
  },

  telefone1: {
    type: String,
    require: false,
  },

  telefone2: {
    type: String,
    require: false,
  },

  celular: {
    type: String,
    require: true,
  },

  contato: {
    type: String,
    require: false,
  },

  automovel: {
    type: Boolean,
    require: false,
  },

  cnh: {
    type: Boolean,
    require: false,
  },

  dataDoCadastro: {
    type: Date,
    default: Date.now,
  },
});

const Candidato = mongoose.model("candidatos", CandidatoSchema);

module.exports = Candidato;
