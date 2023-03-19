function showGrade() {
    // Get the value entered in the input field
    let mark = document.getElementById("mark").value;
    // Convert the value to a number
    mark = Number(mark);
    // Calculate the grade based on the mark
    let grade;
    if (mark > 79) {
      grade = "A";
    } else if (mark >= 60 && mark <= 79) {
      grade = "B";
    } else if (mark >= 50 && mark <= 59) {
      grade = "C";
    } else if (mark >= 40 && mark <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
    // Display the grade on the page
    document.getElementById("result").innerHTML = "The student's grade is: " + grade;
  }