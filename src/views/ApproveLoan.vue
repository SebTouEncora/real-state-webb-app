<template>
  <div>
    <SkeletonCardsGallery v-if="isLoading" />

  <div class="gallery-cnt" v-if="loans && loans.response">
    <div class="galleryxxx">
      <MicroLoanCard v-for="loan in loans.response" :key="loan.key" @select="onLoanSelected" :micro-loan="loan.Record" />
    </div>
    <div>
      <Dialog style="margin-top: 70px !important;" v-model:visible="openModal" modal header="Enter Investment detail"
        :style="{ width: '40vw', height: '90vh' }">
        <approve-micro-loan :loan="loanSelected" @approve="onLoanApproved" />
      </Dialog>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { type Response } from "@/models/model/record";
import controllerFacade from "@/models/facade/controllerFacade";
import type { MicroLoan } from "@/models/model/microLoan";
import MicroLoanCard from "@/components/microLoan/microLoanCard.vue";
import { ref, onMounted } from 'vue';
import ApproveMicroLoan from "@/components/microLoan/approveMicroLoan.vue";
import type { RequestOportunityInvestment } from "@/models/model/oportunityInvestment";
import SkeletonCardsGallery from "@/components/SkeletonCardsGallery.vue";

const isLoading = ref(true);

const loans = ref<Response<MicroLoan> | null>(null);

onMounted(async () => {
  try {
    await controllerFacade.getAllMicroLoansCreated()
    loans.value = controllerFacade.microLoansAvailable;
    isLoading.value = false;
  } catch (error) {
    console.error('error', error)
  }
})
//const loans: Response<MicroLoan> = await controllerFacade.getAllMicroLoansCreated();




const openModal = ref(false);
const loanSelected = ref();

const onLoanSelected = (loan: MicroLoan) => {
  openModal.value = true;
  loanSelected.value = loan;
}

const onLoanApproved = async (data: RequestOportunityInvestment) => {
  openModal.value = false;
  await controllerFacade.getAllMicroLoansCreated();
  loans.value = controllerFacade.microLoansAvailable;
}
</script>

<style scoped >
.galleryxxx {
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}


.gallery-cnt {
  width: 80vw
}
</style>