This directory is for promoting ApacheCon and other ASF-sponsored events.


# How-To add ApacheCon event promotion to your project site

All PMCs are asked to help promote ApacheCon and other major Apache 
sponsored events by adding some form of img link to their homepages, 
in whatever place works best for your site navigation.  Once you add 
the code, no further changes needed (will be auto-updated to be 
the next upcoming event).

- Add a small image and link (where {size} = 125x125 or 234x60)

<a  href="https://www.apache.org/events/current-event.html">
  <img src="https://www.apache.org/events/current-event-{size}.png"/>
</a>

- (or) Add larger banners with an iframe or hardcoded div:
  https://apache.org/ads/adserver.txt


# How ComDev/VP, Conferences Maintains These current-event & Meetup Pages

* Maintenance of current-event* files for PMC inclusion:
- update text in content/events/current-event.mdtext
- replace content/events/current-event-*.png files with the new versions from content/ads/ApacheCon

See also content/ads/README.txt

* Maintenance of meetups.html

0a) Check out https://svn.apache.org/repos/asf/comdev/tools
0b) Learn how to use the ASF CMS. Instructions are here: https://cms.apache.org/ (scroll to the bottom)

1) Every Monday morning, or every Friday night, run ./get_meetups in that directory

2) Edit meetups.mdtext and do a sanity check. 'Apache' matches a lot of things that are not the ASF, such as hiking groups in Apache Junction, Arizona, and several drawing and spiritual groups. Delete those lines.

3) Visit the page at https://apache.org/events/meetups.html and click your Apache CMS bookmarklet from step 0b

4) Copy/Paste the contents of meetups.mdtext into the body of that page, replacing all the events from the previous week. Publish that page.
