define(
		[],
		function() {
			return {
				init : function() {
					window.ws_plugin = {
						on_start_run : function() {
							var istyping = [];
							$('body')
									.on(
											'wfn_switch_page_show',
											function(event, data) {
												$(data.page)
														.find(
																'[data-ws_typing_text]')
														.each(
																function(key,
																		el) {
																	var id = $(el).id;
																	if ((istyping[id] !== undefined)) {
																		clearTimeout(istyping[id]);
																		delete istyping[id];
																		istyping[id] = undefined;
																	}

																	var obj = $(
																			el)
																			.attr(
																					'data-ws_typing_text');
																	jo = JSON
																			.parse(obj);

																	var len = jo.str.length;
																	var i = 0;
																	var itemTyping = function() {
																		if ((i + 4 < jo.str.length)
																				&& (jo.str
																						.substr(
																								i,
																								4) == '<br>')) {
																			$(
																					el)
																					.html(
																							jo.str
																									.substr(
																											0,
																											i
																													+ '<br>'.length
																													- 1));
																			i = i
																					+ '<br>'.length;
																		} else {
																			$(
																					el)
																					.html(
																							jo.str
																									.substr(
																											0,
																											i));
																			i = i + 1;
																		}
																		if (i <= len) {
																			istyping[id] = setTimeout(
																					itemTyping,
																					jo.speed);
																			return;
																		}
																		delete istyping[id];
																		istyping[id] = undefined;
																	};
																	$(el).html(
																			"");
																	istyping[id] = setTimeout(
																			itemTyping,
																			jo.delay);
																});
											});
						},
					};
				},
			};
		});
