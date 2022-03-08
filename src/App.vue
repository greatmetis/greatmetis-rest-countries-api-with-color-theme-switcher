<template>
  <div id="app">
    <Loading v-if="loading"/>
    <div v-else>
      <Header :mode="mode"
      @switchMode="switchMode"
      />
      <router-view :key="$route.path"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
export default{
  data:()=>({
    loading:false,
    mode:true // dark mode stands for false
  }),
  components:{
    Header,
    Loading,
  },
  methods:{
    ...mapActions(['FETCH_COUNTRY_DB']),
    async loadData(){
      this.loading = true
      await this.FETCH_COUNTRY_DB()
      this.loading = false
    },
    switchMode(){
      this.mode = !this.mode
      this.mode ? document.getElementById("app").classList.remove ("dark") :
      document.getElementById("app").classList.add("dark")
    },
  },
  created(){
    this.loadData()
  },
  mounted(){
        // detect user mode
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      this.mode = false
      return document.getElementById("app").classList.add("dark")
    }
  }
}
</script>

<style lang="scss">


</style>
