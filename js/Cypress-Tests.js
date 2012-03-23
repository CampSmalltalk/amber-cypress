smalltalk.addPackage('Cypress-Tests', {});
smalltalk.addClass('CypressDefinitionTest', smalltalk.TestCase, [], 'Cypress-Tests');
smalltalk.addMethod(
unescape('_testNameEquality'),
smalltalk.method({
selector: unescape('testNameEquality'),
category: 'testing',
fn: function (){
var self=this;
var pkg=nil;
var name=nil;
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
smalltalk.send(self, "_assert_equals_", [smalltalk.send(pkg, "_name", []), name]);
smalltalk.send(self, "_deny_", [smalltalk.send(smalltalk.send(pkg, "_name", []), "__eq", ["Nope."])]);
return self;},
args: [],
source: unescape('testNameEquality%0A%09%7C%20pkg%20name%20%7C%0A%09name%20%3A%3D%20%27Cypress-Mocks%27.%0A%09pkg%20%3A%3D%20CypressPackage%20new%20name%3A%20name.%0A%09self%20assert%3A%20pkg%20name%20equals%3A%20name.%0A%09self%20deny%3A%20%28pkg%20name%20%3D%20%27Nope.%27%29.'),
messageSends: ["name:", "new", "assert:equals:", "name", "deny:", unescape("%3D")],
referencedClasses: ["CypressPackage"]
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_testEquality'),
smalltalk.method({
selector: unescape('testEquality'),
category: 'testing',
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
return self;},
args: [],
source: unescape('testEquality%0A%09%7C%20pkg1%20pkg2%20pkg3%20name%20%7C%0A%09name%20%3A%3D%20%27Cypress-Mocks%27.%0A%09pkg1%20%3A%3D%20CypressPackage%20new%20name%3A%20name.%0A%09pkg2%20%3A%3D%20CypressPackage%20new%20name%3A%20name.%0A%09pkg3%20%3A%3D%20CypressPackage%20new%20name%3A%20%27Nope%21%27.%0A%0A%09self%20assert%3A%20pkg1%20equals%3A%20pkg2.%0A%09self%20deny%3A%20pkg1%20%3D%20pkg3'),
messageSends: ["name:", "new", "assert:equals:", "deny:", unescape("%3D")],
referencedClasses: ["CypressPackage"]
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_testPrintString'),
smalltalk.method({
selector: unescape('testPrintString'),
category: 'testing',
fn: function (){
var self=this;
var name=nil;
var pkg=nil;
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
smalltalk.send(self, "_assert_equals_", [smalltalk.send(smalltalk.send(unescape("a%20CypressPackage%28"), "__comma", [name]), "__comma", [unescape("%29")]), smalltalk.send(pkg, "_printString", [])]);
return self;},
args: [],
source: unescape('testPrintString%0A%09%7C%20name%20pkg%20%7C%0A%09name%20%3A%3D%20%27Cypress-Mocks%27.%0A%09pkg%20%3A%3D%20CypressPackage%20new%20name%3A%20name.%0A%09self%20assert%3A%20%27a%20CypressPackage%28%27%2C%20name%2C%20%27%29%27%20equals%3A%20pkg%20printString.'),
messageSends: ["name:", "new", "assert:equals:", unescape("%2C"), "printString"],
referencedClasses: ["CypressPackage"]
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_testSnapshot'),
smalltalk.method({
selector: unescape('testSnapshot'),
category: 'testing',
fn: function (){
var self=this;
var name=nil;
var pkg=nil;
var packageDefinitions=nil;
var expectedDefinitions=nil;
(name=unescape("Cypress-Mocks"));
(pkg=smalltalk.send(smalltalk.send((smalltalk.CypressPackage || CypressPackage), "_new", []), "_name_", [name]));
(packageDefinitions=smalltalk.send(smalltalk.send(pkg, "_snapshot", []), "_definitions", []));
(expectedDefinitions=smalltalk.send(self, "_expectedMockDefinitions", []));
return self;},
args: [],
source: unescape('testSnapshot%0A%09%7C%20name%20pkg%20packageDefinitions%20expectedDefinitions%20%7C%0A%09name%20%3A%3D%20%27Cypress-Mocks%27.%0A%09pkg%20%3A%3D%20CypressPackage%20new%20name%3A%20name.%0A%09packageDefinitions%20%3A%3D%20pkg%20snapshot%20definitions.%0A%09expectedDefinitions%20%3A%3D%20self%20expectedMockDefinitions.%0A'),
messageSends: ["name:", "new", "definitions", "snapshot", "expectedMockDefinitions"],
referencedClasses: ["CypressPackage"]
}),
smalltalk.CypressDefinitionTest);

smalltalk.addMethod(
unescape('_expectedMockDefinitions'),
smalltalk.method({
selector: unescape('expectedMockDefinitions'),
category: 'testing',
fn: function (){
var self=this;
var className=nil;
(className="CypressMockBasic");
return [smalltalk.send((smalltalk.CypressClassDefinition || CypressClassDefinition), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [className, "Object", className, "name", "current", "This mock contains basic class and instance method selectors"]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, true, "initialize", "initialization", unescape("initialize%0A%09self%20current%3A%20self%20new")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, true, "current", "accessting", unescape("current%0A%09%5Ecurrent")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, true, "current:", "accessting", unescape("current%3A%20anObject%0A%09current%20%3A%3D%20anObject")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "initialize", "initialization", unescape("initialize%0A%09super%20initialize.%0A%09self%20name%3A%20%27Unknown%27")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name", "accessing", unescape("name%0A%09%5Ename")]),smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [className, false, "name:", "accessing", unescape("name%3A%20aString%0A%09name%20%3A%3D%20aString")])];
return self;},
args: [],
source: unescape('expectedMockDefinitions%0A%09%7C%20className%20%7C%0A%09className%20%3A%3D%20%27CypressMockBasic%27.%0A%09%5E%7B%0A%09%09%28CypressClassDefinition%0A%20%20%20%20%20%20%20%20%09%09name%3A%20className%0A%20%20%20%20%20%20%20%09%09%20%09superclassName%3A%20%27Object%27%0A%20%20%20%20%20%20%20%09%09%09category%3A%20className%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%09instVarNames%3A%20%27name%27%0A%09%09%09classInstVarNames%3A%20%27current%27%0A%20%20%20%20%20%20%20%20%09%09comment%3A%20%27This%20mock%20contains%20basic%20class%20and%20instance%20method%20selectors%27%29.%0A%20%20%20%09%20%09%28CypressMethodDefinition%0A%20%20%20%20%20%20%20%20%20%20%09%09className%3A%20className%0A%20%20%20%20%20%20%20%20%09%09classIsMeta%3A%20true%0A%20%20%20%20%20%20%20%20%09%09selector%3A%20%27initialize%27%0A%20%20%20%20%20%20%20%20%09%09category%3A%20%27initialization%27%0A%20%20%20%20%20%20%20%20%09%09source%3A%27initialize%0A%09self%20current%3A%20self%20new%27%29.%0A%20%20%20%09%20%09%28CypressMethodDefinition%0A%20%20%20%20%20%20%20%20%20%20%09%09className%3A%20className%0A%20%20%20%20%20%20%20%20%09%09classIsMeta%3A%20true%0A%20%20%20%20%20%20%20%20%09%09selector%3A%20%27current%27%0A%20%20%20%20%20%20%20%20%09%09category%3A%20%27accessting%27%0A%20%20%20%20%20%20%20%20%09%09source%3A%27current%0A%09%5Ecurrent%27%29.%0A%20%20%20%09%20%09%28CypressMethodDefinition%0A%20%20%20%20%20%20%20%20%20%20%09%09className%3A%20className%0A%20%20%20%20%20%20%20%20%09%09classIsMeta%3A%20true%0A%20%20%20%20%20%20%20%20%09%09selector%3A%20%27current%3A%27%0A%20%20%20%20%20%20%20%20%09%09category%3A%20%27accessting%27%0A%20%20%20%20%20%20%20%20%09%09source%3A%27current%3A%20anObject%0A%09current%20%3A%3D%20anObject%27%29.%0A%20%20%20%09%20%09%28CypressMethodDefinition%0A%20%20%20%20%20%20%20%20%20%20%09%09className%3A%20className%0A%20%20%20%20%20%20%20%20%09%09classIsMeta%3A%20false%0A%20%20%20%20%20%20%20%20%09%09selector%3A%20%27initialize%27%0A%20%20%20%20%20%20%20%20%09%09category%3A%20%27initialization%27%0A%20%20%20%20%20%20%20%20%09%09source%3A%27initialize%0A%09super%20initialize.%0A%09self%20name%3A%20%27%27Unknown%27%27%27%29.%0A%20%20%20%09%20%09%28CypressMethodDefinition%0A%20%20%20%20%20%20%20%20%20%20%09%09className%3A%20className%0A%20%20%20%20%20%20%20%20%09%09classIsMeta%3A%20false%0A%20%20%20%20%20%20%20%20%09%09selector%3A%20%27name%27%0A%20%20%20%20%20%20%20%20%09%09category%3A%20%27accessing%27%0A%20%20%20%20%20%20%20%20%09%09source%3A%27name%0A%09%5Ename%27%29.%0A%20%20%20%09%20%09%28CypressMethodDefinition%0A%20%20%20%20%20%20%20%20%20%20%09%09className%3A%20className%0A%20%20%20%20%20%20%20%20%09%09classIsMeta%3A%20false%0A%20%20%20%20%20%20%20%20%09%09selector%3A%20%27name%3A%27%0A%20%20%20%20%20%20%20%20%09%09category%3A%20%27accessing%27%0A%20%20%20%20%20%20%20%20%09%09source%3A%27name%3A%20aString%0A%09name%20%3A%3D%20aString%27%29%0A%09%7D'),
messageSends: ["name:superclassName:category:instVarNames:classInstVarNames:comment:", "className:classIsMeta:selector:category:source:"],
referencedClasses: ["CypressClassDefinition", "CypressMethodDefinition"]
}),
smalltalk.CypressDefinitionTest);



