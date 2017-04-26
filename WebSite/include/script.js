// JavaScript source code


class Menu {

    static open()
    {
        $("#menuOption1").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s"
        });
        $("#menuOption2").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.6s, transform 0.4s ease-out 0.6s"
        });
        $("#menuOption3").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.7s, transform 0.4s ease-out 0.7s"
        });
        $("#menuOption4").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.8s, transform 0.4s ease-out 0.8s"
        });
        $("#navBar").addClass("showNavBar");
        $("#mobileNav").addClass("menuOpen");
    }

    static close()
    {
        $("#navBar").removeClass("showNavBar");
        $("#mobileNav").removeClass("menuOpen");
        $("#menuOption1").removeAttr("style");
        $("#menuOption2").removeAttr("style");
        $("#menuOption3").removeAttr("style");
        $("#menuOption4").removeAttr("style");
    }

    static isOpen()
    {
        return $("#navBar").hasClass("showNavBar");
    }

    static toggle()
    {
        if (Menu.isOpen())
        {
            Menu.close();
        }
        else
        {
            Menu.open();
        }
    }
}

