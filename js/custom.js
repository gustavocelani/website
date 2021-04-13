
/* ========================================================================= */
/*	Global Version
/* ========================================================================= */

var globalVersion = "v0.9";

jQuery(function ($) { "use strict";

	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */

	window.onload = function () {
		document.getElementById('loading-mask').style.display = 'none';
		initLanguage();
	}

	/* =========================================================================== */
	/*	FitVids js
	/* =========================================================================== */
	
	$(".media-wrapper").fitVids();

	
	/* ========================================================================= */
	/*	Nice Scroll - Custom Scrollbar
	/* ========================================================================= */

	var nice = $("html").niceScroll({
		cursorborderradius: 100,
		cursorwidth: "8px",
		cursorfixedheight: 150,
		cursorcolor: "#61a6ff",
		zindex: 9999,
		cursorborder: 0,
	});


	/* ========================================================================= */
	/*	Scroll Up / Back to top
	/* ========================================================================= */
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$("#scrollUp").fadeIn(200);
		} else {
			$("#scrollUp").fadeOut(200);
		}
	});
	
	$('#scrollUp').click(function() {
		$('html, body').stop().animate({
			scrollTop : 0
		}, 1500, 'easeInOutExpo');
	});


	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */
	
	$("#post-thumb, #gallery-post").owlCarousel({

		navigation : true,
		pagination : false,
		slideSpeed : 800,
		autoHeight : true,
		paginationSpeed : 800,
		singleItem:true,
		navigationText : ["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]

	});
	
	$("#features").owlCarousel({
		navigation : false,
		pagination : true,
		slideSpeed : 800,
		singleItem : true,
		transitionStyle : "fadeUp",
		paginationSpeed : 800,
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing : 0
	});
	
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});
	


	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
	});
	
	

	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	(function() {
		var count = {
		  initialized : false,
		  initialize : function() {
			if (this.initialized)
			  return;
			this.initialized = true;
			this.build();
		  },
		  build : function() {
			this.animations();
		  },
		  animations : function() {
			// Count To
			$(".counters-item [data-to]").each(function() {
			  var $this = $(this);
			  $this.appear(function() {
				$this.countTo({});
			  }, {
				accX : 0,
				accY : -150
			  });
			});
		  },
		};
		count.initialize();
	})();


	/* ========================================================================= */
	/*	Skills Chart
	/* ========================================================================= */

	$(".chart").appear(function () {
		$(".chart").easyPieChart({
			easing: "easeOutBounce",
			barColor: "#61a6ff",
			size: "150",
			lineWidth: 15,
			animate: 2e3,
			onStep: function (e, t, n) {
				$(this.el).find(".percent").text(Math.round(n))
			}
		})
	});


	/* ========================================================================= */
	/*	Certificates Filtering Hook
	/* =========================================================================  */

	$('#og-grid').mixItUp(); // Certificates filter

	Grid.init(); //Certificates Grid Expand
	
	
	/* ========================================================================= */
	/*	Publications Carousel
	/* =========================================================================  */
 
	//Init the carousel
	$("#testimonials").owlCarousel({
		slideSpeed: 500,
		paginationSpeed: 500,
		singleItem: true,
		pagination : true,
		transitionStyle : "backSlide"
	});



	/* ========================================================================= */
	/*	Why Carousel
	/* =========================================================================  */
 
	//Init the carousel
	$("#why-carousel").owlCarousel({
		slideSpeed: 500,
		paginationSpeed: 500,
		singleItem: true,
		pagination : true,
		transitionStyle : "backSlide"
	});



});


/* ========================================================================= */
/*	On scroll fade/bounce fffect
/* ========================================================================= */

	wow = new WOW({
		animateClass: 'animated',
		offset: 120
	});
	wow.init();
	

/* ========================================================================= */
/*	Home page Slider
/* ========================================================================= */

$(function() {

	var Page = (function() {

		var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots > span' ),
			slitslider = $( '#slitSlider' ).slitslider( {
			
			    speed : 1600,
			
				onBeforeChange : function( slide, pos ) {

					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );

				}
			} ),

			init = function() {
				initEvents();				
			},
			initEvents = function() {
				// add navigation events
				$navArrows.children( ':last' ).on( 'click', function() {
					slitslider.next();
					return false;
				} );

				$navArrows.children( ':first' ).on( 'click', function() {					
					slitslider.previous();
					return false;
				});

				$nav.each( function( i ) {				
					$( this ).on( 'click', function( event ) {						
						var $dot = $( this );						
						if( !slitslider.isActive() ) {
							$nav.removeClass( 'nav-dot-current' );
							$dot.addClass( 'nav-dot-current' );						
						}
						
						slitslider.jump( i + 1 );
						return false;
					
					});					
				});
			};
			return { init : init };

	})();

	Page.init();

});


/* ========================================================================= */
/*	Parallax Sections
/* ========================================================================= */


"use strict";

function parallaxInit() {
	$('#counter').parallax("50%", 0);
	$('#skills').parallax("50%", 0);
	$('#publications').parallax("50%", 0);
	$('#why').parallax("50%", 0);
}

$(window).bind("load", function () {
    parallaxInit()
});



/* ========================================================================= */
/*	Fortinet Hacker Attack Map
/* ========================================================================= */

function showFortinetMap() {
	$('#fortinet-map-request-div').hide('true');

	if(!$('#fortinet-map-iframe').length) {
		$('#fortinet-map-holder-div').html('<iframe src="https://threatmap.fortiguard.com/" style="border: none;" width="100%" height="400px"></iframe>');
	}
}



/* ========================================================================= */
/*	Language Controller
/* ========================================================================= */

var currentLanguage;

function initLanguage() {
	// Attemtp to use browser language
	updateLanguage(navigator.language || navigator.userLanguage);
}

function updateLanguage(language) {
	if (language == currentLanguage) {
		return;
	}

	$.ajax({
		url: '/website/language/' + language + '.json',
		dataType: 'json',
		async: false,
		success: function (languageJson) {
			populateStringsWithLanguageJson(languageJson);
		},
		error: function () {
			if (language != 'en') {
				console.warn(language + ' not supported, attempting default language \'en\'');
				updateLanguage('en');
			} else {
				console.warn('Language fatal error... using native html language');
			}
		}
	});
}

function populateStringsWithLanguageJson(languageJson) {
	currentLanguage = languageJson.language;
	console.log("Populating strings with language: " + currentLanguage);

	// Section: Home
	document.getElementById("slide1_text1").innerHTML = languageJson.slide1_text1;
	document.getElementById("slide2_text1").innerHTML = languageJson.slide2_text1;
	document.getElementById("slide2_text2").innerHTML = languageJson.slide2_text2;
	document.getElementById("previous_text").innerHTML = languageJson.previous_text;
	document.getElementById("next_text").innerHTML = languageJson.next_text;

	// Navigation
	document.getElementById("nav_text").innerHTML = languageJson.nav_text;
	document.getElementById("nav_home").innerHTML = languageJson.nav_home;
	document.getElementById("nav_academic").innerHTML = languageJson.nav_academic;
	document.getElementById("nav_skills").innerHTML = languageJson.nav_skills;
	document.getElementById("nav_professional").innerHTML = languageJson.nav_professional;
	document.getElementById("nav_certificates").innerHTML = languageJson.nav_certificates;
	document.getElementById("nav_publications").innerHTML = languageJson.nav_publications;
	document.getElementById("nav_projects").innerHTML = languageJson.nav_projects;
	document.getElementById("nav_why").innerHTML = languageJson.nav_why;
	document.getElementById("nav_contact").innerHTML = languageJson.nav_contact;

	document.getElementById("nav_language").innerHTML = languageJson.nav_language;
	document.getElementById("nav_language_drop_ptBR").innerHTML = languageJson.nav_language_drop_ptBR;
	document.getElementById("nav_language_drop_en").innerHTML = languageJson.nav_language_drop_en;
	// document.getElementById("nav_language_drop_es").innerHTML = languageJson.nav_language_drop_es;

	// Section: Academic
	document.getElementById("academic_title").innerHTML = languageJson.academic_title;
	document.getElementById("academic_1_type").innerHTML = languageJson.academic_1_type;
	document.getElementById("academic_1_title").innerHTML = languageJson.academic_1_title;
	document.getElementById("academic_1_inst").innerHTML = languageJson.academic_1_inst;
	document.getElementById("academic_2_type").innerHTML = languageJson.academic_2_type;
	document.getElementById("academic_2_title").innerHTML = languageJson.academic_2_title;
	document.getElementById("academic_2_inst").innerHTML = languageJson.academic_2_inst;
	document.getElementById("academic_3_type").innerHTML = languageJson.academic_3_type;
	document.getElementById("academic_3_title").innerHTML = languageJson.academic_3_title;
	document.getElementById("academic_3_inst").innerHTML = languageJson.academic_3_inst;

	// Section: Skills
	document.getElementById("skills_title").innerHTML = languageJson.skills_title;
	document.getElementById("skills_infosec").innerHTML = languageJson.skills_infosec;
	document.getElementById("skills_eh").innerHTML = languageJson.skills_eh;
	document.getElementById("skills_dev").innerHTML = languageJson.skills_dev;
	document.getElementById("skills_be").innerHTML = languageJson.skills_be;
	document.getElementById("skills_crypto").innerHTML = languageJson.skills_crypto;
	document.getElementById("skills_linux").innerHTML = languageJson.skills_linux;
	document.getElementById("skills_android").innerHTML = languageJson.skills_android;
	document.getElementById("skills_reaserch").innerHTML = languageJson.skills_reaserch;

	// Section: Professional
	document.getElementById("professional_title").innerHTML = languageJson.professional_title;
	document.getElementById("professional_1_title").innerHTML = languageJson.professional_1_title;
	document.getElementById("professional_1_inst").innerHTML = languageJson.professional_1_inst;
	document.getElementById("professional_1_date").innerHTML = languageJson.professional_1_date;
	document.getElementById("professional_2_title").innerHTML = languageJson.professional_2_title;
	document.getElementById("professional_2_inst").innerHTML = languageJson.professional_2_inst;
	document.getElementById("professional_2_date").innerHTML = languageJson.professional_2_date;
	document.getElementById("professional_3_title").innerHTML = languageJson.professional_3_title;
	document.getElementById("professional_3_inst").innerHTML = languageJson.professional_3_inst;
	document.getElementById("professional_3_date").innerHTML = languageJson.professional_3_date;

	// Section: Counter
	document.getElementById("counter_cert").innerHTML = languageJson.counter_cert;
	document.getElementById("counter_pub").innerHTML = languageJson.counter_pub;
	document.getElementById("counter_proj").innerHTML = languageJson.counter_proj;
	document.getElementById("counter_ctf").innerHTML = languageJson.counter_ctf;

	// Section: Certificates
	document.getElementById("certificates_title").innerHTML = languageJson.certificates_title;
	document.getElementById("certificates_filter_all").innerHTML = languageJson.certificates_filter_all;
	document.getElementById("certificates_filter_infosec").innerHTML = languageJson.certificates_filter_infosec;
	document.getElementById("certificates_filter_dev").innerHTML = languageJson.certificates_filter_dev;
	document.getElementById("certificates_filter_linux").innerHTML = languageJson.certificates_filter_linux;
	document.getElementById("certificates_filter_agile").innerHTML = languageJson.certificates_filter_agile;
	document.getElementById("certificates_1_title").innerHTML = languageJson.certificates_1_title;
	document.getElementById("certificates_1").setAttribute("data-title", languageJson.certificates_1_title);
	document.getElementById("certificates_1").setAttribute("data-description", languageJson.certificates_1_inst);
	document.getElementById("certificates_2_title").innerHTML = languageJson.certificates_2_title;
	document.getElementById("certificates_2").setAttribute("data-title", languageJson.certificates_2_title);
	document.getElementById("certificates_2").setAttribute("data-description", languageJson.certificates_2_inst);
	document.getElementById("certificates_3_title").innerHTML = languageJson.certificates_3_title;
	document.getElementById("certificates_3").setAttribute("data-title", languageJson.certificates_3_title);
	document.getElementById("certificates_3").setAttribute("data-description", languageJson.certificates_3_inst);
	document.getElementById("certificates_4_title").innerHTML = languageJson.certificates_4_title;
	document.getElementById("certificates_4").setAttribute("data-title", languageJson.certificates_4_title);
	document.getElementById("certificates_4").setAttribute("data-description", languageJson.certificates_4_inst);
	document.getElementById("certificates_5_title").innerHTML = languageJson.certificates_5_title;
	document.getElementById("certificates_5").setAttribute("data-title", languageJson.certificates_5_title);
	document.getElementById("certificates_5").setAttribute("data-description", languageJson.certificates_5_inst);
	document.getElementById("certificates_6_title").innerHTML = languageJson.certificates_6_title;
	document.getElementById("certificates_6").setAttribute("data-title", languageJson.certificates_6_title);
	document.getElementById("certificates_6").setAttribute("data-description", languageJson.certificates_6_inst);
	document.getElementById("certificates_7_title").innerHTML = languageJson.certificates_7_title;
	document.getElementById("certificates_7").setAttribute("data-title", languageJson.certificates_7_title);
	document.getElementById("certificates_7").setAttribute("data-description", languageJson.certificates_7_inst);
	document.getElementById("certificates_8_title").innerHTML = languageJson.certificates_8_title;
	document.getElementById("certificates_8").setAttribute("data-title", languageJson.certificates_8_title);
	document.getElementById("certificates_8").setAttribute("data-description", languageJson.certificates_8_inst);
	document.getElementById("certificates_9_title").innerHTML = languageJson.certificates_9_title;
	document.getElementById("certificates_9").setAttribute("data-title", languageJson.certificates_9_title);
	document.getElementById("certificates_9").setAttribute("data-description", languageJson.certificates_9_inst);
	document.getElementById("certificates_10_title").innerHTML = languageJson.certificates_10_title;
	document.getElementById("certificates_10").setAttribute("data-title", languageJson.certificates_10_title);
	document.getElementById("certificates_10").setAttribute("data-description", languageJson.certificates_10_inst);
	document.getElementById("certificates_11_title").innerHTML = languageJson.certificates_11_title;
	document.getElementById("certificates_11").setAttribute("data-title", languageJson.certificates_11_title);
	document.getElementById("certificates_11").setAttribute("data-description", languageJson.certificates_11_inst);
	document.getElementById("certificates_12_title").innerHTML = languageJson.certificates_12_title;
	document.getElementById("certificates_12").setAttribute("data-title", languageJson.certificates_12_title);
	document.getElementById("certificates_12").setAttribute("data-description", languageJson.certificates_12_inst);
	document.getElementById("certificates_13_title").innerHTML = languageJson.certificates_13_title;
	document.getElementById("certificates_13").setAttribute("data-title", languageJson.certificates_13_title);
	document.getElementById("certificates_13").setAttribute("data-description", languageJson.certificates_13_inst);
	document.getElementById("certificates_14_title").innerHTML = languageJson.certificates_14_title;
	document.getElementById("certificates_14").setAttribute("data-title", languageJson.certificates_14_title);
	document.getElementById("certificates_14").setAttribute("data-description", languageJson.certificates_14_inst);
	document.getElementById("certificates_15_title").innerHTML = languageJson.certificates_15_title;
	document.getElementById("certificates_15").setAttribute("data-title", languageJson.certificates_15_title);
	document.getElementById("certificates_15").setAttribute("data-description", languageJson.certificates_15_inst);
	document.getElementById("certificates_16_title").innerHTML = languageJson.certificates_16_title;
	document.getElementById("certificates_16").setAttribute("data-title", languageJson.certificates_16_title);
	document.getElementById("certificates_16").setAttribute("data-description", languageJson.certificates_16_inst);
	document.getElementById("certificates_17_title").innerHTML = languageJson.certificates_17_title;
	document.getElementById("certificates_17").setAttribute("data-title", languageJson.certificates_17_title);
	document.getElementById("certificates_17").setAttribute("data-description", languageJson.certificates_17_inst);
	document.getElementById("certificates_18_title").innerHTML = languageJson.certificates_18_title;
	document.getElementById("certificates_18").setAttribute("data-title", languageJson.certificates_18_title);
	document.getElementById("certificates_18").setAttribute("data-description", languageJson.certificates_18_inst);

	// Section: Publications
	document.getElementById("publications_title").innerHTML = languageJson.publications_title;
	document.getElementById("publications_1_title").innerHTML = languageJson.publications_1_title;
	document.getElementById("publications_1_info").innerHTML = languageJson.publications_1_info;
	document.getElementById("publications_2_title").innerHTML = languageJson.publications_2_title;
	document.getElementById("publications_2_info").innerHTML = languageJson.publications_2_info;
	document.getElementById("publications_3_title").innerHTML = languageJson.publications_3_title;
	document.getElementById("publications_3_inst").innerHTML = languageJson.publications_3_inst;
	document.getElementById("publications_3_info").innerHTML = languageJson.publications_3_info;
	document.getElementById("publications_4_title").innerHTML = languageJson.publications_4_title;
	document.getElementById("publications_4_inst").innerHTML = languageJson.publications_4_inst;
	document.getElementById("publications_4_info").innerHTML = languageJson.publications_4_info;
	document.getElementById("publications_5_title").innerHTML = languageJson.publications_5_title;
	document.getElementById("publications_5_inst").innerHTML = languageJson.publications_5_inst;
	document.getElementById("publications_5_info").innerHTML = languageJson.publications_5_info;
	document.getElementById("publications_6_title").innerHTML = languageJson.publications_6_title;
	document.getElementById("publications_6_inst").innerHTML = languageJson.publications_6_inst;
	document.getElementById("publications_6_info").innerHTML = languageJson.publications_6_info;
	document.getElementById("publications_7_title").innerHTML = languageJson.publications_7_title;
	document.getElementById("publications_7_inst").innerHTML = languageJson.publications_7_inst;
	document.getElementById("publications_7_info").innerHTML = languageJson.publications_7_info;

	// Section: Projects
	document.getElementById("projects_title").innerHTML = languageJson.projects_title;
	document.getElementById("projects_1").innerHTML = languageJson.projects_1;
	document.getElementById("projects_2").innerHTML = languageJson.projects_2;
	document.getElementById("projects_3").innerHTML = languageJson.projects_3;
	document.getElementById("projects_4").innerHTML = languageJson.projects_4;
	document.getElementById("projects_5").innerHTML = languageJson.projects_5;
	document.getElementById("projects_6").innerHTML = languageJson.projects_6;
	document.getElementById("projects_7").innerHTML = languageJson.projects_7;
	document.getElementById("projects_8").innerHTML = languageJson.projects_8;
	document.getElementById("projects_9").innerHTML = languageJson.projects_9;
	document.getElementById("projects_10").innerHTML = languageJson.projects_10;
	document.getElementById("projects_11").innerHTML = languageJson.projects_11;
	document.getElementById("projects_12").innerHTML = languageJson.projects_12;

	// Section: Why
	document.getElementById("why_title").innerHTML = languageJson.why_title;
	document.getElementById("hacking_map_text").innerHTML = languageJson.hacking_map_text;
	document.getElementById("hacking_map_button").innerHTML = languageJson.hacking_map_button;
	document.getElementById("why_1_title").innerHTML = languageJson.why_1_title;
	document.getElementById("why_1_source").innerHTML = languageJson.why_1_source;
	document.getElementById("why_2_title").innerHTML = languageJson.why_2_title;
	document.getElementById("why_2_source").innerHTML = languageJson.why_2_source;
	document.getElementById("why_3_title").innerHTML = languageJson.why_3_title;
	document.getElementById("why_3_source").innerHTML = languageJson.why_3_source;
	document.getElementById("why_4_title").innerHTML = languageJson.why_4_title;
	document.getElementById("why_4_source").innerHTML = languageJson.why_4_source;
	document.getElementById("why_5_title").innerHTML = languageJson.why_5_title;
	document.getElementById("why_5_source").innerHTML = languageJson.why_5_source;
	document.getElementById("why_6_title").innerHTML = languageJson.why_6_title;
	document.getElementById("why_6_source").innerHTML = languageJson.why_6_source;
	document.getElementById("why_7_title").innerHTML = languageJson.why_7_title;
	document.getElementById("why_7_source").innerHTML = languageJson.why_7_source;
	document.getElementById("why_8_title").innerHTML = languageJson.why_8_title;
	document.getElementById("why_8_source").innerHTML = languageJson.why_8_source;
	document.getElementById("why_9_title").innerHTML = languageJson.why_9_title;
	document.getElementById("why_9_source").innerHTML = languageJson.why_9_source;
	document.getElementById("why_10_title").innerHTML = languageJson.why_10_title;
	document.getElementById("why_10_source").innerHTML = languageJson.why_10_source;
	document.getElementById("why_11_title").innerHTML = languageJson.why_11_title;
	document.getElementById("why_11_source").innerHTML = languageJson.why_11_source;

	// Section: Contact
	document.getElementById("contact_title").innerHTML = languageJson.contact_title;
	
	// Footer
	document.getElementById("footer_text").innerHTML = globalVersion + languageJson.footer_text;

	// Download Buttons
	var downloadButtons = document.getElementsByClassName("btn-download");
	for(var i=0; i < downloadButtons.length; i++) {
		downloadButtons[i].innerHTML = languageJson.download_button;
	}

	// Repository Buttons
	var repositoryButtons = document.getElementsByClassName("btn-repository");
	for(var i=0; i < repositoryButtons.length; i++) {
		repositoryButtons[i].innerHTML = languageJson.repository_button;
	}

	// Full Magazine Buttons
	var fullMagazineButtons = document.getElementsByClassName("btn-full-magazine");
	for(var i=0; i < fullMagazineButtons.length; i++) {
		fullMagazineButtons[i].innerHTML = languageJson.full_magazine_button;
	}
}
