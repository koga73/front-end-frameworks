<template>
	<div id="app">
		<h1>Click Count: {{count}}</h1>

		<Button v-on:click="onButtonClick()" v-bind:display="buttonDisplay.PRIMARY">Increase Click Count</Button>

		<ul>
			<li v-for="(data, index) in someData" v-bind:key="index">{{data}}</li>
		</ul>
	</div>
</template>

<script>
	import Button, {buttonDisplay} from "./components/Button.vue"

	export default {
		name:"App",
		components:{
			Button
		},
		data:function(){
			return {
				count:0,
				someData:[],
				buttonDisplay:buttonDisplay
			};
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
	}
</script>