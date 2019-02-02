<template>
  <div>
    <div class="container">
      <div class="touxiang"></div>
      <div right-wrapper>
        <div class="name">{{item.username}}</div>
        <!-- <div class="date">{{moment(new Date(item.commentDate)).format('MMMM Do YYYY, h:mm:ss a')}}</div> -->
        <div class="date">{{new Date(item.commentDate).getFullYear()}}年{{new Date(item.commentDate).getMonth()+1}}月{{new Date(item.commentDate).getDate()}}日</div>
        <div class="content">{{item.content}}</div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props:["item","index"],
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
.line {
  margin-left: 75px;
  margin-top: 10px;
  width: 75vw;
  height: 1px;
  background-color: #ec9aa6;
  border-style:1px dashed;
  opacity: 0.5;
  
}
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
}

.touxiang {
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 40px;
  background-image: url("../assets/touxiang.svg");
  background-size: 100%;
  margin-left: 25px;
}

.right-wrapper {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: flex-start; */
  /* flex-grow: 1 */
}
.name {
  font-size: 14px;
  color: black;
  text-align: left;
  margin-top: -20px;
  margin-left: 10px;
}

.date {
  font-size: 12px;
  color: black;
  text-align: left;
  margin-left: 10px;
}

.content {
  width: 75vw;
  font-size: 16px;
  color: black;
  text-align: left;
  margin-top: 5px;
  margin-left: 10px;
}
</style>
