---
title: Apache Conferences Calendar
slug: index
---

Welcome to the Apache Conferences Calendar, managed by the [Apache Conferences Committee][1] (ConCom). Here, you'll find a comprehensive list of official Apache events and third-party events approved to use Apache Marks under the [Third Party Event Branding Policy][2].

To stay updated with our events, you can subscribe to our calendar via the iCal feed [here][3].

<div class="calcontain"><div id="calendar"></div></div>
<script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.11/index.global.min.js'></script>
<script src="https://cdn.jsdelivr.net/npm/@fullcalendar/google-calendar@6.1.11/index.global.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
  googleCalendarApiKey: 'AIzaSyDJkXq1faq2G5NkFkFTh9Sikdpc2YXTVXs',
  events: {
    googleCalendarId: 'nerseigospses068jd57bk5ar8@group.calendar.google.com'
  }
});
calendar.render();
});
</script>

[1]: https://www.apache.org/foundation/conferences.html
[2]: https://www.apache.org/foundation/marks/events.html
[3]: https://www.google.com/calendar/ical/nerseigospses068jd57bk5ar8%40group.calendar.google.com/public/basic.ics
