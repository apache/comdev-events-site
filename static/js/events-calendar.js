// This uses the Google Calendar v3 API to fetch details of the
//  events held in the shared Apache events calendar
// That calendar is available to any Apache member who asks, the ID
//  of it is : nerseigospses068jd57bk5ar8@group.calendar.google.com
var CALENDAR_ID = "nerseigospses068jd57bk5ar8@group.calendar.google.com";
// Google Calendar API key, valid for *.apache.org and localhost
var API_KEY = "AIzaSyDJkXq1faq2G5NkFkFTh9Sikdpc2YXTVXs";

// We only need read-only access for our needs
var SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

// Where to put things
var events = $('#events');
if (!events) {
  events = $('body').append("<ul id='events'/>");
}

// Options
var now = (new Date()).toISOString();
var opts = "?key=" + API_KEY 
         + "&timeMin=" + now
         + "&singleEvents=true"
         + "&orderBy=startTime"
         + "&timezone=America/New_York"
         + "&maxResults=20";
// Fetch
$.ajax({
    type: 'GET',
    url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + CALENDAR_ID + '/events' + opts),
    dataType: 'json',
    success: function (response) {
       events.empty();

       var el = response['items'];
       let reg = /T.*$/;
       let official = /(ApacheCon|Roadshow)/;
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
    },
    error: function (response) {
       events.empty();
       events.append("<li><i>Error loading events</i></li>");
       console.log(response.responseText);
    }
});


