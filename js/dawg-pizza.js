(window.onload = function(){
	//This function figures out which page is currently being displayed and
	//distributes the active class to the appropriate nav section
	var pageType = window.location.toString().split(".")[2].split('/')[4];
	switch(pageType){
	case "menu":
	  $(".navbar-nav>li>a.menu")[0].parentNode.classList.add("active");
	  break;
	case "about":
	   $(".navbar-nav>li>a.about")[0].parentNode.classList.add("active");
	  break;
	case "jobs":
	   $('.carousel').carousel();
	   $(".navbar-nav>li>a.jobs")[0].parentNode.classList.add("active");
	  break;
	default:
	   $(".navbar-nav>li>a.home")[0].parentNode.classList.add("active");
	  break;
	}
});