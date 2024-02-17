const loginForm = document.querySelector(".login-form");
const inp_username = document.querySelector("#Username");
const inp_password = document.querySelector("#Password");
const userlabel = document.querySelector("#userlabel");
const passlabel = document.querySelector("#passlabel");
const selectlabel = document.querySelector("#selectlabel");

function coloruserLabel() {
  inp_username.style.border = "3px solid yellow";
  userlabel.style.textAlign = "center";
  userlabel.style.color = "gold";
}

function colorpassLabel() {
  inp_password.style.border = "3px solid gold";
  passlabel.style.textAlign = "center";
  passlabel.style.color = "yellow";
}

const checkUser = (inputObj) => {
  const Username = inputObj["Username"].trim();
  if (
    Username === "" ||
    Username.includes(" ") ||
    Username.length <= 3 ||
    !isNaN(parseInt(Username.charAt(0), 10))
  ) {
    coloruserLabel();
    userlabel.textContent = `กรุณาป้อนข้อมูลผู้ใช้! ห้ามให้ชื่อมีช่องว่าง! ต้องมีมากกว่า 3 ตัวอักษร! ห้ามใช้ชื่อที่มีตัวเลขขึ้นต้น!`;
  } else {
    checkPass(inputObj);
    userlabel.textContent = ``;
    inp_username.style.border = "none";
    return Username;
  }
};

const checkPass = (inputObj) => {
  const Password = inputObj["Password"];

  const hasNumber = /\d/.test(Password);
  const hasLetter = /[a-zA-Z]/.test(Password);

  if (
    Password === "" ||
    Password.includes(" ") ||
    Password.length <= 4 ||
    !(hasNumber && hasLetter)
  ) {
    colorpassLabel();
    passlabel.textContent = `กรุณาป้อนรหัสผ่าน! ห้ามให้รหัสมีช่องว่าง! รหัสต้องมีมากกว่า 4 ตัวอักษร และต้องประกอบด้วยทั้งตัวเลขและตัวอักษร!`;
  } else {
    checkRole(inputObj);
    passlabel.textContent = ``;
    inp_password.style.border = "none";
    return Password;
  }
};

const checkRole = (inputObj) => {
  const Username = inputObj["Username"];
  const Password = inputObj["Password"];
  const role = inputObj["role"];

  if (role === "Select Role") {
    selectlabel.style.textAlign = "center";
    selectlabel.style.color = "Gold";
    selectlabel.textContent = `โปรดเลือกหน้าที่!`;
    return;
  }
  selectlabel.textContent = ``;
  alert(
    "ข้อมูลที่คุณป้อนมาได้แก่" +
      "\nUsername : " +
      Username +
      "\nPassword : " +
      Password +
      "\nrole : " +
      role
  );
  location.href = "https://example.com";
};

const validateInput = (inputObj) => {
  checkUser(inputObj);
};

const hdlLogin = (event) => {
  event.preventDefault();
  let inputObj = {};
  for (let event of loginForm.elements) {
    inputObj[event.id] = event.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);