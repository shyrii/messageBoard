<template>
  <div class="mask">
    <div class="back-pic"></div>
    <div class="back-txt" @click="close">返回</div>
    <div class="comment-txt">评论</div>
    <div v-if="this.canDelete===true" class="delete-pic" @click="deleteMessage"></div>
    <div class="message-wrapper">
      <div class="name">{{item.username}}</div>
      <div class="message">
        <p>{{this.item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import urls from "@/apis/urls";
export default {
  name: "comments",
  components: {},
  props: ["item", "index"],
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    userInfo() {
      return this.$store.state.userInfo;
    },
    canDelete() {
      if (this.userInfo.username === this.item.username) {
        return true;
      } else {
        return false;
      }
    },
    comments() {
      return this.$store.state.comments;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    async deleteMessage() {
      const result1 = await this.axios({
        method: "delete",
        url: urls.deleteMessage(this.item.messageID)
      });
      this.$router.push({
        path: "/messageboard"
      });
      this.$store.commit("deleteMessage", this.index);
    },
    
  }
};
</script>

<style>
.mask {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/pic3.jpeg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  position: fixed;
  animation: fadeIn 0.5s ease 1 backwards;
  z-index: 10;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* @keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
} */

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
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  background-color: #f2daed;
  opacity: 1;
  width: 80vw;
  height: 250px;
  position: relative;
  /* z-index: 20; */
}

.message-wrapper::before {
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
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: table-cell;
  text-align:center;
  vertical-align: middle; */
  height: 140px;
  padding: 5px 15px;
  font-size: 16px;
}
</style>
