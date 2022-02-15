$('a').click(function(e){
	e.preventDefault();
	if ($('html').hasClass('active')) {
		$('html').removeClass('active');
	} else {
		$('html').addClass('active');
	}
});


/*$('body').find('img').each(function() {
	if( this.complete ) {
		console.log('loaded');
	} else {
		$(this).one('load', imageLoaded);
	}
});*/

var images = $('body').find('img');
var counter = images.length;

var percents = 1 / (counter / 100);
var cirpers = 0;

function imageLoaded() {
	counter--;
	
	cirpers = 100 - Math.floor(counter * percents);
	
	$('.circus').attr('style', 'stroke-dasharray:calc('+cirpers+' * 31.42px / 100) 31.42px');
	
	if( counter === 0 ) {
		console.log('done');
		$('.preloader').addClass('none');
	}
}

images.each(function() {
	if( this.complete ) {
		imageLoaded.call(this);
	} else {
		$(this).one('load', imageLoaded);
	}
});

$(function() {

    ymaps.ready(function() {
        if ($(window).width() > 899) {
            centerMap = [51.639621, 39.274557];
        } else {
            centerMap = [51.638953, 39.282537];
        }
        var myMap = new ymaps.Map('map', {
                center: centerMap,
                zoom: 15,
                scrollZoom: false,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([51.638953, 39.282537], {
                balloonContent: `<div class="ballon-box">
                                        <span>Монтажный проезд, 5/19</span>
                                    </div>`
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/map-marker.svg',
                iconImageSize: [67, 95],
                balloonContentSize: [367, 71],
                balloonLayout: "default#imageWithContent",
                balloonImageOffset: [5, -85],
                cursor: 'pointer',
                iconImageOffset: [-34, -95],
                balloonclose: false
            });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects
            .add(myPlacemark)
        myMap.options.set({ balloonPanelMaxMapArea: '0' });
        myPlacemark.balloon.open();

    });

    $('.products-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });

    $("a.scrollto").click(function() {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 700);
        return false;
    });

    $('#hamburger-icon').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.mobile-menu').addClass('active');
            $('html').addClass('ov-hidden');
        } else {
            $('.mobile-menu').removeClass('active');
            $('html').removeClass('ov-hidden');
        }
    });

    $('.mobile-menu .top-menu a').click(function() {
        $('#hamburger-icon').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('ov-hidden');
    });

    $('.style-tab').click(function() {
        $('.style-tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.styles-elems').find('.styles-elem-item').hide();
        $('#' + $(this).data('switch')).show();
    });


});

var flag = false;

size();

$(window).resize(function() {
    if (flag == false) {
        size();
    }
});


function size() {
    if ($(window).width() < '900') {

        flag = true;
    }
}

$(window).on('load resize scroll', function() {

    var width = $(window).width();

    if ((width > '700') && (width < '1000')) {

    }

    if (width > '700') {

    }

    if (width < '700') {

    }

});
//# sourceMappingURL=../sourcemaps/main.js.map

$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
    });
  });