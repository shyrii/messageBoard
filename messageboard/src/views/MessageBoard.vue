<template>
  <div class="background-box">
    <div class="titlename">留言板</div>
    <img class="add-message" src="../assets/add.svg">

    <div class="message-wrapper">
      <Message></Message>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from "../components/Message";
export default {
  name: "messageboard",
  components: { Message },
  methods: {}
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
  z-index: -1;
}

.titlename {
  position: absolute;
  text-align: center;
  color: #ec9aa6;
  font-size: 24px;
  display: inline-block;
  margin-top: 20px;
}

.add-message {
  position: absolute;
  right: 10px;
  margin-top: 20px;
  height: 35px;
  width: 35px;
  display: inline-block;
}

.message-wrapper{
    margin-top: 60px;
}
</style>
