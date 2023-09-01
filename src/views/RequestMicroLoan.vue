<template>
  <div class="loan-cnt">
    <loan-form :available-constructions="buildings"/>
  </div>
</template>

<script setup lang="ts">

import LoanForm from "@/components/microLoan/loanForm.vue";
import controllerFacade from "@/models/facade/controllerFacade";
import {ref} from "vue";
import type {BuildingRecord} from "@/models/model/record";

const buildings: BuildingRecord = await controllerFacade.getAllConstructions();
</script>
<style scoped>
.loan-cnt{
  min-width: 45vw;
}
</style>