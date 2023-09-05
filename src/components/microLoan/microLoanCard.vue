<template>
    <div class="surface-card" @click="approveLoan">
      <div class="card-content">
        <div class="card-field">
          <span class="card-label">Amount:</span>
          <span class="card-value">{{ props.microLoan.amount }}</span>
        </div>
        <div class="card-field">
          <span class="card-label">Code:</span>
          <span class="card-value">{{ props.microLoan.code }}</span>
        </div>
        <div class="card-field">
          <span class="card-label">Company ID:</span>
          <span class="card-value">{{ props.microLoan.companyId }}</span>
        </div>
        <div class="card-field">
          <span class="card-label">Construction ID:</span>
          <span class="card-value">{{ props.microLoan.constructionId }}</span>
        </div>
        <div class="card-field">
          <span class="card-label">Status:</span>
          <span class="card-value">{{ props.microLoan.status }}</span>
        </div>
      </div>
  </div>


</template>

<script setup lang="ts">
import type {MicroLoan} from "@/models/model/microLoan";

const props = defineProps<{
  microLoan: MicroLoan;
}>();
const emit = defineEmits<{
  (e:'select', loan: MicroLoan) : void
}>();

const approveLoan = () => {
  emit("select", props.microLoan);
}

</script>

<style scoped>
.surface-card {
  width: 200px;
  height: 200px;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card-label {
  font-weight: bold;
  color: #333;
}

.card-value {
  color: #555;
}
</style>