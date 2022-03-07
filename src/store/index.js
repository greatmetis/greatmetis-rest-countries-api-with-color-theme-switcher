import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    regions:['Asia','Africa','Europe','Americas','Oceania'],
    countryDb:[],
    search:null,
    selectedRegion:'Filter By Region',
    currentCountryArray:null,
    currentCountryborderCodes:[],
  },
  getters:{
    filteredCountryDb(state){
      let filterCountry = []
      if(!state.search && state.selectedRegion === 'Filter By Region'){
        return filterCountry = state.countryDb
      }

      if(state.selectedRegion !== 'Filter By Region'){
        filterCountry = state.countryDb.filter(country=>country.region == state.selectedRegion)
        if(state.search){
          let searchInput = state.search.toLowerCase()
          filterCountry = filterCountry.filter(country=>{
            country.name=country.name.toLowerCase()
            return country.name.includes(searchInput)
          })
        }
        
      }
      if(state.search){
        let searchInput = state.search.toLowerCase()
        filterCountry = state.countryDb.filter(country=>country.name.toLowerCase().includes(searchInput)
        )
        if(state.selectedRegion !== 'Filter By Region'){
          filterCountry = filterCountry.filter(country=>country.region.toLowerCase()===state.selectedRegion.toLowerCase())
        }
      }
      
      return filterCountry
    },
  },
  mutations: {
    FETCH_COUNTRY_DB(state,payload){
      state.countryDb = payload
    },
    SET_CURRENT_COUNTRY(state,payload){
      state.currentCountryArray = null
      state.currentCountryborderCodes = []
      state.currentCountryArray = state.countryDb.filter(country=>country.callingCodes == payload)
    },
    COVERT_BORDER_CODES(state,payload){
      state.currentCountryborderCodes = payload
    },
    SET_SEARCH(state,payload){
      state.search = payload
    },
    SET_FILTER(state,payload){
      state.selectedRegion = payload
    },
    RESET_FILTERS(state){
      state.search=null,
      state.selectedRegion='Filter By Region'
    }
  },
  actions: {
    async FETCH_COUNTRY_DB({commit}){
      try{
        let resp = await axios.get('https://restcountries.com/v2/all')
        commit('FETCH_COUNTRY_DB',resp.data)
      }
      catch(err){
        console.error(err)
      }
    },
    SET_CURRENT_COUNTRY_BORDER_CODES({commit},payload){
      commit('SET_CURRENT_COUNTRY_BORDER_CODES',payload)
    },
    async COVERT_BORDER_CODES({commit},payload){
      let convertedCodes = []
      let codeStr = ''

      // return if payload is empty
      if(!payload|| payload.length<1) {
        return convertedCodes = ['N/A']
      }
      payload.forEach((code,index)=>{
        if(index===0){
          return codeStr = code.toLowerCase()
        }
          codeStr += `,${code.toLowerCase()}`
      })
      try{
        let resp = await axios.get(`https://restcountries.com/v2/alpha?codes=${codeStr}`)
        let result = resp.data
        result.forEach(country=>{
          let conversion = {
            name:country.name,
            callingCodes:country.callingCodes[0]
          }
          convertedCodes.push(conversion)
        })
      }catch(err){
        console.error(err)
      }
      commit('COVERT_BORDER_CODES',convertedCodes)
    },
    RESET_FILTERS({commit}){
      commit('RESET_FILTERS')
    }
  }
})
