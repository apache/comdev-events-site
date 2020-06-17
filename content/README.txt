This directory is the source code for the https://events.apache.org/ domain.
Use https://www.apache.org/dev/cms.html#usage to build and deploy.
Questions?  Ask planners@apachecon.com


# How-To add an ApacheCon event promotion to your project site

All PMCs are asked to help promote ApacheCon and other major Apache 
sponsored events by adding some form of img link to their homepages, 
in whatever place works best for your site navigation.  Once you add 
the code, no further changes needed (will be auto-updated to be 
the next upcoming event).

- Add a small image and link (where {size} = 125x125 or 234x60)

<a  href="https://events.apache.org/x/current-event.html">
  <img src="https://www.apache.org/events/current-event-{size}.png"/>
</a>

NOTE: this page, in turn, redirects to the current or upcoming event, 
which is usually https://apachecon.com/

- (or) Add larger banners with an iframe or hardcoded div:
  https://apache.org/ads/adserver.txt


# How ComDev/VP, Conferences Maintains current-event Pages

* Maintenance of current-event* files for PMC inclusion:
- update text in content/current-event.mdtext
- replace content/images/current-event-*.png files with the new versions from content/ads/ApacheCon

See also the main website's content/ads/README.txt

