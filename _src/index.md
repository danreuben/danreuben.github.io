---
title: danreuben
layout: base
eleventyNavigation:
  key: home
  order: 1
---

# posts

{%- for post in collections.post %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}