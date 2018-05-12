<template>
    <tr>
        <td>{{item.id}}</td>
         <td>{{item.title}}</td>
         <td>{{item.price}}</td>
         <td>{{item.count}}</td>
         <td>{{total}}</td>
         <td>
             <button class="btn btn-info" @click="add">+</button>
             <button class="btn btn-warning" @click="sub">-</button>
             <button class="btn btn-danger" @click="remove">X</button>
         </td>
    </tr>
</template>

<script>
    export default {
        name:'cart-item',
        computed:{
            total(){
                //当前项的总价
                return (this.item.price*this.item.count).toFixed(2);
            }
        },
        props:['item'],
        methods:{
            add(){
                //添加count
                this.$store.dispatch('getCurIndex',this.item);

                //让count++
                 this.$store.commit('addCount',this.$store.state.curIndex);
            },
            sub(){
                this.$store.dispatch('getCurIndex',this.item);
                this.$store.dispatch('decrementCount',this.$store.state.curIndex);
           },
           remove(){
               //获取下标
                this.$store.dispatch('getCurIndex',this.item);
                //先设置count为""
                this.$store.commit('setCount',{
                    index:this.$store.state.curIndex,
                    value:""
                })
                //删除前
                this.$store.commit('removeList',this.$store.state.curIndex);
           }
        }
    }
</script>

<style scoped>

</style>