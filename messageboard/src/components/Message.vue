<template>
  <div class="container">
    <div class="wrapper">
      <div class="name">{{item.username}}</div>
      <div class="message">
        <p>{{this.item.content}}</p>
      </div>
      <div class="white-line"></div>
      <!-- <div class="like-txt">喜欢 2</div>
      <div class="chat-txt">评论 4</div>-->
      <div class="chat-pic" @click="goToComments"></div>
      <div v-if="this.state===false" @click="like" class="like-pic1"></div>
      <div v-if="this.state===true" @click="cancelLike" class="like-pic2"></div>
    </div>
    <Comments v-if="isShow===true" @close="close" :item="this.item" :index="this.index"></Comments>
  </div>
</template>

<script>
import urls from "@/apis/urls";
import Comments from "../components/Comments";
export default {
  name: "Message",
  components: { Comments },
  props: ["item", "index"],
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    messages() {
      return this.$store.state.messages;
    },
    state() {
      if (this.messages[this.index].likeUserId != null) {
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
      this.isShow = false;
      this.$emit('close')
    },
    async goToComments() {
      this.$emit('open', this)
      this.isShow = true;
      const result = await this.axios({
        method:"get",
        url: urls.getComment(this.item.messageID)
      })
      this.$store.commit("setComments",result.data.comments)
    },
    async like() {
      const result = await this.axios({
        method: "post",
        url: urls.like(this.userInfo.userID),
        data: {
          messageID: this.item.messageID
        }
      });
      this.$store.commit("likeMessage", this.index);
    },
    async cancelLike() {
      const result1 = await this.axios({
        method: "delete",
        url: urls.cancelLike(this.userInfo.userID),
        data: {
          messageID: this.item.messageID
        }
      });
      this.$store.commit("cancelLikeMessage", this.index);
      // const result2 = await this.axios({
      //   method: "get",
      //   url: urls.getLikeMessage(this.userInfo.userID)
      // });
      // this.$store.commit("initLikeMessageID", result2.data.likeMessageID);
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

.like-pic1 {
  display: inline-block;
  position: absolute;
  right: 15vw;
  width: 25px;
  height: 25px;
  background-image: url("../assets/like.svg");
  background-size: 100%;
  bottom: 15px;
}

.like-pic2 {
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
