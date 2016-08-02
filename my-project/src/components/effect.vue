<template>
   <div class="wrap">
        <h1>effect</h1>
   </div>
</template>

<script>
export default {
    data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg:'button widget'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.wrap{
  width: 1000px;
  margin: 0 auto;
}
</style>
