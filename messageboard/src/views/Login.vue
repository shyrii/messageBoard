<template>
  <div class="background">
    <div class="box">
      <div class="text1">Hello Again</div>
      <div class="user-box">
        <input v-model="username" class="login-input" placeholder="用户名">
      </div>
      <div class="password-box">
        <input v-model="password" class="login-input" type="password" placeholder="密码">
      </div>
      <div class="button" @click="login">登陆</div>
      <div class="back" @click="back">返回</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import urls from "@/apis/urls";
export default {
  name: "login",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
    likeMessageID() {
      return this.$store.state.likeMessageID;
    }
  },
  methods: {
    back() {
      this.$router.replace({
        path: "/"
      });
    },
    async login() {
      if (this.username.trim() === "" || this.password.trim() === "") {
        alert("格式填写不对噢");
        return;
      }
      // const formData = new FormData()
      // formData.append('username', this.username)
      // formData.append('password', this.password)
      const result = await this.axios({
        method: "post",
        url: urls.login,
        data: {
          username: this.username,
          password: this.password
        }
        // data: formData
      });
      if (result.data.error === 0) {
        this.$store.commit("login", result.data.userInfo);
        // this.$store.commit("initLikeMessageID", result.data.likeMessageID);
        // this.$store.commit("initMyMessage", result.data.messageID);
        this.$router.replace({
          path: "/MessageBoard"
        });
      } else if (result.data.error === 1) {
        alert("用户名或密码错误");
        return;
      }
    }
  }
};
</script>

<style scoped>
.login-input::placeholder {
  color: #40508c;
}
.login-input {
  border-color: #40508c;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  width: 60vw;
}

.login-input:focus {
  outline: none;
}

.background {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/back.jpeg");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.box {
  background-color: white;
  opacity: 0.9;
  width: 80vw;
  height: 350px;
  box-shadow: 50px 45px 50px 45px rgb(255, 255, 255, 0.5);
}

.user-box {
  margin-top: 40px;
}

.password-box {
  margin-top: 30px;
}

.text1 {
  margin-top: 50px;
  font-size: 16px;
  opacity: 0.8;
  color: #40508c;
}

.button {
  margin-top: 30px;
  font-size: 20px;
  background-color: #40508c;
  color: white;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 15px;
}

.back {
  margin-top: 20px;
  color: #40508c;
  font-size: 16px;
}
</style>