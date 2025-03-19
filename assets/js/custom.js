$(".guide-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    items: 1,
  });
  
  $(".calcultorSlider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    autoWidth:true,
    dots: false,
    autoplay: true,
    center: false,
    items: 5,
    responsive:{
      0:{
        margin: 20,
      },
      767:{
        margin: 20,
      },
      768:{
        margin: 25,
      },
  }
  });
  
  $(".review-slide").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    autoWidth:true,
    dots: false,
    autoplay: true,
    center: false,
    items: 3,
    responsive:{
      0:{
        margin: 10,
      },
      767:{
        margin: 10,
      },
      768:{
        margin: 25,
      },
  }
  });
  
  //on click scroll section
  (function($, window, document){
  
    $('[data-toggle]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.hash);
      target.toggle();
    });
  
    // Cache selectors
    var lastId,
      topMenu = $(".pageScrollNav"),
      headerMenu = $(".header"),
      //headerMenu = headerMenu.outerHeight() + 15,
      headerMenu = headerMenu.outerHeight(),
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function() {
        var item = $(this).attr("href");
        if(item != '#') {return $(item)}
      });
  
  //console.log(scrollItems);
  
  
    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
      var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - headerMenu + 1;
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });
  
    // Bind to scroll
    $(window).scroll(function() {
      // Get container scroll position
      var fromTop = $(this).scrollTop() + headerMenu;
  
      // Get id of current scroll item
      var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
          // console.log(this)
          return this;
      });
      // Get the id of the current element
      cur = cur[cur.length - 1];
      var id = cur && cur.length ? cur[0].id : "";
  
      if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
          .parent().removeClass("active")
          .end().filter("[href='#" + id + "']").parent().addClass("active");
      }
    });
  })(jQuery, window, document);
  
  
  //range slider
  (function(win, dom){
      'use strict';
    
      // Check for .rangeControl class
      var rangeControlList = dom.getElementsByClassName('custom-rangeInput');
    
      // Inits components
      var init = function(){
        
        // Loop all controls
        for (var i = 0; i < rangeControlList.length; i++) {
          
          // Apply inital
          updateController(rangeControlList[i]);
          // Update when changed
          rangeControlList[i].addEventListener('input', function() {
            updateController(this);
          });
          // Update when changed ( for older browsers )
          rangeControlList[i].addEventListener('change', function() {
            console.log('hi')
            updateController(this);
          });
        }
      }
      
      // Updates components
      var update = function(){
        for (var i = 0; i < rangeControlList.length; i++) {
           updateController(rangeControlList[i]);
        }
      }
  
      // Update controller
      var updateController = function(obj){
        // Thumb Position
        var thumbPos = getThumbPercentage(obj);
        var thumPosPX = getThumbPosition(obj);
        if(obj.getAttribute("data-tooltip") != "false"){
          updateTooltip(obj.nextElementSibling, obj.value, thumPosPX, thumbPos);
        }else{
          obj.nextElementSibling.style.display = "none";
        }
        updateProgress(obj, '#f8f6f3', '#3068a5', thumbPos);
      }
  
      var getThumbPosition = function(obj){
        return Math.round((obj.offsetWidth / 100) * obj.value); // Pixel
      }
  
      var getThumbPercentage = function(obj){
        // Calculate the percentage relative to the range between min and max
        return Math.round(100 * (parseFloat(obj.value) - parseFloat(obj.getAttribute("min"))) / (parseFloat(obj.getAttribute("max")) - parseFloat(obj.getAttribute("min"))));
      }
      var updateTooltip = function(obj, text, position, percentage){
        obj.innerHTML = text; // Tooltip text
        obj.style.left = position + 'px'; // Tooltip position
  
        // Tooltip Position
        var tooltipStartPos = 26;
        var tooltipPosFix = percentage / 1.8;
        if(percentage > 50){
          tooltipPosFix = percentage / 2.2;
        }
        obj.style.transform = 'translate(-'+ (tooltipStartPos + tooltipPosFix) +'%, 0)';
      }
  
      var updateProgress = function(obj, progressBgColor, progressFillColor, percentage){
        var rangeBg = 'linear-gradient(to right,  '+ progressFillColor +' 0%, '+ progressFillColor +' '+ percentage +'%, '+ progressBgColor +' '+ percentage +'%, '+ progressBgColor +' 100%)';
        var cssRule = '#'+ obj.id +'::-webkit-slider-runnable-track { background : '+ rangeBg +' } ';
        cssRule += '#'+ obj.id +'::-moz-range-track { background : '+ rangeBg +' } ';
        cssRule += '#'+ obj.id +'::-ms-track { background : '+ rangeBg +' } ';
        var applyStyle = function(styleName, cssText) {
            var styleElement = dom.getElementById(styleName);
            if (styleElement) dom.getElementsByTagName('head')[0].removeChild(styleElement);
            
            styleElement = dom.createElement('style');
            styleElement.type = 'text/css';
            styleElement.id = styleName;
            styleElement.innerHTML = cssText;
            dom.getElementsByTagName('head')[0].appendChild(styleElement);
        }
        applyStyle('range_'+ obj.id, cssRule);
      }
      
    // Refresh on resize
    var fireOnceOnResize;
    win.addEventListener('resize', function () {
      fireOnceOnResize = setTimeout(update, 100);
    });
    
    // Init Component
    init();
    
  }(window, document));
  
  
  
  
  
  // Update controller
      var updateController = function(obj){
        // Thumb Position
        var thumbPos = getThumbPercentage(obj);
        var thumPosPX = getThumbPosition(obj);
        if(obj.getAttribute("data-tooltip") != "false"){
          //updateTooltip(obj.nextElementSibling, obj.value, thumPosPX, thumbPos);
        }else{
          obj.nextElementSibling.style.display = "none";
        }
        updateProgress(obj, '#f8f6f3', '#3068a5', thumbPos);
      }
  
      var getThumbPosition = function(obj){
        return Math.round((obj.offsetWidth / 100) * obj.value); // Pixel
      }
  
      var getThumbPercentage = function(obj){
        // Calculate the percentage relative to the range between min and max
        return Math.round(100 * (parseFloat(obj.value) - parseFloat(obj.getAttribute("min"))) / (parseFloat(obj.getAttribute("max")) - parseFloat(obj.getAttribute("min"))));
      }
      var updateTooltip = function(obj, text, position, percentage){
        obj.innerHTML = text; // Tooltip text
        obj.style.left = position + 'px'; // Tooltip position
  
        // Tooltip Position
        var tooltipStartPos = 26;
        var tooltipPosFix = percentage / 1.8;
        if(percentage > 50){
          tooltipPosFix = percentage / 2.2;
        }
        obj.style.transform = 'translate(-'+ (tooltipStartPos + tooltipPosFix) +'%, 0)';
      }
  
  var updateProgress = function(obj, progressBgColor, progressFillColor, percentage){
    var rangeBg = 'linear-gradient(to right,  '+ progressFillColor +' 0%, '+ progressFillColor +' '+ percentage +'%, '+ progressBgColor +' '+ percentage +'%, '+ progressBgColor +' 100%)';
    var cssRule = '#'+ obj.id +'::-webkit-slider-runnable-track { background : '+ rangeBg +' } ';
    cssRule += '#'+ obj.id +'::-moz-range-track { background : '+ rangeBg +' } ';
    cssRule += '#'+ obj.id +'::-ms-track { background : '+ rangeBg +' } ';
    var applyStyle = function(styleName, cssText) {
        var styleElement = document.getElementById(styleName);
        if (styleElement) document.getElementsByTagName('head')[0].removeChild(styleElement);
        styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.id = styleName;
        styleElement.innerHTML = cssText;
        document.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    applyStyle('range_'+ obj.id, cssRule);
  }
  
  $(document).ready(function() {
    // Select all sliders
    var sliders = $(".custom-renge-input");
    // Loop through each slider
    sliders.each(function(index) {
        var slider = $(this);
        var sliderValue = $(".system-size-custom[data-slider='" + (index + 1) + "']");
        var defaultIndex = parseInt(slider.data('default-index'));
        var selectedIndex = parseInt(slider.data('selected-index'));
        var defaultValues = slider.data('default-values');
        // Initialize slider with default value
        slider.val(selectedIndex);
        sliderValue.text(defaultValues[selectedIndex]);
  
        // Update slider value and displayed value on input change
        slider.on("input", function() {
            var valueIndex = $(this).val();
            var value = defaultValues[valueIndex];
            $(this).attr('data-val', value);
            sliderValue.text(value);
            updateSliderValuePosition(slider, sliderValue, valueIndex);
            updateController(sliders[index]);
            // Other custom functionalities related to slider change
        });
  
        // Initial positioning of slider value
        updateSliderValuePosition(slider, sliderValue, selectedIndex);
        updateController(sliders[index]);
    });
  
    var sliders2 = $(".custom-renge-input2");
    // Loop through each slider
    sliders2.each(function(index) {
      var slider = $(this);
      var sliderValue = $(".system-size-custom2[data-slider='" + (index + 1) + "']");
      
      // Get min, max, step, and value attributes
      var minValue = parseFloat(slider.attr('min'));
      var maxValue = parseFloat(slider.attr('max'));
      var stepValue = parseFloat(slider.attr('step'));
      var initValue = parseFloat(slider.val());
      // Display initial value
      sliderValue.text(initValue);
  
      // Update slider value and displayed value on input change
      slider.on("input", function() {
        var value = parseFloat($(this).val());
        sliderValue.text(value);
        updateSliderValuePosition(slider, sliderValue, value);
        updateController(sliders2[index]);
        // Other custom functionalities related to slider change
      });
  
      // Initial positioning of slider value
      updateSliderValuePosition(slider, sliderValue, initValue);
      updateController(sliders2[index]);
    });
  
  
  });
  
  function updateSliderValuePosition(slider, sliderValue) {
    //console.log('www',slider.attr("data-width"))
    var sliderWidth = slider.width();
    if (slider.attr("data-width") !== undefined) {
       sliderWidth = slider.attr("data-width");
  } 
    //console.log('sliderWidth',+sliderWidth)
    var sliderValueWidth = sliderValue.width();
    var sliderMax = parseFloat(slider.attr("max"));
    var sliderMin = parseFloat(slider.attr("min"));
    var value = parseFloat(slider.val());
    var percent = (value - sliderMin) / (sliderMax - sliderMin);
    var offset = percent * sliderWidth;
    var newPosition = offset - sliderValueWidth / 2;
    sliderValue.css("left", newPosition + "px");
  }
  
  $(document).on('click', '.quantity__btn--up', function() {
    var spinner = $(this).closest('.quantity'),
        input = spinner.find('input[type="number"]'),
        max = parseFloat(input.attr('max')),
        oldValue = parseFloat(input.val()),
        newValue = isNaN(oldValue) ? 0 : oldValue + 1;
    
    if (newValue > max) {
        newValue = max;
    }
    
    input.val(newValue).trigger('change');
  });
  
  $(document).on('click', '.quantity__btn--down', function() {
    var spinner = $(this).closest('.quantity'),
        input = spinner.find('input[type="number"]'),
        min = parseFloat(input.attr('min')),
        oldValue = parseFloat(input.val()),
        newValue = isNaN(oldValue) ? 0 : oldValue - 1;
    
    if (newValue < min) {
        newValue = min;
    }
    
    input.val(newValue).trigger('change');
  });
  
  
  function go_back_top(parentId) {
    if (parentId) {
        var offset = jQuery('#' + parentId).offset().top - 100;
        jQuery('html, body').animate({
            scrollTop: offset
        }, 500); 
    }
  };
  
  
  // Mobile menu 
  
  function setIPhoneMenu() {
  
    jQuery('.subItem').remove();
    jQuery(".iphonNav").css("display", "none");
    jQuery(".iphonNav").addClass("iphon_navigation");
    jQuery(".iphonNav").removeClass("navigation");
    jQuery(".iphonNav > ul").attr("id", "");
    jQuery(".menuImage").css("display", "block");
    jQuery(".iphonNav ul li").each(function() {
        if (jQuery(this).children("ul").length > 0) {
            jQuery(this).addClass("parentMenu");
            jQuery(this).prepend("<div class='subItem'></div>");
            jQuery(this).children("ul").addClass("subMenu");
        }
    });
    //jQuery(".subMenu").css("display", "none");
    jQuery(".menuImage").unbind("click");
   jQuery(".menuImage").click(function() {
        jQuery(".iphonNav").slideToggle();
    });
    jQuery(".subItem, .dropdown-nav a").unbind("click");
    jQuery(".subItem, .dropdown-nav a").click(function(e) {
        jQuery(this).parent().children(".subMenu").slideToggle(300, function() { 
            if (jQuery(this).is(":visible")) {
                jQuery(this).parent().parent().children(".parentMenuActive").find(".subMenu").each(function() {
                    jQuery(this).slideUp(300);
                    jQuery(this).css("display", "none");
                    jQuery(this).parent().removeClass("parentMenuActive");
                });
                jQuery(this).parent().parent().children(".parentMenuActive").removeClass("parentMenuActive");
                jQuery(this).parent().addClass("parentMenuActive");
  
            } else {
                jQuery(this).parent().removeClass("parentMenuActive");
                jQuery(this).find(".subMenu").each(function() {
                    jQuery(this).css("display", "none");
                    jQuery(this).parent().removeClass("parentMenuActive");
  
                });
            }
        });
  
        e.stopPropagation();
    });
  }
  
  function setDesktopMenu() {
    jQuery(".iphonNav").addClass("navigation");
    jQuery(".iphonNav").css("display", "block");
    jQuery(".iphonNav").removeClass("iphon_navigation");
    jQuery(".iphonNav>ul").attr("id", "nav");
    jQuery(".menuImage").css("display", "none");
  }
  jQuery(document).ready(function() {
    if (jQuery(window).width() < 992) {
        //console.log('pppp')
        setIPhoneMenu();
    } else {
        setDesktopMenu();
    }
  });
  jQuery(window).resize(function() {
    if (jQuery(window).width() < 992) {
        setIPhoneMenu();
    } else {
        setDesktopMenu();
    }
  });
  
  jQuery(document).ready(function() {
  jQuery(document).on('click keyup touchstart',function(e) {
    if(e.which==27){
      jQuery('.iphonNav').removeClass('nav-open');
      jQuery('body').removeClass('scroll-hidden');			
    }else if($(e.target).closest('.iphonNav').length==0 && $(e.target).closest('.container2').length==0){
      jQuery('.iphonNav').removeClass('nav-open');
      jQuery('body').removeClass('scroll-hidden');			
    }
    });
    jQuery(document).on('click','.menuImage',function() {
        jQuery('.iphonNav').toggleClass('nav-open');
        jQuery('body').toggleClass('scroll-hidden');
    });
  $(document).on('scroll',window,function(){
    $(window).scrollTop()>=80 ? $("body").addClass("navnewclass") : $("body").removeClass("navnewclass") 
  });
  });
  
  
  
  
  