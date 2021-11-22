// Boolean
let paid: boolean = true;

// Number
let age: number = 48;
var taxRate: number = 7.5;

// String
var fullName: string = "Javier Reyes";

// Array
var ages: number[] = [33, 28, 40];

// Tuple
let player: [number, string, number, number];
player = [3, "Messi",.445,45];

// Enum 
enum ApprovalStatus {Approved, Pending, Rejected};
let job: ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData: any[] = [4434, 'Javier Reyes',false];

// Void
function printOut(msg: string) : void{
    console.log(msg);
}
