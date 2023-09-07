<template>
    <div class="surface-card  shadow-2 border-round w-full lg:w-8">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Create Micro Loan Bank</div>
      </div>
  
      <div class="cnt-act">
        <div>
          <label for="CodeMicroLoan" class="text-900 font-medium">Code of Micro loan</label>
          <InputText id="CodeMicroLoan" v-model="bankMicroLoan.CodeMicroLoan" type="string" placeholder="Code MicroLoan"/>
        </div>
       <div>
        <label for="QuoteNumber" class="text-900 font-medium">Quote Number</label>
        <InputText id="QuoteNumber" v-model="bankMicroLoan.QuoteNumber" type="string" placeholder="Quote Number"/>
       </div>
       <div>
        <label for="PaidAmount" class="text-900 font-medium">Paid Amount</label>
        <InputText id="PaidAmount" v-model="bankMicroLoan.PaidAmount" type="number" placeholder="Paid Amount"/>
       </div>
       <div>
        <label for="PaymentDate" class="text-900 font-medium">Payment date</label>
        <InputText id="PaymentDate" v-model="bankMicroLoan.PaymentDate" type="string" placeholder="Payment Date"/>
       </div>
       <div>
        <label for="Porcentage" class="text-900 font-medium">Porcentage</label>
        <InputText id="Porcentage" v-model="bankMicroLoan.Porcentage" type="number" placeholder="Porcentage"/>
       </div>
       <label for="InterestRate" class="text-900 font-medium">Interest Rate</label>
       <Dropdown id="status" v-model="bankMicroLoan.InterestRate" :options="interestRate" optionLabel="name"
                placeholder="Select an Interest Rate" class="w-full md:w-14rem"/>
        <label for="Status" class="text-900 font-medium">Status</label>
       <Dropdown id="Status" v-model="bankMicroLoan.Status" :options="status" optionLabel="name"
                placeholder="Select an Status" class="w-full md:w-14rem"/>
  
      </div>
  
      <Button label="Create" @click="saveBankMicroLoan" icon="pi pi-save" class="w-full"></Button>
    </div>
  </template>
  
  <script setup lang="ts">
  import {reactive, ref} from 'vue';
  import type {Ref, UnwrapRef} from 'vue';
  import type {BankMicroLoanModel} from "@/models/model/bankMicroLoan"
  import controllerFacade from "@/models/facade/promisoryNoteController";
  
  const bankMicroLoan: Ref<UnwrapRef<BankMicroLoanModel>> = ref<BankMicroLoanModel>({
    ID: 'asset1',
    CodeMicroLoan: 'code 1',
    QuoteNumber: 5,
    PaidAmount: 2,
    PaymentDate: '02-09-2023',
    Porcentage: 0.25,
    InterestRate: "HIGH",
    Status: 'Approved'
  })
  const interestRate = ref([
  {name: 'HIGH', code: 'high'},
  {name: 'MED', code: 'med'},
  {name: 'LOW', code: 'low'}
]);
const status = ref([
  {name: 'APPROVED', code: 'approved'},
  {name: 'REQUESTED', code: 'requested'},
  {name: 'INPROGRESS', code: 'In progress'}
]);
  
  const saveBankMicroLoan = async () => {
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