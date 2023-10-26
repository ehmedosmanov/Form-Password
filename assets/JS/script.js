//#region Variables
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const userName = document.querySelector("#userName");
const btnSubmit = document.querySelector("#btnSubmit");
const tableBody = document.querySelector("tbody");
const lblDanger = document.querySelector(".lbl-danger");
//#endregion

//#region Form
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    const userNameValue = userName.value;
    if (
      userNameValue === "" ||
      confirmPasswordValue === "" ||
      passwordValue === ""
    ) {
      lblDanger.innerHTML = "Zehmet olmasa xanaları doldurun!";
    }
    else {
      if (passwordValue === confirmPasswordValue) {
          const createTableRow = document.createElement("tr");
          const userNameTd = document.createElement("td");
          if (userNameValue === "") {
            lblDanger.innerHTML = "Zehmet olmasa xanaları doldurun!";
          }
          userNameTd.textContent = userNameValue;
    
          console.log(createTableRow.appendChild(userNameTd));
          tableBody.appendChild(createTableRow);
        } else {
          lblDanger.innerHTML = "password eyni olmalidi";
        }
    }
     
  });
  
//#endregion