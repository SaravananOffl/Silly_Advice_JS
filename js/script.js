var advice = function () {

    $.get("http://api.adviceslip.com/advice",(data)=>{
        console.log(data);
        new_data = JSON.parse(data);
        console.log(new_data);
        $("#advice").text(new_data.slip.advice)

    })
};
var monitor = $("#guess").on('click',function () {
    alert('fei');
});
$(document).ready(function () {

    advice();
});

$('body').on('click', '#guess', function () {

    advice();
});