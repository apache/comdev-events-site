#!/usr/bin/env bash

# Fetch calendar data; will be stored as calendar.json

CALENDAR_ID="nerseigospses068jd57bk5ar8@group.calendar.google.com"
API_KEY="AIzaSyDJkXq1faq2G5NkFkFTh9Sikdpc2YXTVXs"
NOW=$(date '+%Y-%m-%dT%H:%M:%SZ')
OPTS="?key=${API_KEY}&timeMin=${NOW}&singleEvents=true&orderBy=startTime&timezone=UTC&maxResults=20"

echo "Fetching calendar data"
ls -l calendar.json

curl -sS -o calendar.json "https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events${OPTS}" \
  -H 'accept: application/json, text/javascript, */*; q=0.01' \
  -H 'origin: https://events.apache.org'

echo "Fetched data"
ls -l calendar.json
