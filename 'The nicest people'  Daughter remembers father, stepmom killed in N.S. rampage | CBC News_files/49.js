(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[49],{824:function(e,t,i){"use strict";!function(){function e(e){var t=this;this.isOnValue=!1,this.initialized=!1,this.intervals=[],this.configKey=e,this.scannableTargets=[],this.visibleElementsMap=[],this.resetConfigStatus=function(){return t.status={coordinates:{domnode:{},viewport:{}},strict:!1,spa:!1,ignoreScrollDepth:!1,debug:{console:!1,overlay:!1,overlays:{}},timeInterval:1.5,activity:{scrollDepth:0,maxVertical:0,timeOnPage:0,timeInUnknownState:0,timeInView:0,scrolled:!1,dnp:0,vpp:0,pollingPoints:0,readingPoints:0,increment:100,read:!1,averageReadSpeed:5,initialTime:0,totalTime:0,numberOfCalls:0},thresholds:{viewport:25,domNode:30,minVertical:50,readingPoint:400,domPolling:100,minTimeInView:3,maxTimeInView:20,scrollDepth:0,percentagePoint:30,maxCalls:3}},!0},this.getConfig=function(){return t.status},this.setConfig=function(){return!t.isOnValue&&("undefined"===typeof window.readJSConfig?(t.console("Error: Cannot find Read JS config object readJSConfig"),!1):(t.configKey&&window.readJSConfig[t.configKey]?t.readJSConfig=window.readJSConfig[t.configKey]:t.readJSConfig=window.readJSConfig,"boolean"===typeof t.readJSConfig.spa&&(t.status.spa=t.readJSConfig.spa),"boolean"===typeof t.readJSConfig.strict&&(t.status.strict=t.readJSConfig.strict),"boolean"===typeof t.readJSConfig.ignoreScrollDepth&&(t.status.ignoreScrollDepth=t.readJSConfig.ignoreScrollDepth),t.readJSConfig.debug&&("boolean"===typeof t.readJSConfig.debug.console&&(t.status.debug.console=t.readJSConfig.debug.console),"boolean"===typeof t.readJSConfig.debug.overlay&&(t.status.debug.overlay=t.readJSConfig.debug.overlay)),"number"===typeof t.readJSConfig.timeInterval&&(t.status.timeInterval=t.readJSConfig.timeInterval),t.readJSConfig.activity&&("number"===typeof t.readJSConfig.activity.increment&&(t.status.activity.increment=t.readJSConfig.activity.increment),"number"===typeof t.readJSConfig.activity.averageReadSpeed&&(t.status.activity.averageReadSpeed=t.readJSConfig.activity.averageReadSpeed)),t.readJSConfig.thresholds&&("number"===typeof t.readJSConfig.thresholds.viewport&&(t.status.thresholds.viewport=t.readJSConfig.thresholds.viewport),"number"===typeof t.readJSConfig.thresholds.domNode&&(t.status.thresholds.domNode=t.readJSConfig.thresholds.domNode),"number"===typeof t.readJSConfig.thresholds.readingPoint&&(t.status.thresholds.readingPoint=t.readJSConfig.thresholds.readingPoint),"number"===typeof t.readJSConfig.thresholds.domPolling&&(t.status.thresholds.domPolling=t.readJSConfig.thresholds.domPolling),"number"===typeof t.readJSConfig.thresholds.timeInView&&(t.status.thresholds.timeInView=t.readJSConfig.thresholds.timeInView),"number"===typeof t.readJSConfig.thresholds.minTimeInView&&(t.status.thresholds.minTimeInView=t.readJSConfig.thresholds.minTimeInView),"number"===typeof t.readJSConfig.thresholds.maxTimeInView&&(t.status.thresholds.maxTimeInView=t.readJSConfig.thresholds.maxTimeInView),"number"===typeof t.readJSConfig.thresholds.minVertical&&(t.status.thresholds.minVertical=t.readJSConfig.thresholds.minVertical),"number"===typeof t.readJSConfig.thresholds.percentagePoint&&(t.status.thresholds.percentagePoint=t.readJSConfig.thresholds.percentagePoint),"number"===typeof t.readJSConfig.thresholds.maxCalls&&(t.status.thresholds.maxCalls=t.readJSConfig.thresholds.maxCalls)),"string"!==typeof t.readJSConfig.el?(t.console("ERROR: readJS.initialize() expected el to be a string"),!1):"function"===typeof t.readJSConfig.cb||(t.console("ERROR: readJS.setConfig() expected a callback function"),!1)))},this.initialize=function(e){return"function"!==typeof e?(t.console("ERROR: readJS.initialize() expected a callback function"),!1):(t.callback=e,t.configKey&&window.readJSConfig[t.configKey]?t.readJSConfig=window.readJSConfig[t.configKey]:t.readJSConfig=window.readJSConfig,"string"!==typeof t.readJSConfig.el?(t.console("ERROR: readJS.initialize() expected el to be a string or object"),!1):(t.setInitialTime(),t.isOnValue=!0,t.stopPolling(),t.readingWorker=window.setInterval(t.checkActivity,1e3*t.status.timeInterval),t.intervals.push(t.readingWorker),t.console("readJS: starting interval ID",t.readingWorker),t.inDebugMode(),!0))},this.setInitialTime=function(){t.status.activity.initialTime=(new Date).getTime()},this.calculateTotalTime=function(){if(t.status.activity.initialTime){var e=(new Date).getTime(),i=t.status.activity.totalTime;t.status.activity.totalTime=parseInt(i)+parseInt(e)-parseInt(t.status.activity.initialTime),t.setInitialTime()}return t.status.activity.totalTime>0?t.status.activity.totalTime:(t.console("ERROR: readJS.calculateTotalTIme() - initialTime not set"),!1)},this.getScannableTargets=function(e){var i=document.querySelectorAll(e);return 0===i.length?(t.console("ERROR: readJS.getScannableTargets(className) - No elements by that className!"),!1):(t.scannableTargets=[],t.scannableTargets=Array.prototype.slice.call(i),t.scannableTargets)},this.visibleScannableTargets=function(e){if("undefined"!==typeof e&&e.length>0){var i=[];if(t.visibleElementsMap=[],1==e.length){var n=t.inView(e[0]);(n.dom_node_viewport_percent>t.status.thresholds.viewport||n.dom_node_inview_percent>80)&&(i.push(e[0]),t.visibleElementsMap.push(0))}else for(var o=0;o<e.length;o++)t.inView(e[o]).dom_node_inview_percent>80&&(i.push(e[o]),t.visibleElementsMap.push(o));return i.length>3?(t.console("ERROR: readJS.visibleScannableTargets() - More than 3 elements visible!"),!1):i}return t.console("ERROR: readJS.visibleScannableTargets() - No scannableTargets found!"),!1},this.getIntervals=function(){return t.intervals},this.checkActivity=function(){var e=t.status.timeInterval;t.status.activity.timeOnPage+=e,t.status.activity.timeInUnknownState+=e,t.status.activity.readingPoints+=e,t.detectForScroll(),t.endConditionsChecked()},this.endConditionsChecked=function(){if(t.isUpdateRequired()){var e=t.visibleScannableTargets(t.scannableTargets);if(e&&e.length>0){var i=e[0];return t.domNode=i,t.addPoints(),t.hasRead(),!0}}return!1},this.detectForScroll=function(){return!!t.status.activity.scrolled&&(t.status.activity.scrolled=!1,t.reactivate(),t.console("detected scroll:",t.status.activity.timeOnPage," seconds"),!0)},this.console=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];return!!t.status.debug.console&&(console.log(t.readingWorker,i),!0)},this.getText=function(e){try{for(var i="",n=e.childNodes.length,o=0;o<n;o++){var s=e.childNodes[o];8!==s.nodeType&&(i+=1!==s.nodeType?s.nodeValue:t.getText(s))}return i.replace(/[\t\n\r]+/g,"").replace(/\s+/g," ").trim()}catch(a){return t.console(a),!1}},this.calculateCoordinates=function(){if(t.domNode){var e=t.inView(t.domNode);return t.console("dom_node_inview_percent",e.dom_node_inview_percent,"dom_node_viewport_percent",e.dom_node_viewport_percent),!0}return t.console("ERROR: could not find the story body"),!1},this.hasRead=function(){return!t.status.ignoreScrollDepth&&t.status.activity.scrollDepth<t.status.thresholds.scrollDepth?(t.console("Has not read yet because user didn't pass scrollDepth threshold"),t.report(),!1):t.status.strict&&t.status.activity.dnp<t.status.thresholds.domNode?(t.console("STRICT MODE: not enough of dom node is in view"),t.report(),!1):t.status.activity.readingPoints<=t.status.thresholds.readingPoint?(t.console("Not enough points scored for callback"),t.report(),!1):t.status.activity.timeInView<t.status.thresholds.timeInView?(t.console("Not enough time in view for callback"),t.report(),!1):(t.callback({timeInView:t.status.activity.timeInView,timeOnPage:t.status.activity.timeOnPage,domNode:t.domNode}),t.status.activity.numberOfCalls++,t.scannableTargets.splice(t.visibleElementsMap[0],1),(t.scannableTargets.length<=0||t.status.activity.numberOfCalls>=t.status.thresholds.maxCalls)&&(t.removeListeners(),t.console("readJS: the user has read the article",t.status.activity.readingPoints),t.stopPolling()),!0)},this.stopPolling=function(){t.readingWorker&&(window.clearInterval(t.readingWorker),t.console("readJS: ending interval ID",t.readingWorker),delete t.readingWorker)},this.report=function(){t.console("readingPoints: "+t.status.activity.readingPoints,"timeInView: "+t.status.activity.timeInView,t.status.thresholds.readingPoint,t.status.thresholds.timeInView)},this.addPoints=function(){return!!t.inViewport(t.domNode)&&(t.status.activity.dnp>t.status.thresholds.domNode&&(t.status.activity.readingPoints+=t.status.activity.increment),t.status.activity.vpp>t.status.thresholds.viewport&&(t.status.activity.readingPoints+=t.status.activity.increment),t.status.activity.readingPoints)},this.isUpdateRequired=function(){return t.status.activity.pollingPoints+=100*Math.pow(.9,t.status.activity.timeInUnknownState),t.status.activity.pollingPoints>=t.status.thresholds.domPolling&&(t.console("readJS: analyzing the DOM at",t.status.activity.timeOnPage," seconds",t.status.activity.pollingPoints),t.status.activity.pollingPoints=0,!0)},this.reactivate=function(){t.console("readJS: reactivating refresh rate"),t.status.activity.timeInUnknownState=0,t.status.activity.pollingPoints+=t.status.activity.increment},this.inDebugMode=function(){t.status.debug.overlay&&(t.scrollDataOverlay=document.createElement("DIV"),t.scrollDataOverlay.style.position="fixed",t.scrollDataOverlay.style.bottom="2em",t.scrollDataOverlay.style.right="2em",t.scrollDataOverlay.style.zIndex=1e4,t.scrollDataOverlay.style.background="#fff",t.scrollDataOverlay.style.border="1px solid #000",t.scrollDataOverlay.id="scrollinfo",document.body.appendChild(t.scrollDataOverlay),t.showScrollInfo())},this.inViewport=function(e){var t=e.getBoundingClientRect();return t.bottom>0&&t.right>0&&t.left<window.innerWidth&&t.top<window.innerHeight},this.showScrollInfo=function(){return!!t.status.debug.overlay&&(document.getElementById("scrollinfo").innerHTML="<ul><li>Scroll Depth Peak:"+t.status.activity.scrollDepth+"</li><li>Element Top: "+parseInt(t.status.coordinates.domnode.tl[1],10)+"</li><li>Element Bottom: "+parseInt(t.status.coordinates.domnode.br[1],10)+"</li><li>Scroll Depth Threshold: "+parseInt(t.status.thresholds.scrollDepth,10)+"</li></ul>",!0)},this.getScrollInfo=function(){var e;document.body.scrollTop?e=document.body.scrollTop:document.documentElement.scrollTop&&(e=document.documentElement.scrollTop);var i=Math.abs(e)+window.innerHeight;return i>t.status.activity.scrollDepth&&(t.status.activity.scrollDepth=i),!0},this.removeDomNode=function(e){var t=document.getElementById(e);return!!t&&(t.parentNode.removeChild(t),t=null,!0)},this.removeOverlays=function(){t.removeDomNode("viewport_inview"),t.removeDomNode("overlap_inview"),t.removeDomNode("domnode_inview"),t.removeDomNode("scroll_depth_marker")},this.getVisibilityProperties=function(){var e,t;return"undefined"!==typeof document.hidden?(e="hidden",t="visibilitychange"):"undefined"!==typeof document.mozHidden?(e="mozHidden",t="mozvisibilitychange"):"undefined"!==typeof document.msHidden?(e="msHidden",t="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(e="webkitHidden",t="webkitvisibilitychange"),{hiddenProp:e,eventName:t}},this.handleVisibilityChange=function(){var e=t.getVisibilityProperties().hiddenProp;document[e]?(t.console("readJS: pausing after detecting focus to another tab"),t.stopPolling(),t.calculateTotalTime()):(t.console("readJS: reinitializing after detecting tab is in focus"),t.initialize(t.callback))},this.inView=function(e){var i,n,o,s;t.domNode=e;var a={tl:[],br:[]};a.tl[0]=Math.abs(document.body.scrollLeft||document.documentElement.scrollLeft),a.tl[1]=Math.abs(document.body.scrollTop||document.documentElement.scrollTop),a.br[0]=a.tl[0]+window.innerWidth,a.br[1]=a.tl[1]+window.innerHeight,a.width=window.innerWidth,a.height=window.innerHeight,a.area=a.width*a.height,t.status.coordinates.viewport=a,t.status.debug.overlay&&(t.status.debug.overlays.vui||((n=document.createElement("DIV")).id="viewport_inview",n.style.position="absolute",n.style.background="red",n.style.opacity="0.5",n.style.zIndex=9999,document.body.appendChild(n),t.status.debug.overlays.vui=n),(n=t.status.debug.overlays.vui).style.left=a.tl[0]+"px",n.style.top=a.tl[1]+"px",n.style.width=a.width+"px",n.style.height=a.height+"px");var r={tl:[],br:[]},l=e.getBoundingClientRect(),d="undefined"===typeof window.scrollX?parseInt(window.pageXOffset,10):parseInt(window.scrollX,10),c="undefined"===typeof window.scrollY?parseInt(window.pageYOffset,10):parseInt(window.scrollY,10);if(r.tl[0]=l.left+d,r.tl[1]=l.top+c,r.br[0]=r.tl[0]+l.width,r.br[1]=r.tl[1]+l.height,t.status.coordinates.domnode=r,t.getScrollInfo(),t.status.thresholds.scrollDepth=Math.abs(r.tl[1])+l.height*t.status.thresholds.minVertical/100,t.status.debug.overlay&&(t.status.debug.overlays.dui||((i=document.createElement("DIV")).id="domnode_inview",i.style.position="absolute",i.style.background="blue",i.style.opacity="0.5",i.style.zIndex=9999,document.body.appendChild(i),t.status.debug.overlays.dui=i),(i=t.status.debug.overlays.dui).style.left=r.tl[0]+"px",i.style.top=r.tl[1]+"px",i.style.width=l.width+"px",i.style.height=l.height+"px",t.status.debug.overlays.sdui||((s=document.createElement("DIV")).id="scroll_depth_marker",s.style.position="absolute",s.style.background="black",s.style.width="100%",s.style.height="4px",s.style.opacity="0.5",s.style.zIndex=9999,document.body.appendChild(s),t.status.debug.overlays.sdui=s),(s=t.status.debug.overlays.sdui).style.left="0px",s.style.top=Math.floor(t.status.thresholds.scrollDepth)+"px"),!t.inViewport(t.domNode))return{dom_node_inview_percent:0,dom_node_viewport_percent:0};var u={tl:[],br:[]};u.tl[0]=r.tl[0]>=a.tl[0]?r.tl[0]:a.tl[0],u.tl[1]=r.tl[1]>=a.tl[1]?r.tl[1]:a.tl[1],u.br[0]=r.br[0]<=a.br[0]?r.br[0]:a.br[0],u.br[1]=r.br[1]<=a.br[1]?r.br[1]:a.br[1];var h=Math.abs(u.tl[0]-u.br[0]),g=Math.abs(u.tl[1]-u.br[1]),m=Math.abs((r.tl[0]-r.br[0])*(r.tl[1]-r.br[1])),f=Math.abs(h*g),p=f/m*100,v=f/a.area*100;t.status.debug.overlay&&(t.status.debug.overlays.oui||((o=document.createElement("DIV")).id="overlap_inview",document.body.appendChild(o),o.style.position="absolute",o.style.background="#4B0082",o.style.opacity="0.5",o.style.zIndex=9999,t.status.debug.overlays.oui=o),(o=t.status.debug.overlays.oui).style.left=u.tl[0]+"px",o.style.top=u.tl[1]+"px",o.style.width=h+"px",o.style.height=g+"px"),t.status.activity.dnp=p,t.status.activity.vpp=v;var y={dom_node_inview_percent:p,dom_node_viewport_percent:v};return t.status.strict&&(p<t.status.thresholds.domNode||v<t.status.thresholds.viewport)||(t.status.activity.timeInView+=t.status.timeInterval),y},this.handleScroll=function(){t.status.activity.scrolled=!0,t.showScrollInfo()},this.handleClick=function(){t.status.activity.readingPoints+=t.status.activity.increment,t.reactivate()},this.handleLoad=function(){try{t.getScannableTargets(t.readJSConfig.el),t.domNode=document.querySelector(t.readJSConfig.el),t.setTimeInViewThreshold(),t.domNode.addEventListener("click",t.handleClick),t.visibleScannableTargets(t.scannableTargets)}catch(e){return t.console(e),!1}},this.setTimeInViewThreshold=function(){if("number"===typeof t.status.thresholds.timeInView)return!1;var e=t.getText(t.domNode).split(" ").length,i=t.status.activity.averageReadSpeed;return t.status.thresholds.timeInView=Math.floor(e*(t.status.thresholds.percentagePoint/100)/i),t.status.thresholds.minTimeInView>t.status.thresholds.timeInView?t.status.thresholds.timeInView=t.status.thresholds.minTimeInView:t.status.thresholds.timeInView>t.status.thresholds.maxTimeInView&&(t.status.thresholds.timeInView=t.status.thresholds.maxTimeInView),!0},this.removeListeners=function(){window.removeEventListener("scroll",t.handleScroll),window.removeEventListener("load",t.handleLoad),"undefined"!==typeof t.domNode&&t.domNode.removeEventListener("click",t.handleClick),document.removeEventListener(t.getVisibilityProperties().eventName,t.handleVisibilityChange,!1)},this.isOn=function(){return t.isOnValue},this.turnOff=function(){return!!t.isOnValue&&(t.removeListeners(),t.console("readJS: stopping midway"),t.stopPolling(),t.removeOverlays(),t.status.activity.read=!1,t.isOnValue=!1,!0)},this.turnOn=function(){return!t.isOnValue&&(t.resetConfigStatus(),t.setConfig(),t.initialized&&!t.readJSConfig.spa?(t.console("ERROR: Not a SPA. Cannot turnOn() again on the same web page"),!1):"undefined"===typeof t.readJSConfig?(t.console("ERROR: Could not find callback and/or domNode css selector in window.readJSConfig"),!1):"string"!==typeof t.readJSConfig.el?(t.console("ERROR:  readJSConfig expected el to be a string"),!1):"function"!==typeof t.readJSConfig.cb?(t.console("ERROR: readJSConfig expected a callback function"),!1):(window.addEventListener("scroll",t.handleScroll),document.addEventListener(t.getVisibilityProperties().eventName,t.handleVisibilityChange,!1),t.status.spa?t.handleLoad():window.addEventListener("load",t.handleLoad),t.initialize(t.readJSConfig.cb),t.isOnValue=!0,t.initialized||(t.handleVisibilityChange(),t.initialized=!0),!0))}}window.readJS=new e("read"),window.scannedJS=new e("scanned"),"undefined"!==typeof readJSConfig&&!0!==readJSConfig.spa?readJSConfig.scanned||readJSConfig.read?(readJSConfig.scanned&&window.scannedJS.turnOn(),readJSConfig.read&&window.readJS.turnOn()):window.readJS.turnOn():(window.readJS&&window.readJS.resetConfigStatus(),window.scannedJS&&window.scannedJS.resetConfigStatus())}()}}]);