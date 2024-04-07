
// Calculate semester marks
function calculateMarks() {
  event.preventDefault();

  // Retrieve input values
  var course1 = parseFloat(document.getElementById('course1').value);
  var course2 = parseFloat(document.getElementById('course2').value);
  var course3 = parseFloat(document.getElementById('course3').value);
  var course4 = parseFloat(document.getElementById('course4').value);
  var course5 = parseFloat(document.getElementById('course5').value);
  var course6 = parseFloat(document.getElementById('course6').value);
  var course7 = parseFloat(document.getElementById('course7').value);
  var course8 = parseFloat(document.getElementById('course8').value);
  var course9 = parseFloat(document.getElementById('course9').value);
  var course10 = parseFloat(document.getElementById('course10').value);
  var course11 = parseFloat(document.getElementById('course11').value);
  var course12 = parseFloat(document.getElementById('course12').value);
  var course13 = parseFloat(document.getElementById('course13').value);

  // Perform the calculation
  var total = ((course1 + course2) / 2) * 3 + ((course3 + course4) / 2) * 3 + course5 + ((course6 + course7) / 2) * 3 + course8 + (course9 + course10) + course11 * 2 + course12 + course13;
  var average = total / 17;

  // Display the result
  document.getElementById('result').innerHTML = 'Your semester average is: ' + average.toFixed(2);
}
function switchToArabic() {
  window.location.href = "index_ar.html";
}
function switchToEnglish() {
  window.location.href = "index.html";
}




