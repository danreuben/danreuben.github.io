---
title: danreuben
layout: base
pagination:
  data: collections.post
  size: 3
  alias: posts
---

# posts

{%- for post in collections.post %}
* [{{ post.data.title }}]({{ post.url }})
{%- endfor %}


<!-- ## posts

{%- for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{%- endfor %}


{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %} -->