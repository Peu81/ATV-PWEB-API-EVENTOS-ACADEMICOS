import { listar } from '../Services/eventos.services.js';

export const ListarEventos = (req,res) => {
    const eventos = listar();
    res.json(eventos);
};

export const CriarEvento = (req,res) => {
    //todo
}