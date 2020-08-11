<template>
	<button v-bind:class="'btn btn-' + display" v-on:click="onClick"><slot/></button>
</template>

<script>
	export const buttonDisplay = {
		PRIMARY:"primary",
		SECONDARY:"secondary"
	};

	export default {
		name:"Button",
		props:{
			display:{
				type:String,
				default:buttonDisplay.PRIMARY
			}
		},
		methods:{
			onClick:function(){
				this.$emit("click");
			}
		}
	}
</script>

<style lang="scss">
	.btn {
		border:1px solid #51c0e8;
		box-sizing:border-box;
		padding:12px 24px;
		font-weight:bold;
		cursor:pointer;

		&.btn-primary {
			background-color:#51c0e8;
			color:#fff;
		}

		&.btn-secondary {
			background-color:#fff;
			color:#51c0e8;
		}
	}
</style>