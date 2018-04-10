<template>
  <div class="page">
      <div>
          我是主页{{msg}}
      </div>
      <div>
        {{testValue}}
      </div>
      <button @click="handerClick">按钮</button>
      <button @click="goLogin">跳转</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import {State, Getter ,Action, Mutation, namespace} from 'vuex-class';
@Component({})
export default class Home extends Vue {

  @Getter('car/test') testValue:string
  @State("car") testState:object
  @Action("car/updateLoadingStatus") updateLoadingStatus:Function
  @Mutation("car/UPDATELOADINGSTATUS") UPDATELOADINGSTATUS:Function
  msg:string = 'wzzz'


  created(){

  }

  mounted(){
    // console.log(this.updateLoadingStatus)
  }

  handerClick(){
    // this.updateLoadingStatus('哈哈哈')
    this.UPDATELOADINGSTATUS('哈哈哈哈')
  }
  goLogin(){
    this.$router.push({path:'login'})
  }


}
</script>

<style scoped lang="scss">
</style>
