<template>
  <div class="container">
    
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: String
  },
  methods: {
    goToComments() {
      this.$router.push({
        path: "/comments"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
