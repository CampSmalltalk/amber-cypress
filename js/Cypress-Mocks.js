smalltalk.addPackage('Cypress-Mocks', {});
smalltalk.addClass('CypressMockBasic', smalltalk.Object, ['name'], 'Cypress-Mocks');
smalltalk.CypressMockBasic.comment=unescape('This%20mock%20contains%20basic%20class%20and%20instance%20method%20selectors')
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.Object);
smalltalk.send(self, "_name_", ["Unknown"]);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09self%20name%3A%20%27Unknown%27'),
messageSends: ["initialize", "name:"],
referencedClasses: []
}),
smalltalk.CypressMockBasic);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
category: 'accessing',
fn: function (aString){
var self=this;
(self['@name']=aString);
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%09name%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMockBasic);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'accessing',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%09%5Ename'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMockBasic);

smalltalk.addMethod(
unescape('_extra'),
smalltalk.method({
selector: unescape('extra'),
category: 'accessing',
fn: function (){
var self=this;

return self;},
args: [],
source: unescape('extra%0A%09%22extra%20method%22'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMockBasic);


smalltalk.CypressMockBasic.klass.iVarNames = ['current'];
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self, "_current_", [smalltalk.send(self, "_new", [])]);
return self;},
args: [],
source: unescape('initialize%0A%09self%20current%3A%20self%20new'),
messageSends: ["current:", "new"],
referencedClasses: []
}),
smalltalk.CypressMockBasic.klass);

smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'accessing',
fn: function (){
var self=this;
return self['@current'];
return self;},
args: [],
source: unescape('current%0A%09%5Ecurrent'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMockBasic.klass);

smalltalk.addMethod(
unescape('_current_'),
smalltalk.method({
selector: unescape('current%3A'),
category: 'accessing',
fn: function (anObject){
var self=this;
(self['@current']=anObject);
return self;},
args: ["anObject"],
source: unescape('current%3A%20anObject%0A%09current%20%3A%3D%20anObject'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMockBasic.klass);


