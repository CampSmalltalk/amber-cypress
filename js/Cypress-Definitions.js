smalltalk.addPackage('Cypress-Definitions', {});
smalltalk.addClass('CypressSnapshot', smalltalk.Object, ['definitions'], 'Cypress-Definitions');


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
smalltalk.send(smalltalk.send(package, "_sortedClasses", []), "_do_", [(function(cls){smalltalk.send(definitions, "_add_", [smalltalk.send(cls, "_asCypressClassDefinition", [])]);return smalltalk.send(smalltalk.send(smalltalk.send(cls, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "_match_", [unescape("%5E%5C*")])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(method, "_asCypressMethodDefinition", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(method, "_asCypressMethodDefinition", []);})]));})]);})]);
(self['@name']=smalltalk.send(package, "_name", []));
smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "__comma", [smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk), "_current", []), "_classes", []), "_collect_", [(function(each){return smalltalk.send(each, "_class", []);})])]), "_do_", [(function(each){return smalltalk.send(smalltalk.send(smalltalk.send(each, "_methodDictionary", []), "_values", []), "_do_", [(function(method){return ((($receiver = smalltalk.send(smalltalk.send(method, "_category", []), "__eq", [smalltalk.send(unescape("*"), "__comma", [self['@name']])])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(self, "_methodDefinition_for_", [method, each])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(definitions, "_add_", [smalltalk.send(self, "_methodDefinition_for_", [method, each])]);})]));})]);})]);
return smalltalk.send((smalltalk.CypressSnapshot || CypressSnapshot), "_fromDefinitions_", [definitions]);
return self;},
args: [],
source: unescape('snapshot%0A%09%7C%20package%20definitions%20name%20%20%7C%0A%09package%20%3A%3D%20self%20class%20package.%0A%09definitions%20%3A%3D%20OrderedCollection%20new.%0A%09package%20sortedClasses%20do%3A%20%5B%3Acls%20%7C%0A%20%20%20%20%20%20%20%20%09definitions%20add%3A%20cls%20asCypressClassDefinition.%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cls%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09%28method%20category%20match%3A%20%27%5E%5C*%27%29%20ifFalse%3A%20%5B%20method%20asCypressMethodDefinition%20%5D%5D%5D.%0A%09name%20%3A%3D%20package%20name.%0A%09Smalltalk%20current%20classes%2C%20%28Smalltalk%20current%20classes%20collect%3A%20%5B%3Aeach%20%7C%20each%20class%5D%29%20do%3A%20%5B%3Aeach%20%7C%0A%09%09each%20methodDictionary%20values%20do%3A%20%5B%3Amethod%20%7C%0A%09%09%09method%20category%20%3D%20%28%27*%27%2C%20name%29%20ifTrue%3A%20%5B%0A%09%09%09%09definitions%20add%3A%20%28self%20methodDefinition%3A%20method%20for%3A%20each%29%20%5D%5D%5D.%0A%09%5E%20CypressSnapshot%20fromDefinitions%3A%20definitions%0A'),
messageSends: ["package", "class", "new", "do:", "sortedClasses", "add:", "asCypressClassDefinition", "values", "methodDictionary", "ifFalse:", "match:", "category", "asCypressMethodDefinition", "name", unescape("%2C"), "classes", "current", "collect:", "ifTrue:", unescape("%3D"), "methodDefinition:for:", "fromDefinitions:"],
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



smalltalk.addClass('CypressDefinition', smalltalk.Object, [], 'Cypress-Definitions');


smalltalk.addClass('CypressClassDefinition', smalltalk.CypressDefinition, ['name', 'superclassName', 'variables', 'category', 'type', 'comment'], 'Cypress-Definitions');


smalltalk.addClass('CypressMethodDefinition', smalltalk.CypressDefinition, ['classIsMeta', 'source', 'category', 'selector', 'className'], 'Cypress-Definitions');


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
return smalltalk.send((smalltalk.MCClassDefinition || MCClassDefinition), "_name_superclassName_traitComposition_classTraitComposition_category_instVarNames_classVarNames_poolDictionaryNames_classInstVarNames_type_comment_commentStamp_", [smalltalk.send(self, "_name", []), smalltalk.send(smalltalk.send(self, "_superclass", []), "_name", []), smalltalk.send(self, "_traitCompositionString", []), smalltalk.send(smalltalk.send(self, "_class", []), "_traitCompositionString", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_instVarNames", []), smalltalk.send(self, "_classVarNames", []), smalltalk.send(self, "_poolDictionaryNames", []), smalltalk.send(smalltalk.send(self, "_class", []), "_instVarNames", []), smalltalk.send(self, "_typeOfClass", []), smalltalk.send(smalltalk.send(smalltalk.send(self, "_organization", []), "_classComment", []), "_asString", []), smalltalk.send(smalltalk.send(self, "_organization", []), "_commentStamp", [])]);
return self;},
args: [],
source: unescape('asCypressClassDefinition%0A%09%5EMCClassDefinition%0A%09%09name%3A%20self%20name%0A%09%09superclassName%3A%20self%20superclass%20name%0A%09%09traitComposition%3A%20self%20traitCompositionString%0A%09%09classTraitComposition%3A%20self%20class%20traitCompositionString%0A%09%09category%3A%20self%20category%20%0A%09%09instVarNames%3A%20self%20instVarNames%0A%09%09classVarNames%3A%20self%20classVarNames%0A%09%09poolDictionaryNames%3A%20self%20poolDictionaryNames%0A%09%09classInstVarNames%3A%20self%20class%20instVarNames%0A%09%09type%3A%20self%20typeOfClass%0A%09%09comment%3A%20self%20organization%20classComment%09%20asString%0A%09%09commentStamp%3A%20self%20organization%20commentStamp%09'),
messageSends: ["name:superclassName:traitComposition:classTraitComposition:category:instVarNames:classVarNames:poolDictionaryNames:classInstVarNames:type:comment:commentStamp:", "name", "superclass", "traitCompositionString", "class", "category", "instVarNames", "classVarNames", "poolDictionaryNames", "typeOfClass", "asString", "classComment", "organization", "commentStamp"],
referencedClasses: ["MCClassDefinition"]
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_asCypressMethodDefinition'),
smalltalk.method({
selector: unescape('asCypressMethodDefinition'),
category: '*Cypress-Definitions',
fn: function (){
var self=this;
smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [smalltalk.send(self, "_classSymbol", []), smalltalk.send(self, "_classIsMeta", []), smalltalk.send(self, "_methodSymbol", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_source", [])]);
return self;},
args: [],
source: unescape('asCypressMethodDefinition%0A%0A%09CypressMethodDefinition%20%0A%20%20%20%20%20%20%20%20%09className%3A%20self%20classSymbol%0A%09%09classIsMeta%3A%20self%20classIsMeta%0A%09%09selector%3A%20self%20methodSymbol%0A%09%09category%3A%20self%20category%0A%09%09source%3A%20self%20source'),
messageSends: ["className:classIsMeta:selector:category:source:", "classSymbol", "classIsMeta", "methodSymbol", "category", "source"],
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

