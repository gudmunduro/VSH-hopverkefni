

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
        let usernameInput = document.createElement("input")
        let passwordInput = document.createElement("input")
        let loginButton = document.createElement("input")
        let cancelButton = document.createElement("input")

        this.div.className = "loginDiv"
        this.div.id = "loginForm"
        this.div.style.display = "none"

        form.method = "post"
        form.action = "/hv/api/login.php"

        title.innerHTML = "Innskráning"

        usernameInput.type = "text"
        usernameInput.placeholder = "Notandanafn"
        usernameInput.name = "username"

        passwordInput.type = "password"
        passwordInput.placeholder = "Lykilorð"
        passwordInput.name = "password"

        loginButton.type = "submit"
        loginButton.value = "Innskrá"

        cancelButton.type = "button"
        cancelButton.value = "Loka"
        cancelButton.onclick = this.hide

        form.appendChild(usernameInput)
        form.appendChild(passwordInput)
        form.appendChild(loginButton)
        form.appendChild(cancelButton)

        this.div.appendChild(title)
        this.div.appendChild(form)
        document.body.appendChild(this.div)
    }

    show()
    {
        this.div.style.display = ""
    }

    hide()
    {
        $("#loginForm").remove()
    }
}


function createSimpleLogin(redirect)
{
    let login = new LoginForm(redirect)
    login.show()
}