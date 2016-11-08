

$("#editor_container").on("wb_on_page_changed",function(){
	if($(this).find(".content-slide").hasClass("content-remove")==true){
        if($("#wc_mainimg_8").parents(".content-slide").hasClass("horizontal")==true){
                 $(".content-remove").addClass("horizontal");
             }else{
             	  $(".content-remove").removeClass("horizontal");
             }

	   $("#wc_mainimg_9").attr("style",$("#wc_mainimg_8").attr("style"));
	}
 // $(this).css("background-color","#FFFFCC");
});