<template>
  <div style="margin-top: 85px" class="surface-card p-4 shadow-2 border-round w-full lg:w-7">
    <div >
      <div v-if="!loading">
        <div class="text-center mb-5">
          <div class="text-900 text-3xl font-medium mb-3">Request micro loan</div>
        </div>
        <label class="text-900 font-medium" for="status">Related construction</label>
        <Dropdown id="status" v-model="selectedConstructionId" :options="displayedConstructionsIds"
                  class="w-full md:w-14rem"
                  optionLabel="name" placeholder="Select construction"
                  />

        <label class="block text-900 font-medium mb-2" for="description">Company ID</label>
        <InputText id="description" v-model="constructionId" class="w-full mb-3" disabled pInputText type="text"/>


        <label class="block text-900 font-medium mb-2" for="description">Description</label>
        <InputText id="description" v-model="requestMicroLoan.description" class="w-full mb-3" pInputText
                   placeholder="description" type="text"/>

        <label class="block text-900 font-medium mb-2" for="bankAccount">Bank account</label>
        <InputText id="bankAccount" v-model="requestMicroLoan.bankAccount" class="w-full mb-3" pInputText
                   placeholder="bank account" type="text"/>

        <label class="block text-900 font-medium mb-2" for="amount">Amount to loan</label>
        <InputText id="amount" v-model="requestMicroLoan.amount" class="w-full mb-3" pInputText placeholder="amount"
                   type="number"/>

        <label class="block text-900 font-medium mb-2" for="pnc">Promissory detail codes</label>
        <Chips id="pnc" v-model="requestMicroLoan.promissoryDetail" class="w-full mb-3"/>
      </div>
      <div v-else>
        <SkeletonLoading/>
      </div>
      <Button class="w-full" icon="pi pi-user" label="Request" pButton pRipple @click="saveLoan"></Button>
      <Toast style="margin-top: 50px"/>
    </div>
  </div>
</template>


<script lang="ts" setup>
import type {BuildingRecord} from "@/models/model/record";
import {computed, ref} from "vue";
import type {RequestMicroLoan} from "@/models/model/requestMicroLoan";
import controllerFacade from "@/models/facade/controllerFacade";
import {useToast} from "primevue/usetoast";
import SkeletonLoading from "@/components/SkeletonLoading.vue";

const toast = useToast();
const selectedConstructionId = ref('');
const props = defineProps<{
  availableConstructions: BuildingRecord;
}>();
const loading = ref(false);

const requestMicroLoan = ref<RequestMicroLoan>({
  amount: 0, bankAccount: "", code: "", companyId: "", constructionId: "", description: "", promissoryDetail: []
})

const constructionId = computed(() => {
  const filtered = props.availableConstructions.response.find(e => e.Key == selectedConstructionId.value.value);
  return filtered ? filtered.Record.companyId : '';
});

const displayedConstructionsIds = props.availableConstructions.response.map(e => ({name: e.Key, value: e.Key}));

const saveLoan = async () => {
  loading.value = true;
  requestMicroLoan.value.constructionId = selectedConstructionId.value.value;
  requestMicroLoan.value.code = String(Date.now());
  requestMicroLoan.value.companyId = constructionId.value;

  const response = await controllerFacade.requestNewMicroLoan(requestMicroLoan.value);
  if (response.status.toString().startsWith('2')) {
    toast.add({severity: 'success', summary: 'Requested', detail: 'Loan requested succesfully', life: 5000});
  } else {
    toast.add({severity: 'error', summary: 'Error while requesting', detail: `${response.statusText}`, life: 3000});
  }
  loading.value = false ;
}

const updateConstructionId = (selectedOption: { name: string, value: string }) => {
  selectedConstructionId.value = selectedOption.value;
}
</script>

<style scoped>

</style>