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
      <form action="">
        {% for difficulty in site.trails.difficulty %}
          <div class="form-item form-type-bef-checkbox">
            <input type="checkbox" name="difficulty" value="{{ difficulty }}">{{ difficulty }}
          </div>
        {% endfor %}
      </form>
    </div>
  	<div class="filter-section">
  		<div>Rating</div>
      <!-- Needs on / off options-->
      <div class="star-icon"></div>
      <div class="star-icon"></div>
      <div class="star-icon"></div>
      <div class="star-icon"></div>
      <div class="star-icon"></div>
    </div>
  	<div class="filter-section">
  		<div>Amenities</div>
      <!-- -->
    </div>
  	<div class="filter-section">
  		<div>Distance (miles)</div>
      <input type="text" id="edit-field-distance-miles-value" name="field_distance_miles_value" value="" size="30" maxlength="128" class="form-text">
    </div>
  </div>
</div>