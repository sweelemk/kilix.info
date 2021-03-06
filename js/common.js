
$(window).load(function(){
	function curr(){
		$('.top_title').arctext({
			radius: 600
		});
		$('.middle_title').arctext({
			radius: 400
		});
		$('.bottom_title').arctext({
			radius: 400,
			dir: -1
		});
		$('.js-curve').each(function(){
			var cur = $(this).data('rad');
			$(this).arctext({
				radius: cur
			});
		});	
	};
	curr();
});
$(document).ready(function () {

	$('.js-init').each(function (){
		$(this).on('click', function (evt) {
			var point = $(this).parents('.st-accordion li').find('.js-curve-inn');
			setTimeout(function () {
				point.addClass('1')
				point.each(function(){
					var cur = $(this).data('rad');
					$(this).show().arctext({
						radius: cur
					});
				});
			},100);	
			evt.preventDefault();
		});
	});

	$('#st-accordion').accordion({
		oneOpenedItem	: true,
		speed : 900
	});

	initDevice();
	loadMask();

	function scrollContent () {
		var totalScroll = $(document).height() - $(window).height();

		if(browserMobile){
			newScroll = $(window).scrollTop();
		} else {
			if(whichBrs() == 'Safari' || whichBrs() == 'Chrome'){
				newScroll = $('body').scrollTop();
			} else {
				newScroll = $('html,body').scrollTop();
			}
		}
		

		$('#quote').each(function(){
			var tempScroll = $(this).height() - newScroll;
			if(tempScroll < 0) tempScroll = 0;
			var tempOpacity = 1 - (newScroll / ($(window).height()));

			if($(document).scrollTop() >= $(window).height()){
				$('.fixed_box').css('opacity',0);
			} else {
				$('.fixed_box').css('opacity',1);
			}
		});
	};

	function initDevice(){
		var isTouchDevice = (function() {
			try {
				return ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;
			} catch (e) {
				return false;
			}
		}());
		if(isTouchDevice){
			jQuery('body').addClass('layout-mobile');
			jQuery('body').attr('id', 'layout-mobile');
		}
	};
	var browserIE = false;
		if(whichBrs() == 'Internet Explorer') browserIE = true;
	var browserMobile = false
		if($('body').hasClass('layout-mobile')) browserMobile = true;

	$('html,body').scrollTop(0);

	$('#loading-mask .big_logo').css('opacity','1');
	$('.animate_copy').css('opacity','1');
	function loadMask() {
		setTimeout(function(){
			$('#loading-mask').addClass('hidden');
		}, 5000);
	}

	function initT() {
		var block = $('.bg-colors'),
			colors = [],
			colorBlocks = block.find('[data-bg-colors-item]'),
			positions = [];	

		colorBlocks.each(function(){

			var item_coor = $(this).offset().top,
				start_Y = ($(document).scrollTop() + $(window).height()/2),
				color = $(this).attr('data-bg-colors-item');
				colors.push(color);

			//console.log(colors)

			if (start_Y >= item_coor) {
				$(this).parents('.bg-colors').find('.is-animated').eq(-1).removeClass('is-animated');
				$(this).addClass('is-animated');
				$('.bg-colors').css('background-color', color);
			} else if (start_Y <= item_coor) {
				$(this).removeClass('is-animated');
			}
  		});

	};
	initT();
	$(window).on('scroll', function(e) {
		initT();
		scrollContent ();
	});

	//SHOW MENU

	$('.js-menu').on('click', function(){
		$('.js-nav').removeClass('close').addClass('open');
		$('html').addClass('open_space');
	});
	$('.js-close-menu').on('click', function(){
		$('.js-nav').removeClass('open').addClass('close');
		$('html').removeClass('open_space');
	});

	//POPUP

	$(document).on('click', function(){
		$('.js-overlay').fadeOut(300);
		$(".js-popup").removeClass("is-visible");
		$('.js-form').removeClass('is-visible');
		$('html').removeClass('open_space');
	});

	$('.js-popup-link').on('click', function(event){
		var popup = $(this).data('href');
		$('.js-overlay').fadeIn(300);
		$('html').addClass('open_space');
		$(".js-popup").removeClass("is-visible");
		$('[data-popup="'+popup+'"]').addClass("is-visible");
		event.stopPropagation();
        return false;
	});
	$(".js-popup").children().on("click", function(event){
		event.stopPropagation();
	});
    $(".js-ovarlay").on("click", function(){
		$(".js-popup").removeClass("is-visible");
		$('.js-form').removeClass('is-visible');
		$('html').removeClass('open_space');
	});
	$(".js-close").on("click", function(){
		$(".js-overlay").fadeOut(300); 
		$(this).parents('.popup_wrap').removeClass("is-visible");
		$('html').removeClass('open_space');
		$('.js-form').removeClass('is-visible');
		return false;
    });
	//FOCUS INPUT AND TEXTAREA
	$('field_title').on('click', function(){
		$(this).parent().find('.input').focus();
		$(this).parent().find('textarea').focus();
	});

	//AUTO RESIZE TEXTAREA
	autosize($('.txt_space'));

	//VALIDATION 
	var form_validate = $('.js-validate');
	if (form_validate.length) {
		form_validate.each(function () {
			var form_this = $(this);
			$.validate({
				form : form_this,
				//borderColorOnError : '#fca9a5',
				onSuccess : function() {
					$('.js-form').addClass('is-visible');
				}
			});
		});
	};
	//VIDEO HEADER
	function pt() {
		var frame_H = $(window).height(),
			freme_W = $(window).width();

		$('.video_header')
		.css('padding-top', frame_H)
	};
	pt();
	$(window).resize(function(){
		pt();
	});

	if(!browserMobile) {
		$(window).stellar({
			horizontalOffset: false,
			verticalOffset: 150,
			parallaxBackgrounds: false,
			scrollProperty: 'scroll',
			positionProperty: 'transform',
			responsive: true
		});

		$('.animation').each(function(){
			var anim =$(this);
			var fps = $(this).data('fps');

			anim.animateSprite({
				fps: fps,
				loop: true
			})
		});
	}
	
	//fancybox
	$('.fancybox').fancybox({
		padding: 0
	});

	//slide menu
	$('.slide').hide();
	function slide(){
		var $this = $('.contacts_slide'),
			el = $this.find('address'),
			pp = $this.find('.slide');

		el.on('click', function(){
			$this.toggleClass('active')
			pp.slideToggle(100);
		})
		$this.on('mouseleave', function(){
			$(this).removeClass('active');
			pp.slideUp(100);
		})
	}
	slide();


	//toggle maps
	$(".js-toggle-points").on('click', function (evt){
		if ($(this).hasClass('is-map')) {
			$(this).removeClass('is-map').find('span').text('Все магазины на карте');
			$(".js-shop-map").removeClass('is-show');
			//$(".js-shop-group").removeClass('is-hidden');
			setTimeout(function(){
				$(".js-shop-group").slideDown(500);
			},1000)
		}
		else{
			$(this).addClass('is-map').find('span').text('Показать списком');
			//$(".js-shop-group").addClass('is-hidden');
			$(".js-shop-group").slideUp(500);
			$(".js-shop-map").addClass('is-show');			
		}
		evt.preventDefault();
	});

	//tooltip
	$('.js-tooltip').on('click', function(){
		var tooltip = $(this).parent().find('.tooltip');
		tooltip.toggle();
	});
	$('.close_tooltip').on('click', function(){
		$('.tooltip').hide()
	});


	//magic scroll
	
	var controller = new ScrollMagic.Controller({
		refreshInterval: 0
	});

	new ScrollMagic.Scene({
		triggerHook: 1

	})
		.addTo(controller);

	function scrollFadeScene(){
		$('.st-content').each(function(){
			var block = $(this);

			console.log(block)

			var tween = new TimelineMax();

			tween
				.fromTo(block, 0.5, { opacity: 0.3 }, { opacity: 1, ease: Power1.easeOut })
				.to(block, 0.5, { opacity: 0.3, ease: Power1.easeIn })

			var scene = new ScrollMagic.Scene({
				duration: ($(window).height())
			})
			.setTween(tween)
			.addTo(controller);
		});
	};
	//scrollFadeScene();


	function whichBrs() {
		var agt=navigator.userAgent.toLowerCase();
		if (agt.indexOf("opera") != -1) return 'Opera';
		if (agt.indexOf("staroffice") != -1) return 'Star Office';
		if (agt.indexOf("webtv") != -1) return 'WebTV';
		if (agt.indexOf("beonex") != -1) return 'Beonex';
		if (agt.indexOf("chimera") != -1) return 'Chimera';
		if (agt.indexOf("netpositive") != -1) return 'NetPositive';
		if (agt.indexOf("phoenix") != -1) return 'Phoenix';
		if (agt.indexOf("firefox") != -1) return 'Firefox';
		if (agt.indexOf("chrome") != -1) return 'Chrome';
		if (agt.indexOf("safari") != -1) return 'Safari';
		if (agt.indexOf("skipstone") != -1) return 'SkipStone';
		if (agt.indexOf("msie") != -1) return 'Internet Explorer';
		if (agt.indexOf("netscape") != -1) return 'Netscape';
		if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
		if (agt.indexOf('\/') != -1) {
			if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
				return navigator.userAgent.substr(0,agt.indexOf('\/'));
			} else return 'Netscape';
		} else if (agt.indexOf(' ') != -1)
			return navigator.userAgent.substr(0,agt.indexOf(' '));
		else return navigator.userAgent;
	}

});