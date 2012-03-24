smalltalk.addPackage('Cypress-Mocks', {});
smalltalk.addClass('CypressMockBasic', smalltalk.Object, ['name'], 'Cypress-Mocks');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send(self, "_name_", ["Unknown"]);
return self;}
}),
smalltalk.CypressMockBasic);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
fn: function (aString){
var self=this;
(self['@name']=aString);
return self;}
}),
smalltalk.CypressMockBasic);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.CypressMockBasic);

smalltalk.addMethod(
unescape('_extra'),
smalltalk.method({
selector: unescape('extra'),
fn: function (){
var self=this;

return self;}
}),
smalltalk.CypressMockBasic);


smalltalk.CypressMockBasic.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_current_", [smalltalk.send(self, "_new", [])]);
return self;}
}),
smalltalk.CypressMockBasic.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return self['@current'];
return self;}
}),
smalltalk.CypressMockBasic.klass);

smalltalk.addMethod(
unescape('_current_'),
smalltalk.method({
selector: unescape('current%3A'),
fn: function (anObject){
var self=this;
(self['@current']=anObject);
return self;}
}),
smalltalk.CypressMockBasic.klass);


