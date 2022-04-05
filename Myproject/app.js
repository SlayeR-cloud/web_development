// saving data in the table

var nameForm;
var lastNameForm;
var emailForm;
var phoneForm;
var addressForm;
var bornDateForm;
var notesForm;

var tableForm = document.getElementById("table");
var button = document.getElementById("input_button");
var counter = 1;


button.addEventListener("click", getFormData);

function getFormData() {
    // Saving Data

    if (isDataOK){
        nameForm = document.getElementById('input_name').value;
        lastNameForm = document.getElementById('input_lname').value;
        emailForm = document.getElementById('input_email').value;
        phoneForm = document.getElementById('input_phone').value;
        addressForm = document.getElementById('input_address').value;
        bornDateForm = document.getElementById('input_birthday').value;
        notesForm = document.getElementById('input_notes').value;

        fillRow(counter);
        cleanFields();
    }else{
        alert("Hey there's something you're missing, take a" 
        + " look!")
    }

}

function fillRow(rowNumber){
    var tableNewRow = tableForm.insertRow(rowNumber);

    addColumnAndValue(0, nameForm, tableNewRow);
    addColumnAndValue(1, lastNameForm, tableNewRow);
    addColumnAndValue(2, emailForm, tableNewRow);
    addColumnAndValue(3, phoneForm, tableNewRow);
    addColumnAndValue(4, addressForm, tableNewRow);
    addColumnAndValue(5, bornDateForm, tableNewRow);
    addColumnAndValue(6, notesForm, tableNewRow);
    addColumnAndValue(7, '<input id="delete_button" type="button" onclick="deleteRow(this)" value="Delete">', tableNewRow);
    counter++;
}

function addColumnAndValue(columnNumber, columnValue, tableRowToAdd){
    var newRow = tableRowToAdd.insertCell(columnNumber);
    newRow.innerHTML = columnValue;
}

function deleteRow(rowNumber){
    tableForm.deleteRow(rowNumber.parentNode.parentNode.rowIndex);
    counter--;
}

function isDataOK(){
    if (nameForm == "" || lastNameForm == "" || emailForm == "" || 
    phoneForm == "" || addressForm == ""){
        return false;
    }else{
        return true;
    }
}

function cleanFields(){
    nameForm.value = "";
    lastNameForm.value = "";
    emailForm.value = "";
    phoneForm.value = "";
    addressForm.value = "";
    bornDateForm.value = "";
    notesForm.value = "";
}
