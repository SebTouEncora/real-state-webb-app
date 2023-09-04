import RealStateService from "@/service/realState.services";
import {reactive} from "vue";
import type {Building, BuildingRecord, Response} from "../model/record";
import type {AxiosResponse} from "axios";
import type {RequestMicroLoan} from "@/models/model/requestMicroLoan";

export class ControllerFacade {
    private service: RealStateService = new RealStateService();

    constructor() {}

    async getAllConstructions():  Promise<BuildingRecord>{
        return this.service.getConstructions();
    }

    async createNewConstruction(building: Building): Promise<AxiosResponse>{
        building.id = String(Date.now());
        return  await this.service.registerNewConstruction(building);
    }

    async requestNewMicroLoan(microLoan: RequestMicroLoan): Promise<AxiosResponse>{
        return await this.service.requestMicroLoan(microLoan);
    }
}

const controllerFacade = reactive(new ControllerFacade());
export default  controllerFacade;