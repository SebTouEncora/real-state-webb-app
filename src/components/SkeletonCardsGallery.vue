<template>
    <div class="gallery-cnt">
    <div class="galleryxxx">
        <div v-for="n in 7" :key="n" class="skeleton-card">
            <div class="skeleton-field"></div>
            <div class="skeleton-field"></div>
            <div class="skeleton-field"></div>
            <div class="skeleton-field"></div>
            <div class="skeleton-field"></div>
        </div>
    </div>
</div>
</template>

<style scoped>
@keyframes loading {
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: 200px 0;
    }
}

.skeleton-card {
    width: 200px;
    height: 200px;
    background-color: rgba(200, 200, 200, 0.2);
    border-radius: 15px;
    padding: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.skeleton-field {
    height: 20px;
    background: linear-gradient(90deg, rgba(200, 200, 200, 0.2), rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.2));
    background-size: 200% 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    animation: loading 1.5s infinite;
}

.galleryxxx {
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-auto-rows: 15rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}


.gallery-cnt{
  width: 80vw
}
</style>