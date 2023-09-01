<template>
    <CreateNewBuilding class="cnt" />
 </template>
 
 
 <script setup lang="ts">
import controllerFacade from '@/models/facade/controllerFacade';
import type { BuildingRecord, Response } from '@/models/model/record';
import CreateNewBuilding from "@/components/building/CreateNewBuilding.vue";


 
 const buildings: BuildingRecord = await controllerFacade.getAllConstructions();
 console.log({buildings})
 console.log(buildings.response.map(e => e.Record.value?.amount! > 5000));
 </script>
 <style scoped>
 .cnt{
   min-width: 60vw;
   max-height: 80vh;
   padding: 15px;
 }
 </style>