import navbar from '../components/navbar'

const portfolio = {
	async init(){
		this.colorPrimary = ["bg-indigo-50","text-indigo-50"];
		this.colorSecondary = ["bg-neutral-800","text-neutral-800"];
		return `
		<div class="w-full h-screen ${this.colorPrimary[0]} ">
			<div class="flex flex-row w-full h-full relative overflow-x-none">
				<div class="${this.colorSecondary[0]} m-auto background w-full h-full"></div>		
				<div class="absolute w-full h-full z-2 ${this.colorSecondary[1]} flex flex-col">
					<div class="btn-back w-full h-[5%] ${this.colorSecondary[0]} flex">
						<a href="#/" class="text-center m-auto">
							<i class="fa-solid fa-angles-down text-white text-3xl animate-bounce"></i>
						</a>
					</div>
				</div>
			</div>
		</div>`;
	},
	async afterRender(){
		await navbar.afterRender();
		await this.backgroundAnimation();
		await this.textBackground();
	},
	async backgroundAnimation(){
		await $('.background').animate({
			height: "0%",
			filter: "blur(4px)",
		},2000,async ()=>{

		})
	},
	
}

export default portfolio;