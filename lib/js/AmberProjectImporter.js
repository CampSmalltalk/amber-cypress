smalltalk.addPackage('AmberProjectImporter', {});
smalltalk.addClass('AmberProjectImporter', smalltalk.Object, [], 'AmberProjectImporter');

smalltalk.addMethod(
unescape('_importSTPackage_prefix_'),
smalltalk.method({
selector: unescape('importSTPackage%3Aprefix%3A'),
category: 'not yet classified',
fn: function (packageName, prefix){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(prefix, "__comma", [packageName]), "__comma", [".st"]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("complete", "__minus_gt", [(function(jqXHR, textStatus){return ((($receiver = smalltalk.send(smalltalk.send(jqXHR, "_readyState", []), "__eq", [(4)])).klass === smalltalk.Boolean) ? ($receiver ? (function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));return smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){var chunks=nil;
(chunks=smalltalk.send(jqXHR, "_responseText", []));return smalltalk.send(smalltalk.send((smalltalk.Importer || Importer), "_new", []), "_import_", [smalltalk.send(chunks, "_readStream", [])]);})]));})])])]);
return self;},
args: ["packageName", "prefix"],
source: unescape('importSTPackage%3A%20packageName%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importSTPackage%3A%20%27AmberProjectPage%27%20%0A%09%09prefix%3A%20%27st/%27%22%0A%0A%09jQuery%20%0A%09%09ajax%3A%20prefix%2C%20packageName%2C%20%27.st%27%0A%20%20%20%20%20%20%20%20%09options%3A%20%23%7B%0A%09%09%09%27type%27%20-%3E%20%27GET%27.%0A%20%20%20%20%09%09%09%27complete%27%20-%3E%20%5B%20%3AjqXHR%20%3AtextStatus%20%7C%20%0A%09%09%09%09jqXHR%20readyState%20%3D%204%20ifTrue%3A%20%5B%20%7Cchunks%20%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09chunks%20%3A%3D%20jqXHR%20responseText.%0A%20%20%20%20%20%20%20%20%20%20%20%20%09%09%09%09Importer%20new%20import%3A%20chunks%20readStream%20%5D%5D%0A%09%09%7D%0A'),
messageSends: ["ajax:options:", unescape("%2C"), unescape("-%3E"), "ifTrue:", unescape("%3D"), "readyState", "responseText", "import:", "new", "readStream"],
referencedClasses: ["Importer"]
}),
smalltalk.AmberProjectImporter.klass);

smalltalk.addMethod(
unescape('_importSTPackages_prefix_'),
smalltalk.method({
selector: unescape('importSTPackages%3Aprefix%3A'),
category: 'not yet classified',
fn: function (packageNameList, prefix){
var self=this;
smalltalk.send(packageNameList, "_do_", [(function(packageName){return smalltalk.send(self, "_importSTPackage_prefix_", [packageName, prefix]);})]);
return self;},
args: ["packageNameList", "prefix"],
source: unescape('importSTPackages%3A%20packageNameList%20prefix%3A%20prefix%0A%09%22AmberProjectImporter%0A%09%09importSTPackages%3A%20%23%28%27AmberProjectPage%27%29%0A%09%09prefix%3A%20%27st/%27%22%0A%0A%09packageNameList%20do%3A%20%5B%3ApackageName%20%7C%0A%09%09self%20importSTPackage%3A%20packageName%20prefix%3A%20prefix%5D.'),
messageSends: ["do:", "importSTPackage:prefix:"],
referencedClasses: []
}),
smalltalk.AmberProjectImporter.klass);


