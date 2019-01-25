<template>
  <div class="background-box">
    <div class="back-pic"></div>
    <div class="back-txt" @click="back">返回</div>
    <div class="comment-txt">评论</div>
    <div class="delete-pic"></div>
    <div class="message-wrapper">
      <Message></Message>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import Message from "../components/Message";
export default {
  name: "comments",
  components: { Message },
  methods: {
    back() {
      this.$router.push({
        path: "/messageboard"
      });
    }
  }
};
</script>

<style>
.background-box {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url("../assets/pic3.jpeg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  /* z-index: -1; */
}

.back-pic {
  margin-top: 10px;
  display: inline-block;
  position: absolute;
  left: 5px;
  width: 25px;
  height: 25px;
  background-image: url("../assets/back.svg");
  background-size: 100%;
}

.back-txt {
  margin-top: 12px;
  display: inline-block;
  position: absolute;
  left: 25px;
  color: #ec9aa6;
}

.comment-txt {
  margin-top: 10px;
  display: inline-block;
  position: absolute;
  text-align: center;
  color: #ec9aa6;
}

.delete-pic {
  margin-top: 12px;
  display: inline-block;
  position: absolute;
  right: 5vw;
  width: 25px;
  height: 25px;
  background-image: url("../assets/delete.svg");
  background-size: 100%;
}

.message-wrapper {
  margin-top: 40px;
}
</style>
