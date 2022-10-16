const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6670b9e7cmshb65ad32e5cc7a01p146e48jsn37474bec2325',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};
function getData(e){
	e.preventDefault();
	const nilai = document.getElementById('cari').value
	console.log(nilai)
	fetch(`https://jsearch.p.rapidapi.com/search?query=${nilai}&num_pages=1`, options)
	.then(response => response.json())
	.then(response => {console.log(response)
		const data =  response.data
		console.log(data.length)
		if(data.length<1){
			document.getElementById('isi').innerHTML = `
			<div class='isi'>
			No Job found. Start searching jobs around the world by fill the input and
			hit ENTER / Click on search icon. Easy!!
			</div>
			`
		}else{
			let isii=''
			data.forEach(isi=>{
				console.log(isi)
				const description = isi.job_description.slice(0,200)
				isii+=`
				<div class='isiJob'>
                    <h2><a href='${isi.job_apply_link}'>${isi.job_title}</a></h2>
                    <p>${description}...</p>
                    <div class='flex'>
                    <span> 
                        <img src='./public/images/icon-employer.png'/> &nbsp;
                        ${isi.employer_name}
                    </span>
                    <span> 
                    <img src='./public/images/Outline.png'/> &nbsp;
                        ${isi.job_city} ${isi.job_country}
                    </span>
                    </div>
                
				</div>`			
			})
			document.getElementById('isi').innerHTML = isii
		}
	})
	.catch(err => console.error(err));

}