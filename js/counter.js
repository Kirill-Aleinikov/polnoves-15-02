$(document).ready(function() {
    var $plus = $(".plus");
    var $minus = $(".minus");
    var $input = $('.amount-input');
    var maxVal = Number($input.attr('max'))
  
    $plus.click(changeValue(1));
    $minus.click(changeValue(-1));
  
    function changeValue(step) {
      return function() {
        var currentVal = Number($input.val()) || 0;
        var newVal = currentVal + step;
        if (newVal > maxVal) {
          newVal = maxVal;
        }
        $input.val(newVal);
      }
    }
  });