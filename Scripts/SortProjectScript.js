// JavaScript source code

$(document).ready(function () {
    $("input[type='button']").click(function () {
        var radioValue = $("input[name='sort']:checked").val();
        if (radioValue) {
            alert("Your are a - " + radioValue);
        }
    });

});

