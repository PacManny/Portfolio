// JavaScript source code
$(document).ready(function () {
    $('head').append('<link rel="stylesheet" href="https://pacmanny.github.io/Notes-Website-Udacity/style.css" type="text/css" />')
    $(function() {
        $("li").click(function() {
            // remove classes from all
            $("li").removeClass("active");
            // add class to the one we clicked
            $(this).addClass("active");
            $('#mainBody').load("https://pacmanny.github.io/Notes-Website-Udacity/index.html #content");

        });
    });


    $('#ham-nav').click(function () {

        var $ham = $(this)
        $ham.toggleClass('open');
        $("#menuList").slideToggle("slow");

    });
    $(window).resize(function () {
        var screenWidth = $(window).width();
        if (screenWidth > 740) {
            $("#menuList").show();
        }
        else {
            if ($('#ham-nav').attr('class') != 'open')
                $("#menuList").hide();
        }


    });
    function addNewItem() {
        // get the user's entered item from the text box
        var item = $("#newItem").val();
        console.log("user entered item is " + item);

        // if entered item is not blank, echo it and add it to the item list div
        if (item != "") {
            // create html to add to the div including the item the user added
            var div = "<div id=\"listItemDiv\"" + "\>";
            var listItem = "<p id=\"listItem\">" + item + "</p></div>";

            var list = div + listItem;

            // add the item to the list div
            $("#itemListDiv").append($(list));

            // clear the user's text entry by setting it to an empty string
            $("#newItem").val("");

        }
    }

    // this is a callback function. it is triggered when the addItemButton is pressed
    /* add new item after add button pressed */
    $('#addItemButton').click(function () {
        console.log("mousedown add item button");
        addNewItem();
    });


});
