<template>
  <div>
    <header>
      <div class="bg-gray-200">
        <div class="w-full mx-auto container p-5 flex items-center justify-between">

          <!-- Hidden heading -->
          <h2 class="sr-only">Site Header Information</h2>

          <!-- Brand Logo -->
          <img class="h-10" alt="Vue logo" src="../assets/logo.png">

          <!-- Site title -->
           <div>
             <p class="text-gray-800 font-semibold">Site Title</p>
           </div>

          <!-- Application links -->
          <nav>
            <div class="font-semibold text-gray-700">
              <router-link to="/" active-class="text-green-600">Home</router-link> |
              <router-link to="/about" active-class="text-green-600">About</router-link>
            </div>
          </nav>

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
