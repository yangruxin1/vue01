import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/*推荐使用runtime-only版本：包小，效率高
如果非要在vue文件中使用template，全部改成render函数即可
*/
/* eslint-disable no-new */
// new Vue({
// el: '#app',
// render: h => h(App)
// })


// render:(createElement)=>{
// return createElement("元素",[数据对象],[内容数组])
// }

new Vue({
	el: "#app",
	// render: createElement => {
	// 	// 使用方式1
	// 	// return createElement("p", {
	// 	// 	"class": "test"
	// 	// }, "我是一个测试内容")
		
	// 	// 方法二:使用嵌套2
	// 	// return createElemen("div",{"class":"box",["盒子"],createElemen("div",{"class":"p",["子元素"])})
		
	// }
	
	// 常用
	// render:(createElement)=>{
	// 	return createElement(App);
	// }
	
	render:(h)=>h(App)
	
})

