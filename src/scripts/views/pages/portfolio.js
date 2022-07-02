
const portfolio = {
	async init(){
		this.i = 3;
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
	sectionAbout(aboutMe){
		if(aboutMe.type == "description"){
			return `
			<h3 class="break-word text-md text-justify font-h3 text-white h-auto max-h-3/6 max-rows">
				${aboutMe.description}
			</h3>`
		}else if(aboutMe.type == 'list'){
			let LITemp = ``;
			aboutMe.list.forEach((e)=>{
				LITemp += `
					<li class="w-full p-2 my-2 border border-2 border-color-4">
						<h3 class="text-md font-semibold text-white">${e.title}</h3>
						<h4 class="text-sm text-white">${e.date} || ${e.desc}</h4> 
					</li>
				`;
			})
			return `
				<ul class="w-full flex flex-col ">
					${LITemp}
				</ul>
			`;
		}else if(aboutMe.type == 'list-in-list'){
			let LITemp = ``;
			aboutMe.listInList.forEach((e)=>{
				let LITempSkill = ``;
				console.log(e)
				e.skills.forEach((x)=>{
					LITempSkill += `<li class="bg-color-4 text-color-2 text-center m-2 px-2 ">${x}</li>`;
				})
				LITemp += `
					<li class="w-full p-2 my-2 border border-2 border-color-4">
						<h3 class="text-md font-semibold text-white">${e.title}</h3>
						<ul class="w-full flex flex-row overflow-x-auto scrollModification">
							${LITempSkill}
						</ul>
					</li>
				`;
			})
			return `
				<ul class="w-full flex flex-col">
					${LITemp}
				</ul>
			`;
		}
	},
	sectionAboutMe(i){
		let one,two,three,four;
		const backToZero = (i)=>{			
			if(i > this.dataAboutMe().length-1){
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
		console.log(`${one} - ${two} - ${three} - ${four}`)
		return `			
				<div class="row-span-full bg-color-3 p-8 flex flex-col">
					<h1 class="text-[4.5vw] text-color-4 font-h1 uppercase h-auto">${this.dataAboutMe()[one].title}</h1>
					${this.sectionAbout(this.dataAboutMe()[one])}
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
						<h1 class="text-[20px] my-auto text-color-4 font-h1 uppercase">${this.dataAboutMe()[three].title}</h1>
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
						<h1 class="text-[20px] my-auto text-color-4 font-h1 uppercase">${this.dataAboutMe()[two].title}</h1>
					</div>
				</div>
				<div class="col-span-1 bg-color-2 flex">
					<div class="w-2/6"></div>
					<div class="w-4/6 flex flex-col">
						<h1 class="text-[20px] my-auto text-color-4 font-h1 uppercase">${this.dataAboutMe()[four].title}</h1>
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
			this.i = (this.i > this.dataAboutMe().length -1) ? 0 : this.i;
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
			title : "Tentang Saya",
			type : 'description',
			description : `Saya adalah seorang Mahasiswa Ilmu Komputer (S1) di Universitas Pendidikan Indonesia, Bandung, Indonesia. Saya memiliki pengalaman Freelance Web Developer 1 tahun dan memiliki keahlian pengembangan website front-end dan back- end, Proyek yang sering saya kerjakan menggunakan bahasa pemograman PHP dengan framework CodeIgniter 4. Saya juga mengikuti kegiatan MBKM di PT Presetologics (Dicoding Indonesia) dengan mengikuti kelas FEBE (Front-End dan Back End).`
		},{
			title : "Pendidikan",
			type : 'list',
			list : [{
				title : "Universitas Pendidikan Indonesia",
				date : "2019 - Sekarang",
				desc : "Ilmu Komputer"
			},{
				title : "Smk Merdeka Bandung",
				date : "2016 - 2019",
				desc : "Teknik Komputer dan Jaringan"
			}]
		},{
			title : "Pengalaman",
			type : "list",
			list : [{
				title : "Web Developer (Freelance)",
				date : "2021 - Sekarang",
				desc : "Freelance"
			},{
				title : "Network Technician (Intership)",
				date : "2018 / 3 Bulan",
				desc : "PT. Telkom STO Sadang Serang"
			},{
				title : "Network Technician (Intership)",
				date : "2018 / 3 Bulan",
				desc : "DPRD (Dewan Perwakilan Rakyat Daerah)"
			}]
		},{
			title : "Kemampuan",
			type : "list-in-list",
			listInList : [{
				title : "Front-End Development",
				skills : ["HTML","CSS","Javascript","Tailwind","PWA","Webpack"]
			},{
				title : "Back-End Development",
				skills : ["PHP","MonggoDB","MySQL","CodeIgniter","NodeJS"]
			}]
		},{
			title : "Sertifikat",
			type : "description",
			description : `Sertifikasi adalah sebuah penetapan yang diberikan oleh organisasi atau asosiasi profesi terhadap seseorang bahwa orang tersebut telah memenuhi standar kompetensi tertentu.
			- <a href="https://www.pinhome.id" target="_blank">www.pinhome.id</a>`,
			link : "#/sertifikat"
		}];
	}
	
}

export default portfolio;