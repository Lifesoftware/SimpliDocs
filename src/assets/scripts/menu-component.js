// setTimeout(function() {
//     $("#menu-toggle").click(function(e) {
//         e.preventDefault();
//         console.log(1111)
//         $("#wrapper").toggleClass("toggled");
//     });
//      $("#menu-toggle-2").click(function(e) {
//         e.preventDefault();
//         console.log(222)
//         $("#wrapper").toggleClass("toggled-2");
//         $('#menu ul').hide();
//     });
//   },1000);

     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {       
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
    $(document).ready(function() {
        initMenu();
        $('#sidebar-wrapper li a').click(
          function() {
            $("#wrapper").removeClass("toggled").addClass("toggled-2");
          });
        $('#return-to-top').click(function() {      // When arrow is clicked
          $('body,html').animate({
              scrollTop : 0                       // Scroll to top of body
          }, 500);
        });

        // var lat = localStorage.getItem('current-lat');
        //     var lng = localStorage.getItem('current-long');
        //     var latlng = new google.maps.LatLng(lat, lng);
        //     var geocoder = geocoder = new google.maps.Geocoder();
        //     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
        //         if (status == google.maps.GeocoderStatus.OK) {
        //             if (results[1]) {
        //                 // console.log("Location: " + results[1].formatted_address);
        //                 localStorage.setItem('current-loc',results[1].formatted_address)
        //             }
        //         }
        //     });
        document.addEventListener("backbutton", function (e) {
          e.preventDefault();
      }, false );

    });
    $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
    });
    $(document).on('click', '.wishView', function() {
         $('body').css('overflow','hidden');
      return false;
    });
  $(document).on('click', '.modBG', function() {
      $('body').css('overflow','visible');
      });
    function myFunction() {
      var input, filter, table, tr, td, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }
    
    
   