(window.wi_tpl_conf = {
	editor_render : {
		editor : '#editor_container',// 编辑区域id
		target : '#main_container',
		data : {
		    texts: [
			],
		},
		pre_render : [ {
			type : 'set_photos',
			cnt_adapter : {
				prefix : '#wc_mainimg_',
				1 : [ {
					id : '1',
					pidx : 0
				},],
				2 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '8',
					pidx : 1
				}],
				3 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx : 1
				}, {
					id : '8',
					pidx : 2
				},],
				4 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '8',
					pidx : 3
				} , ],
				5 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx : 3
				}, {
					id : '8',
					pidx : 4
				} , ],
				6 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx : 3
				}, {
					id : '5',
					pidx : 4
				}, {
					id : '8',
					pidx : 5
				} ],
				7 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx : 3
				}, {
					id : '5',
					pidx : 4
				}, {
					id : '6',
					pidx : 5
				}, {
					id : '8',
					pidx : 6
				},],
				8 : [ {
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx : 3
				}, {
					id : '5',
					pidx : 4
				}, {
					id : '6',
					pidx : 5
				}, {
					id : '7',
					pidx : 6
				}, {
					id : '8',
					pidx : 7
				},],
			}
		}, {
			type : 'set_texts1',
			cnt_adapter : {
				prefix : '#wc_maintext_',
				1 : [ {
					id : '1',
					pidx : 0
				}, ],
				2 : [{
					id : '1',
					pidx : 0
				},{
					id : '8',
					pidx :1
				}, {
					id : '9',
					pidx :2
				}, ],
				3 : [{
					id : '1',
					pidx : 0
				}, {
					id : '2',
					pidx :1
				},{
					id : '8',
					pidx :2
				},{
					id : '9',
					pidx :3
				},],
				4 : [ {
					id : '1',
					pidx : 0
				},{
					id : '2',
					pidx : 1
				},{
					id : '3',
					pidx :2
				},{
					id : '8',
					pidx :3
				},{
					id : '9',
					pidx :4
				},],
				5 : [ {
					id : '1',
					pidx : 0
				},{
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx :3
				},{
					id : '8',
					pidx :4
				},{
					id : '9',
					pidx :5
				},],
				6 : [ {
					id : '1',
					pidx : 0
				},{
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx :3
				},{
					id : '5',
					pidx :4
				},{
					id : '8',
					pidx :5
				},{
					id : '9',
					pidx :6
				},],
				7 : [ {
					id : '1',
					pidx : 0
				},{
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx :3
				},{
					id : '5',
					pidx :4
				}, {
					id : '6',
					pidx :5
				},{
					id : '8',
					pidx : 6
				},{
					id : '9',
					pidx :7
				}, ],
				8 : [ {
					id : '1',
					pidx : 0
				},{
					id : '2',
					pidx : 1
				}, {
					id : '3',
					pidx : 2
				}, {
					id : '4',
					pidx :3
				},{
					id : '5',
					pidx :4
				}, {
					id : '6',
					pidx :5
				},{
					id : '7',
					pidx : 6
				}, {
					id : '8',
					pidx : 7
				}, {
					id : '9',
					pidx :8
				},],
			},
		}, {
			type : 'hw_adaptor',
			attach_class : 'wide_class',
			prefix : '#mphoto_',
			hw_adaptor : [ {
				pidx : 0,
				id : '0'
			} ],
		}, {
			type : 'remove_element',
			cnt_adapter : {
				prefix : '#content-slide-',
				1 : [ {
					id : '8'
				},{
					id : '7'
				},{
					id : '6'
				},{
					id : '5'
				}, {
					id : '4'
				}, {
					id : '3'
				}, {
					id : '2'
				},],
				2 : [{
					id : '7'
				}, {
					id : '6'
				}, {
					id : '5'
				},{
					id : '4'
				}, {
					id : '3'
				} ,{
					id : '2'
				},],
				3 : [{
					id : '3'
				}, {
					id : '7'
				}, {
					id : '6'
				},{
					id : '5'
				},{
					id : '4'
				}],
				4 : [{
					id : '4'
				},{
					id : '7'
				}, {
					id : '6'
				},{
					id : '5'
				}, ],
				5 : [ {
					id : '5'
				},{
					id : '7'
				},{
					id : '6'
				},],
				6 : [ {
					id : '6'
				},{
					id : '7'
				}, ],
				7 : [ {
					id : '7'
				}, ],
				8 : [],
			},
		} ],
		editor_pages : {
			common_component : {
				prefix : '',
				components : [ {
					id : '#mainaudio',
				} ]
			},
			cnt_adapter : {
				wide_attach_class: 'horizontal',
				prefix : '#content-slide-',
				1 : [ {
					id : '1',
				},],
				2 : [{
					id : '1',
				}, {
					id : '8',
				}, {
					id : '9',
				},],
				3 : [ {
					id : '1',
				}, {
					id : '2',
				},  {
					id : '8',
				}, {
					id : '9',
				},],
				4 : [ {
					id : '1',
				}, {
					id : '2',
				}, {
					id : '3',
				},{
					id : '8',
				}, {
					id : '9',
				},],
				5 : [ {
					id : '1',
				}, {
					id : '2',
				}, {
					id : '3',
				},{
					id : '4',
				},{
					id : '8',
				}, {
					id : '9',
				},],
				6 : [ {
					id : '1',
				}, {
					id : '2',
				}, {
					id : '3',
				}, {
					id : '4',
				},{
					id : '5',
				},{
					id : '8',
				}, {
					id : '9',
				},],
				7 : [{
					id : '1',
				}, {
					id : '2',
				},{
					id : '3',
				}, {
					id : '4',
				},{
					id : '5',
				},{
					id : '6',
				},{
					id : '8',
				}, {
					id : '9',
				},],
				8 : [{
					id : '1',
				}, {
					id : '2',
				}, {
					id : '3',
				}, {
					id : '4',
				}, {
					id : '5',
				},{
					id : '6',
				},{
					id : '7',
				},{
					id : '8',
				}, {
					id : '9',
				},
				],
				
			},
		},
		pre_maker : [ {
			type : 'set_share',
			share_wrapper : '',
		} ]
	}
});