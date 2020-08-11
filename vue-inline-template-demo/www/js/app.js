var app = new Vue({
	el:"#app",
	data:{
		count:0,
		someData:[],
		buttonDisplay:buttonDisplay
	},
	mounted:function(){
		for (let i = 0; i < 100; i++){
			this.someData.push(`Loop ${i}`);
		}
	},
	methods:{
		onButtonClick:function(){
			this.count++;
		}
	}
});