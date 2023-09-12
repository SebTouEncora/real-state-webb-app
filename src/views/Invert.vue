<template>
  <div class="minimalist-form-container">
    <Card title="Minimalist Form" class="minimalist-form">
      <template #content>
      <form @submit.prevent="handleSubmit">
        <div class="p-field">
          <label for="code">Code</label>
          <InputText id="code" v-model="formData.code" placeholder="Enter Code"/>
        </div>

        <div class="p-field">
          <label for="fullName">Full Name</label>
          <InputText id="fullName" v-model="formData.fullName" placeholder="Enter Full Name"/>
        </div>

        <Button type="submit" label="Submit" class="p-mt-3"/>
      </form>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type FormDataType = {
  code: string;
  fullName: string;
};

const formData = ref<FormDataType>({
  code: "b09",
  fullName: "el pirata"
});

const handleSubmit = () => {
  console.log(formData.value);
  // Aquí puedes agregar la lógica para manejar el envío del formulario
};

</script>

<style scoped>
.minimalist-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5; /* Gris claro */
}

.minimalist-form {
  width: 100%;
  max-width: 500px;
  background-color: #ffffff; /* Blanco */
  border: 1px solid #d1d1d1; /* Gris */
  border-radius: 10px;
  padding: 2rem;
}

.p-field label {
  color: #333; /* Gris oscuro */
}

.p-button {
  background-color: #333; /* Gris oscuro */
  border: none;
}

.p-button:active, .p-button:focus, .p-button:hover {
  background-color: #555; /* Gris más oscuro */
}

@media (max-width: 600px) {
  .minimalist-form {
    padding: 1rem;
  }
}
</style>
