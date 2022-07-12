function myFunction() {
  var name = document.getElementById("name");
  if (!name.value) {
    alert("All fields are compulsory");
    name.focus();
    return false;
  }
  var comment = document.getElementById("comment");
  if (!comment.value) {
    alert("All fields  are compulsory");
    comment.focus();
    return false;
  }
  if (
    document.getElementById("male").checked == false &&
    document.getElementById("female").checked == false
  ) {
    alert("All fields  are compulsory");
    document.forms["myform"].elements["gender"][0].focus();
    return false;
  }
}
