const sertifikat = {
	init(){
		return `
			<section id="sertifikat" class="w-full bg-color-2 ">
				<div class="detail-sertifikat w-full h-screen bg-color-3 hidden">
					<button class="back w-full h-8 bg-color-2 text-color-4">Back</button>
				</div>
				<div class="list">
					<h1 class="title text-2xl text-color-3 font-semibold uppercase h-[80px] flex">
						<span class="m-auto">Sertifikat</span>
					</h1>
					<ul class="w-full h-auto grid pb-8 grid-cols-4 gap-4 px-8">
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
						<li class="bg-color-3 min-h-[200px]">
							<img src="images/sertifikat/belajardasarpemrogramanweb.png" class="list-sertifikat w-full h-[100%] bg-color-3 p-1 cursor-pointer" />
						</li>
					</ul>

				</div>
			</section>
		`;
	},


	afterRender(){
		this.hoverClickShowSertifikat();
	},

	hoverClickShowSertifikat(){
		$('.list-sertifikat').on('click',()=>{
			$('.list').toggleClass("hidden");
			$('.detail-sertifikat').toggleClass("hidden");
			console.log("hello world")
		})

		$('.back').on('click',()=>{
			$('.list').toggleClass("hidden");
			$('.detail-sertifikat').toggleClass("hidden");
			console.log("hello world")
		})
	}
}


export default sertifikat;