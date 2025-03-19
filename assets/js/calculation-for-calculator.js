// function toogleStepClass()
//     {
//   if(currentStep>1 && currentStep)
//     {
//      $('.step-toggle').hide()
//     }
//     else{
//       $('.step-toggle').show()
//     }
//     }
// Number.prototype.formatMoney = function (c, d, t) {
//   var n = this,
//     c = isNaN((c = Math.abs(c))) ? 2 : c,
//     d = d == undefined ? "." : d,
//     t = t == undefined ? "," : t,
//     s = n < 0 ? "-" : "",
//     i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
//     j = (j = i.length) > 3 ? j % 3 : 0;
//   return (
//     s +
//     (j ? i.substr(0, j) + t : "") +
//     i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
//     (c
//       ? d +
//         Math.abs(n - i)
//           .toFixed(c)
//           .slice(2)
//       : "")
//   );
// };
// function numberWithCommas(number) {
//   return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// $("#toggleSwitch,#toggleSwitch2").change(function () {
//   // Check if the checkbox is checked
//   if ($(this).is(":checked")) {
//       $('.adanace-option-toggle').removeClass('hide-advance')
//   } else {
//       $('.adanace-option-toggle').addClass('hide-advance')
//   }
// });

// function addCommas(nStr) {
//   nStr += "";

//   x = nStr.split(".");

//   x1 = x[0];

//   x2 = x.length > 1 ? "." + x[1] : "";

//   var rgx = /(\d+)(\d{3})/;

//   while (rgx.test(x1)) {
//     x1 = x1.replace(rgx, "$1" + "," + "$2");
//   }

//   return x1 + x2;
// }

// function pmtCalc(rate, nper, pv, fv, type) {
//   if (!fv) fv = 0;

//   if (!type) type = 0;

//   if (rate == 0) return -(pv + fv) / nper;

//   var pvif = Math.pow(1 + rate, nper);

//   var pmt = (rate / (pvif - 1)) * -(pv * pvif + fv);

//   if (type == 1) {
//     pmt /= 1 + rate;
//   }

//   return pmt;
// }
// // For Solar Rebate Calculator
// // $("#solar-rebate").validate({
// //   rules: {
// //     SystemSize: {
// //       required: true,
// //       number: true,
// //     },
// //     postCode: {
// //       required: true,
// //       number: true,
// //     },
// //   },
// //   messages: {
// //     SystemSize: {
// //       required: "Please enter your system size",
// //     },
// //     postCode: {
// //       required: "Please enter valid postcode",
// //     },
// //   },
// //   submitHandler: function (form) {
// //     var SystemSize = parseFloat(jQuery("#SystemSize").val());
// //     var postCode = parseFloat(jQuery("#postCode").val());
// //     jQuery(".loader-outer").show();
// //     jQuery(".loader-outer").css("display", "inline-flex");
// //     jQuery.ajax({
// //       url: "/wp-admin/admin-ajax.php",
// //       type: "POST",
// //       data: {
// //         action: "ZoneRating",
// //         postCode: postCode,
// //       },
// //       dataType: "html",
// //       success: function (data) {
// //         var rezults = data.split(",");
// //         var STCs_per_1kWh = Math.floor(SystemSize * (rezults[0] * rezults[2]));
// //         var SolarRebate = STCs_per_1kWh * rezults[1];
// //         jQuery("#SolarRebate").text(
// //           "$" + parseFloat(SolarRebate).formatMoney(0, ".", ",")
// //         );
// //         jQuery("#NoSTC").text(
// //           parseFloat(STCs_per_1kWh).formatMoney(0, ".", ",")
// //         );
// //         jQuery("#STCvalue").text(
// //           "$" + parseFloat(rezults[1]).formatMoney(0, ".", ",")
// //         );
// //         jQuery(".loader-outer").hide();
// //       },
// //       error: function (errorThrown) {
// //         console.log(errorThrown);
// //         jQuery(".loader-outer").hide();
// //       },
// //     });
// //   },
// // });

// // For Solar Panel Cost Calculator
// $("#solar-panel-cost").validate({
//   rules: {
//     SystemSize: {
//       required: true,
//       number: true,
//     },
//     postCode: {
//       required: true,
//       number: true,
//     },
//   },
//   messages: {
//     SystemSize: {
//       required: "Please enter your system size",
//     },
//     postCode: {
//       required: "Please enter valid postcode",
//     },
//   },
//   submitHandler: function (form) {
//     var SystemSize = parseFloat(jQuery("#SystemSize").val());
//     var postCode = parseFloat(jQuery("#postCode").val());
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     jQuery.ajax({
//       url: "/wp-admin/admin-ajax.php",
//       type: "POST",
//       data: {
//         action: "solar_panel_cost",
//         postCode: postCode,
//         SystemSize: SystemSize,
//       },
//       dataType: "html",
//       success: function (data) {
//         var rezults = data.split(",");
//         var STCs_per_1kWh = SystemSize * (rezults[0] * rezults[2]);
//         var less_Solar_Rebate_per_1kWh = STCs_per_1kWh * rezults[1];
//         var Gross_Price_of_panels = SystemSize * rezults[3];
//         var Net_Cost_of_panels =
//           Gross_Price_of_panels - less_Solar_Rebate_per_1kWh;
//         jQuery("#PurchasePrice").text(
//           "$" + addCommas(Gross_Price_of_panels.toFixed(0))
//         );
//         jQuery("#LessRebate").text(
//           "$" + addCommas(less_Solar_Rebate_per_1kWh.toFixed(0))
//         );

//         jQuery("#NetCost").text("$" + addCommas(Net_Cost_of_panels.toFixed(0)));

//         jQuery(".loader-outer").hide();
//       },
//       error: function (errorThrown) {
//         console.log(errorThrown);
//         jQuery(".loader-outer").hide();
//       },
//     });
//   },
// });

// // For Solar Panel Cost Calculator
// $("#solar-loan-cal").validate({
//   rules: {
//     LoanAmount: {
//       required: true,
//       number: true,
//     },
//     TermYears: {
//       required: true,
//       number: true,
//     },
//     Rate: {
//       required: true,
//       number: true,
//     },
//   },
//   messages: {
//     TermYears: {
//       required: "Please enter loan amount",
//     },
//     TermYears: {
//       required: "Please enter valid year",
//     },
//     Rate: {
//       required: "Please enter rate",
//     },
//   },
//   submitHandler: function (e) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     var LoanAmount = parseFloat(jQuery("#LoanAmount").val());
//     var TermYears = parseFloat(jQuery("#TermYears").val());
//     var Rate = parseFloat(jQuery("#Rate").val()) / 100;
//     var Periods = 12;
//     var MonthlyPayment = -pmtCalc(
//       Rate / Periods,
//       TermYears * Periods,
//       LoanAmount
//     );
//     var AnnualRepayments = MonthlyPayment * 12;
//     var TotalInterestCost = Periods * TermYears * MonthlyPayment - LoanAmount;
//     jQuery("#MonthlyPayment").text(
//       "$" + parseFloat(MonthlyPayment).formatMoney(0, ".", ",")
//     );
//     jQuery("#AnnualRepayments").text(
//       "$" + parseFloat(AnnualRepayments).formatMoney(0, ".", ",")
//     );
//     jQuery("#TotalInterestCost").text(
//       "$" + parseFloat(TotalInterestCost).formatMoney(0, ".", ",")
//     );
//     jQuery(".loader-outer").hide();
//   },
// });

// // For for electric use only Calculator
// $("#solar-electric-use-cal").validate({
//   rules: {
//     postCode: {
//       required: true,
//       number: true,
//     },
//     lastBill: {
//       required: true,
//       number: true,
//     },
//     Bill: {
//       required: true,
//     },
//   },
//   messages: {
//     postCode: {
//       required: "Please enter loan amount",
//     },
//     lastBill: {
//       required: "Please enter valid year",
//     },
//     Bill: {
//       required: "Please select frequency",
//     },
//   },
//   submitHandler: function (form) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     var formData = $(form).serialize();
//     // Send an AJAX request
//     $.ajax({
//       url: "/wp-admin/admin-ajax.php", // Change to your PHP script URL
//       type: "POST",
//       data: {
//         action: "solar_electric_use_calculator",
//         formData: formData,
//       },
//       success: function (response) {
//         var rezults = response.split(",");
//         // Handle the successful response here
//         console.log(rezults);
//         jQuery("#DailyUsage").html(
//           rezults[0]
//         );
//         jQuery("#WinterUsage").html(
//           "<span>" +
//             rezults[1] +
//             " kWh</span><br><span class='perday'>per day</span>"
//         );
//         jQuery("#SummerUsage").html(
//           "<span>" +
//             rezults[2] +
//             " kWh</span><br><span class='perday'>per day</span>"
//         );
//         jQuery("#AutumnUsage").html(
//           "<span>" +
//             rezults[3] +
//             " kWh</span><br><span class='perday'>per day</span>"
//         );
//         jQuery("#SpringUsage").html(
//           "<span>" +
//             rezults[4] +
//             " kWh</span><br><span class='perday'>per day</span>"
//         );
//         jQuery(".loader-outer").hide();
//       },
//       error: function (xhr, status, error) {
//         // Handle errors here
//         console.error(xhr.responseText);
//         jQuery(".loader-outer").hide();
//       },
//     });
//   },
// });



// $("#solar-system-size").validate({
//   rules: {
//     postCode: {
//       required: true,
//       number: true,
//     },
//     dailyUsage: {
//       required: true,
//       number: true,
//     },
//   },
//   submitHandler: function (form) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     var post_code = parseFloat(jQuery("#postCode").val());
//     var daily_electricity = parseFloat(jQuery("#dailyUsage").val());
//     var use_electricity_during_day = parseFloat(jQuery("#use-electricity-during-day").val())/100;
 
//     var afford = parseFloat($('input[name="price_check"]:checked').val());
//     var over = parseFloat($('input[name="roofspace"]:checked').val());
//     var yn = parseFloat($('input[name="batterystorage"]:checked').val());
 
//  var output_buffer_battery  = 1.08;
 
//     var optimum_solar_output_location;

//     var result_SystemSize;
//     var daily_solar_production;

// function round(number) {
//     var value = (number * 2).toFixed() / 2;
//     return value;
// }
    
//     // Send an AJAX request
//     $.ajax({
//       url: "/wp-admin/admin-ajax.php", // Change to your PHP script URL
//       type: "POST",
//       data: {
//         action: "solar_system_size_cal",
//         post_code: post_code,
//       },
//       success: function (data) {
//         // Handle the successful response here
//         var result_ajax = data.split(',');
//         optimum_solar_output_location = result_ajax[0];
   
// var bs_yes =  ((daily_electricity*output_buffer_battery)<(5*optimum_solar_output_location)) ? 5 :  (daily_electricity<(6.6*optimum_solar_output_location)) ? 6.6 : Math.max(6.6,  Math.ceil( daily_electricity*output_buffer_battery /optimum_solar_output_location * 2)/2 ) ;

// var bs_no =  ((daily_electricity*(use_electricity_during_day+0.25))<(5*optimum_solar_output_location)) ? 5 :  (daily_electricity <(6.6*optimum_solar_output_location)) ? 6.6 : Math.max(6.6, Math.ceil (daily_electricity*(use_electricity_during_day+0.15) /optimum_solar_output_location * 2) /2 ) ;

// var roof_space_budget =  (afford==1 && over==1) ? "Yes" : "No" ;
 
 
// var batterySize = (yn==1)?((1-use_electricity_during_day)*daily_electricity):"N/A";

// var solarSystemSize =  (roof_space_budget=="Yes" && yn==1) ? bs_yes :  (roof_space_budget=="Yes" && yn==0) ? bs_no : Math.min(4.5, Math.ceil(daily_electricity*1 /optimum_solar_output_location));

// var daily_solar_production = optimum_solar_output_location*solarSystemSize;

//         jQuery("#dailySolarOutput").html( daily_solar_production.toFixed(1) + ' <span>kWh</span>'); 
         
//         if(batterySize == "N/A"){
//            jQuery("#batterySize").html( batterySize ); 
//         }else{
//            jQuery("#batterySize").html( batterySize.toFixed(1)  + ' <span>kWh</span>' ); 
//         }
//         jQuery("#solarSystemSize").text(solarSystemSize.toFixed(1)); 
//         jQuery(".loader-outer").hide();
//       },
//       error: function (xhr, status, error) {
//         // Handle errors here
//         console.error(xhr.responseText);
//         jQuery(".loader-outer").hide();
//       },
//     });
//   },
// });
// $("#solarform").validate({
//     rules: {
//     first_name: {
//       required: true,
//     },
//     surname: {
//       required: true
//     },
//     email: {
//       required: true,
//       email: true // Add email validation rule
//     },
//     phone_number: {
//       required: true,
//       // Add custom phone number validation rule if needed
//     },
//     street_addr: {
//       required: true
//     },
//     suburb: {
//       required: true
//     },
//     postcode: {
//       required: true,
//       digits: true, // Add digits validation rule to accept only numeric values
//       minlength: 4, // Add minlength validation rule for 4 digits
//       maxlength: 4 // Add maxlength validation rule for 4 digits
//     },
//     state: {
//       required: true
//     }
//   },
//   messages: {
//     first_name: {
//       required: "Please enter your first name."
//     },
//     surname: {
//       required: "Please enter your surname."
//     },
//     email: {
//       required: "Please enter your email address.",
//       email: "Please enter a valid email address."
//     },
//     phone_number: {
//       required: "Please enter your phone number."
//       // Add custom error message for phone number validation if needed
//     },
//     street_addr: {
//       required: "Please enter your street address."
//     },
//     suburb: {
//       required: "Please enter your suburb."
//     },
//     postcode: {
//       required: "Please enter your postcode.",
//       digits: "Please enter only numeric digits.",
//       minlength: "Please enter a valid postcode.",
//       maxlength: "Please enter a valid postcode."
//     },
//     state: {
//       required: "Please select your state."
//     }
//   },
//   submitHandler: function (e) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
// 	   //forward();
//   // Send an AJAX request
//     $.ajax({
//       url: "https://solarcalculator.com.au/crm/leads/add", // Change to your PHP script URL
//       type: "POST",
//       data: jQuery("#solarform").serialize(),
//       success: function (response) {
//         if(response=="Thank you! We're now working on your quote request."){
//           setTimeout(function() {
//             forward(); 
//             jQuery(".loader-outer").hide();
//             jQuery(".info-step").hide()
//         }, 4000); 
//      } else {
//          alert(data);
//          jQuery(".loader-outer").hide();
//      }
//       },
//       error: function (xhr, status, error) {
//         // Handle errors here
//         console.error(xhr.responseText);
//         jQuery(".loader-outer").hide();
//       },
//     });

//   }
// });
// // Define the require_one method
// $.validator.addMethod("require_one", function(value, element, options) {
//   var validOrNot;
//   if ($("input[name='estimated_cost']").val() || $("input[name='estimated_cost_unsure']:checked").val()) {
//     validOrNot = true;
//   } else {
//     validOrNot = false;
//   }

//   return validOrNot;
// }, "Please enter estimated cost or choose I'm unsure option.");

// // Add class rules for require_one
// $.validator.addClassRules("require-one", { require_one: [1, ".require-one"] });

// $("#off-grid").validate({
//     rules: {
//         first_name: {
//             required: true,
//         },
//         surname: {
//             required: true
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         phone_number: {
//             required: true
//         },
//         street_addr: {
//             required: true
//         },
//         suburb: {
//             required: true
//         },
//         postcode: {
//             required: true,
//             digits: true,
//             minlength: 4,
//             maxlength: 4
//         },
//         state: {
//             required: true
//         },
//         estimated_cost_unsure: {
//           require_one: ['estimated_cost'],
//       },
//       estimated_cost: {
//           require_one: ['estimated_cost_unsure'],
//           number: true,
//       },
//       daily_solar_usage:{
//         required: function(element) {
//           return ($("input[name='daily_solar_usage_unsure']:checked").val() === '1')?false:true;
//           },
//         number: true,
//       },
//       daily_solar_usage_unsure:{
//         required: function(element) {
//           return ($("input[name='daily_solar_usage']").val())?false:true;
//           },
//       },
//     },
//     messages: {
//         first_name: {
//             required: "Please enter your first name."
//         },
//         daily_solar_usage: {
//           required: "Please enter power usage or choose I'm unsure option."
//       },
//       daily_solar_usage_unsure: {
//         required: "Please enter power usage or choose I'm unsure option."
//     },
//         surname: {
//             required: "Please enter your surname."
//         },
//         email: {
//             required: "Please enter your email address.",
//             email: "Please enter a valid email address."
//         },
//         phone_number: {
//             required: "Please enter your phone number."
//         },
//         street_addr: {
//             required: "Please enter your street address."
//         },
//         suburb: {
//             required: "Please enter your suburb."
//         },
       
//         postcode: {
//             required: "Please enter your postcode.",
//             digits: "Please enter only numeric digits.",
//             minlength: "Please enter a valid postcode.",
//             maxlength: "Please enter a valid postcode."
//         },
//         state: {
//             required: "Please select your state."
//         }
//     },
//     submitHandler: function (e) {
//       jQuery(".loader-outer").show();
//       jQuery(".loader-outer").css("display", "inline-flex");
//     // Send an AJAX request
//       $.ajax({
//         url: "https://solarcalculator.com.au/crm/leads/add", // Change to your PHP script URL
//         type: "POST",
//         data: jQuery("#off-grid").serialize(),
//         success: function (response) {
//           if(response=="Thank you! We're now working on your quote request."){
//             setTimeout(function() {
//               forward(); 
//               jQuery(".loader-outer").hide();
//               jQuery(".info-step").hide()
//           }, 4000); 
//        } else {
//            alert(data);
//            jQuery(".loader-outer").hide();
//        }
//         },
//         error: function (xhr, status, error) {
//           // Handle errors here
//           console.error(xhr.responseText);
//           jQuery(".loader-outer").hide();
//         },
//       });
  
//     }
// });
//   $(".validate_address").click(function() {
//         if ($("#solarform").valid()) {
// 			 forward();
// 			 return true;
//             // Additional actions when form is valid
//         } 
//     });
// 	  $(".validate_price").click(function() {
//         if ($("#off-grid").valid()) {
// 			 forward();
// 			 return true;
//             // Additional actions when form is valid
//         } 
//     });
//     $('#estimated_cost_unsuretwo,#daily_solar_usage_unsuretwo').change(function() {
//       $("#off-grid").valid();
//       if ($(this).is(':checked')) {
//          forward();
//     }
//   });

// // Battery only
//   $("#battery-only").validate({
//     rules: {
//         first_name: {
//             required: true,
//         },
//         surname: {
//             required: true
//         },
//         email: {
//             required: true,
//             email: true
//         },
//         phone_number: {
//             required: true
//         },
//         street_addr: {
//             required: true
//         },
//         suburb: {
//             required: true
//         },
//         postcode: {
//             required: true,
//             digits: true,
//             minlength: 4,
//             maxlength: 4
//         },
//         state: {
//             required: true
//         },
//     },
//     messages: {
//         first_name: {
//             required: "Please enter your first name."
//         },
//         surname: {
//             required: "Please enter your surname."
//         },
//         email: {
//             required: "Please enter your email address.",
//             email: "Please enter a valid email address."
//         },
//         phone_number: {
//             required: "Please enter your phone number."
//         },
//         street_addr: {
//             required: "Please enter your street address."
//         },
//         suburb: {
//             required: "Please enter your suburb."
//         },
       
//         postcode: {
//             required: "Please enter your postcode.",
//             digits: "Please enter only numeric digits.",
//             minlength: "Please enter a valid postcode.",
//             maxlength: "Please enter a valid postcode."
//         },
//         state: {
//             required: "Please select your state."
//         }
//     },
//     submitHandler: function (e) {
//       jQuery(".loader-outer").show();
//       jQuery(".loader-outer").css("display", "inline-flex");
//     // Send an AJAX request
//       $.ajax({
//         url: "https://solarcalculator.com.au/crm/leads/add", // Change to your PHP script URL
//         type: "POST",
//         data: jQuery("#battery-only").serialize(),
//         success: function (response) {
//           if(response=="Thank you! We're now working on your quote request."){
//             setTimeout(function() {
//               forward(); 
//               jQuery(".loader-outer").hide();
//               jQuery(".info-step").hide()
//           }, 4000); 
//        } else {
//            jQuery(".loader-outer").hide();
//        }
//         },
//         error: function (xhr, status, error) {
//           // Handle errors here
//           console.error(xhr.responseText);
//           jQuery(".loader-outer").hide();
//         },
//       });
  
//     }
// });

// $(".validate_battery_only").click(function() {
//   if ($("#battery-only").valid()) {
//  forward();
//  return true;
//       // Additional actions when form is valid
//   } 
// });

// $.validator.addMethod("postcodeAvailable", function(value, element) {
//   jQuery(".loader-outer").show();
//   jQuery(".loader-outer").css("display", "inline-flex");
//   var response = false;
//    $.ajax({
//       type: "POST",
//       url: "/wp-admin/admin-ajax.php", // Replace with your validation script URL
//       data: { postcode: value,action: "validate_post_code", },
//       async: false, // Ensure synchronous execution
//       success: function(data) {
//         var data = JSON.parse(data);
//       if(data.status === true){
//         response=data.status
//         jQuery('.cost-clectricity').text(data.avag_elecricity_cost)
//         jQuery('input[name="cost-of-electricity"]').val(data.avag_elecricity_cost)
//         jQuery('input[name="lat"]').val(data.lat)
//         jQuery('input[name="lon"]').val(data.lon)
//       }
//         jQuery(".loader-outer").hide();
//     },
//     error: function() {
//         response = false; // Assume validation failed in case of error
//         jQuery(".loader-outer").hide();
//     }
//   })
//   return response;
// }, "Please enter a valid postcode.");

// $("#main-calculator").validate({
//   rules: {
//     postcode: {
//       required: true,
//       digits: true,
//       minlength: 4,
//       maxlength: 4,
//       postcodeAvailable:true
//     },
//     e_amount: {
//       required: true,
//       number: true,
//     },
//     e_duration:{
//       required: true,
//     },
//   },
//   messages: {
//     postcode: {
//       required: "Please enter your postcode.",
//       digits: "Please enter only numeric digits.",
//       minlength: "Please enter a valid postcode",
//       maxlength: "Please enter a valid postcode",
//       postcodeAvailable:'Please enter a valid postcode'

//   },
//   },
//   submitHandler: function (form) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     var formData = $(form).serialize();
//     // Send an AJAX request
//     $.ajax({
//       url: "/wp-admin/admin-ajax.php", // Change to your PHP script URL
//       type: "POST",
//       data: {
//         action: "result_calculation_for_main_calculator",
//         formData: formData,
//       },
//       success: function (response) {
//         forward();
//         var data = JSON.parse(response);
//       if(data.status === true){
//         console.log('currentStep',currentStep)
//         jQuery('.first_year_saving').text(data.first_year_saving)
//         jQuery('.payback_period').text(data.payback_period)
//         jQuery('.solar_rebate').text(data.solar_rebate)
//         jQuery('.total_system_cost').text(data.total_system_cost)
//         jQuery('.return_of_invest_ment').text(data.return_of_invest_ment)
//         jQuery('.new_average_bill').text(data.new_average_bill)
//         jQuery('.new_summer_bill').text(data.new_summer_bill)
//         jQuery('.new_autumn_bill').text(data.new_autumn_bill)
//         jQuery('.new_winter_bill').text(data.new_winter_bill)
//         jQuery('.new_spring_bill').text(data.new_spring_bill)
//         jQuery('.life_time_co2_emission').text(data.life_time_co2_emission)
//         jQuery('.tree_panted').text(data.tree_panted)
//         jQuery('.car_off_the_road').text(data.car_off_the_road)
//         jQuery('.foot_print_in_year').text(data.foot_print_in_year)
//         jQuery('.system_size').text(data.system_size)
//         jQuery('.no_of_panel').text(data.no_of_panel)
//         jQuery('.solar_generated_daily').text(data.solar_generated_daily)
//         jQuery('.energy_fed_into_gred').text(data.energy_fed_into_gred)
//         jQuery('.twenty_five_year_saving').text(data.twenty_five_year_saving)
//         jQuery('.no_of_panel_area').text(data.no_of_panel_area)
//         if(currentStep==9)
//         {  
//         set_graph(data)
//         }
//       }
//         jQuery(".loader-outer").hide();
//       },
//       error: function (xhr, status, error) {
//         // Handle errors here
//         console.error(xhr.responseText);
//         jQuery(".loader-outer").hide();
//       },
//     });
//   },
// });

// $('.postcode-valid').click(function() {
//   if ($("#main-calculator").valid()) {
//     forward();
//     return true;
//     // Additional actions when form is valid
//   } 
// });

// // Solar Battery Calculator


// $("#solar-battery-calculator").validate({
//   rules: {
//     postcode: {
//       required: true,
//       digits: true,
//       minlength: 4,
//       maxlength: 4,
//       postcodeAvailable:true
//     },
//     e_daily_electricity_usage: {
//       required: true,
//       number: true,
//     },
//     e_duration:{
//       required: true,
//     },
//   },
//   messages: {
//     postcode: {
//       required: "Please enter your postcode.",
//       digits: "Please enter only numeric digits.",
//       minlength: "Please enter a valid postcode",
//       maxlength: "Please enter a valid postcode",
//       postcodeAvailable:'Please enter a valid postcode'

//   },
//   },
//   submitHandler: function (form) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     var formData = $(form).serialize();
//     // Send an AJAX request
//     $.ajax({
//       url: "/wp-admin/admin-ajax.php", // Change to your PHP script URL
//       type: "POST",
//       data: {
//         action: "result_calculation_for_solar_battery_calculator",
//         formData: formData,
//       },
//       success: function (response) {
       
//         var data = JSON.parse(response);
//       if(data.status === true){
//          jQuery('.anual_saving').text(data.anual_saving)
//         jQuery('.payback_period').text(data.payback_period)
//         jQuery('.twenty_five_year_saving').text(data.anual_saving)
//         jQuery('.total_system_cost').text(data.payback_period)
//         jQuery('.return_of_invest_ment').text(data.roi)
//         jQuery('.battery_capacity').text(data.battery_capacity)
//         jQuery('.solar_battery_cost').text(data.solar_battery_cost)
//         jQuery('.assumed_warranty').text(data.assumed_warranty)
//         jQuery('.new_average_bill').text(data.daily_solar_prod+' kWh')
//         jQuery('.daily_direct_solar_power').text(data.direct_solar_power+' kWh')
//         jQuery('.battary_powered').text(data.battery_powered+' kWh')
//         jQuery('.solar_powered').text(data.solar_powered)
//         jQuery('.fed_back_into_grid').text(data.fed_back_into_grid+' kWh')
//         jQuery('.solar_rebate').text(data.life_time_saving)
//         jQuery('.co2_emmision').text(data.co2_emmision)
//         jQuery('.trees_planed').text(data.trees_planed)
//         jQuery('.cars_off_the_road').text(data.cars_off_the_road)
//         jQuery('.offset_average_annual_footprint').text(data.offset_average_annual_footprint)
//         jQuery('.existing_quarterly_bill').text(data.graph.existing_quarterly_bill+' Existing quarterly bill')
//         jQuery('.new_quarterly_bill').text(data.graph.new_quarterly_bill+' New quarterly bill')
//         jQuery('.bill_savings').text(data.graph.bill_savings+' Bill savings')
        
//         if(currentStep==9)
//           {  
//           set_graph(data)
//           }
//         forward();
//       }
//         jQuery(".loader-outer").hide();
//       },
//       error: function (xhr, status, error) {
//         // Handle errors here
//         console.error(xhr.responseText);
//         jQuery(".loader-outer").hide();
//       },
//     });
//   },
// });

// $(".postcodevalid").click(function() {
//   if ($("#solar-battery-calculator").valid()) {
//          forward();
//            return true;
//   } 
// });

// $("#solar-off-frid-calculator").validate({
//   rules: {
//     postcode: {
//       required: true,
//       digits: true,
//       minlength: 4,
//       maxlength: 4,
//       postcodeAvailable:true
//     },
//     electricity: {
//       required: true,
//       number: true,
//     },
//     daystorage:{
//       number: true,
//     },
//     'backup-generator':{
//       number: true, 
//     },
//     'renable-source':{
//       number: true, 
//     }
//   },
//   messages: {
//     postcode: {
//       required: "Please enter your postcode.",
//       digits: "Please enter only numeric digits.",
//       minlength: "Please enter a valid postcode",
//       maxlength: "Please enter a valid postcode",
//       postcodeAvailable:'Please enter a valid postcode'

//   },
//   },
//   submitHandler: function (form) {
//     jQuery(".loader-outer").show();
//     jQuery(".loader-outer").css("display", "inline-flex");
//     var formData = $(form).serialize();
//     // Send an AJAX request
//     $.ajax({
//       url: "/wp-admin/admin-ajax.php", // Change to your PHP script URL
//       type: "POST",
//       data: {
//         action: "result_calculation_for_off_grid_calculator",
//         formData: formData,
//       },
//       success: function (response) {
//         var data = JSON.parse(response);
//       if(data.status === true){
//         jQuery('.battery_bank').text(data.battery_bank+' kWh')
//         jQuery('.amp_hours').text(data.amp_hours)
//         jQuery('.battery_capacity').text(data.battery_capacity)
//         jQuery('.storage_capacity').text(data.storage_capacity)
//         jQuery('.electricity_usage').text(data.electricity_usage)
//         jQuery('.solar_produced').text(data.solar_produced)
//         jQuery('.daily_electricity_usage').text(data.daily_electricity_usage)
//         jQuery('.solar_produced_winter').text(data.solar_produced_winter)
//         jQuery('.solar_produced_avag').text(data.solar_produced_avag)
//         jQuery('.system_size').text(data.system_size+' kW')
//         jQuery('.alter_native_source').text(data.alter_native_source)
//         jQuery('.back_up_generator').text(data.back_up_generator)
//         // jQuery('.fed_back_into_grid').text(data.fed_back_into_grid)
//         // jQuery('.solar_rebate').text(data.life_time_saving)
//          if(currentStep==8)
//           {  
//           set_graph(data)
//           }
//         forward();
//       }
//         jQuery(".loader-outer").hide();
//       },
//       error: function (xhr, status, error) {
//         // Handle errors here
//         console.error(xhr.responseText);
//         jQuery(".loader-outer").hide();
//       },
//     });
//   },
// });

// $(".vadidate-form").click(function() {
//   if ($("#solar-off-frid-calculator").valid()) {
//     jQuery('input[name="farward-status"]').val(true)
//          forward();
//            return true;
//   } 
// });

// $("#mail_result").validate({
//   rules: {
//     email: {
//       required: true,
//       email: true
//     }
//   },
//   messages: {
//     email: {
//       required: "Please enter your email",
//       email: "Please enter a valid email address"
//     }
//   },
//   submitHandler: function (form) {
  
//   },
// });


// Example: toggles and formatting untouched
function toogleStepClass() {
  if (currentStep > 1 && currentStep) {
    $('.step-toggle').hide()
  } else {
    $('.step-toggle').show()
  }
}

// Validation handlers without AJAX
$("#solar-panel-cost").validate({
  rules: {
    SystemSize: {
      required: true,
      number: true,
    },
    postCode: {
      required: true,
      number: true,
    },
  },
  messages: {
    SystemSize: {
      required: "Please enter your system size",
    },
    postCode: {
      required: "Please enter valid postcode",
    },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");
    
    // Simulate processing
    setTimeout(function () {
      jQuery("#PurchasePrice").text("$10000");
      jQuery("#LessRebate").text("$3000");
      jQuery("#NetCost").text("$7000");

      jQuery(".loader-outer").hide();
      forward(); // Go to the next step directly
    }, 1000);
  },
});

$("#solar-loan-cal").validate({
  rules: {
    LoanAmount: {
      required: true,
      number: true,
    },
    TermYears: {
      required: true,
      number: true,
    },
    Rate: {
      required: true,
      number: true,
    },
  },
  messages: {
    TermYears: {
      required: "Please enter valid year",
    },
    Rate: {
      required: "Please enter rate",
    },
  },
  submitHandler: function (e) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      jQuery("#MonthlyPayment").text("$500");
      jQuery("#AnnualRepayments").text("$6000");
      jQuery("#TotalInterestCost").text("$1000");

      jQuery(".loader-outer").hide();
      forward();
    }, 1000);
  },
});

$("#solar-electric-use-cal").validate({
  rules: {
    postCode: {
      required: true,
      number: true,
    },
    lastBill: {
      required: true,
      number: true,
    },
    Bill: {
      required: true,
    },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      jQuery("#DailyUsage").html("20 kWh");
      jQuery("#WinterUsage").html("<span>18 kWh</span><br><span class='perday'>per day</span>");
      jQuery("#SummerUsage").html("<span>22 kWh</span><br><span class='perday'>per day</span>");
      jQuery("#AutumnUsage").html("<span>19 kWh</span><br><span class='perday'>per day</span>");
      jQuery("#SpringUsage").html("<span>21 kWh</span><br><span class='perday'>per day</span>");

      jQuery(".loader-outer").hide();
      forward();
    }, 1000);
  },
});

$("#solar-system-size").validate({
  rules: {
    postCode: {
      required: true,
      number: true,
    },
    dailyUsage: {
      required: true,
      number: true,
    },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      jQuery("#dailySolarOutput").html('30.0 <span>kWh</span>');
      jQuery("#batterySize").html('10.0 <span>kWh</span>');
      jQuery("#solarSystemSize").text('6.6');

      jQuery(".loader-outer").hide();
      forward();
    }, 1000);
  },
});

$("#solarform").validate({
  rules: {
    first_name: { required: true },
    surname: { required: true },
    email: { required: true, email: true },
    phone_number: { required: true },
    street_addr: { required: true },
    suburb: { required: true },
    postcode: { required: true, digits: true, minlength: 4, maxlength: 4 },
    state: { required: true },
  },
  submitHandler: function (e) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
      jQuery(".info-step").hide();
    }, 1000);
  },
});

$("#off-grid").validate({
  rules: {
    first_name: { required: true },
    surname: { required: true },
    email: { required: true, email: true },
    phone_number: { required: true },
    street_addr: { required: true },
    suburb: { required: true },
    postcode: { required: true, digits: true, minlength: 4, maxlength: 4 },
    state: { required: true },
  },
  submitHandler: function (e) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
      jQuery(".info-step").hide();
    }, 1000);
  },
});

$("#battery-only").validate({
  rules: {
    first_name: { required: true },
    surname: { required: true },
    email: { required: true, email: true },
    phone_number: { required: true },
    street_addr: { required: true },
    suburb: { required: true },
    postcode: { required: true, digits: true, minlength: 4, maxlength: 4 },
    state: { required: true },
  },
  submitHandler: function (e) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
      jQuery(".info-step").hide();
    }, 1000);
  },
});

$("#main-calculator").validate({
  rules: {
    postcode: { required: true, digits: true, minlength: 4, maxlength: 4 },
    e_amount: { required: true, number: true },
    e_duration: { required: true },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
    }, 1000);
  },
});

$("#solar-battery-calculator").validate({
  rules: {
    postcode: { required: true, digits: true, minlength: 4, maxlength: 4 },
    e_daily_electricity_usage: { required: true, number: true },
    e_duration: { required: true },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
    }, 1000);
  },
});

$("#solar-off-frid-calculator").validate({
  rules: {
    postcode: { required: true, digits: true, minlength: 4, maxlength: 4 },
    electricity: { required: true, number: true },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
    }, 1000);
  },
});

$("#mail_result").validate({
  rules: {
    email: { required: true, email: true },
  },
  submitHandler: function (form) {
    jQuery(".loader-outer").show().css("display", "inline-flex");

    setTimeout(function () {
      forward();
      jQuery(".loader-outer").hide();
    }, 1000);
  },
});

// Example of validate click actions unchanged
$(".validate_address").click(function () {
  if ($("#solarform").valid()) {
    forward();
    return true;
  }
});
$(".validate_price").click(function () {
  if ($("#off-grid").valid()) {
    forward();
    return true;
  }
});
$(".validate_battery_only").click(function () {
  if ($("#battery-only").valid()) {
    forward();
    return true;
  }
});
$(".postcodevalid").click(function () {
  if ($("#solar-battery-calculator").valid()) {
    forward();
    return true;
  }
});
$(".postcode-valid").click(function () {
  if ($("#main-calculator").valid()) {
    forward();
    return true;
  }
});
$(".vadidate-form").click(function () {
  if ($("#solar-off-frid-calculator").valid()) {
    jQuery('input[name="farward-status"]').val(true);
    forward();
    return true;
  }
});
