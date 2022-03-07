<template>
  <header class="shadow-lg shadow-black w-full bg-white py-4 dark:bg-blue-100  z-10">
    <div class="flex justify-between align-center text-black container mx-auto dark:text-white">
      <h1 class="cursor-pointer" @click="refreshHome">Where in the world?</h1>    
      <button class="flex" @click="switchMode">
        <font-awesome-icon :icon="['fas','moon']" class="self-center mr-2"/>
        <h3 class="self-center">{{modeContext}} Mode</h3>
      </button>
    </div>
  </header>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name:'Header',
  props:{
    mode:Boolean
  },
  methods:{
    switchMode(){
      this.$emit("switchMode")
    },
    refreshHome(){
      this.$emit('refreshHome')
      this.$router.push('/')
      .catch(error => {
        if(error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')){
          console.error(error)
        }
      })

    }
  },
  computed:{
    
    modeContext(){
      return this.mode ? 'Dark' : 'Light'
    }
  }
}
</script>

<style>

</style>