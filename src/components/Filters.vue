<template>
  <div>
    <div class="flex flex-col justify-center lg:flex-row lg:justify-between container mx-auto">
      <div class="my-6 shadow-lg p-4 rounded-md w-full lg:w-1/3 dark:bg-blue-100 self-start"
      >
      <!-- Search by name -->
        <font-awesome-icon :icon="['fas','search']" class="dark:text-white"></font-awesome-icon>
        <input v-model="search" @keyup="setSearch"
        type="text" placeholder="Search for a country..." class="ml-4 w-4/5 bg-gray-100 dark:bg-blue-100 dark:text-white focus:outline-none">
        <font-awesome-icon v-if="search" @click="clearSearch"
        :icon="['fas','times']" class="dark:text-gray hover:text-black dark:hover:text-white cursor-pointer"></font-awesome-icon>
      </div>
      <!-- Filter by region -->
      <div class="w-2/3 md:w-1/2 lg:w-1/5 relative">
        <div class="flex justify-between items-center shadow-lg mt-6 p-4 rounded-md dark:bg-blue-100 cursor-pointer"
        @click="toggleDrawer">
          <span class="font-light dark:text-white">{{selectedRegion}}</span>
          <font-awesome-icon v-if="isFiltered" @click="clearFilter"
        :icon="['fas','times']" class=" text-gray-200 hover:text-black dark:text-gray dark:hover:text-white cursor-pointer"></font-awesome-icon>
          <font-awesome-icon v-else class="text-gray-200 dark:text-gray-200" :class="{'rotate-180' : drawer}" :icon="['fas','chevron-down']"></font-awesome-icon>
        </div>
        <ul v-if="drawer" 
        class="absolute w-full mt-2 py-2 px-2 shadow-lg rounded-md bg-gray-100 dark:bg-blue-100 dark:text-white font-light">
          <li @click="selectRegion(region)" class="mb-2 p-2 hover:bg-blue-100 hover:text-white dark:hover:bg-blue-200 hover:cursor-pointer" v-for="region in regions" :key="region" :value="region">{{region}}
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name:'Filters',
  data:()=>({
    drawer:false,
    search:null,
    selectedRegion:'Filter By Region',
    isFiltered:false
  }),

  methods:{
    ...mapMutations(['SET_SEARCH','SET_FILTER']),
    setSearch(){
      return this.SET_SEARCH(this.search)
    },
    setFilter(){
      return this.SET_FILTER(this.selectedRegion)
    },
    clearSearch(){
      this.search = null
      this.setSearch()
    },
    clearFilter(){
      this.selectedRegion = 'Filter By Region'
      this.setFilter()
      this.isFiltered = false
    },
    selectRegion(region){
      this.selectedRegion = region
      this.setFilter()
      this.isFiltered = true
      this.drawer = false
    },
    toggleDrawer(){
      this.drawer = !this.drawer
    }
  },
  computed:{
    ...mapState(['regions']),
  },
  mounted(){
    this.SET_SEARCH()
  }
}
</script>

<style>

</style>