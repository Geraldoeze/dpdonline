function myFunction() {
  var x = document.getElementById("passwordId");
  var z = document.getElementById("showP");

  if (x.type === "password") {
    x.type = "text";
    z.innerText = "hide";
  } else {
    x.type = "password";
    z.innerText = "show";
  }
}

// toggle show for match
function toogleshow() {
    var x = document.getElementById("matchPass");
    var z = document.getElementById("showPass");
  
    if (x.type === "password") {
      x.type = "text";
      z.innerText = "hide";
    } else {
      x.type = "password";
      z.innerText = "show";
    }
  }

function getVal(element) {
  const vass = document.getElementById(element.id)?.value;
  const ele = document.getElementById("textIcon");
  if (vass?.length >= 0) {
    ele.style.visibility = "hidden";
  }
  if (vass?.length >= 5) {
    console.log(vass.length);
    ele.style.visibility = "visible";

    const validate = CheckPassword(vass);
    if (validate && vass?.length > 7) {
        ele.innerHTML = "<div style='color:#C2C600; width:100%; overflow: hidden; font-size:12px;' >Average<img style='margin-left:8px' src='/images/passIcon/yellow.png' alt=','</div>";
    } else {
      ele.innerHTML = "<div style='color:#FF0202; width:100%; font-size:12px;' >Weak<img style='margin-left:8px' src='/images/passIcon/red.png' alt=','</div>";
    }
    if (validate && vass?.length > 10) {
        ele.innerHTML = "<div style='color:#4000ff; width:100%; overflow: hidden; font-size:12px;' >Strong<img style='margin-left:8px' src='/images/passIcon/purple.png' alt=','</div>";
    }
    if (validate && vass?.length > 12) {
        ele.innerHTML = "<div style='color:#38C000; width:100%;overflow: hidden; font-size:12px;' >Excellent<img style='margin-left:8px' src='/images/passIcon/green.png' alt=','</div>";
    }


  }

  // console.log(vass)/
}

// function addHyphen (element) {
//     let ele = document.getElementById(element.id);
//       ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

//       let finalVal = ele.match(/.{1}/g).join('-');
//       document.getElementById(element.id).value = finalVal;
//   }

// numeric digit uppercase nd lowercase
function CheckPassword(inputtxt) {
  // var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,20}$/;
  var passw = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );
  if (inputtxt.match(passw)) {
    return true;
  } else {
    return false;
  }
}


// match re enter Password

function confirmPass (element) {
    var x = document.getElementById("passwordId")?.value;
    var A = document.getElementById(element.id).value
    const ele = document.getElementById("textCons");
    if (x != A) {
        console.log('E no match')
        if (A?.length >= 5) {
            console.log(A.length);
            ele.style.visibility = "visible";
            ele.innerHTML = "<div style='color:#FF0202; width:100%; font-size:12px;' >Wrong<img style='margin-left:8px' src='/images/passIcon/red.png' alt=','</div>";
        }    
    } else {
        if (A?.length >= 5) {
        console.log(A.length);
        ele.style.visibility = "visible";
    
        const validate = CheckPassword(A);
        if (validate && A?.length > 7) {
            ele.innerHTML = "<div style='color:#C2C600; width:100%; overflow: hidden; font-size:12px;' >Average<img style='margin-left:8px' src='/images/passIcon/yellow.png' alt=','</div>";
        } else {
          ele.innerHTML = "<div style='color:#FF0202; width:100%; font-size:12px;' >Weak<img style='margin-left:8px' src='/images/passIcon/red.png' alt=','</div>";
        }
        if (validate && A?.length > 10) {
            ele.innerHTML = "<div style='color:#4000ff; width:100%; overflow: hidden; font-size:12px;' >Strong<img style='margin-left:8px' src='/images/passIcon/purple.png' alt=','</div>";
        }
        if (validate && A?.length > 12) {
            ele.innerHTML = "<div style='color:#38C000; width:100%;overflow: hidden; font-size:12px;' >Excellent<img style='margin-left:8px' src='/images/passIcon/green.png' alt=','</div>";
        }
    }   
    }
    
}