import { EmployesService } from "../services/Employes.js"

export const EmployesController = {
    getNombresEmployes: async (req, res, next) => {
        res.send({"nombre": await EmployesService.getNombresEmployes()});
    }
};