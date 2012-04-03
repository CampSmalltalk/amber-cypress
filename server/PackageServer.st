FileServer subclass: #PackageServer
	instanceVariableNames: ''
	package: 'PackageServer'!

!PackageServer methodsFor: 'request handling'!

handleRequest: aRequest respondTo: aResponse
        aRequest method = 'PUT'
                ifTrue: [ ^self handlePUTRequest: aRequest respondTo: aResponse ].
        aRequest method = 'POST'
                ifTrue: [ self handlePOSTRequest: aRequest respondTo: aResponse ]
                ifFalse: [ self handleGETRequest: aRequest respondTo: aResponse ]

!

handlePOSTRequest: aRequest respondTo: aResponse
	| stream path |
	path := (url parse: aRequest url) pathname.
	(path match: '^/PACKAGE') 
		ifTrue: [ ^self handlePackagePOSTRequest: aRequest respondTo: aResponse ].
	stream := fs createWriteStream: '.', path.

	aRequest setEncoding: 'utf8'.
	aRequest on: 'data' do: [:data | stream write: data].

	aRequest on: 'end' do: [
		stream end.
		self respondOKTo: aResponse]
!

handlePackagePOSTRequest: aRequest respondTo: aResponse
        | stream path |
        path := (url parse: aRequest url) pathname.
	path := path copyFrom: '/PACKAGE' size + 1 to: path size.
        stream := fs createWriteStream: '.', path.

        aRequest setEncoding: 'utf8'.
        aRequest on: 'data' do: [:data | self writePackagStructureOn: stream fromJson: data ].

        aRequest on: 'end' do: [
                stream end.
                self respondOKTo: aResponse]
! !

!PackageServer methodsFor: 'private'!

writePackagStructureOn: stream fromJson: json

	| packageStructure |
	packageStructure := CypressPackageStructure fromJson: json.
	stream write: 'hello world'
! !



