import ApiService from "@/service/ApiService";
import type {PromisoryNote} from "@/models/model/promisoryNote";
import type {AxiosResponse} from "axios";

export default class PromisonaryNoteService extends ApiService{

    constructor() {
        super({ baseURL: "http://localhost:3004" });
    }
    async getPromisoryNotes(): Promise<PromisoryNote>{
        return (await this.get("/promisonaryNote")).data;
    }

    async createPromisoryNote(promisonaryNote: PromisoryNote): Promise<AxiosResponse> {
        return (await this.post("/promisonaryNote", promisonaryNote));
    }
}