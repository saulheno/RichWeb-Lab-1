const add = document.querySelector(".addbutton"),
search = document.querySelector(".search"),
error = document.getElementById("error"),
contactarea = document.querySelector(".contactarea");
var counter = 0;
function checkNumber(number) {
    var check = /(?<!\d)\d{10}(?!\d)/;
    return check.test(number);
}

function checkName(name) {
    var check = /^[a-zA-Z0-9_ ]*$/;
    return check.test(name);
}

function checkEmail(email) {
    var check = /^\S+@\S+\.\S+$/;
    return check.test(email);
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector(".contactarea");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

function searchfunc() {
    var input, filter, table, tr, td, i, txt, hidden;
    hidden = 0;
    error.style.display = "none";
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.querySelector(".contactarea");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
              hidden = hidden + 1;
            }
        }
    }
    console.log(hidden)
    console.log(tr.length)
    if(hidden == tr.length - 1) {
        error.style.display = "block";
        console.log("In the check")
    }
    sortTable(1);
}


add.addEventListener("click", () => {
    var name = document.getElementById("name")
    var number = document.getElementById("number")
    var email = document.getElementById("email")
    if(!name.value || !number.value || !email.value) {
        alert("All fields must be populated!")
        name.value = ''
        number.value = ''
        email.value = ''
        return
    }

    if(!checkName(name.value) || name.value.length > 20){
        alert(name.value+" is not a valid name or is above 20 characters!")
        name.value = ''
        number.value = ''
        email.value = ''
    } else if(!checkNumber(number.value)) {
        alert(number.value+" is not a valid IRE phone number!")
        name.value = ''
        number.value = ''
        email.value = ''
    } else if(!checkEmail(email.value) || email.value.length > 40) {
        alert(email.value+" is not a valid email or is above 40 characters!")
        name.value = ''
        number.value = ''
        email.value = ''
    }
    counter = counter + 1;
    let contact = `
    <tr>
        <td>`+name.value+`</td>
        <td>`+number.value+`</td>
        <td>`+email.value+`</td>
    </tr>
    `
    
    contactarea.insertAdjacentHTML("beforeend", contact)
    if(!(counter%2 == 0)){
        var row = contactarea.getElementsByTagName("tr");
        row[counter].style.backgroundColor = "#f2f2f2";
    }
    name.value = ''
    number.value = ''
    email.value = ''
})
