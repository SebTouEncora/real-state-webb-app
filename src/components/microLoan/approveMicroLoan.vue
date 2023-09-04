<template>
  <div class="form-container">
    <Card title="Futuristic Form" class="futuristic-form">
      <form @submit.prevent="handleSubmit">
        <div class="p-field">
          <label for="status">Status</label>
          <Dropdown id="status" v-model="formData.status" :options="statuses" placeholder="Select a Status"/>
        </div>

        <div class="p-field">
          <label for="code">Code</label>
          <InputText id="code" v-model="formData.code" placeholder="Enter Code"/>
        </div>

        <div class="p-field">
          <label for="minimunInvestment">Minimum Investment</label>
          <InputText id="minimunInvestment" v-model="formData.minimunInvestment" mode="currency" currency="USD" locale="en-US"/>
        </div>

        <div class="p-field">
          <label for="risk">Risk</label>
          <Dropdown id="risk" v-model="formData.risk" :options="risks" placeholder="Select Risk Level"/>
        </div>

        <div class="p-field">
          <label for="microLoanCode">Micro Loan Code</label>
          <InputText id="microLoanCode" v-model="formData.microLoanCode" placeholder="Enter Micro Loan Code"/>
        </div>

        <Button type="submit" label="Submit" icon="pi pi-check" class="p-mt-3"/>
      </form>
    </Card>
  </div>
</template>
<script setup lang="ts">

import {ref} from "vue";

const formData = ref({
  status: "Approved",
  code: "nuevo-005",
  minimunInvestment: 500,
  risk: "bajo",
  microLoanCode: "nuevo-00004"
});

const statuses = [
  { label: 'Approved', value: 'Approved' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Rejected', value: 'Rejected' }
];

const risks = [
  { label: 'Low', value: 'bajo' },
  { label: 'Medium', value: 'medio' },
  { label: 'High', value: 'alto' }
];

const handleSubmit = () => {
  console.log(formData.value);
  // Aquí puedes agregar la lógica para manejar el envío del formulario
};

</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.futuristic-form {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
}

@media (max-width: 600px) {
  .futuristic-form {
    padding: 1rem;
  }
}
</style>