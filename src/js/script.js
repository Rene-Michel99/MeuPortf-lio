var projects = get_data();
var pos = 0;
var is_animating = false;



function drop_btn() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}

function next_btn(){
  pos += 1;
  if(pos >= projects.length)
    pos = 0;

  document.getElementById("lang-icon").src = projects[pos].lang_icon;
  document.getElementById("prt-icon").src = projects[pos].prt_icon;

  const title_prt = document.getElementById("title-prt");
  const text = document.getElementById("desc");

  const holder = $("#project-holder");
  holder.animate({opacity: '0.3'}, "medium");
  holder.animate({opacity: '1'},"medium");

  title_prt.innerHTML = projects[pos].name;
  text.innerHTML = projects[pos].text;
}

function prev_btn(){
  pos -= 1;
  if(pos < 0)
    pos = projects.length - 1;

  document.getElementById("lang-icon").src = projects[pos].lang_icon;
  document.getElementById("prt-icon").src = projects[pos].prt_icon;

  const title_prt = document.getElementById("title-prt");
  const text = document.getElementById("desc");

  const holder = $("#project-holder");
  holder.animate({opacity: '0.3'}, "medium");
  holder.animate({opacity: '1'},"medium");

  title_prt.innerHTML = projects[pos].name;
  text.innerHTML = projects[pos].text;
}
