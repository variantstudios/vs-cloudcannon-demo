---
layout: page
title: Trails
permalink: /trails/
---

<div id="map-all"></div>
<script type="text/javascript">
  var map = L.map('map-all').setView([40.350231, -105.202415], 10);
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
<div class="view-trails view-display-id-page">
  <div class="view-filters">
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

  <div class="view-content">
  {% for item in site.trails limit:5 %}
    <div itemscope class="views-row node-trails node-teaser">
      <div class="section-one">
        <h2 class="trail-name"><a href="{{ item.permalink }}">{{ item.title }}</a></h2>
        <div class="field field-name-field-region field-type-taxonomy-term-reference field-label-above">
          <div class="field-label">Region:</div>
          <div class="field-items">{{ item.location }}</div>
        </div>
        <div class="field field-name-field-star-rating field-type-fivestar field-label-hidden">
          <div class="field-items fivestar-default">
            <div class="form-item form-type-item">
              <div class="fivestar-widget-static fivestar-widget-static-vote fivestar-widget-static-5 clearfix">
                <div class="star star-1 star-odd star-first">
                  <span class="on"></span>
                </div>
                <div class="star star-2 star-even">
                  <span class="on"></span>
                </div>
                <div class="star star-3 star-odd">
                  <span class="on"></span>
                </div>
                <div class="star star-4 star-even">
                  <span class="on"></span>
                </div>
                <div class="star star-5 star-odd star-last">
                  <span class="off"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-two">
        <div class="description">{{ item.content | truncate: 200 }}</div>
      </div>
    </div>
  {% endfor %}
  </div>
</div>