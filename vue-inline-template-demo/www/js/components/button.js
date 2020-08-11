const buttonDisplay = {
	PRIMARY:"primary",
	SECONDARY:"secondary"
};

Vue.component("v-button", {
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
});