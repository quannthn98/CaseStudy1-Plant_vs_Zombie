let cooldown0Min = 0;
let cooldown0Max = 10;
let currentCooldown0 = 0;
let cooldown1Min = 0;
let cooldown1Max = 10;
let currentCooldown1 = 0;
let cooldown2Min = 0;
let cooldown2Max = 10;
let currentCooldown2 = 0;

let isCooldown0 = false;
let isCooldown1 = false;
let isCooldown2 = false;

function reduceCooldown(){
    if (currentCooldown0 > 0){
        currentCooldown0--;
        console.log('Co the plant shooter sau ' + currentCooldown0)
    } else {
        console.log('can plant again')
        currentCooldown0 = 0
        isCooldown0 = false
    }
    if (currentCooldown1 > 0){
        currentCooldown1--;
        console.log('Co the plant sunF sau ' + currentCooldown1)
    } else {
        currentCooldown1 = 0
        isCooldown1 = false

    }if (currentCooldown2 > 0){
        currentCooldown2--;
        console.log('Co the plant Walls sau ' + currentCooldown2)
    } else {
        currentCooldown2 = 0
        isCooldown2 = false
    }
}