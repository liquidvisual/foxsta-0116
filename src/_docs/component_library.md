---
layout: internal/text_page_sidebar
title: Component Library
permalink: /component-library/
hero: /img/content/hero-expertise.jpg
---

{% assign settings = site.data.settings %}
{% assign articles = site.data.articles %}
{% assign events = site.data.events %}

<div class="container" style="max-width: 500px;">

	<!-- =========================================================
		 BUTTONS
	============================================================== -->

	<h2 class="clearfix m-y-lg">Buttons</h2>

	<a href="#" class="btn btn-primary btn-text">Read More <i class="fa fa-angle-right"></i></a>&nbsp;
	<a href="#" class="btn btn-primary"><i class="fa fa-angle-right"></i></a> <br><br>

	<h3 class="m-y-md">Text editor buttons</h3>

	<span class="btn-document"><a href="#" target="_blank">Document Link Here</a></span>
	<span class="btn-document"><a href="#" target="_blank">Document Link Here</a></span>
	<span class="btn-document"><a href="#" target="_blank">Document Link Here</a></span>
	<span class="btn-document"><a href="#" target="_blank">Document Link Here</a></span>

	<!-- =========================================================
		 BTN TILE
	============================================================== -->

	<h2 class="clearfix m-y-lg">.btn-tile</h2>

	{% include components/btn_tile.html title="Commercial & Business Law" %}

	<!-- =========================================================
		 BTN TILE
	============================================================== -->

	<h2 class="clearfix m-y-lg">.btn-tile-reduced</h2>

	{% include components/btn_tile_reduced.html title="Commercial & Business Law" %}

	<!-- =========================================================
		 HEADER ICON
	============================================================== -->

	<h2 class="clearfix m-y-lg">.header-icon</h2>

	<h2 class="h3 header-icon m-b-md"><i class="fa fa-files-o"></i> <span class="text">David's areas of expertise</span></h2>

	<!-- =========================================================
		 CARD CONTACT
	============================================================== -->

	<h2 class="clearfix m-y-lg">.card-contact</h2>

	{% include components/card_contact.html %}

	<!-- =========================================================
		 CARD BIO
	============================================================== -->

	<h2 class="clearfix m-y-lg">.card-bio</h2>

	{% include components/card_bio.html title="John Smith" subtitle="Director" %}

	<!-- =========================================================
		 SEMINAR LISTING
	============================================================== -->

	<h2 class="clearfix m-y-lg">.seminar-list</h2>

	{% include components/seminar_listing.html %}

	<!-- =========================================================
		 MEDIA
	============================================================== -->

	<h2 class="clearfix m-y-lg">.media-entry</h2>

	{% assign item = site.data.articles[0] %}

	{% include components/media_entry.html %}

	<!-- =========================================================
		 MEDIA
	============================================================== -->

	<h2 class="clearfix m-y-lg">.media-entry (advanced)</h2>

	{% assign item = site.data.articles[0] %}

	{% include components/media_entry_advanced.html %}

	<!-- =========================================================
		 MEDIA
	============================================================== -->

	<h2 class="clearfix m-y-lg">.media-entry-minimal</h2>

	{% assign item = site.data.articles[0] %}

	{% include components/media_entry_minimal.html %}

	<!-- =========================================================
		 BASIC FORM
	============================================================== -->

	<h2 class="clearfix m-y-lg">Basic Form</h2>

	{% include components/form_basic.html %}

</div>