/*-----------------------------------------------------------------

Template Name: Stratify - Business Consulting HTML Template
Author:  ThemeMascot
Author URI: https://themeforest.net/user/thememascot/portfolio
Developer: Kawser Ahmed Roni
Version: 1.0.0
Description: Stratify - Business Consulting HTML Template

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. preloader
02. color switcher
03. header
04. gsap animation
05. js animation
06. fullScreen search
07. swiper slider
08. hover add class remove class
09. search screen
10. background image
11. magnificPopup
12. coundawn
13. counterup
14. back to top
15. wow animation

------------------------------------------------------------------*/

(function ($) {
	("use strict");

	// Preloader area start here ***
	const loader = () => {
		$(window).on("load", function () {
			$("#preloader").addClass("loaded");
			$("#preloader").delay(500).fadeOut();
		});
	};
	loader();
	// Preloader area end here ***

	// Color mood area start here ***
	function setThemeColor(color) {
		const root = document.documentElement;
		root.setAttribute("data-theme", color);
	}
	// Color mood area end here ***

	// Header area start here ***
	// Mobile menu
	$(".header-area nav").meanmenu();

	// Menu Fixed
	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
		}
	});
	// Header area end here ***

	// Gsap Animation area start here ***
	gsap.utils.toArray(".gsap__parallax").forEach(function (container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: 0.5,
			},
		});
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		});
	});
	// Gsap Animation area end here ***

	// Scroll Fade area start here ***
	$(window).scroll(function () {
		var scrolled = $(this).scrollTop();

		$(".parallaxScroll").css({
			transform:
				"translate3d(0, " +
				-(scrolled * 0.2) +
				"px, 0) rotateX(" +
				scrolled * 0.1 +
				"deg)",
			opacity: 1 - scrolled / 600,
		});

		$(".parallaxScaleScroll").css({
			transform: "scale(" + (1 + scrolled / 1500) + ")",
		});

		$(".parallaxRightScroll").css({
			transform: "translateX(" + scrolled / 2 + "px)", // Move the element to the right
		});

		$(".parallaxLeftScroll").css({
			transform: "translateX(" + -(scrolled / 2) + "px)", // Move the element to the left
		});

		$(".parallaxRoteteYScroll").css({
			transform: "rotateY(" + scrolled * 0.2 + "deg)", // 3D rotate along Y-axis
			opacity: 1 - scrolled / 500, // Fade out slowly
		});

		$(".parallaxRotete360Scroll").css({
			transform: "rotate(" + scrolled + "deg)", // Rotate 360 degrees based on scroll
		});
	});
	// Scroll Fade area end here ***

	  var roll_slider = new Swiper(".roll__slider", {
			loop: true,
			freemode: true,
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: true,
			allowTouchMove: false,
			speed: 2000,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			breakpoints: {
				640: {
					slidesPerView: 3,
				},
				800: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1300: {
					slidesPerView: 5,
				},
				1900: {
					slidesPerView: 8,
				},
			},
		});

	// Project slider area start here ***
	var swiper = new Swiper(".project__slider", {
		loop: "true",
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			1199: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
	});
	// Project slider area end here ***

	// Hover add & remove js area start here ***
	$(".hover-item").hover(function () {
		$(".hover-item").removeClass("active");
		$(this).addClass("active");
	});

	$(".feature-five__item").hover(function () {
		$(".feature-five__item").removeClass("active");
		$(this).addClass("active");
	});
	// Hover add & remove js area end here ***

	// Background image area start here ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});
	// Background image area end here ***

	// Background image hover change area start here ***
	$(".project__item").hover(function () {
		let newBackground = $(this).data("bg");
		$(".project__wrp")
			.attr("data-background", newBackground)
			.css("background-image", "url(" + newBackground + ")");
	});
	// Background image hover change area end here ***

	// Video popup area start here ***
	$(".video-popup").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>",

			patterns: {
				youtube: {
					index: "youtube.com/",

					id: "v=",

					src: "https://www.youtube.com/embed/%id%?autoplay=1",
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},
			},

			srcAction: "iframe_src",
		},
	});
	// Video popup area end here ***

	// Coundawn area start here ***
	var targetDate = new Date("2024-07-12 00:00:00").getTime();
	var countdownInterval = setInterval(function () {
		var currentDate = new Date().getTime();
		var remainingTime = targetDate - currentDate;

		if (remainingTime <= 0) {
			clearInterval(countdownInterval);
			// Display a message or perform any action when the countdown timer reaches zero
			$("#countdown-container").text("Countdown has ended!");
		} else {
			var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor(
				(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

			// Pad single-digit values with leading zeros
			$("#day").text(days.toString().padStart(2, "0"));
			$("#hour").text(hours.toString().padStart(2, "0"));
			$("#min").text(minutes.toString().padStart(2, "0"));
			$("#sec").text(seconds.toString().padStart(2, "0"));
		}
	}, 1000);
	// Coundawn area end here ***

	// Counter up area start here ***
	$(".count").counterUp({
		delay: 100,
		time: 2000,
	});
	// Counter up area end here ***

	// Back to top btn area start here ***
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$("#back-top").addClass("show");
		} else {
			$("#back-top").removeClass("show");
		}
	});
	$("#back-top").click(function () {
		$("html, body").animate({ scrollTop: 0 }, 800);
		return false;
	});
	// Back to top btn area end here ***

	// WOW Animatin area start here ***
	Splitting();
	wow = new WOW({
		animateClass: "animated",
		offset: 100,
	});
	wow.init();
	// WOW Animatin area start here ***
})(jQuery);
