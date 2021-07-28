let cooldown0Max = 8;
let currentCooldown0 = 0;

let cooldown1Max = 5;
let currentCooldown1 = 0;

let cooldown2Max = 8;
let currentCooldown2 = 0;

let isCooldown0 = false;
let isCooldown1 = false;
let isCooldown2 = false;

let coolDownTime = [currentCooldown0, currentCooldown1, currentCooldown2]
let coolDownStatus = [isCooldown0, isCooldown1, isCooldown2]

// function reduceCooldown() {
//
//     for (let i = 0; i < coolDownTime.length; i++) {
//         if (coolDownTime[i] > 0) {
//             coolDownTime[i]-=1;
//         } else {
//             coolDownTime[i] = 0;
//             coolDownStatus[i] = false;
//         }
//     }
//     coolDownTime = [currentCooldown0, currentCooldown1, currentCooldown2]
//     coolDownStatus = [isCooldown0, isCooldown1, isCooldown2]
// }

function reduceCooldown() {
    if (currentCooldown0 > 0) {
        currentCooldown0--;
        console.log('Co the plant shooter sau ' + currentCooldown0)
    } else {
        console.log('can plant again')
        currentCooldown0 = 0
        isCooldown0 = false
    }
    if (currentCooldown1 > 0) {
        currentCooldown1--;
        console.log('Co the plant sunF sau ' + currentCooldown1)
    } else {
        currentCooldown1 = 0
        isCooldown1 = false

    }
    if (currentCooldown2 > 0) {
        currentCooldown2--;
        console.log('Co the plant Walls sau ' + currentCooldown2)
    } else {
        currentCooldown2 = 0
        isCooldown2 = false
    }
}

function restartCooldown() {
    cooldown0Max = 10;
    currentCooldown0 = 0;

    cooldown1Max = 10;
    currentCooldown1 = 0;

    cooldown2Max = 10;
    currentCooldown2 = 0;

    isCooldown0 = false;
    isCooldown1 = false;
    isCooldown2 = false;
}

