Smalltalk current createPackage: 'Cypress-Exporter' properties: #{}!
AmberProjectExporter subclass: #CypressAmberExporter
	instanceVariableNames: ''
	package: 'Cypress-Exporter'!

!CypressAmberExporter methodsFor: 'exporting'!

export
	self exportPackageStructure
!

exportPackageStructure
	|  packageStructure stream |
	packageStructure := CypressPackageStructure fromPackage: (CypressPackageDefinition new name: self packageName).
	stream := StringStream on: String new.
	packageStructure writeJsonOn: stream.
	self 
		ajaxPutAt: self prefix, 'packages/', self packageName, '.json'
		data: stream contents
! !

!CypressAmberExporter class methodsFor: 'initialization'!

initialize

	(AmberProjectExporter exporters)
		 at: 'cypress' put: self
! !

