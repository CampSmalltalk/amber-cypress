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
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
(packageDefinitions=smalltalk.send(smalltalk.send(pkg, "_snapshot", []), "_definitions", []));
(expectedDefinitions=smalltalk.send(self, "_baseDefinitions", []));
smalltalk.send(self, "_assert_", [smalltalk.send(smalltalk.send(expectedDefinitions, "_size", []), "__eq", [smalltalk.send(packageDefinitions, "_size", [])])]);
smalltalk.send(packageDefinitions, "_do_", [(function(def){return ((($receiver = smalltalk.send(expectedDefinitions, "_includes_", [def])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send(def, "_inspect", []);return smalltalk.send(self, "_assert_", [false]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send(def, "_inspect", []);return smalltalk.send(self, "_assert_", [false]);})]));})]);
return self;}
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_baseDefinitions'),
smalltalk.method({
selector: unescape('baseDefinitions'),
fn: function (){
var self=this;
var className=nil;
var classClassName=nil;
(className="CypressMockBasic");
(classClassName="CypressMockBasic class");
return [smalltalk.send((smalltalk.CypressClassDefinition || CypressClassDefinition), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [className, "Object", unescape("Cypress-Mocks"), ["name"], ["current"], "This mock contains basic class and instance method selectors"]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [classClassName, true, "initialize", "initialization", unescape("initialize%0A%09self%20current%3A%20self%20new")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [classClassName, true, "current", "accessing", unescape("current%0A%09%5Ecurrent")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [classClassName, true, "current:", "accessing", unescape("current%3A%20anObject%0A%09current%20%3A%3D%20anObject")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "initialize", "initialization", unescape("initialize%0A%09super%20initialize.%0A%09self%20name%3A%20%27Unknown%27")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name", "accessing", unescape("name%0A%09%5Ename")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name:", "accessing", unescape("name%3A%20aString%0A%09name%20%3A%3D%20aString")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "extra", "accessing", unescape("extra%0A%09%22extra%20method%22")])];
return self;}
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_targetDefinitions'),
smalltalk.method({
selector: unescape('targetDefinitions'),
fn: function (){
var self=this;
var className=nil;
var classClassName=nil;
(className="CypressMockBasic");
(classClassName="CypressMockBasic class");
return [smalltalk.send((smalltalk.CypressClassDefinition || CypressClassDefinition), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [className, "Object", unescape("Cypress-Mocks"), ["name"], ["current"], "This mock contains basic class and instance method selectors"]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [classClassName, true, "initialize", "initialization", unescape("initialize%0A%09self%20current%3A%20self%20new")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [classClassName, true, "current", "accessing", unescape("current%0A%09%5Ecurrent")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [classClassName, true, "current:", "accessing", unescape("current%3A%20anObject%0A%09current%20%3A%3D%20anObject")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "initialize", "initialization", unescape("initialize%0A%09super%20initialize.%0A%09self%20name%3A%20%27Unknown%27")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name", "accessing", unescape("name%0A%09%5Ename")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name:", "accessing", unescape("name%3A%20aString%0A%09%22changed%20method%22%0A%09name%20%3A%3D%20aString")])];
return self;}
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_testPatch'),
smalltalk.method({
selector: unescape('testPatch'),
fn: function (){
var self=this;
var baseSnapshot=nil;
var targetSnapshot=nil;
(baseSnapshot=smalltalk.send((smalltalk.CypressSnapshot || CypressSnapshot), "_definitions_", [smalltalk.send(self, "_baseDefinitions", [])]));
(targetSnapshot=smalltalk.send((smalltalk.CypressSnapshot || CypressSnapshot), "_definitions_", [smalltalk.send(self, "_targetDefinitions", [])]));
smalltalk.send((smalltalk.CypressPatch || CypressPatch), "_fromBase_toTarget_", [baseSnapshot, targetSnapshot]);
return self;}
}),
smalltalk.CypressDefinitionTest);



