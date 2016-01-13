---
layout: post
title: Blog
permalink: /blog/
---
{% for blog in site.posts limit:1 %}
    <div class="full-width">
    	<img class="full-back" src="{{ blog.image_path }}" alt="{{ blog.title }}" />
    	<div class="grad-back">
    		<div>From the Trail</div>
    		<h2>{{ blog.title }}</h2>
    		<a href="{{ blog.permalink }}">View Post</a>
    	</div>
    </div>
{% endfor %}
<section class="main">
	{% for blog in site.posts %}
	    {% if forloop.first %}
	    	<!-- Skips first because we've already done it -->
	    {% else %}
			<a href="{{ blog.permalink }}">
	        	<img src="{{ blog.image_path }}" alt="{{ blog.title }}" />
	    		<div class="post-date">{{ blog.post-date }}</div>
	    		<h4>{{ blog.title }}</h4>
	    		<div class="post-info">{{ blog.content }}</div>
	    	</a>
	    {% endif %}
	{% endfor %}
</section>
<section class="side-column">
	{% assign amenities = "" %}
	{% for tags in site.posts.amenities %}
		{{ amenities | push: tags.title }}
	{% endfor %}
</section>