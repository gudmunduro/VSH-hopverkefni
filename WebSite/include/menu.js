// JavaScript source code


class Menu {

    static open()
    {
        $("#menuOption1").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s"
        });
        $("#menuOption2").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.4s, transform 0.4s ease-out 0.4s"
        });
        $("#menuOption3").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.5s, transform 0.4s ease-out 0.5s"
        });
        $("#menuOption4").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.6s, transform 0.4s ease-out 0.6s"
        });
        $("#menuOption5").css({
            transition: "background-color 0.3s linear, opacity 0.4s ease-out 0.7s, transform 0.4s ease-out 0.7s"
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
        $("#menuOption5").removeAttr("style");
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

