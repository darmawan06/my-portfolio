import navbar from '../components/navbar'

const homepage = {
	async init(){
		this.colorPrimary = ["bg-neutral-800","text-neutral-800"];
		this.colorSecondary = ["bg-indigo-50","text-indigo-50"];
		return `
		<div class="w-full h-screen ${this.colorPrimary[0]} ">
			<div class="flex flex-row w-full h-full relative">
				<div class="${this.colorSecondary[0]} m-auto background w-full h-full"></div>		
				<div class="absolute w-full h-full z-2 text-white flex">
					${navbar.render({
						linkPage : "#/portfolio"
					})}
				</div>
			</div>
		</div>`;
	},
	async afterRender(){
		await navbar.afterRender();
		await this.backgroundAnimation();
	},

	async backgroundAnimation(){
		await $('.background').animate({
			height: "0%",
			filter: "blur(4px)",
		},2000,async ()=>{
			await this.navbarAnimation()		
		})
	},

	async navbarAnimation(){
		$('.navbar').removeClass('hidden');
		$('.navbar').animate({
			width : "100%",
			height : "100%",
		},2000,()=>{
			$('.navbar div div i').removeClass('animate-spin');
		
		})
	}

}

export default homepage;