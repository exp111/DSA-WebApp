window.onload = function () {

    //Save & Edit functions
    var editlink = document.getElementById("editLink");
    var savelink = document.getElementById("saveLink");

    var stats = false;

    //Stats
    if (document.URL.indexOf("charStats.html") >= 0) {
        stats = true;
        var statsMU = document.getElementById("statsMU");
        var statsKL = document.getElementById("statsKL");
        var statsIN = document.getElementById("statsIN");
        var statsCH = document.getElementById("statsCH");
        var statsFF = document.getElementById("statsFF");
        var statsGE = document.getElementById("statsGE");
        var statsKO = document.getElementById("statsKO");
        var statsKK = document.getElementById("statsKK");
        //check for local storage -> input into textfield
    }

    editlink.onclick = function () {
        //Reset Links
        document.getElementById("editLinkLi").style.display = "none";
        document.getElementById("saveLinkLi").style.display = "block";
        //Disable write lock on the input fields

        //Stats
        if (stats) {
            statsMU.removeAttribute("readonly");
            statsKL.removeAttribute("readonly");
            statsIN.removeAttribute("readonly");
            statsCH.removeAttribute("readonly");
            statsFF.removeAttribute("readonly");
            statsGE.removeAttribute("readonly");
            statsKO.removeAttribute("readonly");
            statsKK.removeAttribute("readonly");
        }

        return false;
    }

    savelink.onclick = function () {
        //Reset Links
        document.getElementById("saveLinkLi").style.display = "none";
        document.getElementById("editLinkLi").style.display = "block";
        //Enable write lock again

        //Stats
        if (stats) {
            statsMU.setAttribute('readonly', 'readonly');
            statsKL.setAttribute('readonly', 'readonly');
            statsIN.setAttribute('readonly', 'readonly');
            statsCH.setAttribute('readonly', 'readonly');
            statsFF.setAttribute('readonly', 'readonly');
            statsGE.setAttribute('readonly', 'readonly');
            statsKO.setAttribute('readonly', 'readonly');
            statsKK.setAttribute('readonly', 'readonly');
        }

        //Save changes to local storage
        return false;
    }

    
}