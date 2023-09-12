<template>
    <div>
    <SkeletonCardsGallery v-if="isLoading" />

    <div class="gallery-cnt" v-if="oportunityInvestments && oportunityInvestments.response">
        <div class="galleryxxx">
            <InvestmentOportunityCard v-for="oInvestment in oportunityInvestments.response" :key="oInvestment.code"
                :oporttunity-investment="oInvestment" />
        </div>
        <!-- <div>
      <Dialog style="margin-top: 70px !important;" v-model:visible="openModal" modal header="Enter Investment detail" :style="{ width: '40vw', height: '90vh' }">
        <approve-micro-loan :loan="loanSelected" @approve="onLoanApproved"/>
      </Dialog>
    </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import controllerFacade from '@/models/facade/controllerFacade';
import type { OportunityInvestmentResponse } from '@/models/model/oportunityInvestment';
import InvestmentOportunityCard from '@/components/investments/InvestmentOportunityCard.vue';
import SkeletonCardsGallery from '@/components/SkeletonCardsGallery.vue';

const isLoading = ref(true);
const oportunityInvestments = ref<OportunityInvestmentResponse | null>(null);

onMounted(async () => {
    console.log('mountin')
    try {
        await controllerFacade.loadOportunityInvestments();
        oportunityInvestments.value = controllerFacade.oportunityInvestments;
        console.log(oportunityInvestments.value)
        isLoading.value = false;
    } catch (error) {
        console.error("Error loading opportunity investments:", error);
    }
});

</script>

<style scoped>
.galleryxxx {
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}


.gallery-cnt{
  width: 80vw;
  margin-top: 80px;
}
</style>