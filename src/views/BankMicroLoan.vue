<template>
    <BankMicroLoanComponent class="cnt" />
  </template>
  
  <script setup lang="ts">

  import type { BankMicroLoanModel } from '@/models/model/bankMicroLoan';
  import BankMicroLoanComponent from "@/components/bankMicroLoan/BankMicroLoan.vue";
  
  const bankMicroLoan: BankMicroLoanModel = {
    ID: 'asset1',
                CodeMicroLoan: 'code 1',
                QuoteNumber: 5,
                PaidAmount: 2,
                PaymentDate: '02-09-2023',
                Porcentage: 0.25,
                InterestRate: "HIGH",
                Status: 'APPROVED'
  }
  </script>
  
  <style scoped>
  .cnt{
   min-width: 60vw;
   max-height: 80vh;
   padding: 15px;
  }
  </style>
  