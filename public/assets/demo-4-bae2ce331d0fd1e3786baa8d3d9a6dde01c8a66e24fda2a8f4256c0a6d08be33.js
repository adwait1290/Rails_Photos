"use strict";var demo=function(n){function a(){t(Trianglify({width:n.innerWidth,height:n.innerHeight,cell_size:90,variance:1,stroke_width:1,x_colors:"Purples"}).svg()),i()}function t(n){$(s.pattern).append(n),p.paths=[].slice.call(n.childNodes),p.points=[],p.paths.forEach(function(n){$(n).attr("class",l.polygon);var a=n.getBoundingClientRect(),t={x:a.left+a.width/2,y:a.top+a.height/2};p.points.push(t)}),$(s.pattern).removeClass(l.patternHidden)}function i(){var n=$(s.card);$.each(n,function(n,a){var t=new Card(a,n);h[a]={card:t};var i=$(n).find(s.cardImage),r=$(n).find(s.cardClose);$(i).on("click",e.bind(this,!0,a)),$(r).on("click",e.bind(this,!1,a))})}function e(n,a,t){var i=h[a].card;if(!i.isOpen||!n){var e=new TimelineLite({paused:!0}),c=r(a);if(i.isOpen){var s=i.closeCard(),l=.8*s.duration();e.add(s),e.add(c,l)}else d(t.target),e.add(c),e.add(i.openCard(o),0);e.play()}}function r(n){var a=new TimelineLite,t=h[n].card;for(var i in h){var e=h[i].card;e.id===n||t.isOpen||a.add(e.hideCard(),0),e.id!==n&&t.isOpen&&a.add(e.showCard(),0)}return a}function d(n){var a=$(n).attr("xlink:href");$(s.pattern).css("background-image","url("+a+")")}function o(n){var a=n.width/2,t={x:n.x,y:n.y};p.points.forEach(function(n,i){c(n,a,t)?$(p.paths[i]).attr("class",l.polygon+" "+l.polygonHidden):$(p.paths[i]).attr("class",l.polygon)})}function c(n,a,t){var i=n.x,e=n.y,r=t.x,d=t.y,o=a*a;return Math.pow(i-r,2)+Math.pow(e-d,2)<=o}var s={pattern:".pattern",card:".card",cardImage:".card__image",cardClose:".card__btn-close"},l={patternHidden:"pattern--hidden",polygon:"polygon",polygonHidden:"polygon--hidden"},p={paths:null,points:null},h={};return{init:a}}(window);window.onload=demo.init;