<template>
<div class="center">
  <h2>{{title}}</h2>
    <img class="logo-big" src="./img/vue-logo.png" />
    <p>
      Sprint 1
    </p>
</div>
</template>
<script>
export default{
  data(){
    return{
      title:'Observatorio de Twitter'
    }
  },
  mounted:function(){
    console.log('Index.vue')
  }
}
</script>
