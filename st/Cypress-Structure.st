Smalltalk current createPackage: 'Cypress-Structure' properties: #{}!
Object subclass: #CypressStructure
	instanceVariableNames: 'name properties packageStructure'
	package: 'Cypress-Structure'!

!CypressStructure methodsFor: 'accessing'!

name

	^name
!

name: aString 

	name := aString
!

packageStructure
	^packageStructure
!

packageStructure: aCypressPackageStructure
	packageStructure := aCypressPackageStructure
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
		fromJs: jsObject asCypressPropertyObject;
		yourself
! !

CypressStructure subclass: #CypressClassStructure
	instanceVariableNames: 'instanceMethods classMethods comment'
	package: 'Cypress-Structure'!

!CypressClassStructure methodsFor: 'accessing'!

category

	^self packageStructure packageName
!

classInstanceVariableNames
	^self properties at: 'classinstvars' ifAbsent: ['']
!

classInstanceVariableNames: aString
	^self properties at: 'classinstvars' put: aString
!

classMethods

	classMethods ifNil: [ classMethods := Dictionary new ].
	^classMethods
!

className

	^self name copyFrom: 1 to: (self name size - '.class' size)
!

comment

	comment ifNil: [ comment := '' ].
	^comment
!

comment: aString

	comment := aString
!

instanceMethods

	instanceMethods ifNil: [ instanceMethods := Dictionary new ].
	^instanceMethods
!

instanceVariableNames

	^self properties at: 'instvars' ifAbsent: ['']
!

instanceVariableNames: aString

	^self properties at: 'instvars' put: aString
!

isClassStructure

	^self name match: '.class$'
!

isExtensionStructure

	^self name match: '.extension$'
!

superclassName

	^self properties at: 'super'
!

superclassName: aString

	^self properties at: 'super' put: aString
! !

!CypressClassStructure methodsFor: 'converting'!

asCypressClassDefinition
	^CypressClassDefinition
		name: self className
		superclassName: self superclassName
		category: self category 
		instVarNames: self instanceVariableNames
		classInstVarNames: self classInstanceVariableNames
		comment: self comment
! !

!CypressClassStructure methodsFor: 'initialization'!

fromClassDefinition: classDefinition

	self name: classDefinition name, '.class'.
	self comment: classDefinition comment.
  	self superclassName: classDefinition superclassName.
	self instanceVariableNames: classDefinition instVarNames.
	self classInstanceVariableNames: classDefinition classInstVarNames.
!

fromJs: jsObject

	name := jsObject at: 'name'.
	(jsObject at: 'class' ifAbsent: [#()]) do: [:jsMethodObject |  | methodNameParts |
		methodNameParts := self splitMethodNameFor: jsMethodObject.
		(self classMethodNamed: (methodNameParts at: 1)) 
			packageStructure: self packageStructure;
			classStructure: self;
			isMetaclass: true;
			fromJs: jsMethodObject named: methodNameParts ].
	(jsObject at: 'instance' ifAbsent: [#()]) do: [:jsMethodObject |  | methodNameParts |
		methodNameParts := self splitMethodNameFor: jsMethodObject.
		(self instanceMethodNamed: (methodNameParts at: 1)) 
			packageStructure: self packageStructure;
			classStructure: self;
			fromJs: jsMethodObject named: methodNameParts ].	
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

!CypressClassStructure class methodsFor: 'instance creation'!

fromClassDefinition: classDefinition

	^self new
		fromClassDefinition: classDefinition;
		yourself
! !

CypressStructure subclass: #CypressMethodStructure
	instanceVariableNames: 'source isMetaclass classStructure'
	package: 'Cypress-Structure'!

!CypressMethodStructure methodsFor: 'accessing'!

category

	^self properties at: 'category'
!

category: aString

	self properties at: 'category' put: aString
!

classStructure
	^classStructure
!

classStructure: aCypressClassStructure
	classStructure := aCypressClassStructure
!

isMetaclass

	isMetaclass ifNil: [ isMetaclass := false ].
	^isMetaclass
!

isMetaclass: aBoolean
	isMetaclass := aBoolean
!

selector

	^String
		streamContents: [:stream | self name do: [:chara | stream nextPutAll: (chara = '.' ifTrue:  [ ':' ] ifFalse: [ chara ])]]
!

selector: aString

	name := String
		streamContents: [:stream | aString do: [:chara | stream nextPutAll: (chara = ':' ifTrue:  [ '.' ] ifFalse: [ chara ])]]
!

source

	^source
!

source: aString

	source := aString
! !

!CypressMethodStructure methodsFor: 'converting'!

asCypressMethodDefinition

	| clsName |
	clsName := self classStructure className.
	self isMetaclass ifTrue: [ clsName := clsName, ' class' ].
	^CypressMethodDefinition 
        	className: clsName
		classIsMeta: self isMetaclass
		selector: self selector
		category: self category
		source: self source
! !

!CypressMethodStructure methodsFor: 'initialization'!

fromJs: jsObject  named: methodNameParts

	| ext |
	(ext := methodNameParts at: 2) = '.json'
		ifTrue: [  properties := jsObject at: 'contents' ]
		ifFalse: [ ext = '.st' ifTrue: [ source := jsObject at: 'contents' ] ]
!

fromMethodDefinition: methodDefinition

	self isMetaclass: methodDefinition classIsMeta.
	self selector: methodDefinition selector.
	self category: methodDefinition category.
	self source: methodDefinition source.
! !

!CypressMethodStructure class methodsFor: 'instance creation'!

fromMethodDefinition: methodDefinition

	^self new
		fromMethodDefinition: methodDefinition;
		yourself
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
!

packageExtension

	^self properties at: 'extension' ifAbsent: ['.package' ]
!

packageName

	^self name copyFrom: 1 to: (self name size - self packageExtension size)
!

packageStructure
	^self
! !

!CypressPackageStructure methodsFor: 'initialization'!

fromJs: jsObject

	name := jsObject at: 'name'.
	(jsObject at: 'contents') do: [:jsClassObject| | classStructure |
		classStructure := CypressClassStructure fromJs: jsClassObject.
		classStructure packageStructure: self.
                classStructure isExtensionStructure
			ifTrue: [ self extensions add: classStructure ]
			ifFalse: [ 
				classStructure isClassStructure
					ifTrue: [ self classes add: classStructure ]]].
	properties := jsObject at: 'properties.json'
!

fromPackage: aCypressPackageDefinition

	| snapshot classMap classDefinitions |
	snapshot := aCypressPackageDefinition snapshot.
	name := aCypressPackageDefinition name, '.package'.
	properties := Dictionary new.
	classDefinitions := Set new.
	classMap := Dictionary new.
	snapshot definitions do: [:definition |  
			definition 
				classDefinition: [:classDefinition |  classDefinitions add: classDefinition ] 
				methodDefinition: [:methodDefinition | 
					(classMap 
						at: methodDefinition className 
						ifAbsent: [classMap at: methodDefinition className put: Set new]) 
							add: methodDefinition. ]].
	classDefinitions do: [:classDefinition | | classStructure |
		classStructure := (CypressClassStructure fromClassDefinition: classDefinition)
			packageStructure: self.
		(classMap removeKey: classDefinition className ifAbsent: [#()]) do: [:methodDefinition | | methodStructure |
			methodStructure := (CypressMethodStructure fromMethodDefinition: methodDefinition)
				packageStructure: self;
				classStructure: classStructure.
			(methodDefinition
				instanceMethod: [:instanceMethod | classStructure instanceMethods ] 
				classMethod: [:classMethod | classStructure classMethods ])
					at: methodDefinition selector
					put: methodStructure ].
		self classes add: classStructure ].
	classMap keysAndValuesDo: [:className :methods |
		classStructure := (CypressClassStructure new name: className)
			packageStructure: self.
		methods do: [:methodDefinition | | methodStructure |
			methodStructure := (CypressMethodStructure fromMethodDefinition: methodDefinition)
				packageStructure: self;
				classStructure: classStructure.
			(methodDefinition
				instanceMethod: [:instanceMethod | classStructure instanceMethods ] 
				classMethod: [:classMethod | classStructure classMethods ])
					at: methodDefinition selector
					put: methodStructure ].
		self extensions add: classStructure ].
! !

!CypressPackageStructure methodsFor: 'snapshotting'!

snapshot
	| definitions map  |
	definitions := OrderedCollection new.
	self classes do: [:classStructure |
        	definitions add: classStructure asCypressClassDefinition.
                (classStructure instanceMethods values asArray sorted: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ].
                (classStructure classMethods values asArray sorted: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ]].
	self extensions do: [:classStructure |
                (classStructure instanceMethods values asArray sorted: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ].
                (classStructure classMethods values asArray sorted: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ]].
	^ CypressSnapshot definitions: definitions
! !

!CypressPackageStructure class methodsFor: 'instance creation'!

fromPackage: aCypressPackageDefinition

	^(self new) 
		fromPackage: aCypressPackageDefinition;
		yourself
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

