<template>
    <div>
        <h3>商品信息</h3>
        <table class="table table-border">
            <thead>
            <tr>
                <th class="text-center">ID</th>
                <th class="text-center">名称</th>
                <th class="text-center">价格</th>
                <th class="text-center">数量</th>
                <th class="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(d,index) in shopList" :key="index">
                <td v-for="(item,k) in d" :key="k">{{item}}</td>
                <td>
                    <button class="btn btn-info" @click="add(d)">{{d.count?'+':'加入购物车'}}</button>
                     <button class="btn btn-warning" v-if="d.count" @click="sub(d)">-</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name:'shop-info',
        methods:{
            add(d){
                //加入购物车或+按钮的功能

                //首先将当前数据在容器的购物车数据中搜索，
                //如果搜索到了则将所搜索到的下标赋值给curIndex
                this.$store.dispatch('getCurIndex',d);

                //判断curIndex是否为null,如果是null,则添加购物车，否则针对当前这一项让count++
                if(this.$store.state.curIndex==null){
                    d.count=1;//设置当前加入购物车的数据的数量为1

                    //加入购物车
                    this.$store.commit('addList',d);
                }else{
                    //让数量++
                    this.$store.commit('addCount',this.$store.state.curIndex);
                }
            },
            sub(d){
                //减号按钮点击事件
                //1.查找操作的元素的下标
                this.$store.dispatch('getCurIndex',d);
                //2.先判断对应的count是否为1，
                //如果是1则删除，否则让count--
                this.$store.dispatch('decrementCount',this.$store.state.curIndex);
            }
        },
        data(){
            return {
                shopList:[
                    {
                        id:1,
                        title:'鱼香肉丝',
                        price:18.9,
                        count:""
                    },
                    {
                        id:2,
                        title:'宫保鸡丁',
                        price:24.5,
                        count:""
                    },
                    {
                        id:3,
                        title:'剁椒鱼头',
                        price:26.9,
                        count:""
                    },
                    {
                        id:4,
                        title:'白米饭',
                        price:4.9,
                        count:""
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>