/**
    Til þess að nota LoginForm klasann
    er annaðhvort hægt að búa til nýtt
    tilvik af LoginForm og kalla á show()
    eftir það eða bara kalla á
    createSimpleLogin().

    Redirect er línkur á síðuna sem
    notandinn verður sendur á ef
    innskráning tekst.
*/

class LoginForm {


    constructor(redirect)
    {
        this.redirect = redirect
        this.create()
    }

    create()
    {
        this.div = document.createElement("div")
        let title = document.createElement("h1")
        let form = document.createElement("form")
        let kennitalaInput = document.createElement("input")
        let passwordInput = document.createElement("input")
        let loginButton = document.createElement("input")
        let cancelButton = document.createElement("input")
        let redirect = document.createElement("input")

        this.div.className = "loginDiv"
        this.div.id = "loginForm"
        this.div.style.display = "none"
        this.div.style.transform = "scale(1.3) translateX(-40%)"
        this.div.style.opacity = "0"

        form.method = "post"
        form.action = "/hv/api/login.php"

        title.innerHTML = "Innskráning"

        kennitalaInput.type = "text"
        kennitalaInput.placeholder = "Kennitala"
        kennitalaInput.name = "kennitala"
        kennitalaInput.required = true

        passwordInput.type = "password"
        passwordInput.placeholder = "Lykilorð"
        passwordInput.name = "password"
        passwordInput.required = true

        loginButton.type = "submit"
        loginButton.value = "Innskrá"

        cancelButton.type = "button"
        cancelButton.value = "Loka"
        cancelButton.onclick = this.hide

        redirect.type = "text"
        redirect.value = this.redirect
        redirect.name = "redirect"
        redirect.style.display = "none"

        form.appendChild(kennitalaInput)
        form.appendChild(passwordInput)
        form.appendChild(loginButton)
        form.appendChild(cancelButton)
        form.appendChild(redirect)

        this.div.appendChild(title)
        this.div.appendChild(form)
        document.body.appendChild(this.div)
    }

    show()
    {
        $("#loginForm").css("display", "")
        setTimeout(function () {
            $("#loginForm").css({
                transform: "",
                opacity: ""
            })
        }, 10)
    }

    hide()
    {
        if (!$("#loginForm").length)
        {
            return;
        }
        $("#loginForm").css({
            transform: "scale(0.7) translateX(-70%)",
            opacity: "0"
        })
        setTimeout(function () {
            $("#loginForm").remove()
        }, 300)
    }
}


function createSimpleLogin(redirect)
{
    if (!$("#loginForm").length)
    {
        return
    }
    let login = new LoginForm(redirect)
    login.show()
}