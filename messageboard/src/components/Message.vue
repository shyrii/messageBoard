<template>
  <div class="container">
    <div class="wrapper">
      <div class="name">shyrii</div>
      <div class="message">樱花最美的时候，不是开得如火如荼时，而是即将死去，那一朵花细碎的花瓣凋零在空中，纷纷扬扬</div>
      <div class="white-line"></div>
      <div class="like-txt">喜欢 2</div>
      <div class="chat-txt">评论 4</div>
      <div class="chat-pic" @click="goToComments"></div>
      <div class="like-pic"></div>
      <!-- <div class="delete-pic"></div> -->
    </div>
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
.container {
}

.wrapper {
  margin-top: 50px;
  z-index: -1;
  background-color: #f2daed;
  opacity: 0.8;
  width: 80vw;
  height: 250px;
  position: relative;
}

.wrapper::before {
  content: " ";
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  height: 50px;
  width: 50px;
  background-image: url("../assets/sakura.svg");
  background-size: 100%;
}

.name {
  color: #c83737;
  font-size: 14px;
  padding-top: 25px;
}

.message {
  display: table-cell;
  vertical-align: middle;
  height: 140px;
  vertical-align: middle;
  padding: 5px 15px;
  font-size: 16px;
}

.white-line {
  position: absolute;
  left: 3vw;
  width: 74vw;
  height: 1px;
  background-color: white;
  bottom: 50px;
}

.like-txt {
  display: inline-block;
  position: absolute;
  left: 3vw;
  font-size: 14px;
  color: white;
  bottom: 15px;
}

.chat-txt {
  display: inline-block;
  position: absolute;
  left: 15vw;
  font-size: 14px;
  color: white;
  bottom: 15px;
}

.like-pic {
  display: inline-block;
  position: absolute;
  right: 15vw;
  width: 25px;
  height: 25px;
  background-image: url("../assets/like-red.svg");
  background-size: 100%;
  bottom: 15px;
}

.chat-pic {
  display: inline-block;
  position: absolute;
  right: 3vw;
  width: 25px;
  height: 25px;
  background-image: url("../assets/chat.svg");
  background-size: 100%;
  bottom: 15px;
}


</style>
