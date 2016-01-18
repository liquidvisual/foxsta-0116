---
layout: internal/docs
title: Documentation
permalink: /docs/
---

{% assign breakpoints = site.data.settings.breakpoints %}

<h2>Component Library</h2>
<p>Use this page as a reference when tweaking values. This will prevent things breaking across components.</p>
<p><a class="btn btn-primary btn-text" href="/component-library/">Access Component Library <i class="fa fa-angle-right"></i></a></p>
<br>

<h2>Bootstrap 4 (alpha)</h2>

<p>We're now running on Bootstrap 4 - which feels much cleaner, reliable and allows us to put more onto the framework itself.</p>

<p><a class="btn btn-warning btn-text" href="http://v4-alpha.getbootstrap.com/getting-started/introduction/" target="_blank">Access Bootstrap Docs <i class="fa fa-angle-right"></i></a></p>

<h3>Utility Classes</h3>

<p>You will likely see lots of weird classes around the place. Eg. <code>.m-b-0</code> - these are utility classes from Bootstrap which allow us to set arbitrary spacing between elements without having to hard code those values separately. <b><a href="http://v4-alpha.getbootstrap.com/components/utilities/" target="_blank">Visit Utilities Here</a></b></p>

<br>

<h2>All Available Pages for {{ site.data.settings.title }}</h2>
<ul class="triangle-list check-list">
	{% for item in site.pages | offset: 1 %}
		<li><a href="{{ item.url }}">{{ item.layout }}</a> <small>({{ item.title }})</small></li>
	{% endfor %}
</ul>

<h2>Breakpoints (pxs)</h2>

<div data-js="lv-responsive-table"></div>

<br>

<h2>Themes</h2>

<p>Placing the following theme classes on the <code>body</code> element will colour the buttons and links accordingly.</p>

<table class="table" style="width: 300px;">
	<tr class="theme-1">
		<td>.theme-1</td>
		<td><a class="btn btn-primary" href="#">quaternary-color</a></td>
	</tr>
	<tr class="theme-2">
		<td>.theme-2</td>
		<td><a class="btn btn-primary" href="#">primary-color</a></td>
	</tr>
	<tr class="theme-3">
		<td>.theme-3</td>
		<td><a class="btn btn-primary" href="#">secondary-color</a></td>
	</tr>
	<tr class="theme-4">
		<td>.theme-4</td>
		<td><a class="btn btn-primary" href="#">tertiary-color</a></td>
	</tr>
	<tr class="theme-5">
		<td>.theme-5</td>
		<td><a class="btn btn-primary" href="#">quaternary-color</a></td>
	</tr>
	<tr class="theme-6">
		<td>.theme-6</td>
		<td><a class="btn btn-primary" href="#">quinary-color</a></td>
	</tr>
</table>

<h2>Modes</h2>

<h3>Dev Mode</h3>
<p class="panel">The <b>'.dev-mode-enabled'</b> class on the div <b><i>'.lv-super'</i></b> will enable the responsive helper widget. Clicking on this widget will also highlight parts of containers to aid with distinguishing layouts.</p>

<h2>Font Icons</h2>

<p>This site uses font icons in some places including the side nav, you can change the icons by using classes shown here:</p>

<p><a href="http://fontawesome.io/cheatsheet/">http://fontawesome.io/cheatsheet/</a></p>