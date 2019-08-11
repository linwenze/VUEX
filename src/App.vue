<template>
    <div id="app">
       
        <!-- <h2>{{msg}}</h2> -->
        <!-- <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/">首页1</router-link>
                <router-link class="nav-item" to="/about">关于</router-link>
            </p>
        </div> -->
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App666333'
    }
  },
  components:{
   
  }
}
</script>