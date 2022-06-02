
const navbar = {
	render({linkPage,linkCode}){
		return `
			<div class="grid grid-rows-8 grid-cols-8 m-auto w-2/4 h-2/4 navbar hidden">
				<!-- 1 -->
				<div class="w-full h-full text-center row-span-3"></div>
				<div class="w-full h-full text-center flex col-span-2 row-span-3">
					<a href="${linkCode}" class="m-auto">
						<i class="fa-solid fa-code text-white text-center m-auto text-3xl"></i>
					</a>
				</div>
				<div class="w-full h-full text-center col-span-2 row-span-3"></div>
				<div class="w-full h-full text-center flex col-span-2 row-span-3">
					<i class="fa-solid fa-code-merge text-white text-center m-auto text-3xl"></i>
				</div>
				<div class="w-full h-full text-center row-span-3"></div>

				<!-- 2 -->
				<div class="w-full h-full text-center flex col-span-2 row-span-2">
					<i class="fa-brands fa-github text-white text-center m-auto text-3xl"></i>
				</div>
				<div class="w-full h-full text-center row-span-2"></div>
				<div class="w-full h-full text-center flex col-span-2 row-span-2">
					<a href="${linkPage}" class="m-auto flex flex-col">
						<svg xmlns="http://www.w3.org/2000/svg" class="animate-bounce m-auto h-10 w-10 btn-change" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
						</svg>
						<span class="text-xl text-project font-bold">Projects Zero To Hero</span>
						<span class="text-sm text-created">Created By : Dikdik Darmawan</span>
					</a>
				</div>
				<div class="w-full h-full text-center row-span-2"></div>
				<div class="w-full h-full text-center flex col-span-2 row-span-2">
					<i class="fa-brands fa-instagram text-white text-center m-auto text-3xl"></i>
				</div>
				
				<!-- 3 -->
				<div class="w-full h-full text-center row-span-3"></div>
				<div class="w-full h-full text-center flex col-span-2 row-span-3">
					<i class="fa-solid fa-address-card text-white text-center m-auto text-3xl"></i>
				</div>
				<div class="w-full h-full text-center col-span-2 row-span-3"></div>
				<div class="w-full h-full text-center flex col-span-2 row-span-3">
					<i class="fa-brands fa-linkedin text-white text-center m-auto text-3xl"></i>
				</div>
				<div class="w-full h-full text-center row-span-3"></div>

			</div>
		`;
	},

	async afterRender(){
		this.textBackground(".text-created")
		this.textBackground(".text-project")
	},
	async textBackground(className){
		let textBackground = $(className).text().split("");
		const textBackgroundHTML = document.querySelector(className);
		textBackgroundHTML.innerHTML ="";

		let counter = 0;
		let counterChar = 0;
		let allChar = this.splitAllChar();
		textBackgroundHTML.innerHTML += `
				<span class="whitespace-pre"></span>
			`
		const i = setInterval(async()=>{
			try{
				const span = textBackgroundHTML.getElementsByTagName("span");
				const lastSpan = span[span.length-1];
				if(allChar[counterChar] == textBackground[counter]){
					textBackgroundHTML.innerHTML += `
						<span class="whitespace-pre"></span>
					`
					lastSpan.innerText = textBackground[counter];
					counter++;
					counterChar = 0;

				}else{
					lastSpan.innerText = (allChar[counterChar+1] != " ") ? allChar[counterChar+1] : " " ;
					counterChar++;
				}
				if(counter == textBackground.length){
					clearInterval(i);
				}
			}catch(e){
			}
		})

	},
	splitAllChar() {
	    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 :';

	   	return characters.split('');
	},
}

export default navbar;