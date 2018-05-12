<template>
  <div id="app">
      <h1>购物车</h1>
      <!-- 商品信息组件 -->
      <ShopInfo/>

      <!-- 购物车组件 -->
      <CartInfo/>

      <p>
        总数:{{totalCount}}
        总价:{{totalPrice}}
        <button class="btn btn-danger pull-right">清空</button>
      </p>
  </div>
</template>

<script>
import ShopInfo from './components/ShopInfo';
import CartInfo from './components/CartInfo';

export default {
  name: 'App',
  components: {
    ShopInfo,   //注册
    CartInfo
  },
  computed:{
    totalCount(){
      return this.$store.getters.totalCount;
    },
    totalPrice(){
      return this.$store.getters.totalPrice;
    }
  }
}
</script>


<style>
/*style标签的scoped属性表示：当前样式只应用于当前组件的模版 */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
