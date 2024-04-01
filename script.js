var parentdiv = document.createElement("div");
parentdiv.className = "main";

var input_date = document.createElement("input");
input_date.setAttribute("type", "date");
input_date.id = "dob";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click", displaydata);

var resultDiv = document.createElement("div");

parentdiv.append(input_date, button, resultDiv);
document.body.append(parentdiv);

function displaydata() {
  var input = document.getElementById("dob").value;

  if (Date.parse(input)) {
    var inputdate = new Date(input);
    var currentdate = new Date();
    var millisecdiff =
      parseInt(currentdate.getTime()) - parseInt(inputdate.getTime());
    var secdiff = Math.floor(millisecdiff / 1000);
    var mindiff = Math.floor(secdiff / 60);
    var hoursdiff = Math.floor(mindiff / 60);
    var daydiff = Math.floor(hoursdiff / 24);
    var yeardiff = currentdate.getFullYear() - inputdate.getFullYear();
    var monthdiff =
      yeardiff * 12 + (currentdate.getMonth() - inputdate.getMonth());

    // Display results in HTML
    resultDiv.innerHTML = `
            <p>Given input date is ${inputdate}</p>
            <p>Year: ${yeardiff}</p>
            <p>Month: ${monthdiff}</p>
            <p>Day: ${daydiff}</p>
            <p>Hour: ${hoursdiff}</p>
            <p>Minute: ${mindiff}</p>
            <p>Second: ${secdiff}</p>
            <p>Millisecond: ${millisecdiff}</p>
        `;
        
  } else {
    resultDiv.innerHTML = "Invalid date selected";
  }
}
