import { Employes } from "../db/schema/Employes.js"

export const EmployesService = {
    getNombresEmployes: () => {
        return Employes.countDocuments();
    }
};