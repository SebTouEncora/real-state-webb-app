import ApiService from "@/service/ApiService";
import type {BankMicroLoanModel} from "@/models/model/bankMicroLoan";
import type {AxiosResponse} from "axios";

export default class BankMicroLoanService extends ApiService{

    constructor() {
        super({ baseURL: "http://localhost:3004" });
    }
    async getBankMicroLoan(): Promise<BankMicroLoanModel>{
        return (await this.get("/bankMicroLoan")).data;
    }

    async createBankMicroLoan(bankMicroLoan: BankMicroLoanModel): Promise<AxiosResponse> {
        return (await this.post("bankMicroLoan", bankMicroLoan));
    }
}