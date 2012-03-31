Smalltalk current createPackage: 'Cypress-Structure' properties: #{}!
Object subclass: #CypressStructure
	instanceVariableNames: 'name properties'
	package: 'Cypress-Structure'!

!CypressStructure methodsFor: 'accessing'!

name

	^name
!

name: aString 

	name := aString
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

	^(self new) 
		fromJs: jsObject;
		yourself
! !

CypressStructure subclass: #CypressClassStructure
	instanceVariableNames: 'instanceMethods classMethods comment'
	package: 'Cypress-Structure'!

!CypressClassStructure methodsFor: 'accessing'!

classMethods

	classMethods ifNil: [ classMethods := Dictionary new ].
	^classMethods
!

comment

	comment ifNil: [ comment := '' ].
	^comment
!

instanceMethods

	instanceMethods ifNil: [ instanceMethods := Dictionary new ].
	^instanceMethods
!

isClassStructure

	^self name match: '.class$'
!

isExtensionStructure

	^self name match: '.extension$'
! !

!CypressClassStructure methodsFor: 'initialization'!

fromJs: jsObject

	name := jsObject at: 'name'.
	(jsObject at: 'class' ifAbsent: [#()]) do: [:jsMethodObject |  | methodNameParts |
		methodNameParts := self splitMethodNameFor: jsMethodObject.
		(self classMethodNamed: (methodNameParts at: 1)) fromJs: jsMethodObject named: methodNameParts ].
	(jsObject at: 'instance' ifAbsent: [#()]) do: [:jsMethodObject |  | methodNameParts |
		methodNameParts := self splitMethodNameFor: jsMethodObject.
		(self instanceMethodNamed: (methodNameParts at: 1)) fromJs: jsMethodObject named: methodNameParts ].	
	comment := jsObject at: 'README' ifAbsent: [''].
	properties := jsObject at: 'properties.json'
! !

!CypressClassStructure methodsFor: 'private'!

splitMethodNameFor: jsMethodObject

	| ext methodName |
	methodName := jsMethodObject at: 'name'.
	ext := '.json'.
	(methodName match: ext, '$')
		ifFalse: [
			ext := '.st'.
			(methodName match: ext, '$')
				ifFalse: [ self error: 'invalid structure element: ', methodName ] ].
	^{methodName copyFrom: 1 to: (methodName size - ext size). ext}
! !

!CypressClassStructure methodsFor: 'querying'!

classMethodNamed: methodName

	^self classMethods 
		at: methodName 
		ifAbsent: [ self classMethods at: methodName put: (CypressMethodStructure new name: methodName) ]
!

instanceMethodNamed: methodName

	^self instanceMethods 
		at: methodName 
		ifAbsent: [ self instanceMethods at: methodName put: (CypressMethodStructure new name: methodName) ]
! !

CypressStructure subclass: #CypressMethodStructure
	instanceVariableNames: 'source'
	package: 'Cypress-Structure'!

!CypressMethodStructure methodsFor: 'accessing'!

source

	^source
! !

!CypressMethodStructure methodsFor: 'initialization'!

fromJs: jsObject  named: methodNameParts

	| ext |
	(ext := methodNameParts at: 2) = '.json'
		ifTrue: [  properties := jsObject at: 'contents' ]
		ifFalse: [ ext = '.st' ifTrue: [ source := jsObject at: 'contents' ] ]
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

	name := jsObject at: 'name'.
	(jsObject at: 'contents') do: [:jsClassObject| | classStructure |
		classStructure := CypressClassStructure fromJs: jsClassObject.
                classStructure isExtensionStructure
			ifTrue: [ self extensions add: classStructure ]
			ifFalse: [ 
				classStructure isClassStructure
					ifTrue: [ self classes add: classStructure ]]].
	properties := jsObject at: 'properties.json'
! !

!Object methodsFor: '*Cypress-Structure'!

asCypressPropertyObject

	^self
! !

!Array methodsFor: '*Cypress-Structure'!

asCypressPropertyObject

	^self collect: [:each | each asCypressPropertyObject ]
! !

!Array methodsFor: '*Cypress-Structure'!

asCypressPropertyObject

	^self collect: [:each | each asCypressPropertyObject ]
! !

!String methodsFor: '*Cypress-Structure'!

asCypressPropertyObject

	^self unescaped
! !

!JSObjectProxy methodsFor: '*Cypress-Structure'!

asCypressPropertyObject
	| properties |
	properties := Dictionary new.
	<for(var i in self['@jsObject']) {
		properties._at_put_(i, self['@jsObject'][i]);
	}>.
	properties associations do: [:assoc |
		properties 
			at: assoc key 
			put: assoc value asCypressPropertyObject ].
	^properties
! !

