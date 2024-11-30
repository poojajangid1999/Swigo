/* JavaScript Document */
jQuery(window).on('load', function() {
    'use strict';
	
	
	function changeItemBoxed() {
		if(jQuery("body").hasClass("boxed")) {
			return 3;
		} else {
			return 4;
		}
	}

	// main-banner-1
	if(jQuery('.main-slider-1').length > 0){
		var swiper = new Swiper(".main-thumb1", {
			loop: true,
			spaceBetween: 25,
			slidesPerView: "2",
			freeMode: true,
			center:true,
			watchSlidesProgress: true,
			autoplay: {
			   delay: 1500,
			},
			navigation: {
				nextEl: '.thumb-button-next',
				prevEl: '.thumb-button-prev',
			},
		});
		var swiper2 = new Swiper(".main-slider-1", {
			loop: true,
			effect: "fade",
			speed: 1000,
			parallax: true,
			autoplay: {
			   delay: 1500,
			},
			pagination: {
				el: ".main-swiper1-pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' +"0"+ (index + 1) + "</span>";
				},
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	// Team Swiper
	if(jQuery('.team-swiper').length > 0){
		var swiper = new Swiper(".team-swiper", {
			speed: 1500,
			parallax: true,
			slidesPerView:4,
			spaceBetween: 30,
			autoplay: {
			   delay: 3000,
			},
			loop:true,
			navigation: {
				nextEl: '.team-button-next',
				prevEl: '.team-button-prev',
			},
			
			breakpoints: {
				1280: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 2,
				},
				600: {
					slidesPerView: 2,
				},
				360: {
					slidesPerView: 1,
				},
			}
			
		  });
	}
	// blog-slider-full
	if(jQuery('.blog-slider-full').length > 0){
		var swiper = new Swiper('.blog-slider-full', {
			speed: 1500,
			parallax: true,
			slidesPerView: changeItemBoxed(),
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			}, 
			
			navigation: {
				nextEl: '.blog-button-next',
				prevEl: '.blog-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 1,
					centeredSlides: false,
				},
				320: {
					slidesPerView: 1,
					centeredSlides: false,
				},
			}
		});
	}
	// testimonial2
	if(jQuery('.testimonial2').length > 0){
		var swiper = new Swiper('.testimonial2', {
			speed: 2000,
			parallax: true,
			slidesPerView: 1,
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			}, 
			
			navigation: {
				nextEl: '.testimonial-2-button-next',
				prevEl: '.testimonial-2-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				320: {
					slidesPerView: 1,
				},
			}
		});
	}
	
		// img slider
	if(jQuery('.portfolio1').length > 0){
		var swiper = new Swiper('.portfolio1', {
			speed: 1500,
			parallax: true,
			slidesPerView: 4,
			spaceBetween: 30,
			loop:true,
			autoplay: {
			   delay: 3000,
			}, 
			
			navigation: {
				nextEl: '.blog-button-next',
				prevEl: '.blog-button-prev',
			},
			breakpoints: {
				1200: {
					slidesPerView: 4,
				},
				768: {
					slidesPerView: 3,
					centeredSlides: false,
				},
				600: {
					slidesPerView: 2,
					centeredSlides: false,
				},
				320: {
					slidesPerView: 1,
					centeredSlides: false,
				},
			}
		});
	}
	
	// testimonial
	if(jQuery('.testimonial1').length > 0){
		var swiper = new Swiper(".testimonial1-thumb", {
			slidesPerView: "3",
			spaceBetween: 0,
			
			grid: {
				rows: 2,
			},
			/* autoplay: {
			   delay: 1500,
			}, */
		});
		var swiper2 = new Swiper(".testimonial1", {
			slidesPerView: "1",
			
			//parallax: true,
			autoplay: {
			   delay: 1500,
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}

	
});
/* Document .ready END */