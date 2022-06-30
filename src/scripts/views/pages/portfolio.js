const portfolio = {
	async init(){
		this.i = 0;
		return `
		<div class="w-full h-screen bg-white flex-col flex">
			<div class="flex flex-row w-full h-full relative overflow-x-none">
				<div class="bg-color-3 mb-auto background w-full h-full z-10"></div>		
				<div class="absolute w-full h-full z-2 flex flex-col">
					<div class="btn-back w-full h-[5%] bg-color-3 flex">
						<a href="#/" class="text-center m-auto">
							<i class="fa-solid fa-angles-down text-white text-3xl animate-bounce"></i>
						</a>
					</div>
					<div class="sectionAboutMe w-full h-full bg-white grid grid-rows-3 grid-cols-2 gap-4 px-[200px] py-[50px]">
					</div>
				</div>
			</div>
		</div>`;
	},
	sectionAboutMe(i){
		let one,two,three,four;
		const backToZero = (i)=>{			
			if(i > 3){
				i=0;
				return i;
			}else{
				return i;
			}
		}
		one = backToZero(i);
		two = backToZero(one+1);
		three = backToZero(two+1);
		four = backToZero(three+1);
		return `			
				<div class="row-span-full bg-color-3 p-8 flex flex-col">
					<h1 class="text-[75px] text-color-4 font-h1 uppercase h-3/6">${this.dataAboutMe()[one].title}</h1>
					<h3 class="break-all text-md text-justify font-h3 text-white h-auto max-h-2/6 max-rows">
						${this.dataAboutMe()[one].description}
					</h3>
					<div class="mt-auto ml-auto h-1/6 flex w-full">
						<button class="next ml-auto mt-auto border border-4 border-color-4 p-2  shadow-inner">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-color-4 shadow-inner" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
				<div class="col-span-1 bg-color-2 flex">
					<div class="w-2/6"></div>
					<div class="w-4/6 flex flex-col">
						<h1 class="text-[20px] mt-auto text-color-4 font-h1 uppercase">${this.dataAboutMe()[two].title}</h1>
						<h3 class="text-[15px] mb-auto text-color-4 font-h3 truncate pr-4">
							${this.dataAboutMe()[two].description}
						</h3>
					</div>
				</div>
				<div class="col-span-1 bg-color-3 flex">
					<div class="w-2/6 flex p-4">
						<button class="back ml-auto my-auto border border-4 border-color-4 p-2 shadow-inner">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-color-4 shadow-inner" viewBox="0 0 20 20" fill="currentColor">
							  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
					<div class="w-4/6 flex flex-col">
						<h1 class="text-[20px] mt-auto text-color-4 font-h1 uppercase">${this.dataAboutMe()[three].title}</h1>
						<h3 class="text-[15px] mb-auto text-color-4 font-h3 truncate pr-4">
							${this.dataAboutMe()[three].description}
						</h3>
					</div>
				</div>
				<div class="col-span-1 bg-color-2 flex">
					<div class="w-2/6"></div>
					<div class="w-4/6 flex flex-col">
						<h1 class="text-[20px] mt-auto text-color-4 font-h1 uppercase">${this.dataAboutMe()[four].title}</h1>
						<h3 class="text-[15px] mb-auto text-color-4 font-h3 truncate pr-4">
							${this.dataAboutMe()[four].description}
						</h3>
					</div>
				</div>
		`
	},
	async afterRender(){
		await this.backgroundAnimation();
		document.querySelector('.sectionAboutMe').innerHTML = this.sectionAboutMe(this.i);
		await this.hoverButton('.next');
		await this.hoverButton('.back');
		await this.clickButton('.next');
		await this.clickButton('.back');
	},
	async backgroundAnimation(){
		await $('.background').animate({
			height: "0%",
			filter: "blur(4px)",
		},2000,async ()=>{

		})
	},
	async hoverButton(eButton){
		await $(eButton).on('mouseenter',()=>{
			$(eButton).animate({
				padding: "0.5rem 1.5rem"
			},500)
		})

		await $(eButton).on('mouseleave',()=>{
			$(eButton).animate({
				padding: "0.5rem 0.5rem"
			},500)
		})
	},
	async clickButton(eButton){
		await $(eButton).on('click',()=>{
			this.i = (this.i > 3) ? 0 : this.i;
			document.querySelector('.sectionAboutMe').innerHTML = this.sectionAboutMe(this.i);
			this.hoverButton('.next');
			this.hoverButton('.back');
			this.clickButton('.next');
			this.clickButton('.back');
			this.i++;
		})
	},
	dataAboutMe(){
		return [
		{
			title : "I'm Freelance",
			description : `I have been freelance Web Development for about 6 months.
			My Goal to become a freelance is to try a project that i have never tried and i 
			do not think too much about the cost that gives because it has been paid with
			experience. I feel happy and happy even though sometimes i feel tired.`
		},{
			title : "I'm Student",
			description : `I have been freelance Web Development for about 6 months.
			My Goal to become a freelance is to try a project that i have never tried and i 
			do not think too much about the cost that gives because it has been paid with
			experience. I feel happy and happy even though sometimes i feel tired.`			
		},{
			title : "Lessons",
			description : `I have been freelance Web Development for about 6 months.
			My Goal to become a freelance is to try a project that i have never tried and i 
			do not think too much about the cost that gives because it has been paid with
			experience. I feel happy and happy even though sometimes i feel tired.`
		},{
			title : "My Portfolio",
			description : `I have been freelance Web Development for about 6 months.
			My Goal to become a freelance is to try a project that i have never tried and i 
			do not think too much about the cost that gives because it has been paid with
			experience. I feel happy and happy even though sometimes i feel tired.`
		}];
	}
	
}

export default portfolio;