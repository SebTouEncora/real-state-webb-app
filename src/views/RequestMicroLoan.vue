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

const buildings: BuildingRecord = {

response: [
     {
         Key: "1693421591289",
         Record: {
             certified: false,
             companyId: "20600060541",
             docType: "construction",
             id: "1693421591289",
             projectStatus: "planos",
             value: {
                 amount: 155000,
                 currency: "EUR"
             },
             location:{
              latitude:"1.2.3.4", 
              longitude: "3.4.5.3"
             },
             area:{
              landArea:"wd", 
              buildArea:"32gd"
             }
         }
     }
    ]
}

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