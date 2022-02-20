$(document).ready(function(){
    $('#One').click(function(){
      document.forms.display.value += 1;
    });
    $('#Two').click(function(){
      document.forms.display.value += 2;
    });
    $('#Three').click(function(){
      document.forms.display.value += 3;
    });
    $('#Four').click(function(){
      document.forms.display.value += 4;
    });
    $('#Five').click(function(){
      document.forms.display.value += 5;
    });
    $('#Six').click(function(){
      document.forms.display.value += 6;
    });
    $('#Seven').click(function(){
      document.forms.display.value += 7;
    });
    $('#Eight').click(function(){
      document.forms.display.value += 8;
    });
    $('#Nine').click(function(){
      document.forms.display.value += 9;
    });
    $('#Zero').click(function(){
      document.forms.display.value += 0;
    });
    $('#Add').click(function(){
      document.forms.display.value += '+';
    });
    $('#Subs').click(function(){
      document.forms.display.value += '-';
    });
    $('#Multi').click(function(){
      document.forms.display.value += '*';
    });
    $('#Divide').click(function(){
      document.forms.display.value += '/';
    });
    $('#Dot').click(function(){
      document.forms.display.value += '.';
    });
    $('#Equal').click(function(){
      if (display.value == "") {
        alert("Please enter any numbers to calculate!");
      }else{
        document.forms.display.value =
        eval(document.forms.display.value);
      }
    });
    $('#Clear').click(function(){
      document.forms.display.value = "";
    });
})