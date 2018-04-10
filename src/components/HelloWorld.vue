<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="childMsg" >
    <input type="checkbox" :checked='checked' :id="id" @change="childChange" >
    <div class="test-wzy">
      {{parentName}}
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Getter, Action } from 'vuex-class'
import {Component ,Prop, Model} from 'vue-property-decorator'

@Component({})
export default class HelloWorld extends Vue {
  msg:string = '我是登录组件的子组件';
  childMsg:string = '123';

  @Prop() name:string
  @Prop() id:string
  @Model('change') checked:boolean

  get parentName (){
    return `parentName: ${this.name}`
  }

  childChange(e){
    console.log(e.target.checked)
    this.$emit('change', e.target.checked)
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
      .hello{
        border: 1px solid red;
        width: 400px;
        margin: 10px auto;
      }
      .test-wzy{
        color:red;
        font-size: 40px;
      }
</style>
