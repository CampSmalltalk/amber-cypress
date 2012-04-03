FileServer subclass: #PackageServer
	instanceVariableNames: ''
	package: 'PackageServer'!

!PackageServer methodsFor: 'request handling'!

handleGETRequest: aRequest respondTo: aResponse
	| uri filename |
	uri := (url parse: aRequest url) pathname.
	filename := path join: self basePath with: uri.
	path exists: filename do: [:boolean | 
		boolean 
			ifFalse: [self respondNotFoundTo: aResponse]
			ifTrue: [self respondFileNamed: filename to: aResponse]]
!

handlePUTRequest: aRequest respondTo: aResponse
	| stream |
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

