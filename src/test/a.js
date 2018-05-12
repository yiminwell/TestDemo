console.log('A模块执行了...');

function show(){
    console.log('a模块的show方法...');
}

// export {show};
export default show;

//a模块要将供外界访问的函数或变量或对象导出
//ES6中的导出命令：
//export:一个模块可以有多个export命令
// export function show(){}

// function show(){}
// export {show};  //export导出键值对存函数

// export var obj={};

// //export default(默认):一个模块中只能有一个export default
// // export default show;
// export default function show(){};
// export default function(){};    //export default可以导出匿名函数，export不行

// function show(){}   
// export default show;//export default导出已声明的函数名

// export default {}

// var obj={};
// export {obj}        //import {obj} form './a';  //export的import导入时名称必须和export导出的名称一致
// export default obj; //improt person from './a'  //import导入export default时可以任意修改名称

// export var obj={};
// export default {};

