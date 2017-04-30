
// Classes

class Form {

    constructor()
    {
        let div = document.createElement("div")
        let title = document.createElement("h1")
        let form = document.createElement("form")
        let input1 = document.createElement("input")
        let input2 = document.createElement("input")
        let submit = document.createElement("input")
        let cancel = document.createElement("input")

        div.className = "mainDiv"
        div.id = "formDiv"
        $(div).css({
            display: "none",
            transform: "translatey(-100px)",
            opacity: "0"
        })

        title.className = "mainTitle"
        title.innerHTML = "Skráningarform"
        form.className = "form"
        input1.type = "text"
        input2.type = "text"
        submit.type = "submit"
        cancel.type = "button"
        cancel.value = "Cancel"
        cancel.onclick = Form.remove

        input1.placeholder = "Input 1"
        input2.placeholder = "Input 2"

        $("#mainDiv").css({
            animation: "hideMainDiv 0.5s forwards"
        })
        setTimeout(hideMainDiv, 500)
        setTimeout(this.show, 500)
        setTimeout(this.startAnimation, 520)

        form.appendChild(input1)
        form.appendChild(input2)
        form.appendChild(submit)
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

    // close

    static remove()
    {
        Form.startCloseAnimation()
        setTimeout(Form.removeForm, 500)
        setTimeout(Form.showMainForm, 510)
    }

    static startCloseAnimation()
    {
        $("#formDiv").css({
            transform: "translatey(-100px)",
            opacity: "0"
        })
    }

    static removeForm()
    {
        $("#formDiv").remove()
    }

    static showMainForm()
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