<template>
  <div class="background-box">
    <div class="back-pic" @click="back"></div>
    <div class="back-txt" @click="back">返回</div>
    <div class="message-txt">留言</div>
    <div class="publish-txt" @click="addMessage">发表</div>
    <!-- <input class="message-box"> -->
    <div class="message-box">
      <textarea
        v-model="content"
        class="message-input"
        type="text"
        placeholder="留个言吧..."
        maxlength="200"
      ></textarea>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Message from "../components/Message";
import urls from "@/apis/urls";
export default {
  name: "writing",
  data() {
    return {
      content: ""
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    messages() {
      return this.$store.state.messages;
    },
    myMessages() {
      return this.$store.state.myMessages;
    }
  },
  components: {},
  methods: {
    back() {
      this.$router.push({
        path: "/messageboard"
      });
    },
    async addMessage() {
      if (this.content.trim() === "" || !this.content) {
        alert("内容不能为空哦");
      } else if (this.content.length > 200) {
        alert("字数太长了");
      }
      const result = await this.axios({
        method: "post",
        url: urls.addMessage,
        data: {
          userID: this.userInfo.userID,
          content: this.content
        }
      });
      // this.$store.commit("setMyMessage", result.data.myMessages[result.data.myMessages.length-1]);
      this.$store.commit("setMessages", result.data.messages[result.data.messages.length-1]);
      this.$router.push({
        path: "/messageboard"
      });
    }
  }
};
</script>

<style>
.message-input {
  margin-top: 20px;
  width: 70vw;
  height: 200px;
  outline: none;
  border: none;
  background-color: transparent;
}

.background-box {
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url("../assets/pic3.jpeg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
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

.message-txt {
  margin-top: 10px;
  display: inline-block;
  position: absolute;
  text-align: center;
  color: #ec9aa6;
}

.publish-txt {
  margin-top: 10px;
  display: inline-block;
  position: absolute;
  right: 10px;
  color: #ec9aa6;
}

.message-box {
  margin-top: 100px;
  background-color: #f2daed;
  opacity: 0.8;
  width: 80vw;
  height: 250px;
  position: relative;
}

.message-box::before {
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
</style>
