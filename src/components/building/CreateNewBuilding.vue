<template>
  <div class="surface-card  shadow-2 border-round w-full lg:w-8">
    <div class="text-center mb-5">
      <div class="text-900 text-3xl font-medium mb-3">Register new construction</div>
    </div>

    <div class="cnt-act">

      <label for="company" class="text-900 font-medium">Company ID</label>
      <InputText id="company" v-model="building.companyId" type="text"/>


      <label for="status" class="text-900 font-medium">Proyect Status</label>
      <Dropdown id="status" v-model="building.projectStatus" :options="status" optionLabel="name"
                placeholder="Select a Status" class="w-full md:w-14rem"/>

      <div>
        <label for="location" class="text-900 font-medium">Location</label>
        <InputText id="location" v-model="building.location.latitude" type="text" placeholder="Latitude"/>
        <InputText id="location2" v-model="building.location.longitude" type="text" placeholder="Longitude"/>
      </div>
      <div>
        <label for="area" class="text-900 font-medium">Area</label>
        <InputText id="area" v-model="building.area.buildArea" type="text" placeholder="Land Area"/>
        <InputText id="area2" v-model="building.area.landArea" type="text" placeholder="Build Area"/>
      </div>

      <div>
        <label for="value" class="text-900 font-medium">Amount</label>
        <Dropdown v-model="building.value.currency" :options="currencies" optionLabel="name"
                  placeholder="Select a Status"
                  class="w-full md:w-14rem"/>
        <InputText id="area2" v-model="building.value.amount" type="string" placeholder="Amount"/>
      </div>
    </div>

    <Button label="Register" @click="saveBuilding" icon="pi pi-save" class="w-full"></Button>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {Ref, UnwrapRef} from 'vue';
import type {Building} from '@/models/model/record';
import controllerFacade from "@/models/facade/controllerFacade";

const building: Ref<UnwrapRef<Building>> = ref<Building>({
  certified: false, companyId: "", docType: "", id: "", projectStatus: "",
  location: {
    latitude: '',
    longitude: ''
  },
  area: {
    buildArea: '',
    landArea: ''
  },
  value: {
    currency: '',
    amount: 0
  }
})

const selectedStatus = ref();
const status = ref([
  {name: 'En Planos', code: 'planos'},
  {name: 'En Construccion', code: 'construction'},
  {name: 'Obra Negra', code: 'obraNegra'}
]);

const currencies = ref([
  {name: 'EURO', code: 'EUR'},
  {name: 'Dolar', code: 'USD'},
  {name: 'Soles', code: 'PEN'}
]);

const saveBuilding = async () => {
  console.log(building.value)
  const response = await controllerFacade.createNewConstruction(building.value);
  console.log({response})
}
</script>

<style scoped>
.cnt-act {
  display: grid;
  gap: 1rem;
  grid-auto-rows: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
}
</style>