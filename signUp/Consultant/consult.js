let idNumber = 0;
const visible = document.getElementById(`${idNumber}`);
visible.style.display = "block";

function changePage(th) {
  visible.style.display = "none";
  if (idNumber > 5) {
    const prevPage = document.getElementById(`${idNumber}`);
    prevPage.style.display = 'none';
      idNumber = 0;
      const newPage = document.getElementById(`${idNumber}`);
    newPage.style.display = "block";
    return true;
  }
  if (idNumber <= 5) {
      console.log(idNumber)
    const prevPage = document.getElementById(`${idNumber}`);
    prevPage.style.display = 'none';
    idNumber++;
    const newPage = document.getElementById(`${idNumber}`);
    newPage.style.display = "block";
  }
}

function goBack() {
    if (idNumber <= 6) {
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

function addHyphen (element) {
    let ele = document.getElementById(element.id);
      ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

      let finalVal = ele.match(/.{1}/g).join('-');
      document.getElementById(element.id).value = finalVal;
  }