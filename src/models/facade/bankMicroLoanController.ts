import {reactive} from "vue";
import type {BankMicroLoanModel} from "../model/bankMicroLoan";
import type {AxiosResponse} from "axios";
import BankMicroLoanService from "@/service/bankMicroLoan.service";

export class BankMicroLoanController {
    private service: BankMicroLoanService = new BankMicroLoanService();

    constructor() {}

    async getAllBankMicroLoan():  Promise<BankMicroLoanModel>{
        return this.service.getBankMicroLoan();
    }

    async createNewBankMicroLoan(bankMicroLoan: BankMicroLoanModel): Promise<AxiosResponse>{
        bankMicroLoan.ID = String(Date.now());
        return  await this.service.createBankMicroLoan(bankMicroLoan);
    }
}

const controllerFacade = reactive(new BankMicroLoanController());
export default  controllerFacade;