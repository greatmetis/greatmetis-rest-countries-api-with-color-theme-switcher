<template>
  <div class=" min-h-screen bg-white dark:bg-blue-200 dark:text-white">
    <Loading v-if="loading"/>
    <div v-else class="container pt-10 mx-auto lg:pt-20">
      <div >
        <a @click.prevent="prevPage">
          <button class="px-10 py-2 shadow-lg rounded-md bg-white dark:bg-blue-100">
            <font-awesome-icon :icon="['fas','long-arrow-alt-left']"></font-awesome-icon>
              <span class="ml-2">Back</span>
          </button>
        </a>
        <div class="flex flex-col lg:flex-row gap-x-10 justify-center mt-10 lg:mt-20">
          <div class="mb-5 lg:w-1/2 shadow-lg rounded">
            <img class="w-full h-full object-cover" :src="country.flags.svg" alt="">
          </div>
          <div class="w-full lg:w-1/2 country-details__content">
            <h2 class="text-lg my-5">{{country.name}}</h2>
            <div class="flex flex-col lg:flex-row">
              <div class="mb-8 flex-1">
                <p class="font-semibold">Native Name: <span class="font-normal">{{country.nativeName}}</span></p>
                <p class="font-semibold">Population: <span class="font-normal">{{country.population}}</span></p>
                <p class="font-semibold">Region: <span class="font-normal">{{country.region}}</span></p>
                <p class="font-semibold">Sub Region: <span class="font-normal">{{country.subregion}}</span></p>
                <p class="font-semibold">Capital: <span class="font-normal">{{country.capital}}</span></p>
              </div>
              <div class="mb-8 flex-1">
                <p class="font-semibold">Top Level Domain: 
                  <span class="font-normal">{{country.topLevelDomain[0]}}</span>
                </p>
                <p class="font-semibold">Currencies: 
                  <span class="font-normal">{{country.currencies[0].name}}</span>
                </p>
                <p class="font-semibold">Languages: 
                  <span class="font-normal inline-block" v-for="(lang,index) in country.languages" :key="index">
                    <span v-if="index!==0">, </span>
                    {{lang.name}}
                  </span>
                </p>
              </div>
            </div>
            <div class="mb-8 md:flex md:flex-row">
                <h3 class="font-semibold text-[18px] mb-4 mr-4 lg:text-[16px]">Border Countries: </h3>
                <div class="flex flex-wrap">
                  <a :href="`/details/${borderCountry.callingCodes}`" class="shadow-md rounded text-center p-2 min-w-[100px] mx-1 mb-2 bg-white hover:bg-blue-100 hover:text-white dark:bg-blue-100 dark:hover:bg-gray-100
                  dark:hover:text-blue-100" 
                  v-for="(borderCountry,index) in currentCountryborderCodes" :key="index" 
                  >
                    {{borderCountry.name}}
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
import Loading from '@/components/Loading'
export default {
  name:'CardDetails',
  data:()=>({
    country:null,
    loading:false,
    borderCodeArray:[],
  }),
  props:{
    id:String
  },
  components:{
    Loading
  },
  methods:{
    ...mapMutations(['SET_CURRENT_COUNTRY']),
    ...mapActions(['COVERT_BORDER_CODES']),
    prevPage(){
      this.$router.go(-1)
    },
    async fetchCountryData(){
      this.loading = true
      this.SET_CURRENT_COUNTRY(this.id)
      this.country = this.currentCountryArray[0]
      await this.COVERT_BORDER_CODES(this.country.borders)
      this.loading = false
    },
  },
  computed:{
    ...mapState(['currentCountryArray','currentCountryborderCodes']),
  },
  created(){
    this.fetchCountryData()
  }
}
</script>

<style lang="scss">
.country-details__content {
  p {
    margin-bottom: 18px;
  }
}

</style>
