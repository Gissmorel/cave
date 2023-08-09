        //esconder menú on click bootstrap

        function cerrar() {
            let navbar = document.querySelector(".navbar-toggler");
            navbar.click();
          };

        window.addEventListener ("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("abajo",window.scrollY>5);
        })

        window.addEventListener ("scroll", function(){
          var titulo = document.getElementById("titulo")
          var home = document.getElementById("home");
          if (window.scrollY>5){
            titulo.style.display="none";
            home.innerHTML="CaveWeb";
            home.style.fontSize="1.5rem";
          }
          else{ 
            titulo.style.display="block";
            home.innerHTML="Inicio";
            home.style.fontSize="1rem";
          };
      });


        //fijar el menu
 /*        posicionarMenu();
        
          $(window).scroll(function() {    
            posicionarMenu();
        });
        
        function posicionarMenu() {
            var altura_del_header = $('.header').outerHeight(true);
            var altura_del_menu = $('.menu-fijo').outerHeight(true);
        
            if ($(window).scrollTop() >= altura_del_header){
                $('.menu-fijo').addClass('fixed');
                $('.wrapper').css('margin-top', (altura_del_menu) + 'px');
            } else {
                $('.menu-fijo').removeClass('fixed');
                $('.wrapper').css('margin-top', '0');
            }
        } */