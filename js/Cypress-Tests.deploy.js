smalltalk.addPackage('Cypress-Tests', {});
smalltalk.addClass('CypressDefinitionTest', smalltalk.TestCase, [], 'Cypress-Tests');
smalltalk.addMethod(
unescape('_testNameEquality'),
smalltalk.method({
selector: unescape('testNameEquality'),
fn: function (){
var self=this;
var pkg=nil;
var name=nil;
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
smalltalk.send(self, "_assert_equals_", [smalltalk.send(pkg, "_name", []), name]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(pkg, "_name", []), "__eq", ["Nope."])]);
return self;}
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
fn: function (){
var self=this;
var pkg1=nil;
var pkg2=nil;
var pkg3=nil;
var name=nil;
(name=unescape("Cypress-Mocks"));
(pkg1=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
(pkg2=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
(pkg3=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [unescape("Nope%21")]));
smalltalk.send(self, "_assert_equals_", [pkg1, pkg2]);
smalltalk.send(self, "_deny_", [smalltalk.send(pkg1, "__eq", [pkg3])]);
return self;}
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_testPrintString'),
smalltalk.method({
selector: unescape('testPrintString'),
fn: function (){
var self=this;
var name=nil;
var pkg=nil;
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(unescape("a%20CypressPackage%28"), "__comma", [name]), "__comma", [unescape("%29")]), smalltalk.send(pkg, "_printString", [])]);
return self;}
}),
smalltalk.CypressDefinitionTest);



