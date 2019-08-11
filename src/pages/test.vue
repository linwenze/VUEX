//about.vue
<template>
  <div class="div">
    <!-- <div class="test">
      <div class="text">dfdffd</div>
    </div>
    <div class="show">
    </div>
    <div class="menu"></div>
    <div class="menu_link"></div>
    <div class="width200"></div> -->
    <div v-for="item in arr">size:{{item.size}}</div>
    <div>{{str}}</div>
  </div>
</template>  
<script>

export default {
  name: "hello",
  components: {
  },
  mounted() {
  },
  data() {
    return {
      arr:[],
      str:'dffdfd34334qqqq'
    };
  },
  watch: {},
  created() {
    // COMMONFUNC()
    this.arr=[{size:4},{size:114},{size:44}];
    this.arr.test('size',-1)
    this.str=this.str.replaceNumber();
    console.log(this.str)
    console.log(this.arr)
  },
  methods: {
  },
};
</script>