//Check for Cherries Explotion
function checkCherries() {
    for (let i = 0; i < cherries.length; i++) {
        cherries[i].checkZombiesAround(i);
    }
}