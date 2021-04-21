import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

const routes = Router();
const settingsController = new SettingsController();

/*
* Tipos de parametros
* Routes Params => Parametros de rotas: vem na propria rota
* Query Params => Filtros e Busca: Vem após a ?
* Body Params => É passado um JSON para usar os parametros
*/

routes.post("/settings", settingsController.create);

export { routes }