<template>
  <div class="loading flex items-center justify-center gap-x-4 bg-white dark:bg-blue-100 min-h-screen">
    <h1 class="text-gray-200 dark:text-white">Loading</h1>
    <div>
      <span class="bg-gray-200 dark:text-white"></span>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading{
  span{
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 4px;
    animation:moving 1s 0.5s infinite alternate;
  }
}

  @keyframes moving {
    from{
      transform: translateX(0px);
    }
    to{
      transform: translateX(60px) rotate(360deg);
      
    }
  }

  


</style>