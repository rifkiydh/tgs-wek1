function getData() {
    let nama = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let number = document.getElementById("numberInput").value;
    let position = document.getElementById("position").value;
    let addres = document.getElementById("addres").value;
    let formData = {nama,email,number,position,addres}

    
    document.getElementById("nameInput").value = "";
    if(nama == ""){
        alert("your name blanks")
        return

    }else if (email == ""){
        alert("your email blank")
        return

    }else if (number == "") {
        alert("your number blank")
        return

    }else if (position == "selec opsional") {
        alert("your position blank")
        return

    }else if (addres == "") {
        alert ("your addres blank")
        return
    }

    console.log(formData)

    let myEmail = "rifkiydh@gmail.com"
    let subject = "introduction"
    let a = document.createElement("a");
    a.href = `mailto:${myEmail}?subject=${subject}&body= hello my name is ${nama}`;
    a.click();
}



