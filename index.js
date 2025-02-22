const btnCadastro = document.getElementById("btn_cadastro");
const btnEnviar = document.getElementById("btn_enviar");
const modal = document.querySelector("dialog");

btnCadastro.onclick = function () {
	modal.showModal()
};

btnEnviar.onclick = function (event) {
	event.preventDefault();
	document.getElementById("enviado").innerText = 'Cadastro enviado!';
	return false;
};

function abrirMenu() {
	document.getElementById("myNav").style.height = "100%";
  };
  
  function fecharMenu() {
	document.getElementById("myNav").style.height = "0%";
  };



  // Scroll suave 
  document.addEventListener('DOMContentLoaded', function() {
	const smoothScrollLinks = document.getElementsByClassName('smooth-scroll');
  
	for (let i = 0; i < smoothScrollLinks.length; i++) {
	  smoothScrollLinks[i].addEventListener('click', function(event) {
		event.preventDefault();
  
		const target = this.getAttribute('href');
		const targetElement = document.querySelector(target);
  
		if (targetElement) {
		  targetElement.scrollIntoView({
			behavior: 'smooth'
		  });
		}
	  });
	}
  });  


(() => {
//If you want to add more images, add the link name and URL image URL in the array list below.
	const images_list = [
{
    "url": "https://html-generator.com/uploads/images/2023/05/24/938979QGVKZ1P0F.jpg",
    "alt": "",
    "name": "938979QGVKZ1P0F.jpg",
    "link": ""
},
{
    "url": "https://html-generator.com/uploads/images/2023/05/24/15466SMK5ORR0YU.jpg",
    "alt": "",
    "name": "15466SMK5ORR0YU.jpg",
    "link": ""
},
{
    "url": "https://html-generator.com/uploads/images/2023/05/24/47124MFSTSW9IN9.jpg",
    "alt": "",
    "name": "47124MFSTSW9IN9.jpg",
    "link": ""
},
{
    "url": "https://html-generator.com/uploads/images/2023/05/24/75253O4B90N92G6.jpeg",
    "alt": "",
    "name": "75253O4B90N92G6.jpeg",
    "link": ""
},
{
    "url": "https://html-generator.com/uploads/images/2023/05/24/90029EB8Z4YBK30.jpg",
    "alt": "",
    "name": "90029EB8Z4YBK30.jpg",
    "link": ""
}
	];

// generated by https://www.html-code-generator.com/html/image-slideshow-generator
	let slider_id = document.querySelector("#hcg-slider-1");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:flex"':'')+'>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
					 '</a>';
		dots_div += '<a href="#" class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></a>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

	let slide_index = 0;

	const images = slider_id.querySelectorAll(".hcg-slides");
	const dots = slider_id.querySelectorAll(".hcg-slide-dot");
	const showSlides = () => {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i == slide_index) {
				images[i].style.display = "flex";
				dots[i].classList.add("dot-active");
			}
		}
	}

	const dot_click = event => {
		event.preventDefault();
		slide_index = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", dot_click, false);
	}
	// auto play
	setInterval(() => {
		slide_index++;
		showSlides();
	}, 2000);

})();

AOS.init();