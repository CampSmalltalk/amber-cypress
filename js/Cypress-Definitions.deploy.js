smalltalk.addPackage('Cypress-Definitions', {});
smalltalk.addClass('CypressSnapshot', smalltalk.Object, ['definitions'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_definitions_'),
smalltalk.method({
selector: unescape('definitions%3A'),
fn: function (aDefinitions){
var self=this;
(self['@definitions']=aDefinitions);
return self;}
}),
smalltalk.CypressSnapshot);

smalltalk.addMethod(
unescape('_definitions'),
smalltalk.method({
selector: unescape('definitions'),
fn: function (){
var self=this;
return self['@definitions'];
return self;}
}),
smalltalk.CypressSnapshot);


smalltalk.addMethod(
unescape('_definitions_'),
smalltalk.method({
selector: unescape('definitions%3A'),
fn: function (aDefinitions){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_definitions_", [aDefinitions]);
return self;}
}),
smalltalk.CypressSnapshot.klass);


smalltalk.addClass('CypressPackage', smalltalk.Object, ['name'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (other){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(other, "_species", []), "__eq", [smalltalk.send(self, "_species", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(other, "_name", []), "_sameAs_", [self['@name']]);})]);
return self;}
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_name_'),
smalltalk.method({
selector: unescape('name%3A'),
fn: function (aString){
var self=this;
(self['@name']=aString);
return self;}
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_snapshot'),
smalltalk.method({
selector: unescape('snapshot'),
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
return self;}
}),
smalltalk.CypressPackage);

smalltalk.addMethod(
unescape('_printString'),
smalltalk.method({
selector: unescape('printString'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_printString", [], smalltalk.Object), "__comma", [unescape("%28")]), "__comma", [self['@name']]), "__comma", [unescape("%29")]);
return self;}
}),
smalltalk.CypressPackage);



smalltalk.addClass('CypressDefinition', smalltalk.Object, [], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(aDefinition, "_isKindOf_", [(smalltalk.CypressDefinition || CypressDefinition)]), "_and_", [(function(){return smalltalk.send(self, "_isRevisionOf_", [aDefinition]);})]);
return self;}
}),
smalltalk.CypressDefinition);

smalltalk.addMethod(
unescape('_isRevisionOf_'),
smalltalk.method({
selector: unescape('isRevisionOf%3A'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(aDefinition, "_isKindOf_", [(smalltalk.CypressDefinition || CypressDefinition)]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aDefinition, "_description", []), "__eq", [smalltalk.send(self, "_description", [])]);})]);
return self;}
}),
smalltalk.CypressDefinition);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
smalltalk.send(self, "_subclassResponsibility", []);
return self;}
}),
smalltalk.CypressDefinition);

smalltalk.addMethod(
unescape('_isSameRevisionAs_'),
smalltalk.method({
selector: unescape('isSameRevisionAs%3A'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(self, "__eq", [aDefinition]);
return self;}
}),
smalltalk.CypressDefinition);



smalltalk.addClass('CypressPatch', smalltalk.Object, ['operations'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_fromBase_toTarget_'),
smalltalk.method({
selector: unescape('fromBase%3AtoTarget%3A'),
fn: function (baseSnapshot, targetSnapshot){
var self=this;
var base=nil;
var target=nil;
(self['@operations']=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection), "_new", []));
(base=smalltalk.send((smalltalk.CypressDefinitionIndex || CypressDefinitionIndex), "_definitions_", [smalltalk.send(baseSnapshot, "_definitions", [])]));
(target=smalltalk.send((smalltalk.CypressDefinitionIndex || CypressDefinitionIndex), "_definitions_", [smalltalk.send(targetSnapshot, "_definitions", [])]));
smalltalk.send(smalltalk.send(target, "_definitions", []), "_do_", [(function(t){return smalltalk.send(base, "_definitionLike_ifPresent_ifAbsent_", [t, (function(b){return ((($receiver = smalltalk.send(b, "_isSameRevisionAs_", [t])).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressModification || CypressModification), "_of_to_", [b, t])]);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressModification || CypressModification), "_of_to_", [b, t])]);})]));}), (function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressAddition || CypressAddition), "_of_", [t])]);})]);})]);
smalltalk.send(smalltalk.send(base, "_definitions", []), "_do_", [(function(b){return smalltalk.send(target, "_definitionLike_ifPresent_ifAbsent_", [b, (function(t){return nil;}), (function(){return smalltalk.send(self['@operations'], "_add_", [smalltalk.send((smalltalk.CypressRemoval || CypressRemoval), "_of_", [b])]);})]);})]);
return self;}
}),
smalltalk.CypressPatch);

smalltalk.addMethod(
unescape('_operations'),
smalltalk.method({
selector: unescape('operations'),
fn: function (){
var self=this;
return self['@operations'];
return self;}
}),
smalltalk.CypressPatch);


smalltalk.addMethod(
unescape('_fromBase_toTarget_'),
smalltalk.method({
selector: unescape('fromBase%3AtoTarget%3A'),
fn: function (baseSnapshot, targetSnapshot){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_fromBase_toTarget_", [baseSnapshot, targetSnapshot]);
return self;}
}),
smalltalk.CypressPatch.klass);


smalltalk.addClass('CypressDefinitionIndex', smalltalk.Object, ['definitionMap'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_at_put_", [smalltalk.send(aDefinition, "_description", []), aDefinition]);
return self;}
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_addAll_'),
smalltalk.method({
selector: unescape('addAll%3A'),
fn: function (aCollection){
var self=this;
smalltalk.send(aCollection, "_do_", [(function(ea){return smalltalk.send(self, "_add_", [ea]);})]);
return self;}
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_definitionLike_ifPresent_ifAbsent_'),
smalltalk.method({
selector: unescape('definitionLike%3AifPresent%3AifAbsent%3A'),
fn: function (aDefinition, foundBlock, errorBlock){
var self=this;
var definition=nil;
(definition=smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_at_ifAbsent_", [smalltalk.send(aDefinition, "_description", []), (function(){return nil;})]));
return smalltalk.send(definition, "_ifNil_ifNotNil_", [errorBlock, (function(){return smalltalk.send(foundBlock, "_value_", [definition]);})]);
return self;}
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_definitions'),
smalltalk.method({
selector: unescape('definitions'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_values", []);
return self;}
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_definitionMap'),
smalltalk.method({
selector: unescape('definitionMap'),
fn: function (){
var self=this;
(($receiver = self['@definitionMap']) == nil || $receiver == undefined) ? (function(){return (self['@definitionMap']=smalltalk.send((smalltalk.Dictionary || Dictionary), "_new", []));})() : $receiver;
return self['@definitionMap'];
return self;}
}),
smalltalk.CypressDefinitionIndex);

smalltalk.addMethod(
unescape('_remove_'),
smalltalk.method({
selector: unescape('remove%3A'),
fn: function (aDefinition){
var self=this;
smalltalk.send(smalltalk.send(self, "_definitionMap", []), "_removeKey_ifAbsent_", [smalltalk.send(aDefinition, "_description", []), (function(){return nil;})]);
return self;}
}),
smalltalk.CypressDefinitionIndex);


smalltalk.addMethod(
unescape('_definitions_'),
smalltalk.method({
selector: unescape('definitions%3A'),
fn: function (aCollection){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_addAll_", [aCollection]);
return self;}
}),
smalltalk.CypressDefinitionIndex.klass);


smalltalk.addClass('CypressPatchOperation', smalltalk.Object, [], 'Cypress-Definitions');


smalltalk.addClass('CypressClassDefinition', smalltalk.CypressDefinition, ['name', 'superclassName', 'category', 'comment', 'instVarNames', 'classInstVarNames'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_name_superclassName_category_instVarNames_classInstVarNames_comment_'),
smalltalk.method({
selector: unescape('name%3AsuperclassName%3Acategory%3AinstVarNames%3AclassInstVarNames%3Acomment%3A'),
fn: function (aClassName, aSuperclassName, aCategory, anInstanceVariableNames, aClassInstanceVariableNames, aComment){
var self=this;
(self['@name']=aClassName);
(self['@superclassName']=aSuperclassName);
(self['@category']=aCategory);
(self['@instVarNames']=anInstanceVariableNames);
(self['@classInstVarNames']=aClassInstanceVariableNames);
(self['@comment']=aComment);
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [aDefinition], smalltalk.CypressDefinition), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@superclassName'], "__eq", [smalltalk.send(aDefinition, "_superclassName", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@category'], "__eq", [smalltalk.send(aDefinition, "_category", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@instVarNames'], "__eq", [smalltalk.send(aDefinition, "_instVarNames", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(self['@classInstVarNames'], "__eq", [smalltalk.send(aDefinition, "_classInstVarNames", [])]), "_and_", [(function(){return smalltalk.send(self['@comment'], "__eq", [smalltalk.send(aDefinition, "_comment", [])]);})]);})]);})]);})]);})]);
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_superclassName'),
smalltalk.method({
selector: unescape('superclassName'),
fn: function (){
var self=this;
return self['@superclassName'];
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_name'),
smalltalk.method({
selector: unescape('name'),
fn: function (){
var self=this;
return self['@name'];
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
fn: function (){
var self=this;
return self['@category'];
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_comment'),
smalltalk.method({
selector: unescape('comment'),
fn: function (){
var self=this;
return self['@comment'];
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_", [self['@name']]);
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_instVarNames'),
smalltalk.method({
selector: unescape('instVarNames'),
fn: function (){
var self=this;
return self['@instVarNames'];
return self;}
}),
smalltalk.CypressClassDefinition);

smalltalk.addMethod(
unescape('_classInstVarNames'),
smalltalk.method({
selector: unescape('classInstVarNames'),
fn: function (){
var self=this;
return self['@classInstVarNames'];
return self;}
}),
smalltalk.CypressClassDefinition);


smalltalk.addMethod(
unescape('_name_superclassName_category_instVarNames_classInstVarNames_comment_'),
smalltalk.method({
selector: unescape('name%3AsuperclassName%3Acategory%3AinstVarNames%3AclassInstVarNames%3Acomment%3A'),
fn: function (aClassName, aSuperclassName, aCategory, anInstanceVariableNames, aClassInstanceVariableNames, aComment){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [aClassName, aSuperclassName, aCategory, anInstanceVariableNames, aClassInstanceVariableNames, aComment]);
return self;}
}),
smalltalk.CypressClassDefinition.klass);


smalltalk.addClass('CypressMethodDefinition', smalltalk.CypressDefinition, ['classIsMeta', 'source', 'category', 'selector', 'className'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_className_classIsMeta_selector_category_source_'),
smalltalk.method({
selector: unescape('className%3AclassIsMeta%3Aselector%3Acategory%3Asource%3A'),
fn: function (aName, isMetaclass, aSelector, aCategory, aSource){
var self=this;
(self['@className']=aName);
(self['@classIsMeta']=isMetaclass);
(self['@selector']=aSelector);
(self['@category']=aCategory);
(self['@source']=aSource);
return self;}
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('__eq'),
smalltalk.method({
selector: unescape('%3D'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "__eq", [aDefinition], smalltalk.CypressDefinition), "_and_", [(function(){return smalltalk.send(smalltalk.send(smalltalk.send(aDefinition, "_source", []), "__eq", [smalltalk.send(self, "_source", [])]), "_and_", [(function(){return smalltalk.send(smalltalk.send(aDefinition, "_category", []), "__eq", [smalltalk.send(self, "_category", [])]);})]);})]);
return self;}
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('_source'),
smalltalk.method({
selector: unescape('source'),
fn: function (){
var self=this;
return self['@source'];
return self;}
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('_category'),
smalltalk.method({
selector: unescape('category'),
fn: function (){
var self=this;
return self['@category'];
return self;}
}),
smalltalk.CypressMethodDefinition);

smalltalk.addMethod(
unescape('_description'),
smalltalk.method({
selector: unescape('description'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.Array || Array), "_with_with_with_", [self['@className'], self['@selector'], self['@classIsMeta']]);
return self;}
}),
smalltalk.CypressMethodDefinition);


smalltalk.addMethod(
unescape('_className_classIsMeta_selector_category_source_'),
smalltalk.method({
selector: unescape('className%3AclassIsMeta%3Aselector%3Acategory%3Asource%3A'),
fn: function (aName, isMetaclass, aSelector, aCategory, aSource){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_className_classIsMeta_selector_category_source_", [aName, isMetaclass, aSelector, aCategory, aSource]);
return self;}
}),
smalltalk.CypressMethodDefinition.klass);


smalltalk.addClass('CypressAddition', smalltalk.CypressPatchOperation, ['definition'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_definition_'),
smalltalk.method({
selector: unescape('definition%3A'),
fn: function (aDefinition){
var self=this;
(self['@definition']=aDefinition);
return self;}
}),
smalltalk.CypressAddition);


smalltalk.addMethod(
unescape('_of_'),
smalltalk.method({
selector: unescape('of%3A'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_definition_", [aDefinition]);
return self;}
}),
smalltalk.CypressAddition.klass);


smalltalk.addClass('CypressModification', smalltalk.CypressPatchOperation, ['obsoletion', 'modification'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_base_target_'),
smalltalk.method({
selector: unescape('base%3Atarget%3A'),
fn: function (base, target){
var self=this;
(self['@obsoletion']=base);
(self['@modification']=target);
return self;}
}),
smalltalk.CypressModification);


smalltalk.addMethod(
unescape('_of_to_'),
smalltalk.method({
selector: unescape('of%3Ato%3A'),
fn: function (base, target){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_base_target_", [base, target]);
return self;}
}),
smalltalk.CypressModification.klass);


smalltalk.addClass('CypressRemoval', smalltalk.CypressPatchOperation, ['definition'], 'Cypress-Definitions');
smalltalk.addMethod(
unescape('_definition_'),
smalltalk.method({
selector: unescape('definition%3A'),
fn: function (aDefinition){
var self=this;
(self['@definition']=aDefinition);
return self;}
}),
smalltalk.CypressRemoval);


smalltalk.addMethod(
unescape('_of_'),
smalltalk.method({
selector: unescape('of%3A'),
fn: function (aDefinition){
var self=this;
return smalltalk.send(smalltalk.send(self, "_new", []), "_definition_", [aDefinition]);
return self;}
}),
smalltalk.CypressRemoval.klass);


smalltalk.addMethod(
unescape('_species'),
smalltalk.method({
selector: unescape('species'),
fn: function (){
var self=this;
return smalltalk.send(self, "_class", []);
return self;}
}),
smalltalk.Object);

smalltalk.addMethod(
unescape('_asCypressClassDefinition'),
smalltalk.method({
selector: unescape('asCypressClassDefinition'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.CypressClassDefinition || CypressClassDefinition), "_name_superclassName_category_instVarNames_classInstVarNames_comment_", [smalltalk.send(self, "_name", []), smalltalk.send(smalltalk.send(self, "_superclass", []), "_name", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_instanceVariableNames", []), smalltalk.send(smalltalk.send(self, "_class", []), "_instanceVariableNames", []), smalltalk.send(self, "_comment", [])]);
return self;}
}),
smalltalk.Class);

smalltalk.addMethod(
unescape('_asCypressMethodDefinition'),
smalltalk.method({
selector: unescape('asCypressMethodDefinition'),
fn: function (){
var self=this;
return smalltalk.send((smalltalk.CypressMethodDefinition || CypressMethodDefinition), "_className_classIsMeta_selector_category_source_", [smalltalk.send(smalltalk.send(self, "_methodClass", []), "_name", []), smalltalk.send(smalltalk.send(self, "_methodClass", []), "_isMetaclass", []), smalltalk.send(self, "_selector", []), smalltalk.send(self, "_category", []), smalltalk.send(self, "_source", [])]);
return self;}
}),
smalltalk.CompiledMethod);

smalltalk.addMethod(
unescape('_sameAs_'),
smalltalk.method({
selector: unescape('sameAs%3A'),
fn: function (aString){
var self=this;
return smalltalk.send(smalltalk.send(self, "_asUppercase", []), "__eq", [smalltalk.send(aString, "_asUppercase", [])]);
return self;}
}),
smalltalk.CharacterArray);

