"use strict";
function showRockets() {
    var rocket1 = new Rocket('32WESSDS', 3);
    var rocket2 = new Rocket('LDSFJA32', 6);
    var elementRocket1 = document.createElement('div');
    elementRocket1.textContent = "Rocket " + rocket1.code + " has " + rocket1.thrusters + " thrusters.";
    document.body.appendChild(elementRocket1);
    var elementRocket2 = document.createElement('div');
    elementRocket2.textContent = "Rocket " + rocket2.code + " has " + rocket2.thrusters + " thrusters.";
    document.body.appendChild(elementRocket2);
}
showRockets();
