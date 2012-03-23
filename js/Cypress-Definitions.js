smalltalk.addPackage('Cypress-Definitions', {});
smalltalk.addClass('CypressDefinition', smalltalk.Object, [], 'Cypress-Definitions');


smalltalk.addClass('CypressPackage', smalltalk.Object, ['name'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (other){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(other, "_species", []), "__eq", [smalltalk.send(self, "_species", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(other, "_name", []), "_sameAs_", [self['@name']]);})]);
return self;},
args: ["other"],
source: unescape('%3D%20other%0A%09%5E%20other%20species%20%3D%20self%20species%20and%3A%20%5Bother%20name%20sameAs%3A%20name%5D'),
messageSends: ["and:", unescape("%3D"), "species", "sameAs:", "name"],
referencedClasses: []
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@name'];
return self;},
args: [],
source: unescape('name%0A%09%5E%20name'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
(self['@name']=aString);
return self;},
args: ["aString"],
source: unescape('name%3A%20aString%0A%09name%20%3A%3D%20aString'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_snapshot'),
smalltalk.method({
selector: unescape('snapshot'),
category: 'not yet classified',
fn: function (){
var self=this;
var package=nil;
var definitions=nil;
var name=nil;
(package=smalltalk.send(smalltalk.send(self, "_class", []), "_package", []));
(definitions=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
smalltalk.send(smalltalk.send(package, "_sortedClasses", []), "_do_", [(function(cls){smalltalk.send(definitions, "_add_", [smalltalk.send(cls, "_asCypressClassDefinition", [])]);return smalltalk.send(smalltalk.send(smalltalk.send(cls, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})]));})]);})]);
(self['@name']=smalltalk.send(package, "_name", []));
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [self['@name']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})]));})]);})]);
return smalltalk.send((smalltalk.CypressSnapshot || CypressSnapshot), "_definitions_", [definitions]);
return self;},
args: [],
source: unescape('snapshot%0A%09%7C%20package%20definitions%20name%20%20%7C%0A%09package%20%3A%3D%20self%20class%20package.%0A%09definitions%20%3A%3D%20OrderedCollection%20new.%0A%09package%20sortedClasses%20do%3A%20%5B%3Acls%20%7C%0A%20%20%20%20%20%20%20%20%09definitions%20add%3A%20cls%20asCypressClassDefinition.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cls%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09%28method%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09%5E%20CypressSnapshot%20definitions%3A%20definitions%0A'),
messageSends: ["package", "class", "new", "do:", "sortedClasses", "add:", "asCypressClassDefinition", "values", "methodDictionary", "ifFalse:", "match:", "category", "asCypressMethodDefinition", "name", unescape("%2C"), "classes", "current", "collect:", "ifTrue:", unescape("%3D"), "definitions:"],
referencedClasses: ["OrderedCollection", "Smalltalk", "CypressSnapshot"]
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [self['@name']]), "__comma", [unescape("%29")]);
return self;},
args: [],
source: unescape('printString%0A%09%5Esuper%20printString%2C%20%27%28%27%2C%20name%2C%20%27%29%27'),
messageSends: [unescape("%2C"), "printString"],
referencedClasses: []
}),
smalltalk.CypressPackage);



smalltalk.addClass('CypressSnapshot', smalltalk.Object, ['definitions'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_definitions_'),
smalltalk.method({
selector: unescape('definitions%3A'),
category: 'not yet classified',
fn: function (aDefinitions){
var self=this;
(self['@definitions']=aDefinitions);
return self;},
args: ["aDefinitions"],
source: unescape('definitions%3A%20aDefinitions%0A%0A%09definitions%20%3A%3D%20aDefinitions'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressSnapshot);


smalltalk.addMethod(
unescape('_definitions_'),
smalltalk.method({
selector: unescape('definitions%3A'),
category: 'not yet classified',
fn: function (aDefinitions){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_definitions_", [aDefinitions]);
return self;},
args: ["aDefinitions"],
source: unescape('definitions%3A%20aDefinitions%0A%0A%09%5E%28self%20new%29%20definitions%3A%20aDefinitions'),
messageSends: ["definitions:", "new"],
referencedClasses: []
}),
smalltalk.CypressSnapshot.klass);


smalltalk.addClass('CypressClassDefinition', smalltalk.CypressDefinition, ['name', 'superclassName', 'variables', 'category', 'type', 'comment', 'instVarNames', 'classInstVarNames'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_name_superclassName_category_instVarNames_classInstVarNames_comment_'),
smalltalk.method({
selector: unescape('name%3AsuperclassName%3Acategory%3AinstVarNames%3AclassInstVarNames%3Acomment%3A'),
category: 'not yet classified',
fn: function (aClassName, aSuperclassName, aCategory, anInstanceVariableNames, aClassInstanceVariableNames, aComment){
var self=this;
(self['@name']=aClassName);
(self['@superclassName']=aSuperclassName);
(self['@category']=aCategory);
(self['@instVarNames']=anInstanceVariableNames);
(self['@classInstVarNames']=aClassInstanceVariableNames);
(self['@comment']=aComment);
return self;},
args: ["aClassName", "aSuperclassName", "aCategory", "anInstanceVariableNames", "aClassInstanceVariableNames", "aComment"],
source: unescape('name%3A%20aClassName%20%0AsuperclassName%3A%20aSuperclassName%0Acategory%3A%20aCategory%0AinstVarNames%3A%20anInstanceVariableNames%0AclassInstVarNames%3A%20aClassInstanceVariableNames%0Acomment%3A%20aComment%0A%0A%09name%20%3A%3D%20aClassName.%0A%09superclassName%20%3A%3D%20aSuperclassName.%0A%09category%20%3A%3D%20aCategory.%0A%09instVarNames%20%3A%3D%20anInstanceVariableNames.%0A%09classInstVarNames%20%3A%3D%20aClassInstanceVariableNames.%0A%09comment%20%3A%3D%20aComment%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);


smalltalk.addMethod(
unescape('_name_superclassName_category_instVarNames_classInstVarNames_comment_'),
smalltalk.method({
selector: unescape('name%3AsuperclassName%3Acategory%3AinstVarNames%3AclassInstVarNames%3Acomment%3A'),
category: 'not yet classified',
fn: function (aClassName, aSuperclassName, aCategory, anInstanceVariableNames, aClassInstanceVariableNames, aComment){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [aClassName, aSuperclassName, aCategory, anInstanceVariableNames, aClassInstanceVariableNames, aComment]);
return self;},
args: ["aClassName", "aSuperclassName", "aCategory", "anInstanceVariableNames", "aClassInstanceVariableNames", "aComment"],
source: unescape('name%3A%20aClassName%20%0AsuperclassName%3A%20aSuperclassName%0Acategory%3A%20aCategory%0AinstVarNames%3A%20anInstanceVariableNames%0AclassInstVarNames%3A%20aClassInstanceVariableNames%0Acomment%3A%20aComment%0A%0A%09%5E%28self%20new%29%20%0A%09%09name%3A%20aClassName%20%0A%09%09superclassName%3A%20aSuperclassName%0A%09%09category%3A%20aCategory%0A%09%09instVarNames%3A%20anInstanceVariableNames%0A%09%09classInstVarNames%3A%20aClassInstanceVariableNames%0A%09%09comment%3A%20aComment%0A'),
messageSends: ["name:superclassName:category:instVarNames:classInstVarNames:comment:", "new"],
referencedClasses: []
}),
smalltalk.CypressClassDefinition.klass);


smalltalk.addClass('CypressMethodDefinition', smalltalk.CypressDefinition, ['classIsMeta', 'source', 'category', 'selector', 'className'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_className_classIsMeta_selector_category_source_'),
smalltalk.method({
selector: unescape('className%3AclassIsMeta%3Aselector%3Acategory%3Asource%3A'),
category: 'not yet classified',
fn: function (aName, isMetaclass, aSelector, aCategory, aSource){
var self=this;
(self['@className']=aName);
(self['@classIsMeta']=isMetaclass);
(self['@selector']=aSelector);
(self['@category']=aCategory);
(self['@source']=aSource);
return self;},
args: ["aName", "isMetaclass", "aSelector", "aCategory", "aSource"],
source: unescape('className%3A%20aName%0AclassIsMeta%3A%20isMetaclass%0Aselector%3A%20aSelector%0Acategory%3A%20aCategory%0Asource%3A%20aSource%0A%0A%09className%20%3A%3D%20aName.%0A%09classIsMeta%20%3A%3D%20isMetaclass.%0A%09selector%20%3A%3D%20aSelector.%0A%09category%20%3A%3D%20aCategory.%0A%09source%20%3A%3D%20aSource.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMethodDefinition);


smalltalk.addMethod(
unescape('_className_classIsMeta_selector_category_source_'),
smalltalk.method({
selector: unescape('className%3AclassIsMeta%3Aselector%3Acategory%3Asource%3A'),
category: 'not yet classified',
fn: function (aName, isMetaclass, aSelector, aCategory, aSource){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_className_classIsMeta_selector_category_source_", [aName, isMetaclass, aSelector, aCategory, aSource]);
return self;},
args: ["aName", "isMetaclass", "aSelector", "aCategory", "aSource"],
source: unescape('className%3A%20aName%0AclassIsMeta%3A%20isMetaclass%0Aselector%3A%20aSelector%0Acategory%3A%20aCategory%0Asource%3A%20aSource%0A%0A%09%5E%28self%20new%29%0A%09%09className%3A%20aName%0A%09%09classIsMeta%3A%20isMetaclass%0A%09%09selector%3A%20aSelector%0A%09%09category%3A%20aCategory%0A%09%09source%3A%20aSource%0A'),
messageSends: ["className:classIsMeta:selector:category:source:", "new"],
referencedClasses: []
}),
smalltalk.CypressMethodDefinition.klass);


smalltalk.addMethod(
unescape('_species'),
smalltalk.method({
selector: unescape('species'),
category: '*Cypress-Definitions',
fn: function (){
var self=this;
return smalltalk.send(self, "_class", []);
return self;},
args: [],
source: unescape('species%0A%0A%09%5Eself%20class'),
messageSends: ["class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asCypressClassDefinition'),
smalltalk.method({
selector: unescape('asCypressClassDefinition'),
category: '*Cypress-Definitions',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.CypressClassDefinition || CypressClassDefinition), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [smalltalk.send(self, "_name", []), smalltalk.send(smalltalk.send(self, "_superclass", []), "_name", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_instanceVariableNames", []), smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), smalltalk.send(self, "_comment", [])]);
return self;},
args: [],
source: unescape('asCypressClassDefinition%0A%09%5ECypressClassDefinition%0A%09%09name%3A%20self%20name%0A%09%09superclassName%3A%20self%20superclass%20name%0A%09%09category%3A%20self%20category%20%0A%09%09instVarNames%3A%20self%20instanceVariableNames%0A%09%09classInstVarNames%3A%20self%20class%20instanceVariableNames%0A%09%09comment%3A%20self%20comment%0A'),
messageSends: ["name:superclassName:category:instVarNames:classInstVarNames:comment:", "name", "superclass", "category", "instanceVariableNames", "class", "comment"],
referencedClasses: ["CypressClassDefinition"]
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_asCypressMethodDefinition'),
smalltalk.method({
selector: unescape('asCypressMethodDefinition'),
category: '*Cypress-Definitions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [smalltalk.send(smalltalk.send(self, "_methodClass", []), "_name", []), smalltalk.send(smalltalk.send(self, "_methodClass", []), "_isMetaclass", []), smalltalk.send(self, "_selector", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_source", [])]);
return self;},
args: [],
source: unescape('asCypressMethodDefinition%0A%0A%09CypressMethodDefinition%20%0A%20%20%20%20%20%20%20%20%09className%3A%20self%20methodClass%20name%0A%09%09classIsMeta%3A%20self%20methodClass%20isMetaclass%0A%09%09selector%3A%20self%20selector%0A%09%09category%3A%20self%20category%0A%09%09source%3A%20self%20source'),
messageSends: ["className:classIsMeta:selector:category:source:", "name", "methodClass", "isMetaclass", "selector", "category", "source"],
referencedClasses: ["CypressMethodDefinition"]
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_sameAs_'),
smalltalk.method({
selector: unescape('sameAs%3A'),
category: '*Cypress-Definitions',
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asUppercase", []), "__eq", [smalltalk.send(aString, "_asUppercase", [])]);
return self;},
args: ["aString"],
source: unescape('sameAs%3A%20aString%0A%0A%09%5Eself%20asUppercase%20%3D%20aString%20asUppercase'),
messageSends: [unescape("%3D"), "asUppercase"],
referencedClasses: []
}),
smalltalk.CharacterArray);

