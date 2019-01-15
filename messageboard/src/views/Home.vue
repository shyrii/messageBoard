<template>
  <div class="back-color">
    <div class="title">留言板</div>
    <img class="index-pic" src="../assets/index.png">
    <div class="button" @click="goToLogin">登陆</div>
    <div class="button" @click="goToRegister">注册</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "register",
  components: {},
  methods: {
    goToLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    goToRegister() {
       this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style>
.back-color {
  color: rgb(242, 243, 247);
}

.title {
  color: #40508c;
  font-size: 26px;
  font-weight: bold;
  margin-top: 15vh;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 6px;
  writing-mode: vertical-lr;
}

.index-pic {
  width: 300px;
  height: 280px;
}

.button {
  color: #40508c;
  font-size: 22px;
  letter-spacing: 2px;
  height: 50px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  border-color: #40508c;
  line-height: 50px;
}

.button:hover {
  cursor: pointer;
  background-color: #40508c;
  transition-duration: 0.8s;
  color: white;
}
</style>
