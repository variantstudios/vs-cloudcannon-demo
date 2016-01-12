---
layout: page
title: Trails
permalink: /trails/
---

<div class="clearfix">
  <div id="map-all"></div>

  <script type="text/javascript">
    var map = L.map('map-all').setView([40.350231, -105.202415], 10);
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'variantstudiosteam.om9o27nj',
    //     accessToken: 'pk.eyJ1IjoidmFyaWFudHN0dWRpb3N0ZWFtIiwiYSI6IkJOeWd1dWMifQ.EpahpXGBtmn_3IROFYRS5w'

    // }).addTo(map);
     L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 18
     }).addTo(map);

    {% for item in site.trails %}
        var marker = L.marker([{{ item.latitude }}, {{ item.longitude }}]);
        map.addLayer(marker);
        marker.bindPopup("<a href='{{ item.permalink }}'><strong>{{ item.title }}</strong></a>");
    {% endfor %}

  </script>
  <ul class="trails">
    {% for item in site.trails limit:5 %}
      <li itemscope class="trail-item">
        <a href="{{ item.permalink }}"><h2 class="trail-name">{{ item.title }}</h2></a>
        <!-- Needs to link to map functions -->
        <a href="{{ item.permalink }}"><div class="location">{{ item.location }}</div></a>
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