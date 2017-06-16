window.onload = function () {

    //Save & Edit functions
    var editlink = document.getElementById("editLink");
    var savelink = document.getElementById("saveLink");

    var statsEnabled = false;
    var statsID = ["statsMU", "statsKL", "statsIN", "statsCH", "statsFF", "statsGE", "statsKO", "statsKK"];
    var statsValue = ["", "", "", "", "", "", "", ""]

    //local storage
    //stats
    if (!localStorage.statsValue) {
        localStorage.statsValue = [];
    }

    //Stats
    if (document.URL.indexOf("charStats.html") >= 0) {
        statsEnabled = true;
        var statsObjects = [];
        for (var i in statsID) {
            statsObjects[i] = document.getElementById(statsID[i]);
        }
        
        //check for local storage -> input into textfield
        for (var i in statsObjects) {
            if (isStat(localStorage.statsValue[i])) {
                statsObjects[i].value = localStorage.statsValue[i];
            }
        }
    }

    editlink.onclick = function () {
        //Reset Links
        document.getElementById("editLinkLi").style.display = "none";
        document.getElementById("saveLinkLi").style.display = "block";
        //Disable write lock on the input fields

        //Stats
        if (statsEnabled) {
            for (var i in statsObjects) {
                statsObjects[i].removeAttribute("readonly");
                if (!isStat(statsObjects[i].value)) {
                    statsObjects[i].value = "";
                }
            }
        }

        return false;
    }

    savelink.onclick = function () {
        //Reset Links
        document.getElementById("saveLinkLi").style.display = "none";
        document.getElementById("editLinkLi").style.display = "block";
        //Enable write lock again

        //Stats
        if (statsEnabled) {
            for (var i in statsObjects) {
                statsObjects[i].setAttribute('readonly', 'readonly');
            }
            //Save changes to local storage as array!
            for (var i in statsObjects) {
                saveNumberToLocalStorage(statsObjects[i], localStorage.statsValue[i]);
            }
        }

        return false;
    }
}

function saveNumberToLocalStorage(object, variable) {
    var value = object.value;
    if (isStat(value)) {
        variable = value;
    } else {
        if (object.value != "") {
            object.value = "Invalid Input";
        }
    }
}

function isStat(string) {
    var number = parseInt(string);
    if (!isNaN(number)) {
        if (number >= 0 && number % 1 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}