<template>
  <div class="form-container">
    <Toast style="margin-top: 35px" />
    <div v-if="!loading" class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Approve Requested Loan</div>
      </div>

      <form class="form-content" @submit.prevent="handleSubmit">
        <div class="field">
          <label class="text-900 font-medium" for="status">Status</label>
          <Dropdown id="status" v-model="formData.status" :options="statuses" class="w-full"
                    option-value="code" optionLabel="name" placeholder="Select a Status"/>
        </div>

        <div class="field">
          <label class="text-900 font-medium" for="code">Code</label>
          <InputText id="code" v-model="formData.code" class="w-full" placeholder="Enter Code"/>
        </div>

        <div class="field">
          <label class="text-900 font-medium" for="minimunInvestment">Minimum Investment</label>
          <InputText id="minimunInvestment" v-model="formData.minimunInvestment" class="w-full" currency="USD"
                     locale="en-US" mode="currency"/>
        </div>

        <div class="field">
          <label class="text-900 font-medium" for="risk">Risk</label>
          <Dropdown id="risk" v-model="formData.risk" :options="risks" class="w-full" option-value="code"
                    optionLabel="name" placeholder="Select Risk Level"/>
        </div>

        <div class="field">
          <label class="text-900 font-medium" for="microLoanCode">Micro Loan Code</label>
          <InputText disabled id="microLoanCode" v-model="formData.microLoanCode" class="w-full"
                     placeholder="Enter Micro Loan Code"/>
        </div>

        <Button class="w-full p-mt-3" icon="pi pi-check" label="Submit" style="margin-top:15px" type="submit"/>
      </form>
    </div>
    <div v-else class="card flex justify-content-center">
      <ProgressSpinner />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Ref, ref, UnwrapRef} from "vue";
import type {MicroLoan} from "@/models/model/microLoan";
import type {RequestOportunityInvestment} from "@/models/model/oportunityInvestment";
import controllerFacade from "@/models/facade/controllerFacade";
import {useToast} from "primevue/usetoast";
import SkeletonLoading from "@/App.vue";

const props = defineProps<{
  loan: MicroLoan
}>();

const toast = useToast();
const loading = ref(false);
const formData : Ref<UnwrapRef<RequestOportunityInvestment>> = ref<RequestOportunityInvestment>({
  status: "",
  code: "",
  minimunInvestment: 0,
  risk: "",
  microLoanCode: props.loan.code
});

const statuses = ref([
  {name: 'Approved', code: 'Approved'},
  {name: 'Pending', code: 'Pending'},
  {name: 'Rejected', code: 'Rejected'}
]);

const risks = [
  {name: 'Low', code: 'bajo'},
  {name: 'Medium', code: 'medio'},
  {name: 'High', code: 'alto'}
];

const emits = defineEmits<{
  (e: 'approve', data: RequestOportunityInvestment): void;
}>();

const handleSubmit = async () => {
  loading.value = true;
  const response = await controllerFacade.createOportunityInvestment(formData.value);
  loading.value = false;
  if (response.status.toString().startsWith('2')) {
    toast.add({severity: 'success', summary: 'Registered', detail: 'Building registered succesfully', life: 5000});
  } else {
    toast.add({severity: 'error', summary: 'Error while registering', detail: `${response.statusText}`, life: 3000});
    window.location.reload();
  }
  emits('approve', formData.value);
  console.log({response})
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: left;
  align-items: center;

  background-color: transparent;
  width: 55vw;
}

.form-content {
  display: grid;
  gap: 1rem;
  grid-auto-rows: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
}

.field {
  display: flex;
  flex-direction: column;
}
</style>