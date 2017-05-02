
// Classes

class Form {

    constructor()
    {
        //
        let div = document.createElement("div")
        let title = document.createElement("h1")
        let form = document.createElement("form")
        // inputs
        let ktInput = document.createElement("input")
        let fulllNameInput = document.createElement("input")
        let addressInput = document.createElement("input")
        let phoneInput = document.createElement("input")
        let emailInput = document.createElement("input")
        let passwordInput = document.createElement("input")
        let confirmPasswordInput = document.createElement("password")
        // select
        let clubSelect = document.createElement("select")
        let genderSelect = document.createElement("select")
        // buttons
        let submit = document.createElement("input")
        let useOldAccount = document.createElement("input")
        let cancel = document.createElement("input")

        div.className = "mainDiv formDiv"
        div.id = "formDiv"
        $(div).css({
            display: "none",
            transform: "translatey(-100px)",
            opacity: "0",
            transitionTimingFunction: "ease-in"
        })

        title.className = "mainTitle"
        title.innerHTML = "Skráning"
        form.className = "form"
        // inputs


        ktInput.type = "text"
        ktInput.placeholder = "Kennitala"

        fulllNameInput.type = "text"
        fulllNameInput.placeholder = "Fullt nafn"
        // inputs - gender
        let male = document.createElement("option")
        let female = document.createElement("option")
        let other = document.createElement("option")
        male.innerHTML = "Karl"
        female.innerHTML = "Kona"
        other.innerHTML = "Annað"
        male.name = "male"
        female.name = "female"
        other.name = "other"
        genderSelect.appendChild(male)
        genderSelect.appendChild(female)
        genderSelect.appendChild(other)
        //
        addressInput.type = "text"
        addressInput.placeholder = "Heimilisfang"

        phoneInput.type = "tel"
        phoneInput.placeholder = "Símanúmer"

        // inputs - club
        let option1 = document.createElement("option")
        let option2 = document.createElement("option")
        let option3 = document.createElement("option")
        let option4 = document.createElement("option")
        let option5 = document.createElement("option")
        let option6 = document.createElement("option")
        let option7 = document.createElement("option")
        let option8 = document.createElement("option")
        let option9 = document.createElement("option")
        let option10 = document.createElement("option")
        let option11 = document.createElement("option")

        option1.innerHTML = "Akstursíþróttafélag Hafnarfjarðar"
        option2.innerHTML = "Akstursíþróttafélag Suðurnesja"
        option3.innerHTML = "Akstursíþróttafélagið START"
        option4.innerHTML = "Akstursíþróttanefnd Heklu"
        option5.innerHTML = "Akstursíþróttasamband Íslands"
        option6.innerHTML = "Bifreiðaíþróttaklúbbur Reykjavíkur"
        option7.innerHTML = "Bílaklúbbur Akureyrar"
        option8.innerHTML = "Bílaklúbbur Skagafjarðar"
        option9.innerHTML = "Kvartmíluklúbburinn"
        option10.innerHTML = "Stimpill Akstursíþróttafélag"
        option11.innerHTML = "Torfæruklúbbur Suðurlands"

        option1.name = "Akstursíþróttafélag Hafnarfjarðar"
        option2.name = "Akstursíþróttafélag Suðurnesja"
        option3.name = "Akstursíþróttafélagið START"
        option4.name = "Akstursíþróttanefnd Heklu"
        option5.name = "Akstursíþróttasamband Íslands"
        option6.name = "Bifreiðaíþróttaklúbbur Reykjavíkur"
        option7.name = "Bílaklúbbur Akureyrar"
        option8.name = "Bílaklúbbur Skagafjarðar"
        option9.name = "Kvartmíluklúbburinn"
        option10.name = "Stimpill Akstursíþróttafélag"
        option11.name = "Torfæruklúbbur Suðurlands"

        clubSelect.appendChild(option1)
        clubSelect.appendChild(option2)
        clubSelect.appendChild(option3)
        clubSelect.appendChild(option4)
        clubSelect.appendChild(option5)
        clubSelect.appendChild(option6)
        clubSelect.appendChild(option7)
        clubSelect.appendChild(option8)
        clubSelect.appendChild(option9)
        clubSelect.appendChild(option10)
        clubSelect.appendChild(option11)
        //
        emailInput.type = "email"
        emailInput.placeholder = "Netfang"

        passwordInput.type = "password"
        passwordInput.placeholder = "Lykilorð"

        confirmPasswordInput.type = "password"
        confirmPasswordInput.placeholder = "Staðfesta lykilorð"

        // buttons
        submit.type = "submit"
        cancel.type = "button"
        cancel.value = "Hætta við"
        cancel.onclick = Form.remove
        useOldAccount.type = "button"
        useOldAccount.value = "Innskrá"
        useOldAccount.onclick = this.useOldAccount

        $("#mainDiv").css({
            animation: "hideMainDiv 0.5s forwards",
            animationTimingFunction: "ease-out"
        })
        setTimeout(hideMainDiv, 500)
        setTimeout(this.show, 500)
        setTimeout(this.startAnimation, 520)

        // add to form
        form.appendChild(ktInput)
        form.appendChild(genderSelect)
        form.appendChild(addressInput)
        form.appendChild(phoneInput)
        form.appendChild(clubSelect)
        form.appendChild(emailInput)
        form.appendChild(passwordInput)
        form.appendChild(confirmPasswordInput)
        form.appendChild(submit)
        form.appendChild(useOldAccount)
        form.appendChild(cancel)

        div.appendChild(title)
        div.appendChild(form)

        document.body.appendChild(div)
    }

    show()
    {
        $("#formDiv").css("display", "")
    }

    startAnimation()
    {
        $("#formDiv").removeAttr("style")
    }

    useOldAccount()
    {
        location.href = ""
    }

    // close

    static remove()
    {
        Form.startCloseAnimation()
        setTimeout(Form.removeForm, 500)
        setTimeout(Form.showMainForm, 510)
        setTimeout(Form.animateMainFormIn, 510)
        setTimeout(Form.finishRemoval, 1010)
    }

    static startCloseAnimation()
    {
        $("#formDiv").css({
            transform: "translatey(-100px)",
            transitionTimingFunction: "ease-out",
            opacity: "0"
        })
    }

    static removeForm()
    {
        $("#formDiv").remove()
    }

    static showMainForm()
    {
        document.getElementById("mainDiv").style.display = ""
    }

    static animateMainFormIn()
    {
        document.getElementById("mainDiv").style.animation = "hideMainDiv 0.5s forwards"
        document.getElementById("mainDiv").style.animationDirection = "reverse"
        document.getElementById("mainDiv").style.animationTimingFunction = "ease-in"
    }

    static finishRemoval()
    {
        $("#mainDiv").removeAttr("style")
    }
}

// Global variables

var form

// Functions

function hideMainDiv()
{
    $("#mainDiv").css({
        display: "none"
    })
}

function openForm()
{
    form = new Form()
    return false
}