Smalltalk current createPackage: 'Cypress-Structure' properties: #{}!
Object subclass: #CypressStructure
	instanceVariableNames: 'name properties'
	package: 'Cypress-Structure'!

!CypressStructure methodsFor: 'accessing'!

name

	^name
!

properties

	properties ifNil: [ properties := Dictionary new ].
	^properties
! !

!CypressStructure methodsFor: 'initialization'!

fromJs: jsObject

	self subclassResponsibility
! !

!CypressStructure class methodsFor: 'instance creation'!

fromJs: jsObject

	^self new fromJs: jsObject
! !

CypressStructure subclass: #CypressClassStructure
	instanceVariableNames: 'instanceMethods classMethods comment'
	package: 'Cypress-Structure'!

!CypressClassStructure methodsFor: 'accessing'!

classMethods

	classMethods ifNil: [ classMethods := OrderedCollection new ].
	^classMethods
!

comment

	comment ifNil: [ comment := '' ].
	^comment
!

instanceMethods

	instanceMethods ifNil: [ instanceMethods := OrderedCollection new ].
	^instanceMethods
!

isClassStructure

	| index |
	index := self name indexOf: '.class' ifAbsent: [^false ].
	^index = (self name size - '.class' size)
!

isExtensionStructure

	| index |
	index := self name indexOf: '.extension' ifAbsent: [^false ].
	^index = (self name size - '.extension' size)
! !

!CypressClassStructure methodsFor: 'initialization'!

fromJs: jsObject

	name := jsObject name.
	(jsObject at: 'class') asArray do: [:jsMethodObjects | ].
	jsObject instance asArray do: [:jsMethodObjects | ].	
	comment := jsObject at: 'README'.
	properties := jsObject at: 'properties.json'
! !

CypressStructure subclass: #CypressPackageStructure
	instanceVariableNames: 'classes extensions'
	package: 'Cypress-Structure'!

!CypressPackageStructure methodsFor: 'accessing'!

classes

	classes ifNil: [ classes := OrderedCollection new ].
	^classes
!

extensions

	extensions ifNil: [ extensions := OrderedCollection new ].
	^extensions
! !

!CypressPackageStructure methodsFor: 'initialization'!

fromJs: jsObject

	name := jsObject name.
	jsObject contents do: [:jsClassObject| | classStructure |
		classStructure := CypressClassStructure fromJs: jsClassObject.
                classStructure isExtensionStructure
			ifTrue: [ self extensions add: classStructure ]
			ifFalse: [ 
				classStructure isClassStructure
					ifTrue: [ self classes add: classStructure ]]].
	properties := jsObject at: 'properties.json'
! !

