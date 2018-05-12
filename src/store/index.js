import Vue from 'vue';
import Vuex from 'vuex';    //vuex插件
Vue.use(Vuex);  //使用Vuex插件


//创建容器对象
export const store= new Vuex.Store({
    //状态
    state:{
        cartList:[],        //购物车列表
        curIndex:null       //当前下标,标识当前的数据下标
    },
    //依赖数据
    getters:{
        //总数量
        totalCount(state){
            var sum=0;
            state.cartList.forEach(val=>{
                sum+=+val.count;
            });
            return sum.toFixed(2);
        },
        //总数量
        totalPrice(state){
            var sum=0;
            state.cartList.forEach(val=>{
                sum+=val.price*val.count;
            });
            return sum.toFixed(2);
        }
    },

    //设置mutations
    mutations:{
        //针对购物车列表数据的操作：添加,删除,清空,对某一项让count++以及count--,对某一项的count设置为指定值
        addList(state,item){
            //添加购物车
            state.cartList.push(item);
        },
        removeList(state,index){
            //删除购物车某一项
            state.cartList.splice(index,1);
        },
        clearList(state){
            state.cartList=[];  //清空购物车
        },
        addCount(state,index){
            state.cartList[index].count++;
        },
        subCount(state,index){
            state.cartList[index].count--;
        },
        setCount(state,payload){
            //让count设置为指定的值
            state.cartList[payload.index].count=payload.value;
        },
        //针对当前下标的行为
        setIndex(state,index){
            state.curIndex=index;
        }
    },
    actions:{
        //获取下标操作
        getCurIndex(store,data){
            var flag=null;
            store.state.cartList.forEach((val,index)=>{
                if(val.id==data.id){
                    flag=index;
                }
            });
           //提交setIndex行为
           store.commit('setIndex',flag);
        },
        decrementCount(store,index){
            if(store.state.cartList[index].count==1){
                //先将count清空
                store.commit('setCount',{
                    index,
                    value:""
                })
                //删除
                store.commit('removeList',index);
            }else{
                //让count--
                store.commit('subCount',index);
            }
        }
    }

})