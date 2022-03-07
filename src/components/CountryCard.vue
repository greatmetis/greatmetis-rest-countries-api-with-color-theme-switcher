<template>
  <router-link :to="{name:'CardDetails',params:{id:country.callingCodes[0]}}">
    <ul class="shadow-md rounded-md overflow-hidden bg-white dark:bg-blue-100">
        <img :src="country.flags.svg" :alt="country.name" class="w-full h-[190px] object-cover">
      <li class="p-4 lg:p-6">
        <h2 class="text-black dark:text-white pa-4">{{country.name}}</h2>
        <div class="mt-2 mb-8 text-black dark:text-white">
          <div>
            <span class="font-semibold">Population: </span><span >{{country.population}}</span>
          </div>
          <div>
            <span class="font-semibold">Region: </span><span >{{country.region}}</span>
          </div>
          <div>
            <span class="font-semibold">Capital: </span><span >{{this.country.capital}}</span> 
          </div>
        </div>      
      </li>
    </ul>
  </router-link>
</template>

<script>
export default {
  name:'CountryCard',
  props:{
    country: Object,
  },

}
</script>

<style>

</style>