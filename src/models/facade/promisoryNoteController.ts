import {reactive} from "vue";
import type {PromisoryNote} from "../model/promisoryNote";
import type {AxiosResponse} from "axios";
import PromisonaryNoteService from "@/service/promisoryNote.service";

export class ProminsaryNoteController {
    private service: PromisonaryNoteService = new PromisonaryNoteService();

    constructor() {}

    async getAllPromisoryNotes():  Promise<PromisoryNote>{
        return this.service.getPromisoryNotes();
    }

    async createNewPromisoryNote(promisoryNote: PromisoryNote): Promise<AxiosResponse>{
        promisoryNote.ID = String(Date.now());
        return  await this.service.createPromisoryNote(promisoryNote);
    }
}

const controllerFacade = reactive(new ProminsaryNoteController());
export default  controllerFacade;