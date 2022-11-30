let phone = document.getElementById("phone");
phone.addEventListener(
    "focus",
    function () {
        phone.style.background = "lightblue";
    },
    true
);

var form = document.getElementById("form");
form.addEventListener(
    "blur",
    function (event) {
        if (event.target.id == "phone") {
            const phone = event.target;
            // console.log( phone );
            var phoneNumber = phone.value;
            const result = validateNumber(phoneNumber);
            if (result === false) {
                alert("Enter a valid number");
            }
            phone.style.background = "";
        }
        // else {
        //     alert("Event target is not phone")
        // }
    },
    true
);

function validateNumber(phoneNumber) {
    let flag = false,
        count = 0;

    for (let digit of phoneNumber) {
        digit = parseInt(digit);
        if (digit >= 0 && digit <= 9) {
            count++;
        } else {
            flag = false;
        }
    }

    console.log(count);
    flag = count != 10 ? false : true;

    return flag;
}

function submit() {
    let phoneNumber = form.childNodes.item(1).value;
    const result = validateNumber(phoneNumber);
    if (result === true) {
        var greetings = "Hello " + phoneNumber;
        // alert(greetings);
        var textComponent = document.createElement("h2");
        textComponent.innerHTML = greetings;
        document.body.appendChild(textComponent).style.textAlign = "center";
    }
}
