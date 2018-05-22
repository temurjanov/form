// function formValidation(oEvent) {
//     oEvent = oEvent || window.event;
//     var txtField = oEvent.target || oEvent.srcElement;

//     var t1ck = true;
//     var msg = " ";
//     if (document.getElementById("t1").value.length < 3) {
//         t1ck = false;
//         // msg = msg + "Your name should be minimun 3 char length<br>";
//     }
//     if (!document.getElementById("r1").checked && !document.getElementById("r2").checked) {
//         t1ck = false;
//         // msg = msg + " Select your Gender<br>";
//     }
//     if (document.getElementById("s1").value.length < 3) {
//         t1ck = false;
//         // msg = msg + " Select one of the games <br>";
//     }
//     if (!document.getElementById("c1").checked) {
//         t1ck = false;
//         // msg = msg + " You must agree to terms & conditions<br> ";
//     }

//     // alert(msg + t1ck);

//     if (t1ck) {
//         document.getElementById("btnSignUp").disabled = false;
//         // msg = msg + " <b> Submit Button is enabled </b>";
//     } else {
//         document.getElementById("btnSignUp").disabled = true;
//         // msg = msg + " <b> Submit Button is disabled </b>";
//     } 
//     document.getElementById('my_msg').innerHTML = msg;
// }

// function resetForm() {
//     document.getElementById("btnSignUp").disabled = true;
//     var frmMain = document.forms[0];
//     frmMain.reset();
// }

// window.onload = function() {
//     var btnSignUp = document.getElementById("btnSignUp");
//     var btnReset = document.getElementById("btnReset");

//     var t1 = document.getElementById("t1");
//     var r1 = document.getElementById("r1");
//     var r2 = document.getElementById("r2");
//     var s1 = document.getElementById("s1");
//     var c1 = document.getElementById("c1");

//     var t1ck = false;
//     document.getElementById("btnSignUp").disabled = true;
//     t1.onkeyup = formValidation;
//     r1.onclick = formValidation;
//     r2.onclick = formValidation;
//     s1.onclick = formValidation;
//     c1.onclick = formValidation;
//     btnReset.onclick = resetForm;
// }