smalltalk.addPackage('AmberProjectPage', {});
smalltalk.addClass('AmberProjectPage', smalltalk.Widget, [], 'AmberProjectPage');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_class_", ["container"]);return smalltalk.send($rec, "_with_", [(function(){(function($rec){smalltalk.send($rec, "_id_", ["header"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return smalltalk.send(div, "_h1_", ["Amber Project Name"]);})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);(function($rec){smalltalk.send($rec, "_id_", ["subheader"]);smalltalk.send($rec, "_class_", [unescape("span-24%20last")]);return smalltalk.send($rec, "_with_", [(function(div){return (function($rec){smalltalk.send($rec, "_class_", ["alt"]);return smalltalk.send($rec, "_with_", ["Amber Project description"]);})(smalltalk.send(div, "_h3", []));})]);})(smalltalk.send(html, "_div", []));smalltalk.send(html, "_hr", []);return smalltalk.send(html, "_with_", ["by Project Author"]);})]);})(smalltalk.send(html, "_div", []));
return self;}
}),
smalltalk.AmberProjectPage);


smalltalk.addMethod(
unescape('_open'),
smalltalk.method({
selector: unescape('open'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_new", []), "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
return self;}
}),
smalltalk.AmberProjectPage.klass);


