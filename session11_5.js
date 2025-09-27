let weight = Number(prompt("Cân nặng (kg):"));
let height = Number(prompt("Chiều cao (m):"));
let bmi = weight / (height * height);
let message = "Chỉ số BMI của bạn là: " + bmi.toFixed(2) + "\n";
if (bmi<18.5) {
    message += "Phân loại: Cân nặng thấp (gầy)";
} else if (bmi < 24.9) {
    message += "Phân loại: Bình thường";
} else if (bmi <= 29.9) {
    message += "Phân loại: Tiền béo phì";
} else if (bmi <= 34.9) {
    message += "Phân loại: Béo phì độ I";
} else if (bmi <= 39.9) {
    message += "Phân loại: Béo phì độ II";
} else if (bmi >=40) {
    message += "Phân loại: Béo phì độ III";
}
    
alert(message);

