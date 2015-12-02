$(document).ready(function() {

    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val();
        $('.todo-list').append("<div class='item'><a href='#'>" + toAdd + "</a></div>");
        $('input[name=checkListItem]').val("");

        $('.item').hover(
          function() {
            $(this).addClass('stroke');
          },
          function() {
            $(this).removeClass('stroke');
          }
        );
    });

    $(document).on('click', '.item', function(){
        var value = $(this).text();
        $('.doing-list').append("<div class='doing-item'><a href='#'>" + value + "</a></div>");
        $(this).remove();
    });

    $(document).on('click', '.doing-item', function(){
        var value = $(this).text();
        $('.done-list').append("<div class='done-item'><a href='#'>" + value + "</a></div>");
        $(this).remove();
    });
});
