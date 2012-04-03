FileServer subclass: #PackageServer
	instanceVariableNames: ''
	package: 'PackageServer'!

!PackageServer methodsFor: 'request handling'!

handleRequest: aRequest respondTo: aResponse
        aRequest method = 'PUT'
                ifTrue: [self handlePUTRequest: aRequest respondTo: aResponse]
                ifFalse: [self handleGETRequest: aRequest respondTo: aResponse]
        aRequest method = 'POST'
                ifTrue: [self handlePOSTRequest: aRequest respondTo: aResponse]
                ifFalse: [self handleGETRequest: aRequest respondTo: aResponse]

!

handlePOSTRequest: aRequest respondTo: aResponse
	| stream |
console log: 'parse: ', (url parse: aRequest url) pathname.
console log: 'url: ', aRequest url.
	stream := fs createWriteStream: '.', aRequest url.

	aRequest setEncoding: 'utf8'.
	aRequest on: 'data' do: [:data | stream write: data].

	aRequest on: 'end' do: [
		stream end.
		self respondOKTo: aResponse]
! !

!PackageServer class methodsFor: 'accessing'!

port
        ^port ifNil: [4000]
! !

