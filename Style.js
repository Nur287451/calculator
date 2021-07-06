function insertNumbers(numbers){
  var existingNumbers= $("#result").val();
  $("#result").val(existingNumbers+ numbers);
  }
  function clearResult(){
    $("#result").val('');
  }
  function calculate(){
  var Result= eval($("#result").val());
  $("#result").val(Result);
  }function deleteNumber(){
  var presentNumbers= $("#result").val();
  if(presentNumbers!=''){
  $("#result").val($("#result").val().slice(0,-1));
  }
  }
  