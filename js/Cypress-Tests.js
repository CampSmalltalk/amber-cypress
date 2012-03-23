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



