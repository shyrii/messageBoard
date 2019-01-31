<template>
  <div class="background">
    <div class="box">
      <div class="text1">Hello Again</div>
      <div class="user-box">
        <input v-model="username" class="register-input" type="text" placeholder="用户名">
      </div>
      <div class="password-box">
        <input v-model="password" class="register-input" type="password" placeholder="密码">
      </div>
      <div class="button" @click="register">注册</div>
      <div class="back" @click="back">返回</div>
    </div>
  </div>
</template>

<script scoped>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import urls from '@/apis/urls'
export default {
  name: "register",
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async register() {
      if (this.username.trim() === "" || this.password.trim() === "") {
        alert("格式填写不对噢");
        return;
      }
      const result = await this.axios({
        method: "post",
        url: urls.register,
        data: {
          username: this.username,
          password: this.password,
        }
        // data: formData
      });
      if (result.data.error === 0){
        alert('注册成功')
        this.$router.push({
          path:"/login"
        })
      }else{
        alert('用户名已存在')
        return
      }
    },
    back() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style>
.register-input::placeholder {
  color: #40508c;
}
.register-input {
  border-color: #40508c;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  width: 60vw;
}

.register-input:focus {
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