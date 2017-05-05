// JavaScript source code

var options = {
    streetlegal: { name: "Götubílar", id: 1, element: function () { return $("#option1"); } },
    unlimited: { name: "Sérútbúnir", id: 2, element: function () { return $("#option2"); } },
    modified: { name: "Sérútbúnir götubílar", id: 3, element: function () { return $("#option3"); } }
};
var selected = 0;

function resetCurrent()
{
    switch (selected)
    {
        case options.streetlegal.id:
            {
                options.streetlegal.element().removeClass("selected")
                break;
            }
        case options.unlimited.id:
            {
                options.unlimited.element().removeClass("selected")
                break;
            }
        case options.modified.id:
            {
                options.modified.element().removeClass("selected")
                break;
            }
    }
}

function onSelection(selection)
{
    switch (selection)
    {
        case options.streetlegal.id:
            {
                resetCurrent()
                selected = selection
                options.streetlegal.element().addClass("selected")
                break;
            }
        case options.unlimited.id:
            {
                resetCurrent()
                selected = selection
                options.unlimited.element().addClass("selected")
                break;
            }
        case options.modified.id:
            {
                resetCurrent()
                selected = selection
                options.modified.element().addClass("selected")
                break;
            }
    }
}

function register()
{
    $.ajax({
        type: "POST",
        url: "/hv/api/register.php",
        data: { selected: selected },
        success: onSuccess,
        dataType: "text",
        contentType: "application/x-www-form-urlencoded;charset=ISO-8859-15"
    });
}

function onSuccess(data)
{
    if (data == 1)
    {
        alert("skráning tókst")
        location.href = "/hv/"
    }
    else
    {
        console.log("\"" + data + "\"")
        alert(data)
    }
}