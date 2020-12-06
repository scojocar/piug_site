

	$(document).ready( function () {
		$('#myDataTable').DataTable();
	} );

$("#gotop").hide();
	$(window).scroll(function()
	{
		if($(this).scrollTop()>500)
		{
            
            $("#gotop").fadeIn();
            $("#godown").fadeOut();
		}
		
        else{
            $("#gotop").fadeOut();
            $("#godown").fadeIn();
        }
    });
    





	$(document).ready(function(){
		$("#gotop").click(function(){
			$("html,body").animate({scrollTop:0},200);
		});
    });

    $(document).ready(function(){
		$("#godown").click(function(){
			$("html,body").animate({scrollTop:document.body.scrollHeight},200);
		});
    });
    

    $(document).on('click','ul li.nav-item' , function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    
    });
    
    

    $(document ).ready(function() { // Tells the function to wait to perform until everything on the page has loaded.
		$(window).scroll(function() { // Says this function is performed continuisly while scrolling.
		    var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
						SectionOneOffset = $('#welcome_top').offset().top, // This variable finds the distance between #section-one and the top.
						SectionTwoOffset = $('#about_us_container').offset().top; // This variable finds the distance between #section-two and the top.

                        SectionThreeOffset = $('#our_goodies_container').offset().top, // This variable finds the distance between #section-one and the top.
                        
                        SectionFourOffset = $('#our_team_container').offset().top; // This variable finds the distance between #section-two and the top.
                        SectionFiveOffset = $('#connect_section').offset().top; // This variable finds the distance between #section-two and the top.

                if (Scroll >= SectionOneOffset) 
                { // If you have scrolled past section one do this.
		        $(".el1").addClass("active").siblings().removeClass('active'); // Adds class of current-menu-item to the menu item with a class of menu-item-1
                }
                        
                if (Scroll >= SectionTwoOffset) 
                { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
                $(".el2").addClass("active"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
						$(".el1").removeClass("active"); // Removes class of current-menu-item to the menu item with a class of menu-item-1

                } else { // If you have not scrolled section two do this.
		                 $(".el2").removeClass("active"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
                        }
                if (Scroll >= SectionThreeOffset){
                    $(".el3").addClass("active");
                    $(".el2").removeClass("active");
                } else{ $(".el3").removeClass("active");}
                if (Scroll >= SectionFourOffset){

                    $(".el4").addClass("active");
                    $(".el3").removeClass("active");
                }  else{ $(".el4").removeClass("active");}             
                if (Scroll >= SectionFiveOffset-400){
                    $(".el5").addClass("active");
                    $(".el4").removeClass("active");
                }   else{$(".el5").removeClass("active");}           
		});
});



/*
    $("a.nav-link").click(function(){
        $("a.nav-link").css("background-color","");
        $("a.nav-link").css("border-bottom" ,"");
        $(this).css("background-color","#ebc35a");
        $(this).css("border-bottom" ,"2px solid #1a242f");
    });
    */
    

   /* 
$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing',
	
});

*/

document.getElementById("help_btn2").addEventListener("click",function()
{ 

    var box=document.getElementById("popup_1");
    if(box.style.display=="none")
    {
        box.style.display="flex";
        
        window.setTimeout(function(){
            box.style.opacity =.92;
            box.style.transform = 'scale(1)';
          },300);


        $("html,body").animate({scrollTop:0},200);
       
    }
    else{
        box.style.opacity = 0;
        box.style.transform = 'scale(0)';
        window.setTimeout(function(){
            box.style.display="none";
          },700);
    }
})





const darkModeSwitch = document.getElementById('darkModeSwitch');
const body = document.getElementById('body');
const navv= document.getElementById('navigation_bar');
var headers1 = document.getElementsByTagName('h1'); // get all elements//Dark Mode
var headers2 = document.getElementsByTagName('h2'); // get all elements//Dark Mode
var headers3 = document.getElementsByTagName('h3'); // get all elements//Dark Mode
var paraghraphs = document.getElementsByTagName('p'); // get all elements//Dark Mode
var footertext = document.getElementById('footer1');
var footertext2 = document.getElementById('footer2');
var tbody = document.getElementsByTagName('td');


darkModeSwitch.addEventListener('click', () => {
    let currentBodyClass = body.classList;
    let navv_classes=navv.classList;
    if (currentBodyClass.contains("lightMode")) {
      currentBodyClass.add('darkMode');
      currentBodyClass.remove('lightMode');
      currentBodyClass.add('darkMode');
      currentBodyClass.remove('lightMode');
      navv_classes.add('navbar-dark');
      navv_classes.add('bg-dark');
      navv_classes.remove('navbar-light');
      navv_classes.remove('bg-light');

      $("#switch_dark_image").removeClass("fas fa-toggle-off");
      $("#switch_dark_image").addClass("fas fa-toggle-on");
      for(var i = 0; i < headers1.length; i++){
		headers1[i].style.color = "#e48811";
	}

    for(var i = 0; i < headers2.length; i++){
		headers2[i].style.color = "#e48811";
    }
    for(var i = 0; i < headers3.length; i++){
		headers3[i].style.color = "rgb(236, 220, 80)";
    }
    for(var i = 0; i < paraghraphs.length; i++){
		paraghraphs[i].style.color = "white";
    }
    for(var i = 0; i < tbody.length; i++){
		tbody[i].style.color = "white";
    }




    } else if (currentBodyClass.contains("darkMode")) {
      currentBodyClass.add('lightMode');
      currentBodyClass.remove('darkMode');
      navv_classes.add('navbar-light');
      navv_classes.add('bg-light');
      navv_classes.remove('navbar-dark');
      navv_classes.remove('bg-dark');
      $("#switch_dark_image").addClass("fas fa-toggle-off");
      $("#switch_dark_image").removeClass("fas fa-toggle-on");
   

      for(var i = 0; i < headers1.length; i++){
		headers1[i].style.color = "black";
	}

    for(var i = 0; i < headers2.length; i++){
		headers2[i].style.color = "black";
    }
    for(var i = 0; i < headers3.length; i++){
		headers3[i].style.color = "grey";
    }
    for(var i = 0; i < paraghraphs.length; i++){
		paraghraphs[i].style.color = "black";
    }


    for(var i = 0; i < tbody.length; i++){
		tbody[i].style.color = "black";
    }

		footertext.style.color = "white";
        footertext2.style.color = "white";

    }
});


function reset() {
	
	
}