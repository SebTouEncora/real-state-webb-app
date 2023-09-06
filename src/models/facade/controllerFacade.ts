import RealStateService from "@/service/realState.services";
import {reactive} from "vue";
import type {Building, BuildingRecord, Response} from "../model/record";
import type {AxiosResponse} from "axios";
import type {RequestMicroLoan} from "@/models/model/requestMicroLoan";
import type {MicroLoan} from "@/models/model/microLoan";
import type {OportunityInvestmentResponse, RequestOportunityInvestment} from "@/models/model/oportunityInvestment";

export class ControllerFacade {
    private service: RealStateService = new RealStateService();

    private _microLoansAvailable = undefined;
    private _oportunityInvestments: OportunityInvestmentResponse | undefined = undefined;


    get oportunityInvestments(): OportunityInvestmentResponse {
        return this._oportunityInvestments!;
    }

    get microLoansAvailable(): any {
        return this._microLoansAvailable;
    }

    constructor() {}

    async loadOportunityInvestments(){
        const response: OportunityInvestmentResponse = (await this.service.getAllApprovedOportunityInvestments()).data;
        this._oportunityInvestments = structuredClone(response);
    }

    async getAllConstructions():  Promise<BuildingRecord>{
        return (await this.service.getConstructions()).data;
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