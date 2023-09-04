<template>
  <div class="skeleton-form-container">
    <Card>
      <template #title>
        Loading Form
      </template>

      <template #content>
        <div class="skeleton-field">
          <Skeleton shape="rectangle" width="100px" height="20px" />
          <Skeleton shape="rectangle" width="100%" height="40px" class="skeleton-input" />
        </div>

        <div class="skeleton-field">
          <Skeleton shape="rectangle" width="100px" height="20px" />
          <Skeleton shape="rectangle" width="100%" height="40px" class="skeleton-input" />
        </div>

        <div class="skeleton-field">
          <Skeleton shape="rectangle" width="100px" height="20px" />
          <Skeleton shape="rectangle" width="100%" height="40px" class="skeleton-input" />
        </div>

        <div class="skeleton-field">
          <Skeleton shape="rectangle" width="100px" height="20px" />
          <Skeleton shape="rectangle" width="100%" height="40px" class="skeleton-input" />
        </div>

        <div class="skeleton-field">
          <Skeleton shape="rectangle" width="100px" height="20px" />
          <Skeleton shape="rectangle" width="100%" height="40px" class="skeleton-input" />
        </div>

        <div class="skeleton-field">
          <Skeleton shape="rectangle" width="100px" height="20px" />
          <Skeleton shape="rectangle" width="100%" height="40px" class="skeleton-input" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.skeleton-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;
  border: none;
}

.skeleton-field {
  margin-bottom: 1rem;
  width: 45vw;
}

.skeleton-input {
  margin-top: 0.5rem;
}
</style>
