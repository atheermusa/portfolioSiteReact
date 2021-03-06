import React from "react"
import './style.css';
 
function Logo() {
  return (
    <div className="articles">
      <h1>Articles Component</h1>
    </div>
  )
}
 
export default Logo;
var select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  svg = $("svg"),
  bulb_full = select("#bulb"),
  bulb = select("#bulb_body"),
  licht = select("#licht"),
  glow_on = select("#glow");

$('#bulb-svg').on("load", function() {
  var licht_init = new TimelineLite();
  TweenMax.set(licht, {
    opacity: 0,
    scale: 0.6,
    transformOrigin: "50% 50%"
  });
  TweenMax.set(glow, {
    opacity: 1,
    transformOrigin: "50% 50%",
    stroke: "#3D3D3D"
  });
});

$('#bulb-svg').on('mouseenter',function(i) {
    TweenMax.to(bulb_body, 0.3, {
      opacity: 1,
      fill: "#FBD323"
    });
    TweenMax.to(licht, 0.3, {
        opacity: 1,
        scale: 1
      }),
      TweenMax.to(glow, 0.3, {
        opacity: 1,
      stroke: "#FFFFFF"
      });
  TweenMax.fromTo(licht, 1, {
        scale: 1,

      }, {
      scale: 1.1,
        repeat: -1,
    yoyo: true
  });
 
});

$('#bulb-svg').on('mouseleave',function(i) {
    TweenMax.to(bulb_body, 0.3, {
      opacity: 1,
      fill: "#FFFFFF"
    });
    TweenMax.to(licht, 0.3, {
        opacity: 0,
        scale: 0.8
      }),
      TweenMax.to(glow_on, 0.3, {
        opacity: 1,
         stroke: "#3D3D3D"
      });
});