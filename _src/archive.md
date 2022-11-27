---
title: archive
layout: base
eleventyNavigation:
    key: archive
    order: 2
---

# archive

{%- for post in collections.post %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}