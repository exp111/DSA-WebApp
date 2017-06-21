//Global Variables
//Misc
var editMode = false;
//Infos
var infosEnabled = false;
var infosID = ["infoName", "infoFamilie", "infoGeburtsort", "infoGeburtsdatum", "infoAlter", "infoGeschlecht", "infoSpezies", "infoGroesse", "infoGewicht", "infoHaarfarbe", "infoAugenfarbe", "infoKultur", "infoProfession", "infoTitel", "infoSozialstatus", "infoCharakteristika", "infoSonstiges"];
var infosValue = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

//Stats
var statsEnabled = false;
var statsID = ["statsMU", "statsKL", "statsIN", "statsCH", "statsFF", "statsGE", "statsKO", "statsKK"];
var statsValue = ["", "", "", "", "", "", "", ""];

//Skills
var skillsEnabled = false;
var skillsTableID = ["skillsKoerper", "skillsGesellschaft", "skillsNatur", "skillsWissen", "skillsHandwerk"];


var skillsKoerperNamen = ["Fliegen", "Gaukeleien", "Klettern", "Körperbe- herrschung", "Kraftakt", "Reiten", "Schwimmen", "Selbstbe- herrschung", "Singen", "Sinnesschärfe", "Tanzen", "Taschen- diebstahl", "Verbergen", "Zechen"];
var skillsKoerperP1 = ["MU", "MU", "MU", "GE", "KO", "CH", "GE", "MU", "KL", "KL", "KL", "MU", "MU", "KL"];
var skillsKoerperP2 = ["IN", "CH", "GE", "GE", "KK", "GE", "KO", "MU", "CH", "IN", "CH", "FF", "IN", "KO"];
var skillsKoerperP3 = ["GE", "FF", "KK", "KO", "KK", "KK", "KK", "KO", "KO", "IN", "GE", "GE", "GE", "KK"];
var skillsKoerperBE = ["J", "J", "J", "J", "J", "J", "J", "N", "NA", "NA", "J", "J", "J", "N"];
var skillsKoerperSF = ["B", "A", "B", "D", "B", "B", "B", "D", "A", "D", "A", "B", "C", "A"];
var skillsKoerperID = ["skillsFliegen", "skillsGaukeleien", "skillsKlettern", "skillsKorperbeherrschung", "skillsKraftakt", "skillsReiten", "skillsSchwimmen", "skillsSelbstbeherrschung", "skillsSingen", "skillsSinnesscharfe", "skillsTanzen", "skillsTaschendiebstahl", "skillsVerbergen", "skillsZechen"];
var skillsKoerperValue = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var skillsKoerperArrays = [skillsKoerperSF, skillsKoerperBE, skillsKoerperP3, skillsKoerperP2, skillsKoerperP1, skillsKoerperNamen];

var skillsGesellschaftNamen = ["Bekehren & Überzeugen", "Betören", "Einschüchtern", "Etikette", "Gassenwissen", "Menschen- kenntnis", "Überreden", "Verkleiden", "Willenskraft"];
var skillsGesellschaftP1 = ["MU", "MU", "MU", "KL", "KL", "KL", "MU", "IN", "MU"];
var skillsGesellschaftP2 = ["KL", "CH", "IN", "IN", "IN", "IN", "IN", "CH", "IN"];
var skillsGesellschaftP3 = ["CH", "CH", "CH", "CH", "CH", "CH", "CH", "GE", "CH"];
var skillsGesellschaftBE = ["N", "NA", "N", "NA", "NA", "N", "N", "NA", "N"];
var skillsGesellschaftSF = ["B", "B", "B", "B", "C", "C", "C", "B", "D"];
var skillsGesellschaftID = ["skillsBekehren", "skillsBetoren", "skillsEinschuchtern", "skillsEtikette", "skillsGassenwissen", "skillsMenschenkenntnis", "skillsUberreden", "skillsVerkleiden", "skillsWillenskraft"];
var skillsGesellschaftValue = ["", "", "", "", "", "", "", "", ""];
var skillsGesellschaftArrays = [skillsGesellschaftSF, skillsGesellschaftBE, skillsGesellschaftP3, skillsGesellschaftP2, skillsGesellschaftP1, skillsGesellschaftNamen];

var skillsNaturNamen = ["Fährtensuchen", "Fesseln", "Fischen & Angeln", "Orientierung", "Pflanzenkunde", "Tierkunde", "Wildnisleben"];
var skillsNaturP1 = ["MU", "KL", "FF", "KL", "KL", "MU", "MU"];
var skillsNaturP2 = ["IN", "FF", "GE", "IN", "FF", "MU", "GE"];
var skillsNaturP3 = ["GE", "KK", "KO", "IN", "KO", "CH", "KO"];
var skillsNaturBE = ["J", "NA", "NA", "N", "NA", "J", "J"];
var skillsNaturSF = ["C", "A", "A", "B", "C", "C", "C"];
var skillsNaturID = ["skillsFahrtensuchen", "skillsFesseln", "skillsFischen", "skillsOrientierung", "skillsPflanzenkunde", "skillsTierkunde", "skillsWildnisleben"];
var skillsNaturValue = ["", "", "", "", "", "", ""];
var skillsNaturArrays = [skillsNaturSF, skillsNaturBE, skillsNaturP3, skillsNaturP2, skillsNaturP1, skillsNaturNamen];

var skillsWissenNamen = ["Brett- & Glücksspiel", "Geographie", "Geschichtswissen", "Götter & Kulte", "Kriegskunst", "Magiekunde", "Mechanik", "Rechnen", "Rechtskunde", "Sagen & Legenden", "Sphärenkunde", "Sternkunde"];
var skillsWissenP1 = ["KL", "KL", "KL", "KL", "MU", "KL", "KL", "KL", "KL", "KL", "KL", "KL"];
var skillsWissenP2 = ["KL", "KL", "KL", "KL", "KL", "KL", "KL", "KL", "KL", "KL", "KL", "KL"];
var skillsWissenP3 = ["IN", "IN", "IN", "IN", "IN", "IN", "FF", "IN", "IN", "IN", "IN", "IN"];
var skillsWissenBE = ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"];
var skillsWissenSF = ["A", "B", "B", "B", "B", "C", "B", "A", "A", "B", "B", "A"];
var skillsWissenID = ["skillsBrett", "skillsGeographie", "skillsGeschichtswissen", "skillsGotter", "skillsKriegskunst", "skillsMagiekunde", "skillsMechanik", "skillsRechnen", "skillsRechtskunde", "skillsSagen", "skillsSpharenkunde", "skillsSternkunde"];
var skillsWissenValue = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
var skillsWissenArrays = [skillsWissenSF, skillsWissenBE, skillsWissenP3, skillsWissenP2, skillsWissenP1, skillsWissenNamen];

var skillsHandwerkNamen = ["Alchimie", "Boote & Schiffe", "Fahrzeuge", "Heilkunde Gift", "Heilkunde Krankheiten", "Heilkunde Seele", "Heilkunde Wunden", "Holzbear- beitung", "Lebensmittel- bearbeitung", "Malen & Zeichnen", "Metallbear- beitung", "Musizieren", "Schlösser- knacken", "Steinbear- beitung", "Stoffbear- beitung"];
var skillsHandwerkP1 = ["MU", "FF", "CH", "KL", "MU", "MU", "IN", "KL", "FF", "IN", "FF", "IN", "FF", "CH", "IN", "FF", "KL"];
var skillsHandwerkP2 = ["KL", "GE", "FF", "IN", "KL", "IN", "CH", "FF", "GE", "FF", "GE", "FF", "KO", "FF", "FF", "FF", "FF"];
var skillsHandwerkP3 = ["FF", "KK", "KO", "CH", "IN", "KO", "KO", "FF", "KK", "FF", "KO", "FF", "KK", "KO", "FF", "KK", "FF"];
var skillsHandwerkBE = ["J", "J", "J", "N", "J", "J", "N", "J", "J", "J", "J", "J", "J", "J", "J", "J", "J"];
var skillsHandwerkSF = ["C", "B", "A", "B", "B", "B", "B", "D", "B", "A", "B", "A", "C", "A", "C", "A", "A"];
var skillsHandwerkID = ["skillsAlchimie", "skillsBoote", "skillsFahrzeuge", "skillsHeilkundeGift", "skillsHeilkundeKrankheiten", "skillsHeilkundeSeele", "skillsHeilkundeWunden", "skillsHolzbearbeitung", "skillsLebensmittelbearbeitung", "skillsMalen", "skillsMetallbearbeitung", "skillsMusizieren", "skillsSchlosserknacken", "skillsSteinbearbeitung", "skillsStoffbearbeitung"];
var skillsHandwerkValue = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
var skillsHandwerkArrays = [skillsHandwerkSF, skillsHandwerkBE, skillsHandwerkP3, skillsHandwerkP2, skillsHandwerkP1, skillsHandwerkNamen];

var skillsArrays = [skillsKoerperArrays, skillsGesellschaftArrays, skillsNaturArrays, skillsWissenArrays, skillsHandwerkArrays];
var skillsID = [skillsKoerperID, skillsGesellschaftID, skillsNaturID, skillsWissenID, skillsHandwerkID];
var skillsValue = [skillsKoerperValue, skillsGesellschaftValue, skillsNaturValue, skillsWissenValue, skillsHandwerkValue];

//Inventar
var inventarEnabled = false;
var inventarRows = [5, 3, 3];
var inventarInputs = [3, 4, 6]
var inventarTableID = ["tableInventar", "tableRustung", "tableWaffen"];
var inventarValue = [[], [], []];
var inventarGeldID = ["inventarDukaten", "inventarSilber", "inventarHeller", "inventarKreuzer"];
var inventarGeldValue = [];

window.onload = function () {

    //Save & Edit functions
    var editlink = document.getElementById("editLink");
    var savelink = document.getElementById("saveLink");

    initLocalStorage();

    //infos
    if (document.URL.indexOf("charInfos.html") >= 0) {
        infosEnabled = true;
        var infosObjects = [];
        for (var i in infosID) {
            infosObjects[i] = document.getElementById(infosID[i]);
        }

        //check for local storage -> input into textfield
        if (localStorage.infosValue != "") {
            infosValue = JSON.parse(localStorage.infosValue);
            for (var i in infosObjects) {
                infosObjects[i].value = infosValue[i];
            }
        }
    }

    //Stats
    if (document.URL.indexOf("charStats.html") >= 0) {
        statsEnabled = true;
        var statsObjects = [];
        for (var i in statsID) {
            statsObjects[i] = document.getElementById(statsID[i]);
        }

        if (localStorage.statsValue != "") {
            statsValue = JSON.parse(localStorage.statsValue);
            for (var i in statsObjects) {
                if (isValidNumber(statsValue[i])) {
                    statsObjects[i].value = statsValue[i];
                }
            }
        }
    }

    //Skills
    if (document.URL.indexOf("charSkills.html") >= 0) {
        skillsEnabled = true;
        for (var i in skillsTableID) {
            var table = document.getElementById(skillsTableID[i]);
            for (var k in skillsArrays[i][5]) {
                var row = table.rows[(parseInt(k) + 1)];
                for (var l in skillsArrays[i]) {
                    var x = row.insertCell(0);
                    x.innerHTML = skillsArrays[i][l][k];
                }
            }
        }

        var skillsKoerperObjects = [];
        var skillsGesellschaftObjects = [];
        var skillsNaturObjects = [];
        var skillsWissenObjects = [];
        var skillsHandwerkObjects = [];
        var skillsObjects = [skillsKoerperObjects, skillsGesellschaftObjects, skillsNaturObjects, skillsWissenObjects, skillsHandwerkObjects];
        for (var i in skillsID) {
            for (var j in skillsID[i]) {
                skillsObjects[i][j] = document.getElementById(skillsID[i][j]);
            }
            if (localStorage.skillsValue != "") {
                skillsValue = JSON.parse(localStorage.skillsValue);
                for (var j in skillsObjects[i]) {
                    if (isValidNumber(skillsValue[i][j])) {
                        skillsObjects[i][j].value = skillsValue[i][j];
                    }
                }
            }
        }
    }

    //Inventar
    if (document.URL.indexOf("charInventar.html") >= 0) {
        inventarEnabled = true;
        //Tables
        var inventarTableObjects = [];
        for (var i in inventarTableID) {
            inventarTableObjects[i] = document.getElementById(inventarTableID[i]);
        }
        //Geld
        var inventarGeldObjects = [];
        for (var i in inventarGeldID) {
            inventarGeldObjects[i] = document.getElementById(inventarGeldID[i]);
        }
        if (localStorage.inventarGeldValue != "") {
            inventarGeldValue = JSON.parse(localStorage.inventarGeldValue);
            for (var i in inventarGeldObjects) {
                if (isValidNumber(inventarGeldValue[i])) {
                    inventarGeldObjects[i].value = inventarGeldValue[i];
                }
            }
        }

        //CheckInvRows
        if (localStorage.inventarRows != "" && localStorage.inventarRows != inventarRows) {
            inventarRows = JSON.parse(localStorage.inventarRows);
        }

        for (var i in inventarTableObjects) {
            //Insert Rows
            for (var j = 0; j < inventarRows[i]; j++) {
                tableAddRowWithInputs(inventarTableObjects[i], inventarInputs[i]);
            }
            //Insert Values
            if (localStorage.inventarValue != "") {
                inventarValue = JSON.parse(localStorage.inventarValue);
                for (var i in inventarTableObjects) {
                    var inputs = inventarTableObjects[i].getElementsByTagName("input");
                    for (var j in inputs) {
                        if (inventarValue[i][j] == undefined) {
                            inventarValue[i][j] = "";
                        }
                         inputs[j].value = inventarValue[i][j];
                    }
                }
            }
        }
    }

    editlink.onclick = function () {
        editMode = true;
        //Reset Links
        document.getElementById("editLinkLi").style.display = "none";
        document.getElementById("saveLinkLi").style.display = "block";
        //Disable write lock on the input fields

        //Infos
        if (infosEnabled) {
            ObjectsRemoveAttribute(infosObjects, "disabled");
        }

        //Stats
        if (statsEnabled) {
            ObjectsRemoveAttribute(statsObjects, "disabled");
            for (var i in statsObjects) {
                if (!isValidNumber(statsObjects[i].value)) {
                    statsObjects[i].value = "";
                }
            }
        }

        //Skills
        if (skillsEnabled) {
            for (var i in skillsObjects) {
                ObjectsRemoveAttribute(skillsObjects[i], "disabled");
                for (var j in skillsObjects[i]) {
                    if (!isValidNumber(skillsObjects[i][j].value)) {
                        skillsObjects[i][j].value = "";
                    }
                }
            }
        }

        //Inventar
        if (inventarEnabled) {
            TablesRemoveAttribute(inventarTableObjects, "disabled");
            ObjectsRemoveAttribute(inventarGeldObjects, "disabled");
            for (var i in inventarGeldObjects) {
                if (!isValidNumber(inventarGeldObjects[i].value)) {
                    inventarGeldObjects[i].value = "";
                }
            }
        }

        return false;
    }

    savelink.onclick = function () {
        editMode = false;
        //Reset Links
        document.getElementById("saveLinkLi").style.display = "none";
        document.getElementById("editLinkLi").style.display = "block";
        //Enable write lock again

        //Infos
        if (infosEnabled) {
            ObjectsSetAttribute(infosObjects, "disabled", "disabled");
            for (var i in infosObjects) {
                infosValue[i] = infosObjects[i].value;
            }
            localStorage.infosValue = JSON.stringify(infosValue);
        }

        //Stats
        if (statsEnabled) {
            ObjectsSetAttribute(statsObjects, "disabled", "disabled");
            for (var i in statsObjects) {
                statsValue[i] = getNumberInput(statsObjects[i]);
            }
            localStorage.statsValue = JSON.stringify(statsValue);
        }

        //Skills
        if (skillsEnabled) {
            for (var i in skillsObjects) {
                ObjectsSetAttribute(skillsObjects[i], "disabled", "disabled");
                for (var j in skillsObjects[i]) {
                    skillsValue[i][j] = getNumberInput(skillsObjects[i][j]);
                } 
            }
            localStorage.skillsValue = JSON.stringify(skillsValue);
        }

        //Inventar
        if (inventarEnabled) {
            //Tables
            TablesSetAttribute(inventarTableObjects, "disabled", "disabled");
            for (var i in inventarTableObjects) {
                var inputs = inventarTableObjects[i].getElementsByTagName("input");
                for (var j = 0; j < inputs.length; j++) {
                    inventarValue[i][j] = inputs[j].value;
                }
            }
            localStorage.inventarValue = JSON.stringify(inventarValue);
            //Geld
            ObjectsSetAttribute(inventarGeldObjects, "disabled", "disabled");
            calculateMoney(inventarGeldObjects);
            for (var i in inventarGeldObjects) {
                inventarGeldValue[i] = getNumberInput(inventarGeldObjects[i]);
            }
            localStorage.inventarGeldValue = JSON.stringify(inventarGeldValue);
        }

        return false;
    }
}

function ObjectsRemoveAttribute(objects, attribute) {
    for (var i in objects) {
        objects[i].removeAttribute(attribute);
    }
}

function ObjectsSetAttribute(objects, attribute, value) {
    for (var i in objects) {
        objects[i].setAttribute(attribute, value);
    }
}

function TablesRemoveAttribute(objects, attribute) {
    for (var i in objects) {
        var inputs = objects[i].getElementsByTagName("input");
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].removeAttribute(attribute);
        }
    }
}

function TablesSetAttribute(objects, attribute, value) {
    for (var i in objects) {
        var inputs = objects[i].getElementsByTagName("input");
        for (var j = 0; j < inputs.length; j++) {
            inputs[j].setAttribute(attribute, value);
        }
    }
}

function getNumberInput(object) {
    var value = object.value;
    if (isValidNumber(value)) {
        return value;
    } else {
        if (value != "") {
            object.value = parseInt(value);
            return parseInt(value);
        } else {
            return "";
        }
    }
}

function isValidNumber(string) {
    var number = parseFloat(string);
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

//Import/Export Stuff
function importLocalStorage() {
    input = document.getElementById("localStorageField");
    var storage = JSON.parse(input.value);
    for (var i in storage) {
        localStorage.setItem(i, storage[i]);
    }
}

function exportLocalStorage() {
    output = document.getElementById("localStorageField");
    output.value = JSON.stringify(localStorage);
}

function tableAddRowWithInputs(table, inputCount) {
    var row = table.insertRow(-1);
    var rowContent = "";
    var disabled = "";
    for (var i = 0; i < inputCount; i++) {
        if (editMode == false) {
            disabled = " disabled"
        }
        rowContent = rowContent + '<td><input type="text" class="form-control"' + disabled + '></td > ';
    }
    row.innerHTML = rowContent;
}

function increasedTableRows(tableID) {
    for (var i in inventarTableID) {
        if (inventarTableID[i] == tableID) {
            if (localStorage.inventarRows != "") {
                inventarRows = JSON.parse(localStorage.inventarRows);
            }
            inventarRows[i] = inventarRows[i] + 1;
            localStorage.inventarRows = JSON.stringify(inventarRows);

        }
    }
}

function initLocalStorage() {
    //local storage
    //infos
    if (!localStorage.infosValue) {
        localStorage.infosValue = [];
    }
    //stats
    if (!localStorage.statsValue) {
        localStorage.statsValue = [];
    }
    //skills
    if (!localStorage.skillsValue) {
        localStorage.skillsValue = [];
    }
    //inventar
    if (!localStorage.inventarValue) {
        localStorage.inventarValue = [];
    }
    if (!localStorage.inventarRows) {
        localStorage.inventarRows = [];
    }
    if (!localStorage.inventarGeldValue) {
        localStorage.inventarGeldValue = [];
    }
    
}

function calculateMoney(objects) {
    var rest = 0;
    for (var i in objects) {
        if (objects[i].value == "") {
            objects[i].value = 0;
        }
    }
    for (var i = (objects.length - 1); i > 0; i--) {
        var geld = parseInt(objects[i].value);
        if (geld >= 10) {
            var geld2 = parseInt(objects[i - 1].value);
            rest = (geld % 10);
            geld2 = geld2 + ((geld - rest) / 10);
            objects[i].value = rest;
            objects[i - 1].value = geld2;
        }
    }
}