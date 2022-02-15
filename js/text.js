$(function () {
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 12).addClass('qq');
        if ($("div:hidden").length == 0) {
           $("#loadMore").remove();
        }
    });
});


