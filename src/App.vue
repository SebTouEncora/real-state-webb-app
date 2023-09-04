<script setup lang="ts">
import {RouterLink, RouterView, useRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {ref} from "vue";
import SkeletonLoading from "@/components/SkeletonLoading.vue";

const routes = useRouter().getRoutes();

const CachedComponent = ref(null);

function cacheComponent(Component: any) {
  CachedComponent.value = Component || CachedComponent.value;
}

</script>

<template>
  <header>
    <div id="header">
      <ul class="menu">
        <li v-for="route in routes"  :key="route.path"> <router-link :to="route.path">{{route.name}}</router-link></li>

      </ul>
    </div>
  </header>

  <RouterView v-slot="{ Component, route }" class="component">
    <template v-if="Component">
      <KeepAlive>
        <Suspense>
          <component :is="Component" />
          <template #fallback>
            <SkeletonLoading />
          </template>
        </Suspense>
      </KeepAlive>
    </template>
  </RouterView>
 
</template>

<style scoped>


.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  line-height: 60px;
  font-weight: 400;
  box-shadow: 0 1px 3px 0 #5E35B1;
  height: 60px;
  background-color: #7E57C2;
  top: 0;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10000;
}

#header {
  position: relative;
  width: 970px;
  margin: 0 auto;
  background: red;
}

#header .menu {
  float: left;
  line-height: 60px;
  margin-bottom: 0;
  font-size: 13px;
  list-style: none;
}
.component{
  padding: 85px;
}

#header .menu li {
  display: inline-block;
}

#header .menu li a {
  display: block;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 0 20px;
}

#header .menu li a:hover {
  background: #9575CD
}

#header .name {
  color: #fff;
  height: 60px;
  float: left;
  margin-right: 30px;
  margin-top: 0;
  font-size: 24px;
  font-family: 'Coiny', sans-serif;
  font-variant: small-caps;
}



</style>
