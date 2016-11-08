define(['./common/wlib/w_shower_plugin', './common/share_0/share_0',
	'./common/loading_0/loading_0', './common/audio_1/audio_1',
	'./common/wxbridge_0/wxbridge_0', 'zepto', 'swiper', 'wutil', 'resLoader'
], function(
	wplugin, share, loading, audio, wxbridge, $, Swiper, Wutil, resLoader) {
	var hideAni = function(mySwiper) {
		$(".content-slide-active").find('.wf_can_anim').removeClass('wf_block');
	};
	var showAni = function(mySwiper) {
		$('.content-slide').find('.wf_can_anim').removeClass('wf_block');
		$(".content-slide-active").find('.wf_can_anim').addClass('wf_block');
	};
	return {
		run: function() {
			wplugin.init();
			wplugin.trigger('on_start_init');
			this.init(_.bind(function() {
				this._run();
			}, this));
		},
		init: function(callback) {
			loading.init();
			share.init();
			audio.init();
			wxbridge.init();
			// resloader.init();
			this.loading(callback)
		},
		_run: function() {
			audio.run();
			$("#maintext9").html($("#wc_maintext_9").html());
			$("#maintext9").attr("style", $("#wc_maintext_9").attr("style"));
			$("#content-slide-8").append($(".content-remove").find(".custom_audio").attr('outerHTML'));
			$(".content-remove").remove();
			//文字初始化start
			var isOK_ = true;
			var click_count = 0;
			var SLIDER_NUM = $('.content-container .content-slide').length;
			var mySwiper = new Swiper('.content-container', {
				direction: 'vertical',
				loop: true,
				// onlyExternal: true,
				wrapperClass: 'content-wrapper',
				slideClass: 'content-slide',
				slideActiveClass: 'content-slide-active',
				slideNextClass: 'content-slide-next',
				slidePrevClass: 'content-slide-prev',
				onInit: function() {

				},
				onTouchStart: function(s, evt) {
					if (click_count == 0) {
						if (audio._isplaying == true) {
							audio.run();
						}
					}
					click_count++;
				},
				onSlideChangeStart: function(s) {
					//$(".content-slide").css("height",$(".content-slide").height());	
					//$(".content-slide-active").css("height",$(".content-slide-active").height()+1);
					// $(".content-slide-active").find(".text_bg").removeClass("text_bg_kuoda");
					// if ($(".content-slide-active").hasClass('content-slide-8') == true) {
					// 	$(".content-slide-active").find(".first_con").removeClass("fadeOut");
					// 	$(".content-slide-active").find(".yellow_con").removeClass("fadeIn");
					// 	$(".content-slide-active").find(".yellow_circle").removeClass("fadeIn");
					// 	$(".content-slide-active").find(".white_circle").removeClass("fadeIn");
					// 	$(".content-slide-active").find(".english1").removeClass("fadeIn");
					// 	$(".content-slide-active").find(".english2").removeClass("fadeIn");
					// 	$(".content-slide-active").find(".cover_img").removeClass("fadeInh");
					// }
					hideAni(s);
					//audio.playerKeeper();		
				},
				onSlideChangeEnd: function(s) {
					showAni(s);
					// if ($(".content-slide-8").find(".custom_audio").length > 0) {

					// } else {
					// 	audio.processCustomAudio($('.content-slide-active'));
					// 	var data = {};
					// 	data.curDom = $('.content-slide-active');
					// 	data.interactiveDoms = [];
					// 	window.wow_active_dom = $('.content-slide-active');
					// 	window.wow_interactive_doms = data.interactiveDoms;
					// 	$(window).trigger('on_wow_pageStatusChange', data);
					// }
					isOK_ = true;
				},
			});
			window.wow_swiper = mySwiper;
			window.wow_slideToLastPage = function() {
				mySwiper.slideTo(SLIDER_NUM, 0, true);
			};
			//文字背景显示完之后开始缓慢扩大
			$(".content-slide-active .text_bg").live("webkitAnimationEnd", function() {
				$(this).addClass("text_bg_kuoda");
			}, false);


			//监听滑动切换
			$(".content-slide-active").live('touchstart', function(evt) { //侦听上滑事件       		
				var touchObj = evt.changedTouches[0],
					touchEndObj;
				var pageX = touchObj.pageX;
				var pageY = touchObj.pageY;
				var pageXEnd, pageYEnd;
				$(this).on('touchmove', function(evt) {
					evt.preventDefault();
				});
				// $(this).on('touchend', function(evt) {
				// 	touchEndObj = evt.changedTouches[evt.changedTouches.length - 1];
				// 	pageXEnd = touchEndObj.pageX;
				// 	pageYEnd = touchEndObj.pageY;
				// 	if (Math.abs(pageYEnd - pageY) > 60) {
				// 		if (isOK_ == false) {
				// 			return;
				// 		}
				// 		isOK_ = false;
				// 		if (pageYEnd - pageY < 0) { //上滑
				// 			mySwiper.slideNext(true, 0);
				// 		} else { //下滑	
				// 			mySwiper.slidePrev(true, 0);
				// 		}
				// 	}

				// 	$(this).off('touchmove');
				// 	$(this).off('touchend');
				// });
				//    evt.preventDefault();

			});


			//第四屏，点击地图图标
			function clickMapIcon() {
				var index = $(this).attr("pin_index");

				var title_img = "theme/images/4/title_" + index + ".png";
				var image_img = "theme/images/4/image_" + index + ".png";
				$(".container_view .title").css("background-image", "url(" + title_img + ")");
				$(".container_view .image").css("background-image", "url(" + image_img + ")");


				$(".gray_view_container").css({
					"display": "block"
				});
				$(".container_view").css("animation", "gray_view_animation 0.2s ease-out 0s 1 normal");

			}
			$(".top_pin div").on("click", clickMapIcon);

			function clickCloseBtn() {
				$(".gray_view_container").css("display", "none");
			}
			$(".close_btn_").on("click", clickCloseBtn);


			//第五屏，点击按钮
			function clickBtn() {


				var index = $(this).attr("btn_index");
				console.log(index);
				if (index == undefined) return;

				var topImage = "theme/images/5/top_" + index + ".png";
				var bottomImage = "theme/images/5/bottom_" + index + ".png";
				$(".content_view .content .top_image").attr("src", topImage);
				$(".content_view .content .bottom_image").attr("src", bottomImage);

				$(".show_detail_content").css("display", "block");
				// $(".content_view").css("animation", "content_view_show_animation 0.2s ease-out 1");

			}
			$(".btn_view a").on("click", clickBtn);

			function hiddenContentView() {
				$(".show_detail_content").css("display", "none");
				$(".content_view .content").scrollTop(0);
			}
			$(".return_btn a").on("click", hiddenContentView);



		},
		loading: function(callback) {
			//图片预加载
			var ress = [ {
						"url": "theme/images/1/back_cloud_image.png",
						"type": "image"
					}, {
						"url": "theme/images/1/back_grass_image.png",
						"type": "image"
					}, {
						"url": "theme/images/1/bimage.png",
						"type": "image"
					}, {
						"url": "theme/images/1/butterfly_1.png",
						"type": "image"
					}, {
						"url": "theme/images/1/butterfly_2.png",
						"type": "image"
					}, {
						"url": "theme/images/1/butterfly_l.png",
						"type": "image"
					}, {
						"url": "theme/images/1/butterfly_m.png",
						"type": "image"
					}, {
						"url": "theme/images/1/butterfly_r.png",
						"type": "image"
					}, {
						"url": "theme/images/1/bword.png",
						"type": "image"
					}, {
						"url": "theme/images/1/guiter.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_1.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_2.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_3.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_4.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_5.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_6.png",
						"type": "image"
					}, {
						"url": "theme/images/1/line_7.png",
						"type": "image"
					}, {
						"url": "theme/images/1/logo.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_1.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_2.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_3.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_4.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_5.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_6.png",
						"type": "image"
					}, {
						"url": "theme/images/1/note_7.png",
						"type": "image"
					}, {
						"url": "theme/images/1/word.png",
						"type": "image"
					}, {
						"url": "theme/images/3/circle.png",
						"type": "image"
					}, {
						"url": "theme/images/3/city.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump1.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump2.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump3.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump4.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump5.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump6.png",
						"type": "image"
					}, {
						"url": "theme/images/3/color_lump7.png",
						"type": "image"
					}, {
						"url": "theme/images/3/line.png",
						"type": "image"
					}, {
						"url": "theme/images/3/title.png",
						"type": "image"
					}, {
						"url": "theme/images/3/word.png",
						"type": "image"
					}, {
						"url": "theme/images/4/blur_image.png",
						"type": "image"
					},{
						"url": "theme/images/4/image_1.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_2.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_3.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_4.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_5.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_6.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_7.png",
						"type": "image"
					}, {
						"url": "theme/images/4/image_8.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_1.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_2.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_3.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_4.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_5.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_6.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_7.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_8.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_1.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_2.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_3.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_4.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_5.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_6.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_7.png",
						"type": "image"
					}, {
						"url": "theme/images/4/pin_h_8.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_1.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_2.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_3.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_4.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_5.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_6.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_7.png",
						"type": "image"
					}, {
						"url": "theme/images/4/title_8.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_1.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_2.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_3.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_4.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_5.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_6.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_7.png",
						"type": "image"
					}, {
						"url": "theme/images/5/bottom_8.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_0.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_1.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_2.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_3.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_4.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_5.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_6.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_7.png",
						"type": "image"
					}, {
						"url": "theme/images/5/btn_8.png",
						"type": "image"
					}, {
						"url": "theme/images/5/return_background_image.png",
						"type": "image"
					}, {
						"url": "theme/images/5/return_image.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_1.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_2.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_3.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_4.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_5.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_6.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_7.png",
						"type": "image"
					}, {
						"url": "theme/images/5/top_8.png",
						"type": "image"
					}, {
						"url": "theme/images/loading_hand.png",
						"type": "image"
					}, {
						"url": "theme/images/loading_man.png",
						"type": "image"
					}, {
						"url": "theme/images/loading_text.png",
						"type": "image"
					}, {
						"url": "theme/images/loading_weiqi.png",
						"type": "image"
					},{
						"url": "theme/images/3/top_image.jpg",
						"type": "image"
					}, {
						"url": "theme/images/bg.jpg",
						"type": "image"
					}
				];
			var resources = [];
			ress.forEach(function(item){
				resources.push(item.url);
			});
			var loader = new resLoader({
				resources: resources,
				onStart: function(total) {

				},
				onProgress: function(current, total) {
					var percent = current / total;

					$(".wasai_loading .man").css(
						'left', (159 + percent * 196) + "px"
					);
					$(".wasai_loading .wasai_text").css(
						"width", (20 + percent * 180) + "px"
					);
					// console.log(current + ' ' + total);

				},
				onComplete: function(total) {
					// console.log('加载完毕:' + total + '个资源');
					_.delay(function() {
						$('.content-container').show();
						callback();
						$(".wasai_loading").hide();
					}, 100);
				}
			});
			loader.start();
		}

	};
});