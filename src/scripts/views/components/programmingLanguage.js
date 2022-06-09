const programmingLanguage = {
	render(){
		this.language = ["C","C++","PHP","Javascript","Python","Java"];
		return `
		<div class="programming-language col-span-2 row-span-3 grid grid-rows-3 grid-cols-5 place-content-center">
			${this.createGrid()}
			
		</div>`
			// <i class="fa-solid fa-code text-white text-center m-auto text-3xl animate-spin"></i>
	},

	afterRender(){
		$('.programming-language').on('mouseenter',()=>{
			$('.code').removeClass('hidden')
		})
		$('.programming-language').on('mouseleave',()=>{
			$('.code').addClass('hidden')
		})
	},

	createGrid(){
		let tampHtml = "";
		let indexLanguage = 0;
		for (var i = 0; i < 3; i++) {
			if(i % 2 != 0){
				tampHtml += `
				<div class="flex w-full h-full">
				</div>

				<div class="flex w-full h-full">
					<span class="text-center m-auto font-semibold code hidden">${this.language[indexLanguage++]}</span>
				</div>
				<div class="flex w-full h-full flex-col">
					<i class="fa-solid fa-code text-white text-center m-auto text-3xl">
						<span class="text-center font-semibold text-sm ">Language</span>
					</i>

				</div>
				<div class="flex w-full h-full">
					<span class="text-center m-auto font-semibold code hidden">${this.language[indexLanguage++]}</span>
				</div>

				<div class="flex w-full h-full">
				</div>`				
			}else{
				tampHtml += `
				<div class="flex w-full h-full">
					<span class="text-center m-auto font-semibold code hidden">${this.language[indexLanguage++]}</span>
				</div>

				<div class="flex w-full h-full">
				</div>
				<div class="flex w-full h-full">
				</div>
				<div class="flex w-full h-full">
				</div>
				
				<div class="flex w-full h-full">
					<span class="text-center m-auto font-semibold code hidden">${this.language[indexLanguage++]}</span>
				</div>`				
			}
		}

		return tampHtml;
	}

}

export default programmingLanguage;