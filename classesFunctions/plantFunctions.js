// Find zombies and attack
function detectZombies() {
    for (let i = 0; i < plants.length; i++) {
        plants[i].detectZombies();
    }
}