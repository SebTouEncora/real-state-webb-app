<template>
  <div class="cnt">
    <div  class="surface-card shadow-2 border-round w-full lg:w-8">

      <div class="cnt-act" v-if="!loading">
        <div class="text-center mb-5">
        <div class="text-900 text-3xl font-medium mb-3">Register new construction</div>
      </div>
        <label class="text-900 font-medium" for="company">Company ID</label>
        <InputText id="company" v-model="building.companyId" type="text" placeholder="Company ID"/>

        <label class="text-900 font-medium" for="status">Project Status</label>
        <Dropdown id="status" v-model="building.projectStatus" :options="status" class="w-full md:w-14rem"
                  optionLabel="name" placeholder="Select a Status"/>

        <label class="text-900 font-medium" for="location">Location</label>
        <div>
          <InputText id="location" style="margin-right: 10px" v-model="building.location.latitude" placeholder="Latitude" type="text"/>
          <InputText id="location2" style="margin-left: 10px"  v-model="building.location.longitude" placeholder="Longitude" type="text"/>
        </div>

        <label class="text-900 font-medium" for="area">Area</label>
        <div>
          <InputText style="margin-right: 10px" id="area" v-model="building.area.buildArea" placeholder="Land Area" type="text"/>
          <InputText  style="margin-left: 10px" id="area2" v-model="building.area.landArea" placeholder="Build Area" type="text"/>
        </div>


        <label class="text-900 font-medium" for="value">Amount</label>
        <div>
          <Dropdown style="margin-right: 10px" v-model="building.value.currency" :options="currencies" class="w-full md:w-14rem"
                    optionLabel="name" placeholder="Select a Status"/>
          <InputText  style="margin-left: 10px" id="area2" v-model="building.value.amount" placeholder="Amount" type="string"/>

        </div>
      </div>
      <div v-else>
        <SkeletonLoading/>
      </div>
      <Button class="w-full" icon="pi pi-save" label="Register" @click="saveBuilding"></Button>
    </div>

    <Toast style="margin-top: 50px"/>
  </div>
</template>



<script lang="ts" setup>
import type {Ref, UnwrapRef} from 'vue';
import {ref} from 'vue';
import type {Building} from '@/models/model/record';
import controllerFacade from "@/models/facade/controllerFacade";
import {useToast} from "primevue/usetoast";
import SkeletonLoading from "@/components/SkeletonLoading.vue";

const loading = ref(false);
const toast = useToast();

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
  loading.value = true;
  console.log(building.value)
  const response = await controllerFacade.createNewConstruction(building.value);
  if (response.status.toString().startsWith('2')) {
    toast.add({severity: 'success', summary: 'Registered', detail: 'Building registered succesfully', life: 5000});
  } else {
    toast.add({severity: 'error', summary: 'Error while registering', detail: `${response.statusText}`, life: 3000});
  }
  loading.value = false;
}
</script>

<style scoped>
.cnt-act {
  margin: 20px;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  height: 80vh
}

</style>