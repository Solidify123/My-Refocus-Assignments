


//Pulse oximeter reading(part1)

var oxygenlevel = 90

function oxygenreading(oxygenlevel){
    if (oxygenlevel >= 96) {
        console.log("Normal reading.")
    }

    else if (oxygenlevel == 95) {
        console.log("Acceptable to continue home monitoring.")
    }

    else if ( (oxygenlevel >= 93) && (oxygenlevel <= 94) ) {
        console.log("Seek advice from health professionals.")
    }

    else if (oxygenlevel <= 92) {
        console.log("Seek urgent medical advice.")
    }
}
    oxygenreading(oxygenlevel)