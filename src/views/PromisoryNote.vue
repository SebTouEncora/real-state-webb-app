<template>
    <PromisoryNoteComponent class="cnt" />
  </template>
  
  <script setup lang="ts">
  import controllerFacade from '@/models/facade/controllerFacade';
  import type { PromisoryNote } from '@/models/model/promisoryNote';
  import PromisoryNoteComponent from "@/components/constructionCompany2/PromisoryNote.vue";
  
  const promisoryNote: PromisoryNote = {
        ID: '2',
        fullAmount: 2,
        quotesAmount: 3,
        numberQuotes: 4,
        dateMonthforQuotesPayment: "07/09/2023",  
  }
  </script>
  
  <style scoped>
  .cnt{
   min-width: 60vw;
   max-height: 80vh;
   padding: 15px;
  }
  </style>
  