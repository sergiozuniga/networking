$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


    $('#talkSendMessage').on('submit', function(e) {

        e.preventDefault();
        var url, request, tag, data, msg;
        tag = $(this);
        msg = $('#message-data').val();
        msg = msg.substring(0, 20);
        console.log('msg='+msg);
        url = __baseUrl + '/ajax/message/send';
        data = tag.serialize();
        request = $.ajax({
            method: "post",
            url: url,
            data: data
        });

        request.done(function (response) {
            if (response.status == 'success') {
                //$('#lastMsg').text(msg);
                $('#talkMessages').append(response.html);
                tag[0].reset();

                var objDiv = $('.chat-history');
                objDiv.scrollTop(objDiv.height());
            }
        });

    });


    $('body').on('click', '.talkDeleteMessage', function (e) {
        e.preventDefault();
        var tag, url, id, request;

        tag = $(this);
        id = tag.data('message-id');
        url = __baseUrl + '/ajax/message/delete/' + id;

        if(!confirm('Do you want to delete this message?')) {
            return false;
        }

        request = $.ajax({
            method: "post",
            url: url,
            data: {"_method": "DELETE"}
        });

        request.done(function(response) {
           if (response.status == 'success') {
                $('#message-' + id).hide(500, function () {
                    $(this).remove();
                });
           }
        });
    })
});
