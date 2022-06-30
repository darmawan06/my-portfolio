const colors = {
	color(){
		return ["#FFC93C","#9DDFD3","#31326F","#DBF6E9"];	
	},

	background(i){
		return `background-color : ${this.color()[i]}`.toLowerCase();
	},

	text(i){
		return `color : ${this.color()[i]}`.toLowerCase();
	},
}

export default colors;