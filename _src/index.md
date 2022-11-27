---
title: danreuben
layout: base
eleventyNavigation:
  key: home
  order: 1
pagination:
  data: collections.post
  size: 3
  reverse: true
  alias: posts
---

# posts

{%- for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}

<!-- {% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %} -->