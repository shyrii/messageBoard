<template>
  <div class="background-box">
    <div class="titlename">留言板</div>
    <img @click="goToWriting" class="add-message" src="../assets/add.svg">
    <div class="message-list">
      <div class="message-wrapper" v-for="(item,index) in this.messages" :key="item.id">
        <Message :item="item" @open="open" @close="close" :index="index"></Message>
      </div>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
import urls from "@/apis/urls";
import Message from "../components/Message";
export default {
  name: "messageboard",
  components: { Message },
  data() {
    return {
      isShow: null
    };
  },
  computed: {
    messages() {
      return this.$store.state.messages;
    },
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.isShow) {
      this.isShow.close()
      this.isShow = null
      next(false)
    } else {
      next()
    }
  },
  async mounted() {
    const result = await this.axios({
      method: "get",
      url: urls.index(this.userInfo.userID)
    });
    this.$store.commit("initMessages", result.data.messages);
    
  },
  methods: {
    close() {
      this.isShow = null
    },
    open(ref) {
      this.isShow = ref
    },
    goToWriting() {
      this.$router.push({
        path: "/writing"
      });
    }
  }
};
</script>

<style scoped>
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

.titlename {
  position: absolute;
  text-align: center;
  color: #ec9aa6;
  font-size: 24px;
  display: inline-block;
  margin-top: 20px;
  z-index: 1;
}

.add-message {
  position: absolute;
  right: 10px;
  margin-top: 20px;
  height: 35px;
  width: 35px;
  display: inline-block;
}

.message-list {
  width: 100%;
  margin-top: 60px;
  overflow: hidden;
  overflow-y: scroll;
}
.message-wrapper {
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 10px; */
  padding-bottom: 10px;
}
</style>
