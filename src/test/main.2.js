console.log('main.js执行');

//引入a模块
import fn from './test/a';  //import放在当前模块的顶层，而且会在当前模块的js前先执行

fn();

//ES6: export(default) / import
//common.js： module.exports  / require

//模块化开发规范：AMD(提前依赖)规范(如：require.js)/CMD(就近依赖)

(function(){
  console.log('main ...');

  //CMD规范
  var obj=require('./a');
  obj.show();

})()