$(function() {
    $.ajaxSetup({
        headers:{
            'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left:'prev,next today',
            center:'title',
            right:'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        locale: 'es',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        selectable: true,
        dayMaxEvents: true, // allow "more" link when too many events
        events: {
            url: '/event/{{$user->id}}'
        },
        eventTimeFormat: {
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short' }
        ,
        dateClick: function(info) {
            var fecha = info.dateStr+"T09:00:00";
            console.log('fecha='+fecha);
            $('#start').val(fecha);
            $('#end').val(fecha);
            console.log('Clicked on: ' + info.dateStr);
            calendar.addEvent({title: "Evento "+info.dateStr, date: info.dateStr});
            $('#eventModal').modal('toggle');
        },
        eventClick: function(info) {
            console.log(info);
        },
        select: function(arg) {
            console.log('select', calendar.formatIso(arg.start), calendar.formatIso(arg.end));
        }
    });
    calendar.render();

    $('#btnAdd').off("click");
	$('#btnAdd').on("click", function(e) {
        objEvent = retrieveData("POST", "add");
        processEvent(objEvent);
    });

    function retrieveData(method, action) {
        newEvent = {
            id: $('#id').val(),
            title: $('#title').val(),
            description: $('#description').val(),
            start: $('#start').val(),
            end: $('#end').val(),
            user_id: '{{auth()->user()->id}}',
            invited_id: '{{$user->id}}',
            action: action,
            _token: $("meta[name='csrf-token']").attr("content"),
            _method: method
        };
        return newEvent;
    }

    function processEvent(objEvent) {
        $.ajax({
            type: "POST",
            url: "{{url('event/action')}}",
            data: objEvent,
            success: function(msg){
                console.log(msg);
            },
            error: function() {
                alert("Hay un error al procesar evento");
            }
        });
    }
});
