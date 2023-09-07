<template>
  <CreateNewBuilding class="cnt" />
</template>

<script setup lang="ts">
import controllerFacade from '@/models/facade/controllerFacade';
import type { BuildingRecord, Response } from '@/models/model/record';
import CreateNewBuilding from "@/components/building/CreateNewBuilding.vue";

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
.cnt{
 min-width: 60vw;
 max-height: 80vh;
 padding: 15px;
}
</style>
