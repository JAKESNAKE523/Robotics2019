let dark=!1,toggle=-1,mode=getCookie("mode");function setLight(){dark=!1,document.cookie="mode=light; path=/",setP("--background-color","#4E98BB"),setP("--background-secondary","white"),setP("--background-third","#FBFBFB"),setP("--box-color","white"),setP("--text-color","black"),setP("--background-image","url('../img/3_city_light.jpg')"),$(".splash").removeClass("dark"),$(".dark-mode-icon").removeClass("fa-sun"),$(".dark-mode-icon").addClass("fa-moon")}function setDark(){dark=!0,document.cookie="mode=dark; path=/",$(".splash").addClass("dark"),setP("--background-color","#053853"),setP("--background-secondary","#084466"),setP("--background-third","#0b4769"),setP("--box-color","#09476b"),setP("--text-color","white"),setP("--background-image","url('../img/2_city.jpg'),url('../img/snowcircles.png')"),$(".dark-mode-icon").removeClass("fa-moon"),$(".dark-mode-icon").addClass("fa-sun")}function getCookie(e){for(var o=e+"=",a=decodeURIComponent(document.cookie).split(";"),s=0;s<a.length;s++){for(var t=a[s];" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(o))return t.substring(o.length,t.length)}return""}function switchmode(){dark?setLight():setDark()}function setP(e,o){document.documentElement.style.setProperty(e,o)}function openDropdown(){$("#menu").hasClass("is-active")?$("#menu").removeClass("is-active"):$("#menu").addClass("is-active");let e=$("#dropdownMenu");1===toggle?e.removeClass("clicked"):e.addClass("clicked"),toggle*=-1}"dark"===mode?setDark():"light"===mode?setLight():document.cookie="mode=light; path=/",$(document).ready((function(){var e=$("#nav").offset(),o=$(window);o.scroll((function(){o.scrollTop()>=e.top?($("#nav").addClass("is-fixed-top"),$(".nav-placeholder").addClass("is-shown"),$(".navbar-menu").addClass("navbar-dark"),$(".dropdown").removeClass("is-up")):($("#nav").removeClass("is-fixed-top"),$(".nav-placeholder").removeClass("is-shown"),$(".navbar-menu").removeClass("navbar-dark"),$(".dropdown").addClass("is-up"))}))}));