<template>
  <div class="home bg-gray-100 text-gray-200 dark:bg-blue-200 min-h-screen overflow-hidden">
    <filters />
    <no-result v-if="!filteredCountryDb.length"/>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-10 gap-y-20 container mx-auto my-6">
      <country-card class="grid-auto w-full max-w-[350px] mx-auto" v-for="(country,index) in this.filteredCountryDb" :key="index" :country="country"></country-card>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CountryCard from '@/components/CountryCard'
import Filters from '@/components/Filters'
import NoResult from '@/components/NoResult'

export default {
  name: 'Home',
  components: {
    CountryCard,
    Filters,
    NoResult
  },
  methods:{
    toggleDrawer(s){
      this.drawer = s
    }
  },
  computed:{
    ...mapGetters(['filteredCountryDb']),
  },
}
</script>
