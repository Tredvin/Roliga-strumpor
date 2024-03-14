function buildmenu() {
    // Definiera länkarna
    var links = [
        ["Startsida", "index.html"],
        ["Strumpguiden", "strumpguiden.html"],
        ["Strumpor med roliga mönster", "monster.html"],
        ["Galna strumpor", "koncept.html"],
        ["Om oss", "omoss.html"]
    ];

    var content = ""; // Variabel för att bygga menyinnehållet
    var currentLocation = window.location.pathname; // Hämta den aktuella sidans adress

    // Loopa genom länkarna
    for (var i = 0; i < links.length; i++) {
        var text = links[i][0]; // Hämta texten för länken
        var adress = links[i][1]; // Hämta adressen för länken

        // Kontrollera om länken är för den aktuella sidan
        if (adress !== currentLocation) {
            // Om länken inte är för den aktuella sidan, skapa en länk
            content = content + "<li><a href=\"" + adress + "\">" + text + "</a></li>";
        } else {
            // Om länken är för den aktuella sidan, bara lägg till texten utan länk
            content = content + "<li>" + text + "</li>"; 
        }
    }

    // Uppdatera menyn med innehållet
    document.getElementById("menu").innerHTML = content;

    const menuContainer = document.getElementById("menu");

    menuContainer.style.display = "flex";
    menuContainer.style.justifyContent = "center";
    menuContainer.style.alignItems = "center";
    
}

