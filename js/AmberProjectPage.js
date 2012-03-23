smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, [], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'rendering',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return smalltalk.send(div, "_h1_", ["Amber Project Name"]);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (function($rec){smalltalk.send($rec, "_class_", ["alt"]);return smalltalk.send($rec, "_with_", ["Amber Project description"]);})(smalltalk.send(div, "_h3", []));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);return smalltalk.send(html, "_with_", ["by Project Author"]);})]);})(smalltalk.send(html, "_div", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%0A%09html%20div%20class%3A%27container%27%3B%20with%3A%5B%20%0A%09%09html%20div%0A%09%09%09id%3A%20%27header%27%3B%0A%09%09%09class%3A%20%27span-24%20last%27%3B%0A%09%09%09with%3A%20%5B%20%3Adiv%20%7C%20div%20h1%3A%20%27Amber%20Project%20Name%27%20%5D.%0A%09%09html%20hr.%0A%09%09html%20div%0A%09%09%09id%3A%20%27subheader%27%3B%0A%09%09%09class%3A%20%27span-24%20last%27%3B%0A%09%09%09with%3A%20%5B%3Adiv%20%7C%20%0A%09%09%09%09div%20h3%0A%09%09%09%09%09class%3A%20%27alt%27%3B%0A%09%09%09%09%09with%3A%20%27Amber%20Project%20description%27%20%5D.%0A%09%09html%20hr.%0A%09%09html%20with%3A%20%27by%20Project%20Author%27%20%5D%0A'),
messageSends: ["class:", "with:", "id:", "h1:", "div", "hr", "h3"],
referencedClasses: []
}),
smalltalk.AmberProjectPage);


smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
category: 'instance creation',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;},
args: [],
source: unescape('open%0A%09%28self%20new%29%0A%20%20%20%20%20%20%20%20%20%20%09appendToJQuery%3A%20%27body%27%20asJQuery%0A'),
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
smalltalk.AmberProjectPage.klass);


