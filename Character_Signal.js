const transmission = "a7XZtGeo9Bc";
function analyzeFluxEvents(transmission) {
    let n = 1;
    for (let i = 0; i < transmission.length; i++) {
        const ascii = transmission[i];
        if(ascii>="A" && ascii<="Z"){
            n++
        }
    }
    if(n>0){
        return `Detected ${n} high-voltage anomalies in signal stream.`
    }
    else{
        return  "Stream stable: no dominant flux events recorded."
    }
}

console.log(analyzeFluxEvents(transmission));