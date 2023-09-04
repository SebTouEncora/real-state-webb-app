import ApiService from "@/service/ApiService";
import type {Building, BuildingRecord, Response} from "@/models/model/record";
import type {AxiosResponse} from "axios";
import type {RequestMicroLoan} from "@/models/model/requestMicroLoan";

export default class RealStateService extends ApiService{

    constructor() {
        super({ baseURL: "http://localhost:3004" });
    }
    async getConstructions(): Promise<BuildingRecord>{
        return (await this.get("/edificios")).data;
    }

    async registerNewConstruction(building: Building): Promise<AxiosResponse> {
        return (await this.post("/edificios", building));
    }

    async requestMicroLoan(microLoan: RequestMicroLoan): Promise<AxiosResponse>{
        return (await this.post('/microloan', microLoan));
    }
}