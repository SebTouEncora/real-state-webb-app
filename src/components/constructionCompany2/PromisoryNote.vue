<template>
    <div class="surface-card  shadow-2 border-round w-full lg:w-8">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Create Promisory Note</div>
      </div>
  
      <div class="cnt-act">
        <div>
          <label for="fullAmount" class="text-900 font-medium">Full Amount</label>
          <InputText id="fullAmount" v-model="promisoryNote.fullAmount" type="number" placeholder="Full Amount"/>
        </div>
       <div>
        <label for="quotesAmount" class="text-900 font-medium">Quote Amount</label>
        <InputText id="quotesAmount" v-model="promisoryNote.quotesAmount" type="number" placeholder="Quotes Amount"/>
       </div>
       <div>
        <label for="numberQuotes" class="text-900 font-medium">Number Quotes</label>
        <InputText id="numberQuotes" v-model="promisoryNote.numberQuotes" type="number" placeholder="Number Quotes"/>
       </div>
       <div>
        <label for="numberQuotes" class="text-900 font-medium">Number Quotes</label>
        <InputText id="numberQuotes" v-model="promisoryNote.dateMonthforQuotesPayment" type="number" placeholder="Date Month For Quotes Payment"/>
       </div>
  
  
      </div>
  
      <Button label="Create" @click="savePromisoryNote" icon="pi pi-save" class="w-full"></Button>
    </div>
  </template>
  
  <script setup lang="ts">
  import {reactive, ref} from 'vue';
  import type {Ref, UnwrapRef} from 'vue';
  import type {PromisoryNote} from "@/models/model/promisoryNote"
  import controllerFacade from "@/models/facade/promisoryNoteController";
  
  const promisoryNote: Ref<UnwrapRef<PromisoryNote>> = ref<PromisoryNote>({
    ID: 'asset3',
    fullAmount: 20,
    quotesAmount: 10,
    numberQuotes: 2,
    dateMonthforQuotesPayment: '02/09/2022'
  })
  
  const savePromisoryNote = async () => {
    const response = await controllerFacade.createNewPromisoryNote(promisoryNote.value);
    console.log({response})
  }
  </script>
  
  <style scoped>
  .cnt-act {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  }
  </style>