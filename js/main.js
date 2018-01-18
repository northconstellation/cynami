// cookie for timer
var myDate = new Date();
function returnEndDate(d,h,m){
	myDate.setDate(myDate.getDate()+d);
	myDate.setHours(myDate.getHours()+h);
	myDate.setMinutes(myDate.getMinutes()+m);
	return myDate;
}
if($.cookie("cynami1")){
	var dateEnd = $.cookie("cynami1");
}else{
	var dateEnd = returnEndDate(0,36,0);
	$.cookie("cynami1", dateEnd, {expires: 3});
};




