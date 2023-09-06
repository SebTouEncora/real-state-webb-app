<template>
  <div>
    <CreateNewBuilding  class="cnt" />
  </div>
</template>
 
 
<script setup lang="ts">
import controllerFacade from '@/models/facade/controllerFacade';
import type { BuildingRecord, Response } from '@/models/model/record';
import CreateNewBuilding from "@/components/building/CreateNewBuilding.vue";
import { onMounted, type Ref, ref } from 'vue';
import SkeletonLoading from '@/components/SkeletonLoading.vue';



</script>
<style scoped>
.cnt {
  min-width: 60vw;
  max-height: 80vh;
  padding: 15px;
}
div {
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-top: 50px;
}
</style>