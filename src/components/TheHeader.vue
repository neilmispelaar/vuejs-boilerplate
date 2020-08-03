<template>
  <div>
    <header>
      <div class="bg-gray-200 p-5">
        <div class="w-full mx-auto container flex items-center justify-between">
          <!-- Brand Logo -->
          <img class="h-10" alt="Vue logo" src="../assets/logo.png">

          <!-- Application links -->
          <div class="font-semibold text-gray-700">
            <router-link to="/" active-class="text-green-600">Home</router-link> |
            <router-link to="/about" active-class="text-green-600">About</router-link>
          </div>

          <div></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
export default ({

  setup() {
    return {
    };
  },

});
</script>
