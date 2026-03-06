import {EventosDatabase} from "../Database/EventosDatabase.js";

const database = new EventosDatabase();
export function listar() {
    try {
        const listagem = database.listarTodos();
        return listagem;
    } catch (error) {
        console.error("Erro ao encontrar eventos: ", error)
    }
};