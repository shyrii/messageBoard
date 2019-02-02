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
    <div class="comment-list">
      <div class="comment-wrapper" v-for="(item,index) in this.comments" :key="item.id">
        <CommentItem :item="item" :index="index"></CommentItem>
      </div>
    </div>
    <div class="add-comments" id="add">
      <input v-model="comment" class="comment-input" type="text" placeholder="  千头万绪，落笔汇成评论一句">
      <div v-if="this.comment.length===0" class="no-send">发送</div>
      <div v-else class="send" @click="sendComment">发送</div>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import urls from "@/apis/urls";
import CommentItem from "@/components/CommentItem";
export default {
  name: "comments",
  data() {
    return {
      comment: ""
    };
  },
  components: { CommentItem },
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
      this.$router.push({
        path: "/messageboard"
      });
      const result = await this.axios({
        method: "delete",
        url: urls.deleteMessage(this.item.messageID)
      });
      this.$store.commit("deleteMessage", this.index);
    },
    async sendComment() {
      if (this.comment.trim() === "") {
        return;
      }
      const result = await this.axios({
        method: "post",
        url: urls.addComment(this.item.messageID),
        data: {
          userID: this.userInfo.userID,
          content: this.comment
        }
      });
      this.$store.commit(
        "addComment",
        result.data.comments[result.data.comments.length - 1]
      );
      this.comment = "";
    }
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

.comment-list {
  height: 300px;
  margin-top: 20px;
  overflow: hidden;
  overflow-y: auto;
}

.comment-wrapper {
  margin-top: 10px;
}

.add-comments {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 50px;
  background-color: white;
  opacity: 0.8;
}

.comment-input {
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-color: #dbd6d6;
  position: fixed;
  left: 10px;
  bottom: 10px;
  width: 85vw;
}

.comment-input:focus {
  outline: none;
}

.no-send {
  color: #ada9a9;
  position: fixed;
  bottom: 13px;
  right: 10px;
  font-size: 15px;
}

.send {
  color: #252222;
  position: fixed;
  bottom: 13px;
  right: 10px;
  font-size: 15px;
}
</style>
