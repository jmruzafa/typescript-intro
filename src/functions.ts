function printName(f, l){
    let greeting: string = "Hi there, ";
    console.log(greeting + f + " " + l);
}
printName("Javier", "Reyes");

function gradeGenerator(grade: number): string {
    if(grade < 60)
        return 'F';
    if(grade >= 60 && grade < 70)
        return 'D';
    if(grade >= 70 && grade < 80)
        return 'C';
    if(grade >= 80 && grade < 90)
        return 'B';
    return 'A'
}

console.log(gradeGenerator(45));
console.log(gradeGenerator(60));
console.log(gradeGenerator(75));
console.log(gradeGenerator(86));
console.log(gradeGenerator(95));