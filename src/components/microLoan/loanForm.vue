<template>

  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img src="assets/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3">Don't have an account?</span>
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
      <label for="status" class="text-900 font-medium">Related construction</label>
      <Dropdown id="status" v-model="requestMicroLoan.constructionId" :options="displayedConstructionsIds" optionLabel="name"
                placeholder="Select a Status" class="w-full md:w-14rem"/>

      <label for="description" class="block text-900 font-medium mb-2">Description</label>
      <InputText id="description" v-model="requestMicroLoan.description" type="text" placeholder="description" pInputText class="w-full mb-3" />

      <label for="bankAccount" class="block text-900 font-medium mb-2">Bank account</label>
      <InputText id="bankAccount" v-model="requestMicroLoan.description" type="text" placeholder="bank account" pInputText class="w-full mb-3" />

      <label for="amount" class="block text-900 font-medium mb-2">Amount to loan</label>
      <InputText id="amount" v-model="requestMicroLoan.amount" type="number" placeholder="amount" pInputText class="w-full mb-3"/>

      <label for="pnc" class="block text-900 font-medium mb-2">Promissory detail codes</label>
      <InputText id="pnc" v-model="requestMicroLoan.promissoryDetail[0]" type="text" placeholder="Promissory detail code" pInputText class="w-full mb-3"/>


      <Button pButton pRipple label="Request" icon="pi pi-user" class="w-full"></Button>
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
const displayedConstructionsIds = ref(props.availableConstructions.response.map(e => e.Key));
console.log(displayedConstructionsIds.value)
</script>

<style scoped>

</style>