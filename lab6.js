let saveBtn = document.getElementById("saveBtn");
let showBtn = document.getElementById("showBtn");
let result = document.getElementById("result");

saveBtn.addEventListener("click", function () {
    let name = document.getElementById("name").value;

    // localStorage-д хадгалах
    localStorage.setItem("studentName", name);

    alert("Амжилттай хадгаллаа!");
});

showBtn.addEventListener("click", function () {
    // localStorage-оос авах
    let savedName = localStorage.getItem("studentName");

    result.innerHTML = "Хадгалсан нэр: " + savedName;
});