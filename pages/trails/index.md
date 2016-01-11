---
layout: page
title: Trails
permalink: /trails/
---

<div class="clearfix">
  <ul class="trails">
    {% for item in site.trails limit:5 %}
      <li itemscope class="trail-item">
        <a href="{{ item.permalink }}"><h2 class="trail-name">{{ item.title }}</h2></a>
        <!-- Needs to link to map functions -->
        <a href="#"><div class="location">{{ item.location }}</div></a>
        <div class="rating">{{ item.rating }}</div>
        <div class="description">{{ item.content }}</div>
      </li>
    {% endfor %}
  </ul>
  <div class="trail-filter">
  	<h3>Filter Trails</h3>
  	<div class="filter-section">
  		<div>Difficulty</div>
    </div>
  	<div class="filter-section">
  		<div>Rating</div>
    </div>
  	<div class="filter-section">
  		<div>Amenities</div>
    </div>
  	<div class="filter-section">
  		<div>Distance (miles)</div>
    </div>
  </div>
</div>