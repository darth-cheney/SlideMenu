<h1>SlideMenu</h1>
A jQuery plugin for creating a sliding menu that pops out on either side of the browser window.
<br/>
<br/>
<h3>What the Hell Does this Do?</h3>
Since it's hard to explain, I recommend checking out a working example <a href="http://backyardsnotbarnyards.org/" target="_blank">here</a>.
<br/>
In short, you may have seen sites that have static tabs on the side of the window that, when clicked, slide out. This simple plugin allows you to turn any element into such a sliding menu.
<br/>
<br/>
<h3>The Code</h3>
<code>
	$(element).slideMenu(direction, tabElement, speed)
</code>
<br/>
<h4>Attributes</h4>
<ul>
	<li><code>direction</code>: Specify a direction that the element will slide. Takes a <code>string</code> of either <code>'right'</code> or <code>'left'</code>. Note: the direction will be the <em>opposite</em> from the side of the window on which you want to have the container (a slider on the right side will take <code>direction == 'left'</code>, for example).</li>
	<li><code>tabElement</code>: This is the element contained within the slider that serves as the 'tab' or button that one pushes to slide out the rest of the menu. Must be a jQuery object.</li>
	<li><code>speed</code> (optional): An integer, in milliseconds, for the animation speed on sliding. Defaults to <code>400</code></li>
	<li><code>outCallback</code> (not yet implemented): A function that will fire when the animation to slide the menu out has completed.</li>
	<li><code>inCallback</code> (not yet implemented): A function that will fire when the animation to slide the menu back in has completed</li>
</ul>
<br/>
<br/>
<br/>	
