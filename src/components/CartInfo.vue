<template>
    <div>
        <h3>购物车信息</h3>
        <table class="table table-border">
            <thead>
            <tr>
                <th class="text-center">ID</th>
                <th class="text-center">名称</th>
                <th class="text-center">价格</th>
                <th class="text-center">数量</th>
                <th>总价</th>
                <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
               <tr is="CartItem" :item="d" v-for="(d,index) in cartList" :key="index"></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import CartItem from './CartItem';
    export default {
        name:'cart-info',
        components:{
            CartItem
        },
        computed:{
            //获取购物车数据
            cartList(){
                return this.$store.state.cartList;
            }
        }
    }
</script>

<style scoped>

</style>