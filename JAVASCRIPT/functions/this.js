const student = {
    name: "devesh",
    roll: 22216,
    eng: 50,
    math: 90,
    dsa: 100,
    getavg() {
        let avg = (this.eng + this.dsa + this.math) / 3; // fixed this.eng
        console.log("Average:", avg);
        console.log("Math marks:", this.math);
    }
};

student.getavg();
