/*!
 *
 * GeoCanViz viewer / Visionneuse GéoCanViz
 * gcviz.github.io/gcviz/License-eng.txt / gcviz.github.io/gcviz/Licence-fra.txt
 *
 * Version: v0.0.1-development Build: 2013-10-04- 09:25 AM
 *
 */
var mapArray={},locationPath;(function(){var b,a;define(["jquery","gcviz-v-map","gcviz-v-tbmain","gcviz-v-tbfoot","gcviz-v-tbanno","gcviz-v-tbnav"],function(i,c,d,k,g,h){var j,l,f,e;j=function(){var o=i(".gcviz"),n,m=o.length;b=m;a=0;e();while(m--){n=o[m];l(n)}};l=function(m){i.ajax({url:m.getAttribute("data-gcviz"),dataType:"json",async:false,success:function(n){n.gcviz.mapframe.id=m.getAttribute("id");f(m,n.gcviz);console.log("config file read")},error:function(){console.log("error loading config file")}})};f=function(r,n){var q,p=i(r),m=n.mapframe.id,o=n.mapframe.size;p.wrap("<section id=section"+m+' class="gcviz-section">');q=i(document).find("#section"+m);i.extend(q,n);mapArray[m]=c.initialize(q);mapArray[m].reverse();d.initialize(q);k.initialize(q);if(n.toolbaranno.enable){g.initialize(q)}if(n.toolbarnav.enable){h.initialize(q)}a+=1;if(a===b){i.event.trigger("gcviz-ready")}};e=function(){var p=document.getElementsByTagName("meta"),n=p.length;while(n--){if(p[n].getAttribute("property")==="location"){locationPath=p[n].getAttribute("content")}}if(typeof locationPath==="undefined"){var m=document.baseURI,o=m.search("GeoCanViz");if(o!==-1){locationPath=m.substring(0,m.search("GeoCanViz"))+"GeoCanViz/"}}};return{initialize:j}})}).call(this);