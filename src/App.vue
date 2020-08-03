<template>
  <div id="app">
    <!-- The header component -->
    <the-header />

    <!-- Page content -->
    <div class="w-full mx-auto container p-5">
      <main>
        <router-view/>
      </main>
    </div>
    <!-- The footer component -->
    <the-footer />
  </div>
</template>

<script lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default ({
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
});
</script>

<style>
</style>
