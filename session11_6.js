let a = Number(prompt("Nhập số a:"));
let b = Number(prompt("Nhập số b:"));
let operator = prompt("Nhập phép tính (+, - , *, /):");
let result;
switch (operator){
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        if (b!==0) {
            result = a/b;
        } else {
            result = "Không thể chia cho 0!";
        }
        break;
    default:
        result = "Phép tính không hợp lệ!";
}
if (typeof result === "number") {
    alert("Kết quả của phép tính trên: " + a +" "+ operator +" "+b+" = "+result);
} else {
    alert(result); 
}
