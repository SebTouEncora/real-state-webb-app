<template>
  <div class="loan-cnt">
    <SkeletonLoading v-if="isLoading" />
    <LoanForm v-if="buildings != null" :available-constructions="buildings" />
  </div>
</template>

<script setup lang="ts">

import LoanForm from "@/components/microLoan/loanForm.vue";
import controllerFacade from "@/models/facade/controllerFacade";
import { ref, onMounted, Ref } from 'vue';
import type {BuildingRecord} from "@/models/model/record";
import type {MicroLoan} from "@/models/model/microLoan";
import SkeletonLoading from "@/components/SkeletonLoading.vue";

const isLoading = ref(true)

const buildings: Ref<BuildingRecord | null > = ref(null);

onMounted(async () => {
  try {
    buildings.value =  await controllerFacade.getAllConstructions();
    isLoading.value = false;
  } catch (error) {
    console.log(error)
  }
})
</script>
<style scoped>
.loan-cnt{
  min-width: 45vw;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-top: 50px;
}
</style>