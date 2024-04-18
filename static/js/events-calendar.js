// Update the calendar page from the json file

// Where to put things
var events = $('#events');
if (!events) {
  events = $('body').append("<ul id='events'/>");
}

function apply(response) {
   events.empty();

   var el = response['items'];
   let reg = /T.*$/;
   let official = /(ApacheCon|Roadshow|Community (O|o)ver Code)/;
   if (el.length > 0) {
      for (i = 0; i < el.length; i++) {
         var ev = el[i];
         var when = ev.start.dateTime;
         if (!when) {
            when = ev.start.date;
         }
         when = when.replace(reg,"");
         if (ev.end) {
           var end = ev.end.dateTime;
           if (!end) {
              end = ev.end.date;
           }
           end = end.replace(reg,"");
           if (end != when) {
              when = when + " to " + end;
           }
         }
         var link = null;
         if (ev.description) {
            var line1 = ev.description.split("\n")[0];
            if (line1.slice(0,7) === "http://" ||
                line1.slice(0,8) === "https://"
            ) {
               link = line1.trim();
            }
         }

         var html = "<li>";
         if (link) { html += "<a href='" + link + "'>"; }
         if (ev.summary.match(official)) {
             html += "<b>" + ev.summary + "</b>";
         } else {
             html += ev.summary;
         }
         if (link) { html += "</a>"; }
         html += " - <i>" + when + "</i>";
         if (ev.location) {
            html += "<br/>"+ev.location;
         }
         events.append(html);
      }
   } else {
      events.append("<li><i>No events found, sorry</i></li>");
   }
}

// Fetch
$.ajax({
    type: 'GET',
    url: encodeURI('/js/calendar.json'),
    dataType: 'json',
    success: function (response) {
      apply(response);
    },
    error: function (response) {
       events.empty();
       events.append("<li><i>Error loading events</i></li>");
       console.log(response.responseText);
    }
});


