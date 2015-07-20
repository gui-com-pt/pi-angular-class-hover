## Pi Class Hover ##

This directive binds to the element mouseenter and mouseleave events and apply CSS classes.

Install it with bower

    bower install pi-class-hover

Require the module

    angular.module('yourApp', ['piClassHover']);

Include the file in your page from `bower_components/pi-class-hover/dist/pi-class-hover.js`

### Example ###

    <div class="some-class" pi-class-hover="some-class--hover">
      <p class="some-class__highlight">Show on hovered</p>
    </div>

To show/hide content based on the class you would do

    .some-class > .some-class__highlight {
      display: none;
    }

    .some-class.some-class--hover > .some-class__highlight {
      display: block;
    }

## To Do ##

Another directive to show/hide the elements. This directive required the parentDirective and read from the attributes.

<div class="some-class" pi-class-hover="some-class--hover">
  <p pi-class-hover-show>Show on hovered</p> <!-- Would only show on hover -->
</div>
