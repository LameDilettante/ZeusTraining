function myFunction() {
  var name = document.forms["form"]["name_1"].value;
  if (name == "") {
    alert("All fields are compulsory");
    return false;
  }
  var comment = document.getElementById("comment_1").value;
  if (comment == "") {
    alert("All fields  are compulsory");
    return false;
  }
  if (
    document.getElementById("GenderM").checked == true ||
    document.getElementById("GenderF").checked == true
  ) {
  } else {
    alert("All fields  are compulsory");
    return false;
  }
}
