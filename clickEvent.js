canvas1.addEventListener('click', startGame, false);//Click on secondary canvas to start game


//Click event of main Canvas
function clickEvent(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let id;
    let selectedZone;
    getClickedZone();
    console.log(x + '/' + y)

    function getClickedZone() {

        for (let i = 0; i < zones.length; i++) {

            if (x > zones[i].x && x < zones[i].x + zones[i].width && y > zones[i].y && y < zones[i].y + zones[i].height) {
                selectedZone = zones[i];
                id = i;
                console.log(selectedZone.x + ',' + selectedZone.y + ',' + selectedZone.available);
                break;
            }

        }

    }

    if (isPlantSelected) {

        if (selectedZone.available === true) {

            switch (selected) {

                case 0:
                    if (balance >= 100 && !isCooldownShooter) {
                        plants.push(new Plant(selectedZone, id));
                        balance -= 100;
                        selectedZone.available = false;
                        isCooldownShooter = true;
                        currentCooldownShooter = cooldownShooterMax;
                    }
                    break;

                case 1:
                    if (balance >= 50 && !isCooldownSunFlower) {
                        sunFlowers.push(new SunFlower(selectedZone, id));
                        balance -= 50;
                        spawnSun += 500;
                        sunFlowerMark++;
                        selectedZone.available = false;
                        isCooldownSunFlower = true;
                        currentCooldownSunFlower = cooldownSunFlowerMax;
                    }
                    break;

                case 2:
                    if (balance >= 50 && !isCooldownWall) {
                        walls.push(new Wall(selectedZone, id));
                        balance -= 50;
                        selectedZone.available = false;
                        isCooldownWall = true;
                        currentCooldownWall = cooldownWallMax;
                    }
                    break;

                case 3:
                    if (balance >= 150 && !isCooldownCherry) {
                        cherries.push(new CherryBomb(selectedZone, id));
                        balance -= 50;
                        selectedZone.available = false;
                        isCooldownCherry = true;
                        currentCooldownCherry = cooldownCherryMax;
                    }
                    break;

            }
            plantSound.play();
            isPlantSelected = false;
            unHighlightSelected(selected);
        }

    } else if (isRemoveSelected) {

        for (let j = 0; j < defenders.length; j++) {
            for (let k = 0; k < defenders[j].length; k++) {
                if (defenders[j][k].zoneId === id) {
                    defenders[j][k].remove(k);
                    removeSound.play();
                }
                isRemoveSelected = false;
            }
        }

    } else if (isGameStarted) {

        if (x > 1090 && x < 1260 && y > 77 && y < 120) {

            playGround.stop();
            isGamePaused = true;
            ctx.drawImage(resumeButton, 300, 50, 800, 600)

        } else if (x > 1090 && x < 1260 && y > 132 && y < 174) {

            playGround.stop();
            isRestartClicked = true;
            ctx.drawImage(confirmReset, 400, 50, 600, 500)

        }

    } else if (isGamePaused) {

        if (x > 545 && x < 845 && y > 478 && y < 518) {
            startGame();
            isGamePaused = false;
        }

    } else if (!isGameStarted) {

        if (x > 1090 && x < 1260 && y > 17 && y < 65) {
            startGame();

        } else if (isRestartClicked) {

            if (x > 546 && x < 653 && y > 338 && y < 468) {
                restartGame();
                startGame();
            } else if (x > 744 && x < 848 && y > 338 && y < 468) {
                startGame();
            }

        } else if (isGameEnded) {

            if (x > 1090 && x < 1260 && y > 132 && y < 174) {
                restartGame();
                startGame();
            }
        }
    }
}