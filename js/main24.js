// cookie for timer
var myDate = new Date();
function returnEndDate(d,h,m){
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}
if($.cookie("cynami24")){
	var dateEnd = $.cookie("cynami24");
}else{
	var dateEnd = returnEndDate(0,24,0);
	$.cookie("cynami24", dateEnd, {expires: 3});
};




