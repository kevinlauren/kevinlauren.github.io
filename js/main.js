(function($){"use strict";$('.validate-input .input').each(function(){$(this).on('blur',function(){if(validate(this)==!1){showValidate(this)}
else{$(this).parent().addClass('true-validate')}})})
var input=$('.validate-input .input');$('.validate-form').on('submit',function(){var check=!0;for(var i=0;i<input.length;i++){if(validate(input[i])==!1){showValidate(input[i]);check=!1}}
return check});$('.validate-form .input').each(function(){$(this).focus(function(){hideValidate(this);$(this).parent().removeClass('true-validate')})});function validate(input){if($(input).attr('type')=='email'||$(input).attr('name')=='email'){if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)==null){return!1}}
else{if($(input).val().trim()==''){return!1}}}
function showValidate(input){var thisAlert=$(input).parent();$(thisAlert).addClass('alert-validate');$(thisAlert).append('<span class="btn-hide-validate">&#xf00d;</span>')
$('.btn-hide-validate').each(function(){$(this).on('click',function(){hideValidate(this)})})}
function hideValidate(input){var thisAlert=$(input).parent();$(thisAlert).removeClass('alert-validate');$(thisAlert).find('.btn-hide-validate').remove()}})(jQuery)