import RealStateService from "@/service/realState.services";
import {reactive} from "vue";
import type {Building, BuildingRecord, Response} from "../model/record";
import type {AxiosResponse} from "axios";
import type {RequestMicroLoan} from "@/models/model/requestMicroLoan";
import type {MicroLoan} from "@/models/model/microLoan";
import type {RequestOportunityInvestment} from "@/models/model/oportunityInvestment";

export class ControllerFacade {
    private service: RealStateService = new RealStateService();

    private _microLoansAvailable = undefined;


    get microLoansAvailable(): any {
        return this._microLoansAvailable;
    }

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

    async getAllMicroLoansCreated(): Promise<Response<MicroLoan>>{
        const response = (await this.service.getAllMicroLoansCreated()).data;
        this._microLoansAvailable = Object.assign({}, response)
        return response;
    }

    async createOportunityInvestment(investment: RequestOportunityInvestment): Promise<AxiosResponse>{
        return await this.service.createOportunityInvestment(investment);
    }
}

const controllerFacade = reactive(new ControllerFacade());
export default  controllerFacade;