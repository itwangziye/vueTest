<template>
  <div class="page">
    <div>
      我是登录组件
    </div>
    <input type="text" v-model="name" />

    <helloworld :name="name" :id="checkbox.id" v-model="checkbox.checked"/>
    {{JSON.stringify(checkbox)}}
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component'
import HelloWorld from "../../components/HelloWorld.vue";
import {Watch} from 'vue-property-decorator'

@Component({
  components:{
    Helloworld:HelloWorld
  }
})
export default class Login extends Vue {
  name:string = 'wzy'
  checkbox:object = {
    laber: '单选框',
    id:'checkboxId',
    checked:true,
  }
  @Watch('name',{deep:true})
   watchCount(n, o) {
    console.log(n)
  }

}
</script>

<style scoped lang="scss">


</style>
