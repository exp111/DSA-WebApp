window.onload = function () {

    //Save & Edit functions
    var editlink = document.getElementById("editLink");
    var savelink = document.getElementById("saveLink");

    editlink.onclick = function () {
        //Reset Links
        document.getElementById("editLinkLi").style.display = "none";
        document.getElementById("saveLinkLi").style.display = "block";
        //Disable write lock on the input fields
        return false;
    }

    savelink.onclick = function () {
        //Reset Links
        document.getElementById("saveLinkLi").style.display = "none";
        document.getElementById("editLinkLi").style.display = "block";
        //Enable write lock again
        //Save changes to local storage
        return false;
    }
}