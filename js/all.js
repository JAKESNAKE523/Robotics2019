let dark=!1,toggle=-1;function switchmode(){dark?(dark=!1,setP("--background-color","white"),setP("--background-secondary","white"),setP("--box-color","white"),setP("--text-color","black"),setP("--background-image","url('../img/city2.png')"),$(".dark-mode-icon").removeClass("fa-sun"),$(".dark-mode-icon").addClass("fa-moon")):(dark=!0,setP("--background-color","#222831"),setP("--background-secondary","#3B4048"),setP("--box-color","#393e46"),setP("--text-color","white"),setP("--background-image","url('../img/city.png')"),$(".dark-mode-icon").removeClass("fa-moon"),$(".dark-mode-icon").addClass("fa-sun"))}function setP(o,e){document.documentElement.style.setProperty(o,e)}function openDropdown(){$("#menu").hasClass("is-active")?$("#menu").removeClass("is-active"):$("#menu").addClass("is-active");let o=$("#dropdownMenu");1===toggle?(console.log("1"),o.removeClass("clicked")):(console.log("-1"),o.addClass("clicked")),toggle*=-1}$(document).ready((function(){console.log("what");var o=$("#nav").offset(),e=$(window);e.scroll((function(){e.scrollTop()>=o.top?$("#nav").addClass("is-fixed-top"):$("#nav").removeClass("is-fixed-top")}))}));