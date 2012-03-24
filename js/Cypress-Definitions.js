smalltalk.addPackage('Cypress-Definitions', {});
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
unescape('_definitions'),
smalltalk.method({
selector: unescape('definitions'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@definitions'];
return self;},
args: [],
source: unescape('definitions%0A%0A%09%5Edefinitions'),
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
(package=smalltalk.send((smalltalk.Package || Package), "_named_", [smalltalk.send(self, "_name", [])]));
(definitions=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
smalltalk.send(smalltalk.send(package, "_sortedClasses", []), "_do_", [(function(cls){smalltalk.send(definitions, "_add_", [smalltalk.send(cls, "_asCypressClassDefinition", [])]);smalltalk.send(smalltalk.send(smalltalk.send(cls, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})]));})]);return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(cls, "_class", []), "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})]));})]);})]);
(self['@name']=smalltalk.send(package, "_name", []));
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [self['@name']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(method, "_asCypressMethodDefinition", [])]);})]));})]);})]);
return smalltalk.send((smalltalk.CypressSnapshot || CypressSnapshot), "_definitions_", [definitions]);
return self;},
args: [],
source: unescape('snapshot%0A%09%7C%20package%20definitions%20name%20%20%7C%0A%09package%20%3A%3D%20Package%20named%3A%20self%20name.%0A%09definitions%20%3A%3D%20OrderedCollection%20new.%0A%09package%20sortedClasses%20do%3A%20%5B%3Acls%20%7C%0A%20%20%20%20%20%20%20%20%09definitions%20add%3A%20cls%20asCypressClassDefinition.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cls%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09%28method%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cls%20class%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09%28method%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09definitions%20add%3A%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09%5E%20CypressSnapshot%20definitions%3A%20definitions%0A'),
messageSends: ["named:", "name", "new", "do:", "sortedClasses", "add:", "asCypressClassDefinition", "values", "methodDictionary", "ifFalse:", "match:", "category", "asCypressMethodDefinition", "class", unescape("%2C"), "classes", "current", "collect:", "ifTrue:", unescape("%3D"), "definitions:"],
referencedClasses: ["Package", "OrderedCollection", "Smalltalk", "CypressSnapshot"]
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



smalltalk.addClass('CypressDefinition', smalltalk.Object, [], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(aDefinition, "_isKindOf_", [(smalltalk.CypressDefinition || CypressDefinition)]), "_and_", [(function(){return smalltalk.send(self, "_isRevisionOf_", [aDefinition]);})]);
return self;},
args: ["aDefinition"],
source: unescape('%3D%20aDefinition%0A%09%5E%28aDefinition%20isKindOf%3A%20CypressDefinition%29%20and%3A%20%5Bself%20isRevisionOf%3A%20aDefinition%5D'),
messageSends: ["and:", "isKindOf:", "isRevisionOf:"],
referencedClasses: ["CypressDefinition"]
}),
smalltalk.CypressDefinition);

smalltalk.addMethod(
unescape('_isRevisionOf_'),
smalltalk.method({
selector: unescape('isRevisionOf%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(aDefinition, "_isKindOf_", [(smalltalk.CypressDefinition || CypressDefinition)]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aDefinition, "_description", []), "__eq", [smalltalk.send(self, "_description", [])]);})]);
return self;},
args: ["aDefinition"],
source: unescape('isRevisionOf%3A%20aDefinition%0A%09%5E%20%28aDefinition%20isKindOf%3A%20CypressDefinition%29%20and%3A%20%5BaDefinition%20description%20%3D%20self%20description%5D'),
messageSends: ["and:", "isKindOf:", unescape("%3D"), "description"],
referencedClasses: ["CypressDefinition"]
}),
smalltalk.CypressDefinition);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;},
args: [],
source: unescape('description%0A%09self%20subclassResponsibility'),
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CypressDefinition);

smalltalk.addMethod(
unescape('_isSameRevisionAs_'),
smalltalk.method({
selector: unescape('isSameRevisionAs%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(self, "__eq", [aDefinition]);
return self;},
args: ["aDefinition"],
source: unescape('isSameRevisionAs%3A%20aDefinition%0A%09%5E%20self%20%3D%20aDefinition'),
messageSends: [unescape("%3D")],
referencedClasses: []
}),
smalltalk.CypressDefinition);



smalltalk.addClass('CypressPatch', smalltalk.Object, ['operations'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_fromBase_toTarget_'),
smalltalk.method({
selector: unescape('fromBase%3AtoTarget%3A'),
category: 'not yet classified',
fn: function (baseSnapshot, targetSnapshot){
var self=this;
var base=nil;
var target=nil;
(self['@operations']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(base=smalltalk.send((smalltalk.CypressDefinitionIndex || CypressDefinitionIndex), "_definitions_", [smalltalk.send(baseSnapshot, "_definitions", [])]));
(target=smalltalk.send((smalltalk.CypressDefinitionIndex || CypressDefinitionIndex), "_definitions_", [smalltalk.send(targetSnapshot, "_definitions", [])]));
smalltalk.send(smalltalk.send(target, "_definitions", []), "_do_", [(function(t){return smalltalk.send(base, "_definitionLike_ifPresent_ifAbsent_", [t, (function(b){return ((($receiver = smalltalk.send(b, "_isSameRevisionAs_", [t])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressModification || CypressModification), "_of_to_", [b, t])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressModification || CypressModification), "_of_to_", [b, t])]);})]));}), (function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressAddition || CypressAddition), "_of_", [t])]);})]);})]);
smalltalk.send(smalltalk.send(base, "_definitions", []), "_do_", [(function(b){return smalltalk.send(target, "_definitionLike_ifPresent_ifAbsent_", [b, (function(t){return nil;}), (function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressRemoval || CypressRemoval), "_of_", [b])]);})]);})]);
return self;},
args: ["baseSnapshot", "targetSnapshot"],
source: unescape('fromBase%3A%20baseSnapshot%20toTarget%3A%20targetSnapshot%0A%09%7C%20base%20target%20%7C%09%0A%09operations%20%3A%3D%20OrderedCollection%20new.%0A%09base%20%3A%3D%20CypressDefinitionIndex%20definitions%3A%20baseSnapshot%20definitions.%0A%09target%20%3A%3D%20CypressDefinitionIndex%20definitions%3A%20targetSnapshot%20definitions.%0A%09%0A%09target%20definitions%20do%3A%0A%09%09%5B%3At%20%7C%0A%09%09base%0A%09%09%09definitionLike%3A%20t%0A%09%09%09ifPresent%3A%20%5B%3Ab%20%7C%20%28b%20isSameRevisionAs%3A%20t%29%20ifFalse%3A%20%5Boperations%20add%3A%20%28CypressModification%20of%3A%20b%20to%3A%20t%29%5D%5D%0A%09%09%09ifAbsent%3A%20%5Boperations%20add%3A%20%28CypressAddition%20of%3A%20t%29%5D%5D.%0A%09%09%0A%09base%20definitions%20do%3A%0A%09%09%5B%3Ab%20%7C%0A%09%09target%0A%09%09%09definitionLike%3A%20b%0A%09%09%09ifPresent%3A%20%5B%3At%20%7C%20%5D%0A%09%09%09ifAbsent%3A%20%5Boperations%20add%3A%20%28CypressRemoval%20of%3A%20b%29%5D%5D%09%09'),
messageSends: ["new", "definitions:", "definitions", "do:", "definitionLike:ifPresent:ifAbsent:", "ifFalse:", "isSameRevisionAs:", "add:", "of:to:", "of:"],
referencedClasses: ["OrderedCollection", "CypressDefinitionIndex", "CypressModification", "CypressAddition", "CypressRemoval"]
}),
smalltalk.CypressPatch);

smalltalk.addMethod(
unescape('_operations'),
smalltalk.method({
selector: unescape('operations'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@operations'];
return self;},
args: [],
source: unescape('operations%0A%0A%09%5Eoperations'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressPatch);


smalltalk.addMethod(
unescape('_fromBase_toTarget_'),
smalltalk.method({
selector: unescape('fromBase%3AtoTarget%3A'),
category: 'not yet classified',
fn: function (baseSnapshot, targetSnapshot){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_fromBase_toTarget_", [baseSnapshot, targetSnapshot]);
return self;},
args: ["baseSnapshot", "targetSnapshot"],
source: unescape('fromBase%3A%20baseSnapshot%20toTarget%3A%20targetSnapshot%0A%09%5E%20%28self%20new%29%0A%09%09fromBase%3A%20baseSnapshot%0A%09%09toTarget%3A%20targetSnapshot'),
messageSends: ["fromBase:toTarget:", "new"],
referencedClasses: []
}),
smalltalk.CypressPatch.klass);


smalltalk.addClass('CypressDefinitionIndex', smalltalk.Object, ['definitionMap'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_at_put_", [smalltalk.send(aDefinition, "_description", []), aDefinition]);
return self;},
args: ["aDefinition"],
source: unescape('add%3A%20aDefinition%0A%09%5E%20self%20definitionMap%20at%3A%20aDefinition%20description%20put%3A%20aDefinition'),
messageSends: ["at:put:", "definitionMap", "description"],
referencedClasses: []
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
category: 'not yet classified',
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(ea){return smalltalk.send(self, "_add_", [ea]);})]);
return self;},
args: ["aCollection"],
source: unescape('addAll%3A%20aCollection%0A%09aCollection%20do%3A%20%5B%3Aea%20%7C%20self%20add%3A%20ea%5D'),
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_definitionLike_ifPresent_ifAbsent_'),
smalltalk.method({
selector: unescape('definitionLike%3AifPresent%3AifAbsent%3A'),
category: 'not yet classified',
fn: function (aDefinition, foundBlock, errorBlock){
var self=this;
var definition=nil;
(definition=smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_at_ifAbsent_", [smalltalk.send(aDefinition, "_description", []), (function(){return nil;})]));
return smalltalk.send(definition, "_ifNil_ifNotNil_", [errorBlock, (function(){return smalltalk.send(foundBlock, "_value_", [definition]);})]);
return self;},
args: ["aDefinition", "foundBlock", "errorBlock"],
source: unescape('definitionLike%3A%20aDefinition%20ifPresent%3A%20foundBlock%20ifAbsent%3A%20errorBlock%0A%09%7C%20definition%20%7C%0A%09definition%20%3A%3D%20self%20definitionMap%20at%3A%20aDefinition%20description%20ifAbsent%3A%20%5B%5D.%0A%09%5E%20definition%0A%09%09ifNil%3A%20errorBlock%0A%09%09ifNotNil%3A%20%5BfoundBlock%20value%3A%20definition%5D'),
messageSends: ["at:ifAbsent:", "definitionMap", "description", "ifNil:ifNotNil:", "value:"],
referencedClasses: []
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_definitions'),
smalltalk.method({
selector: unescape('definitions'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_values", []);
return self;},
args: [],
source: unescape('definitions%0A%09%5Eself%20definitionMap%20values'),
messageSends: ["values", "definitionMap"],
referencedClasses: []
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_definitionMap'),
smalltalk.method({
selector: unescape('definitionMap'),
category: 'not yet classified',
fn: function (){
var self=this;
(($receiver = self['@definitionMap']) == nil || $receiver == undefined) ? (function(){return (self['@definitionMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@definitionMap'];
return self;},
args: [],
source: unescape('definitionMap%0A%09definitionMap%20ifNil%3A%20%5B%20definitionMap%20%3A%3D%20Dictionary%20new%20%5D.%0A%09%5E%20definitionMap'),
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_removeKey_ifAbsent_", [smalltalk.send(aDefinition, "_description", []), (function(){return nil;})]);
return self;},
args: ["aDefinition"],
source: unescape('remove%3A%20aDefinition%0A%09self%20definitionMap%20removeKey%3A%20aDefinition%20description%20ifAbsent%3A%20%5B%5D'),
messageSends: ["removeKey:ifAbsent:", "definitionMap", "description"],
referencedClasses: []
}),
smalltalk.CypressDefinitionIndex);


smalltalk.addMethod(
unescape('_definitions_'),
smalltalk.method({
selector: unescape('definitions%3A'),
category: 'not yet classified',
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_addAll_", [aCollection]);
return self;},
args: ["aCollection"],
source: unescape('definitions%3A%20aCollection%0A%09%5E%20self%20new%20addAll%3A%20aCollection'),
messageSends: ["addAll:", "new"],
referencedClasses: []
}),
smalltalk.CypressDefinitionIndex.klass);


smalltalk.addClass('CypressPatchOperation', smalltalk.Object, [], 'Cypress-Definitions');


smalltalk.addClass('CypressClassDefinition', smalltalk.CypressDefinition, ['name', 'superclassName', 'category', 'comment', 'instVarNames', 'classInstVarNames'], 'Cypress-Definitions');
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
source: unescape('name%3A%20aClassName%20superclassName%3A%20aSuperclassName%20category%3A%20aCategory%20instVarNames%3A%20anInstanceVariableNames%20classInstVarNames%3A%20aClassInstanceVariableNames%20comment%3A%20aComment%0A%0A%09name%20%3A%3D%20aClassName.%0A%09superclassName%20%3A%3D%20aSuperclassName.%0A%09category%20%3A%3D%20aCategory.%0A%09instVarNames%20%3A%3D%20anInstanceVariableNames.%0A%09classInstVarNames%20%3A%3D%20aClassInstanceVariableNames.%0A%09comment%20%3A%3D%20aComment%0A'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [aDefinition], smalltalk.CypressDefinition), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@superclassName'], "__eq", [smalltalk.send(aDefinition, "_superclassName", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@category'], "__eq", [smalltalk.send(aDefinition, "_category", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@instVarNames'], "__eq", [smalltalk.send(aDefinition, "_instVarNames", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@classInstVarNames'], "__eq", [smalltalk.send(aDefinition, "_classInstVarNames", [])]), "_and_", [(function(){return smalltalk.send(self['@comment'], "__eq", [smalltalk.send(aDefinition, "_comment", [])]);})]);})]);})]);})]);})]);
return self;},
args: ["aDefinition"],
source: unescape('%3D%20aDefinition%0A%09%5E%28super%20%3D%20aDefinition%29%0A%09%09and%3A%20%5BsuperclassName%20%3D%20aDefinition%20superclassName%0A%09%09and%3A%20%5Bcategory%20%3D%20aDefinition%20category%0A%09%09and%3A%20%5BinstVarNames%20%3D%20aDefinition%20instVarNames%0A%09%09and%3A%20%5BclassInstVarNames%20%3D%20aDefinition%20classInstVarNames%0A%09%09and%3A%20%5Bcomment%20%3D%20aDefinition%20comment%5D%5D%5D%5D%5D'),
messageSends: ["and:", unescape("%3D"), "superclassName", "category", "instVarNames", "classInstVarNames", "comment"],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_superclassName'),
smalltalk.method({
selector: unescape('superclassName'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@superclassName'];
return self;},
args: [],
source: unescape('superclassName%0A%0A%09%5EsuperclassName'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

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
source: unescape('name%0A%0A%09%5Ename'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@category'];
return self;},
args: [],
source: unescape('category%0A%0A%09%5Ecategory'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_comment'),
smalltalk.method({
selector: unescape('comment'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@comment'];
return self;},
args: [],
source: unescape('comment%0A%0A%09%5Ecomment'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_", [self['@name']]);
return self;},
args: [],
source: unescape('description%0A%0A%09%5E%20Array%20with%3A%20name'),
messageSends: ["with:"],
referencedClasses: ["Array"]
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_instVarNames'),
smalltalk.method({
selector: unescape('instVarNames'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@instVarNames'];
return self;},
args: [],
source: unescape('instVarNames%0A%0A%09%5EinstVarNames'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_classInstVarNames'),
smalltalk.method({
selector: unescape('classInstVarNames'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@classInstVarNames'];
return self;},
args: [],
source: unescape('classInstVarNames%0A%0A%09%5EclassInstVarNames'),
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
source: unescape('className%3A%20aName%20classIsMeta%3A%20isMetaclass%20selector%3A%20aSelector%20category%3A%20aCategory%20source%3A%20aSource%0A%0A%09className%20%3A%3D%20aName.%0A%09classIsMeta%20%3A%3D%20isMetaclass.%0A%09selector%20%3A%3D%20aSelector.%0A%09category%20%3A%3D%20aCategory.%0A%09source%20%3A%3D%20aSource.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [aDefinition], smalltalk.CypressDefinition), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aDefinition, "_source", []), "__eq", [smalltalk.send(self, "_source", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aDefinition, "_category", []), "__eq", [smalltalk.send(self, "_category", [])]);})]);})]);
return self;},
args: ["aDefinition"],
source: unescape('%3D%20aDefinition%0A%20%20%20%20%5E%20super%20%3D%20aDefinition%0A%20%20%20%20%20%20%20%20and%3A%20%5B%20aDefinition%20source%20%3D%20self%20source%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20and%3A%20%5B%20aDefinition%20category%20%3D%20self%20category%20%5D%20%5D'),
messageSends: ["and:", unescape("%3D"), "source", "category"],
referencedClasses: []
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@source'];
return self;},
args: [],
source: unescape('source%0A%0A%09%5Esource'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@category'];
return self;},
args: [],
source: unescape('category%0A%0A%09%5Ecategory'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_with_with_", [self['@className'], self['@selector'], self['@classIsMeta']]);
return self;},
args: [],
source: unescape('description%0A%09%5E%20Array%09%0A%09%09with%3A%20className%0A%09%09with%3A%20selector%0A%09%09with%3A%20classIsMeta'),
messageSends: ["with:with:with:"],
referencedClasses: ["Array"]
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


smalltalk.addClass('CypressAddition', smalltalk.CypressPatchOperation, ['definition'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_definition_'),
smalltalk.method({
selector: unescape('definition%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
(self['@definition']=aDefinition);
return self;},
args: ["aDefinition"],
source: unescape('definition%3A%20aDefinition%0A%0A%09definition%20%3A%3D%20aDefinition'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressAddition);


smalltalk.addMethod(
unescape('_of_'),
smalltalk.method({
selector: unescape('of%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_definition_", [aDefinition]);
return self;},
args: ["aDefinition"],
source: unescape('of%3A%20aDefinition%0A%09%5E%20self%20new%20definition%3A%20aDefinition'),
messageSends: ["definition:", "new"],
referencedClasses: []
}),
smalltalk.CypressAddition.klass);


smalltalk.addClass('CypressModification', smalltalk.CypressPatchOperation, ['obsoletion', 'modification'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_base_target_'),
smalltalk.method({
selector: unescape('base%3Atarget%3A'),
category: 'not yet classified',
fn: function (base, target){
var self=this;
(self['@obsoletion']=base);
(self['@modification']=target);
return self;},
args: ["base", "target"],
source: unescape('base%3A%20base%20target%3A%20target%0A%0A%09obsoletion%20%3A%3D%20base.%0A%09modification%20%3A%3D%20target.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressModification);


smalltalk.addMethod(
unescape('_of_to_'),
smalltalk.method({
selector: unescape('of%3Ato%3A'),
category: 'not yet classified',
fn: function (base, target){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_base_target_", [base, target]);
return self;},
args: ["base", "target"],
source: unescape('of%3A%20base%20to%3A%20target%0A%09%5E%20self%20new%20base%3A%20base%20target%3A%20target'),
messageSends: ["base:target:", "new"],
referencedClasses: []
}),
smalltalk.CypressModification.klass);


smalltalk.addClass('CypressRemoval', smalltalk.CypressPatchOperation, ['definition'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_definition_'),
smalltalk.method({
selector: unescape('definition%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
(self['@definition']=aDefinition);
return self;},
args: ["aDefinition"],
source: unescape('definition%3A%20aDefinition%0A%0A%09definition%20%3A%3D%20aDefinition'),
messageSends: [],
referencedClasses: []
}),
smalltalk.CypressRemoval);


smalltalk.addMethod(
unescape('_of_'),
smalltalk.method({
selector: unescape('of%3A'),
category: 'not yet classified',
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_definition_", [aDefinition]);
return self;},
args: ["aDefinition"],
source: unescape('of%3A%20aDefinition%0A%09%5E%20self%20new%20definition%3A%20aDefinition'),
messageSends: ["definition:", "new"],
referencedClasses: []
}),
smalltalk.CypressRemoval.klass);


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
return smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [smalltalk.send(smalltalk.send(self, "_methodClass", []), "_name", []), smalltalk.send(smalltalk.send(self, "_methodClass", []), "_isMetaclass", []), smalltalk.send(self, "_selector", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_source", [])]);
return self;},
args: [],
source: unescape('asCypressMethodDefinition%0A%0A%09%5ECypressMethodDefinition%20%0A%20%20%20%20%20%20%20%20%09className%3A%20self%20methodClass%20name%0A%09%09classIsMeta%3A%20self%20methodClass%20isMetaclass%0A%09%09selector%3A%20self%20selector%0A%09%09category%3A%20self%20category%0A%09%09source%3A%20self%20source'),
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

