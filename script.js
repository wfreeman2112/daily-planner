/* get API for time and date
make table 
time blocks color coded for past, present and future
save events in local storage
*/

//establishing day and date at the top
$(document).ready(function() {
    $('.dayAndDate').html(moment().format('MMMM DD YYYY'))


    //color coding past, present and future
    $(".hour").each(function(){
        var hour = $(this).attr("hour");
        $(this).children("textarea").val(localStorage.getItem(hour));

        if (Number(hour) === moment().hour()) {
            $(this).children("textarea").addClass("present")
        }

        if (Number(hour) < moment().hour()) {
            $(this).children("textarea").addClass("past")
        }

        if (Number(hour) > moment().hour()) {
            $(this).children("textarea").addClass("future")
        }
    })

    //storing input info
    $("button").click(function() {
        var hour = $(this).parent().attr("hour");
        var value = $(this).prev().val();
        localStorage.setItem(hour, value);
    })
        
    
})

