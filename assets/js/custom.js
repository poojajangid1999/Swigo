/**
	Template Name 	 : Swigo
	Author			 : DexignZone
	Version			 : 1.0
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio
	
	Core script to handle the entire theme and core functions
**/

var Swigo = function(){
	'use strict';
		
	var screenWidth = $( window ).width();
	
	/* Home Search ============ */
	var handleHomeSearch = function() {
		/* top search in header on click function */
		var quikSearch = jQuery("#quik-search-btn");
		var quikSearchRemove = jQuery("#quik-search-remove");
		
		quikSearch.on('click',function() {
			jQuery('.dz-quik-search').fadeIn(500);
			jQuery('.dz-quik-search').addClass('On');
		});
		
		quikSearchRemove.on('click',function() {
			jQuery('.dz-quik-search').fadeOut(500);
			jQuery('.dz-quik-search').removeClass('On');
		});	
		/* top search in header on click function End*/
	}
	
	/* Header Height ============ */
	var handleResizeElement = function(){
		var headerTop = 0;
		var headerNav = 0;
		
		$('.header .sticky-header').removeClass('is-fixed');
		$('.header').removeAttr('style');
		
		if(jQuery('.header .top-bar').length > 0 &&  screenWidth > 991)
		{
			headerTop = parseInt($('.header .top-bar').outerHeight());
		}

		if(jQuery('.header').length > 0 )
		{
			headerNav = parseInt($('.header').height());
			headerNav =	(headerNav == 0)?parseInt($('.header .main-bar').outerHeight()):headerNav;
		}	
		
		var headerHeight = headerNav + headerTop;
		
		jQuery('.header').css('height', headerHeight);
	}
	
	/* Resize Element On Resize ============ */
	var handleResizeElementOnResize = function(){
		var headerTop = 0;
		var headerNav = 0;
		
		$('.header .sticky-header').removeClass('is-fixed');
		$('.header').removeAttr('style');
		
		
		setTimeout(function(){
			
			if(jQuery('.header .top-bar').length > 0 &&  screenWidth > 991)
			{
				headerTop = parseInt($('.header .top-bar').outerHeight());
			}

			if(jQuery('.header').length > 0 )
			{
				headerNav = parseInt($('.header').height());
				headerNav =	(headerNav == 0)?parseInt($('.header .main-bar').outerHeight()):headerNav;
			}	
			
			var headerHeight = headerNav + headerTop;
			
			jQuery('.header').css('height', headerHeight);
		
		}, 500);
    }
	
	/* Load File ============ */
	var dzTheme = function(){
		
		if(screenWidth <= 991 ){
			jQuery('.navbar-nav > li > a, .sub-menu > li > a').unbind().on('click', function(e){
				if(jQuery(this).parent().hasClass('open'))
				{
					jQuery(this).parent().removeClass('open');
				}
				else{
					jQuery(this).parent().parent().find('li').removeClass('open');
					jQuery(this).parent().addClass('open');
				}
			});
		}
		
		jQuery('.sidenav-nav .navbar-nav > li > a').next('.sub-menu,.mega-menu').slideUp();
		jQuery('.sidenav-nav .sub-menu > li > a').next('.sub-menu').slideUp();
		
		jQuery('.sidenav-nav .navbar-nav > li > a, .sidenav-nav .sub-menu > li > a').unbind().on('click', function(e){
			if(jQuery(this).hasClass('open')){
				jQuery(this).removeClass('open');
				jQuery(this).parent('li').children('.sub-menu,.mega-menu').slideUp();
			}else{
				jQuery(this).addClass('open');
				
				if(jQuery(this).parent('li').children('.sub-menu,.mega-menu').length > 0){
					
					e.preventDefault();
					jQuery(this).next('.sub-menu,.mega-menu').slideDown();
					jQuery(this).parent('li').siblings('li').find('a').removeClass('open');
					jQuery(this).parent('li').siblings('li').children('.sub-menu,.mega-menu').slideUp();
				}else{
					jQuery(this).next('.sub-menu,.mega-menu').slideUp();
				}
			}
		});
	}
	

	
	/* Magnific Popup ============ */
	var MagnificPopup = function(){
		
		if(jQuery('.mfp-gallery').length > 0){
			/* magnificPopup function */
			jQuery('.mfp-gallery').magnificPopup({
				delegate: '.mfp-link',
				type: 'image',
				tLoading: 'Loading image #%curr%...',
				mainClass: 'mfp-img-mobile',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1] // Will preload 0 - before current, and 1 after the current image
				},
				image: {
					tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
					titleSrc: function(item) {
						return item.el.attr('title') + '<small></small>';
					}
				}
			});
			/* magnificPopup function end */
		}
		
		if(jQuery('.mfp-video').length > 0){
			/* magnificPopup for Play video function */		
			jQuery('.mfp-video').magnificPopup({
				type: 'iframe',
				iframe: {
					markup: '<div class="mfp-iframe-scaler">'+
							'<div class="mfp-close"></div>'+
							'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
							'<div class="mfp-title">Some caption</div>'+
							'</div>'
				},
				callbacks: {
					markupParse: function(template, values, item) {
						values.title = item.el.attr('title');
					}
				}
			});	
		}

		if(jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').length > 0){
			/* magnificPopup for Play video function end */
			$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		}
	}
	
	/* Scroll To Top ============ */
	var scrollTop = function (){
		var scrollTop = jQuery("button.scroltop");
		
		/* page scroll top on click function */	
		scrollTop.on('click',function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		})

		jQuery(window).bind("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
		/* page scroll top on click function end*/
	}
	
	/* Header Fixed ============ */
	var headerFix = function(){
		/* Main navigation fixed on top  when scroll down function custom */		
		jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
				} else {
					menu.removeClass('is-fixed');
				}
			}
		});
		/* Main navigation fixed on top  when scroll down function custom end*/
	}
	
	/* Masonry Box ============ */
	var masonryBox = function(i){
		/* masonry by  = bootstrap-select.min.js */
		var masonryId 		= '#masonry'+i;
		var masonryClass 	= '.masonry'+i;
		var filtersClass 	= '.filters'+i;

		if(jQuery(masonryId +', '+ masonryClass).length > 0){
			jQuery(filtersClass+' li').removeClass('active');
			jQuery(filtersClass+' li:first').addClass('active');
			var self = jQuery(masonryId +', '+ masonryClass);
			var filterValue = "";
	 
			if(jQuery('.card-container').length > 0){
				var gutterEnable = self.data('gutter');
				
				var gutter = (self.data('gutter') === undefined)?0:self.data('gutter');
				gutter = parseInt(gutter);
				
				
				var columnWidthValue = (self.attr('data-column-width') === undefined)?'':self.attr('data-column-width');
				if(columnWidthValue != ''){columnWidthValue = parseInt(columnWidthValue);}
				
				self.imagesLoaded(function () {
					filter: filterValue,
					self.masonry({
						gutter: gutter,
						columnWidth:columnWidthValue, 
						//columnWidth:3, 
						//gutterWidth: 15,
						isAnimated: true,
						itemSelector: ".card-container",
						//horizontalOrder: true,
						//fitWidth: true,
						//stagger: 30
						//containerStyle: null
						//percentPosition: true
					});
					
				}); 
			} 
		}
		if(jQuery(filtersClass).length){
			jQuery(filtersClass+" li:first").addClass('active');
			
			jQuery(filtersClass).on("click", "li", function() {
				
				jQuery(filtersClass+' li').removeClass('active');
				jQuery(this).addClass('active');
				
				var filterValue = $(this).attr("data-filter");
				self.isotope({ 
					filter: filterValue,
					masonry: {
						gutter: gutter,
						columnWidth: columnWidthValue,
						isAnimated: true,
						itemSelector: ".card-container"
					}
				});
			});
		}
		/* masonry by  = bootstrap-select.min.js end */
	}
	
	var masonryBoxLoop = function(){
		for(var i=1; i <= 10; i++)
		{
			masonryBox(i);
		}
	}
	
	/* Counter Number ============ */
	var counter = function(){
		if(jQuery('.counter').length){
			jQuery('.counter').counterUp({
				delay: 10,
				time: 3000
			});	
		}
	}
	
	/* Video Popup ============ */
	var handleVideo = function(){
		/* Video responsive function */	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
		/* Video responsive function end */
	}
	
	/* Gallery Filter ============ */
	var handleFilterMasonary = function(){
		/* gallery filter activation = jquery.mixitup.min.js */ 
		if (jQuery('#image-gallery-mix').length) {
			jQuery('.gallery-filter').find('li').each(function () {
				$(this).addClass('filter');
			});
			jQuery('#image-gallery-mix').mixItUp();
		};
		if(jQuery('.gallery-filter.masonary').length){
			jQuery('.gallery-filter.masonary').on('click','span', function(){
				var selector = $(this).parent().attr('data-filter');
				jQuery('.gallery-filter.masonary span').parent().removeClass('active');
				jQuery(this).parent().addClass('active');
				jQuery('#image-gallery-isotope').isotope({ filter: selector });
				return false;
			});
		}
		/* gallery filter activation = jquery.mixitup.min.js */
	}
	
	/* BGEFFECT ============ */
	var reposition = function (){
		
		var modal = jQuery(this),
		dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		
		/* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
		dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
	}
	
	var handelResize = function (){
		/* Reposition when the window is resized */
		jQuery(window).on('resize', function() {
			jQuery('.modal:visible').each(reposition);			
		});
	}
	
	/* Countdown ============ */
	var handleCountDown = function(WebsiteLaunchDate){
		/* Time Countr Down Js */
		if($(".countdown").length)
		{
			$('.countdown').countdown({date: WebsiteLaunchDate+' 23:5'}, function() {
				$('.countdown').text('we are live');
			});
		}
		/* Time Countr Down Js End */
	}
	
	/* Website Launch Date */ 
	var WebsiteLaunchDate = new Date();
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	WebsiteLaunchDate.setMonth(WebsiteLaunchDate.getMonth() + 1);
	WebsiteLaunchDate =  WebsiteLaunchDate.getDate() + " " + monthNames[WebsiteLaunchDate.getMonth()] + " " + WebsiteLaunchDate.getFullYear();
	/* Website Launch Date END */ 
		
	// Light Gallery ============
	var handleLightgallery = function() {
		if(jQuery('#lightgallery').length > 0){
			lightGallery(document.getElementById('lightgallery'), {
				plugins: [lgThumbnail, lgZoom],
				selector: '.lg-item',
				thumbnail:true,
				exThumbImage: 'data-src'
            });
		}
		if(jQuery('#lightgallery2').length > 0){
			lightGallery(document.getElementById('lightgallery2'), {
				plugins: [lgThumbnail, lgZoom],
				selector: '.lg-item',
				thumbnail:true,
				exThumbImage: 'data-src'
            });
		}
		if(jQuery('#lightgallery3').length > 0){
			lightGallery(document.getElementById('lightgallery3'),{
				plugins: [lgThumbnail, lgZoom],
				selector: '.lg-item',
				thumbnail:true,
				exThumbImage: 'data-src'
            });
		}
		if(jQuery('#lightgallery4').length > 0){
			lightGallery(document.getElementById('lightgallery4'),{
				plugins: [lgThumbnail, lgZoom],
				selector: '.lg-item',
				thumbnail:true,
				exThumbImage: 'data-src'
            });
		}
		if(jQuery('#lightgallery5').length > 0){
			lightGallery(document.getElementById('lightgallery5'),{
				plugins: [lgThumbnail, lgZoom],
				selector: '.lg-item',
				thumbnail:true,
				exThumbImage: 'data-src'
            });
		}
	}
	
	/* Box Hover ============ */
	var boxHover = function(){
		jQuery('.box-hover').on('mouseenter',function(){
			var selector = jQuery(this).parent().parent();
			selector.find('.box-hover').removeClass('active');
			jQuery(this).addClass('active');
		});
	}

	/* Current Active Menu ============ */
	var handleCurrentActive = function() {
		for (var nk = window.location,
				o = $("ul.navbar a").filter(function(){
				return this.href == nk;
			})
			.addClass("active").parent().addClass("active");;)
		{
		if (!o.is("li")) break;
			o = o.parent().addClass("show").parent('li').addClass("active");
		}
	}
	
	/* Select Picker ============ */
	var handleSelectpicker = function(){
		if(jQuery('.default-select').length > 0 && jQuery.isFunction($.fn.selectpicker) ){
			jQuery('.default-select').selectpicker();
		}
	}

	/* Handle Placeholder ============ */
	var handlePlaceholderAnimation = function(){
		if(jQuery('.dz-form').length){
			$('input, textarea').focus(function(){
				$(this).parents('.input-group').addClass('focused');
			});
			$('input, textarea').blur(function(){
				var inputValue = $(this).val();
				if ( inputValue == "" ) {
					$(this).removeClass('filled');
					$(this).parents('.input-group').removeClass('focused');  
				} else {
					$(this).addClass('filled');
				}
			})
		}
	}

	
	/* Icon Dropdowm ============ */
	var handleIconDropdown = function(){
		jQuery(".icon-dropdown").on('click', function(){
			if($(this).hasClass("show")){
				$(this).removeClass("show");
			}else {
				jQuery(".icon-dropdown").removeClass("show");	
				$(this).addClass("show");
			}
	  	});
	}


	/*EYELASHES*/
	var handleShowPass = function(){
		jQuery('.show-pass').on('click',function(){
			var inputType = jQuery(this).parent().find('.dz-password');
			if(inputType.attr('type') == 'password')
			{
				inputType.attr('type', 'text');
				jQuery(this).addClass('active');
			}
			else
			{
				inputType.attr('type', 'password');
				jQuery(this).removeClass('active');
			}
		});
	}
	


	
	/* Perfect Scrollbar ============ */
	var handlePerfectScrollbar = function() {
		if(jQuery('.deznav-scroll').length > 0){
			const qs = new PerfectScrollbar('.deznav-scroll');
			qs.isRtl = false;
		}
	}
	
	var comingSoonCounter = function(){
		
		var commingSoonDate = new Date("2023-02-28 00:00:00").getTime();
		
		var x = setInterval(function() {
			clockCounter();
		}, 1000);
		
		function clockCounter(){
			var currentTime = new Date().getTime();
			var clockTime = commingSoonDate - currentTime;

			// Time calculations for days, hours, minutes and seconds
			var days = Math.floor(clockTime / (1000 * 60 * 60 * 24));
			var hours = Math.floor((clockTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((clockTime % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((clockTime % (1000 * 60)) / 1000);

			var remainDays 		= (days.toString().length 		== 1) ? '0'+days	: days;
			var remainHour 		= (hours.toString().length 		== 1) ? '0'+hours	: hours;
			var remainMin 		= (minutes.toString().length 	== 1) ? '0'+minutes	: minutes;
			var remainSeconds 	= (seconds.toString().length 	== 1) ? '0'+seconds	: seconds;

			jQuery('#day').text(remainDays);
			jQuery('#hour').text(remainHour);
			jQuery('#min').text(remainMin);
			jQuery('#second').text(remainSeconds);
			
			var rotateNum = 6 * seconds;

			$('.round').css({'transform': 'rotate(' + rotateNum + 'deg)'});
			$('.round').css({'-webkit-transform': 'rotate(' + rotateNum + 'deg)'});
			$('.round').css({'-o-transform': 'rotate(' + rotateNum + 'deg)'});
			$('.round').css({'-moz-transform': 'rotate(' + rotateNum + 'deg)'});
			$('.round').css({'-ms-transform': 'rotate(' + rotateNum + 'deg)'});

			// If the count down is over, write some text 
			if (clockTime < 0) {
				clearInterval(x);
				jQuery("#day, #hour, #min, #second").html("EXPIRED");
			}
		}
		
	}
	
	/* WOW ANIMATION ============ */
	var handleWowAnimation = function(){
		if($('.wow').length > 0)
		{
			var wow = new WOW(
			{
			  boxClass:     'wow',      // animated element css class (default is wow)
			  animateClass: 'animated', // animation css class (default is animated)
			  offset:       50,          // distance to the element when triggering the animation (default is 0)
			  mobile:       false       // trigger animations on mobile devices (true is default)
			});
			wow.init();	
		}	
	}
	
	/* Handle Support ============ */
	var handleSupport = function(){
		var support = '<script id="DZScript" src="https://dzassets.s3.amazonaws.com/w3-global.js"></script>';
		jQuery('body').append(support);
	}
	
	/* Handle Page On Scroll ============ */
	var handlePageOnScroll = function(event){
		
		var headerHeight = parseInt($('.header').css('height'), 10);
		
		$('.navbar-scroll .scroll').on('click', function(event) 
		{
			event.preventDefault();

			jQuery('.navbar-scroll .scroll').parent().removeClass('active');
			jQuery(this).parent().addClass('active');
			
			if (this.hash !== "") {
				var hash = this.hash;	
				var seactionPosition = parseInt($(hash).offset().top, 10);
				var headerHeight =   parseInt($('.header').css('height'), 10) - 30;
				
				var scrollTopPosition = seactionPosition - headerHeight;
				$('html, body').animate({
					scrollTop: scrollTopPosition
				}, 500, function(){
					
				});
			}   
		});
		
		pageOnScroll();
	}
	
	/* Page On Scroll ============ */
	var pageOnScroll = function(event){
		
		if(jQuery('.navbar-scroll').length > 0){
			
			$('.header .sticky-header').addClass('is-fixed');
			var headerHeight = parseInt(jQuery('header .main-bar').height(), 10);
			
			setTimeout(function(){
				$('.header .sticky-header').removeClass('is-fixed');
			}, 100);
			
			jQuery(document).on("scroll", function(){
				
				var scrollPos = jQuery(this).scrollTop();
				jQuery('.navbar-scroll .scroll').each(function () {
					var elementLink = jQuery(this);
					
					var refElement = jQuery(elementLink.attr("href"));
					var seactionPosition = parseInt(jQuery(this.hash).offset().top, 10);
					var scrollTopPosition = (seactionPosition - headerHeight) - 30;
					
					if (scrollTopPosition <= scrollPos){
						elementLink.parent().addClass("active");
						elementLink.parent().siblings().removeClass("active");
					}
				});
				
			});
		}
	} 
	

	/* Function ============ */
	return {
		init:function(){
			handleHomeSearch();
			handleWowAnimation();
			boxHover();
			dzTheme();
			MagnificPopup();
			scrollTop();
			headerFix();
			handleSelectpicker();
			handleVideo();
			handlePlaceholderAnimation();
			handleFilterMasonary();
			handleCountDown(WebsiteLaunchDate);
			handelResize();
			handleLightgallery();
			masonryBoxLoop();
			jQuery('.modal').on('show.bs.modal', reposition);
			handleIconDropdown();
			handleCurrentActive();
			handlePerfectScrollbar();
			//handleSupport();
			comingSoonCounter();
			handleShowPass();
			handlePageOnScroll();
			counter();
		},

		load:function(){
			// counter();
			masonryBoxLoop();
		},
		
		resize:function(){
			screenWidth = $(window).width();
			dzTheme();	
		}
	}
	
}();

/* Document.ready Start */	
jQuery(document).ready(function() {
    
	Swigo.init();
	
	jQuery('.navicon').on('click',function(){
		$(this).toggleClass('open');
	});
	
});
/* Document.ready END */


/* Window Resize START */
jQuery(window).on('resize',function () {
	
	Swigo.resize();
	
});
/*  Window Resize END */

/* Window Load START */
jQuery(window).on('load',function () {
	
	Swigo.load();
	
	setTimeout(function(){
		jQuery('#loading-area').fadeOut();
	}, 3000);
	
});
/*  Window Load END */

