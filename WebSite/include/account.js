/**
    Javascript fyrir aðgangs síðuna (/adgandur) 
*/

var changeable = {
    name: { id: 1, text: "nafn" }, gender: { id: 2, text: "kyn" },
    address: { id: 3, text: "heimilisfang" }, phonenumber: { id: 4, text: "símanúmer" },
    club: { id: 5, text: "félag" }, email: { id: 6, text: "netfang" }, password: { id: 7, text: "lykilorð" }
}

function change(item)
{
    let changeTo = prompt("Sláðu inn nýtt " + item.text)
    if (changeTo == null || changeTo == "")
    {
        return
    }
    $.ajax({
        type: "POST",
        url: "/hv/api/change.php",
        data: { to: changeTo, id: item.id },
        success: onSuccess,
        dataType: "text",
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15"
    });
}

function changePasswd()
{
    let changeTo = prompt("Sláðu inn nýtt lykilorð")
    let confirm = prompt("Sláðu lykilorðið inn aftur til þess að staðfesta breytingarnar")
    if (changeTo == null || changeTo == "") {
        return
    }
    if (confirm == null || confirm == "") {
        return
    }
    if (changeTo != confirm)
    {
        alert("Lykilorð eru ekki eins")
        return
    }
    $.ajax({
        type: "POST",
        url: "/hv/api/change.php",
        data: { to: changeTo, id: changeable.password.id },
        success: onSuccess,
        dataType: "text",
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15"
    });
}

function onSuccess(data)
{
    if (data == 1)
    {
        location.reload()
        alert("Breyting tókst")
    }
    else
    {
        console.log(data)
        alert(data)
    }
}