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

smalltalk.addMethod(
unescape('_testSnapshot'),
smalltalk.method({
selector: unescape('testSnapshot'),
fn: function (){
var self=this;
var name=nil;
var pkg=nil;
var packageDefinitions=nil;
var expectedDefinitions=nil;
var count=nil;
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
(packageDefinitions=smalltalk.send(smalltalk.send(pkg, "_snapshot", []), "_definitions", []));
(expectedDefinitions=smalltalk.send(self, "_expectedMockDefinitions", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(expectedDefinitions, "_size", []), "__eq", [smalltalk.send(packageDefinitions, "_size", [])])]);
smalltalk.send(packageDefinitions, "_inspect", []);
smalltalk.send(expectedDefinitions, "_inspect", []);
(count=(1));
smalltalk.send(packageDefinitions, "_do_", [(function(def){(function($rec){smalltalk.send($rec, "_cr", []);return smalltalk.send($rec, "_show_", [smalltalk.send(count, "_printString", [])]);})((smalltalk.Transcript || Transcript));(count=((($receiver = count).klass === smalltalk.Number) ? $receiver +(1) : smalltalk.send($receiver, "__plus", [(1)])));return smalltalk.send(self, "_assert_", [smalltalk.send(expectedDefinitions, "_includes_", [def])]);})]);
return self;}
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_expectedMockDefinitions'),
smalltalk.method({
selector: unescape('expectedMockDefinitions'),
fn: function (){
var self=this;
var className=nil;
(className="CypressMockBasic");
return [smalltalk.send((smalltalk.CypressClassDefinition || CypressClassDefinition), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [className, "Object", className, ["name"], ["current"], "This mock contains basic class and instance method selectors"]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, true, "initialize", "initialization", unescape("initialize%0A%09self%20current%3A%20self%20new")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, true, "current", "accessting", unescape("current%0A%09%5Ecurrent")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, true, "current:", "accessting", unescape("current%3A%20anObject%0A%09current%20%3A%3D%20anObject")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "initialize", "initialization", unescape("initialize%0A%09super%20initialize.%0A%09self%20name%3A%20%27Unknown%27")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name", "accessing", unescape("name%0A%09%5Ename")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name:", "accessing", unescape("name%3A%20aString%0A%09name%20%3A%3D%20aString")])];
return self;}
}),
smalltalk.CypressDefinitionTest);



