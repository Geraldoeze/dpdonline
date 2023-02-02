
  function individualHandler() {
    window.location = "/signUp/Individual/index.html";
  }

  function addHyphen(element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split("-").join(""); // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/.{1}/g).join("-");
    document.getElementById(element.id).value = finalVal;
  }

//   function getImage (imgName) {
//     const newImage = imgName.replace(/^.*\\/, "")
//     const newIm = document.getElementById('output');
//     newIm.innerText = newImage
//   }
//   function getImage22 (imgName) {
//     const newImage = imgName.replace(/^.*\\/, "")
//     const newIm = document.getElementById('output22');
//     newIm.innerText = newImage
//   }


let idNumber = 0;
const visible = document.getElementById(`${idNumber}`);
visible.style.display = "block";

function changePage() {
  visible.style.display = "none";
  if (idNumber > 2) {
    console.log(idNumber)
    const prevPage = document.getElementById(`${idNumber}`);
    prevPage.style.display = 'none';
      idNumber = 0;
      const newPage = document.getElementById(`${idNumber}`);
    newPage.style.display = "block";
    return true;
  }
  if (idNumber <= 2) {
    console.log(idNumber)
    const prevPage = document.getElementById(`${idNumber}`);
    prevPage.style.display = 'none';
    idNumber++;
    const newPage = document.getElementById(`${idNumber}`);
    newPage.style.display = "block";
  }
}

function goBack() {
    if (idNumber <= 3) {
        console.log(idNumber)
      const prevPage = document.getElementById(`${idNumber}`);
      prevPage.style.display = 'none';
      idNumber--;
      const newPage = document.getElementById(`${idNumber}`);
      newPage.style.display = "block";
    }
}
function loginPage() {
  window.location = "/login/index.html";
}