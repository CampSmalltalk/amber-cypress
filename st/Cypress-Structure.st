Smalltalk current createPackage: 'Cypress-Structure' properties: #{}!
Object subclass: #CypressPackageStructure
	instanceVariableNames: 'name classes extensions properties'
	package: 'Cypress-Structure'!

!CypressPackageStructure methodsFor: 'accessing'!

classes

	classes ifNil: [ classes := OrderedCollection new ].
	^classes
!

extensions

	extensions ifNil: [ extensions := OrderedCollection new ].
	^extensions
!

properties

	properties ifNil: [ properties := Dictionary new ].
	^properties
! !

!CypressPackageStructure methodsFor: 'javascript'!

fromJs: jsObject
	"Expecting a Javascript object with a single key value pair. The key is the name of the
          package and the value is the contents of the package"

	name := jsObject name.
	jsObject contents do: [:x|].
	properties := jsObject at: 'properties.json'
! !

!CypressPackageStructure class methodsFor: 'instance creation'!

fromJs: jsObject
	"Expecting a Javascript object with a single key value pair. The key is the name of the
          package and the value is the contents of the package"

	^self new fromJs: jsObject
! !

