<template>

  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <div class="text-900 text-3xl font-medium mb-3">Request micro loan</div>
    </div>

    <div>
      <label for="status" class="text-900 font-medium">Related construction</label>
      <Dropdown id="status" v-model="requestMicroLoan.constructionId" :options="displayedConstructionsIds" optionLabel="name"
                @update:modelValue="updateConstructionId" placeholder="Select a Status" class="w-full md:w-14rem"/>

      <label for="description" class="block text-900 font-medium mb-2">Description</label>
      <InputText id="description" v-model="requestMicroLoan.description" type="text" placeholder="description" pInputText class="w-full mb-3" />

      <label for="bankAccount" class="block text-900 font-medium mb-2">Bank account</label>
      <InputText id="bankAccount" v-model="requestMicroLoan.bankAccount" type="text" placeholder="bank account" pInputText class="w-full mb-3" />

      <label for="amount" class="block text-900 font-medium mb-2">Amount to loan</label>
      <InputText id="amount" v-model="requestMicroLoan.amount" type="number" placeholder="amount" pInputText class="w-full mb-3"/>

      <label for="pnc" class="block text-900 font-medium mb-2">Promissory detail codes</label>
      <InputText id="pnc" v-model="requestMicroLoan.promissoryDetail[0]" type="text" placeholder="Promissory detail code" pInputText class="w-full mb-3"/>


      <Button pButton pRipple @click="saveLoan" label="Request" icon="pi pi-user" class="w-full"></Button>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {BuildingRecord} from "@/models/model/record";
import {ref} from "vue";
import type {RequestMicroLoan} from "@/models/model/requestMicroLoan";


const props = defineProps<{
  availableConstructions: BuildingRecord;
}>();

const requestMicroLoan = ref<RequestMicroLoan>({
  amount: 0, bankAccount: "", code: "", companyId: "", constructionId: "", description: "", promissoryDetail: []
})
const displayedConstructionsIds = props.availableConstructions.response.map(e => ({ name: e.Key, value: e.Key }));
console.log(displayedConstructionsIds)

const saveLoan = () => {
  console.log(requestMicroLoan.value);
}

const updateConstructionId = (selectedOption: { name: string, value: string }) => {
  requestMicroLoan.constructionId = selectedOption.value;
}
</script>

<style scoped>

</style>