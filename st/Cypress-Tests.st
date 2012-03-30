Smalltalk current createPackage: 'Cypress-Tests' properties: #{}!
TestCase subclass: #CypressAbstractTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressAbstractTest methodsFor: 'private'!

baseDefinitions
	| className classClassName |
	className := 'CypressMockBasic'.
	classClassName := 'CypressMockBasic class'.
	^{
		(CypressClassDefinition
        		name: className
       		 	superclassName: 'Object'
       			category: 'Cypress-Mocks'
                       	instVarNames: #('name')
			classInstVarNames: #('current')
        		comment: 'This mock contains basic class and instance method selectors').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'extra'
        		category: 'accessing'
        		source:'extra
	"extra method"').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	super initialize.
	self name: ''Unknown''').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'name'
        		category: 'accessing'
        		source:'name
	^name').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'name:'
        		category: 'accessing'
        		source:'name: aString
	name := aString').
   	 	(CypressMethodDefinition
          		className: classClassName
        		classIsMeta: true
        		selector: 'current'
        		category: 'accessing'
        		source:'current
	^current').
   	 	(CypressMethodDefinition
          		className: classClassName
        		classIsMeta: true
        		selector: 'current:'
        		category: 'accessing'
        		source:'current: anObject
	current := anObject').
   	 	(CypressMethodDefinition
          		className: classClassName
        		classIsMeta: true
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	self current: self new')
	}
!

baseTargetPatch
	| className classClassName |
	className := 'CypressMockBasic'.
	classClassName := 'CypressMockBasic class'.
	^{
		(CypressAddition 
			of: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'added'
        			category: 'accessing'
        			source:'added
	"added method"')).
		(CypressModification 
			of: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'name:'
        			category: 'accessing'
        			source:'name: aString
	name := aString') 
			to: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'name:'
        			category: 'accessing'
        			source:'name: aString
	"changed method"
	name := aString')).
		(CypressRemoval 
			of: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'extra'
        			category: 'accessing'
        			source:'extra
	"extra method"'))
	}
!

targetDefinitions
	"remove #extra method and modify #name: method"

	| className classClassName |
	className := 'CypressMockBasic'.
	classClassName := 'CypressMockBasic class'.
	^{
		(CypressClassDefinition
        		name: className
       		 	superclassName: 'Object'
       			category: 'Cypress-Mocks'
                       	instVarNames: #('name')
			classInstVarNames: #('current')
        		comment: 'This mock contains basic class and instance method selectors').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'added'
        		category: 'accessing'
        		source:'added
	"added method"').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	super initialize.
	self name: ''Unknown''').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'name'
        		category: 'accessing'
        		source:'name
	^name').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: false
        		selector: 'name:'
        		category: 'accessing'
        		source:'name: aString
	"changed method"
	name := aString').
   	 	(CypressMethodDefinition
          		className: classClassName
        		classIsMeta: true
        		selector: 'current'
        		category: 'accessing'
        		source:'current
	^current').
   	 	(CypressMethodDefinition
          		className: classClassName
        		classIsMeta: true
        		selector: 'current:'
        		category: 'accessing'
        		source:'current: anObject
	current := anObject').
   	 	(CypressMethodDefinition
          		className: classClassName
        		classIsMeta: true
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	self current: self new')
	}
! !

CypressAbstractTest subclass: #CypressDefinitionTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressDefinitionTest methodsFor: 'testing'!

testClassDefinition
	self assert: (CypressClassDefinition
		name: 'Foo'
       		 superclassName: 'Object'
       		category: 'Foo'
                instVarNames: #()
		classInstVarNames: #()
        	comment: '') printString =  'a CypressClassDefinition (Foo)'
!

testDictionaryOfDefinitions

	| dict |
	"baseDefinitions"
	dict := Dictionary new.
	self baseDefinitions do: [:each | 
		dict at: each put: each ].
	self baseDefinitions do: [:each | 
		self assert: (dict at: each) = each ].

	"targetDefinitions"
	dict := Dictionary new.
	self targetDefinitions do: [:each | 
		dict at: each put: each ].
	self targetDefinitions do: [:each | 
		self assert: (dict at: each) = each ].
!

testEquality
	| pkg1 pkg2 pkg3 name |
	name := 'Cypress-Mocks'.
	pkg1 := CypressPackage new name: name.
	pkg2 := CypressPackage new name: name.
	pkg3 := CypressPackage new name: 'Nope!!'.

	self assert: pkg1 equals: pkg2.
	self deny: pkg1 = pkg3
!

testMethodDefinition
	self assert: (CypressMethodDefinition
		className: 'Foo'
		classIsMeta: false
		selector: 'isFoo'
		category: 'testing'
		source: 'isFoo ^true') printString = 'a CypressMethodDefinition (Foo>>isFoo)'
!

testNameEquality
	| pkg name |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	self assert: pkg name equals: name.
	self deny: (pkg name = 'Nope.').
!

testPrintString
	| name pkg |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	self assert: 'a CypressPackage(', name, ')' equals: pkg printString.
! !

CypressAbstractTest subclass: #CypressLoaderTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressLoaderTest methodsFor: 'running'!

tearDown

	| name |
	super tearDown.
	name := 'Cypress-Mocks'.
	(CypressSnapshot definitions: self baseDefinitions)
		 updatePackage: (CypressPackage new name: name)
! !

!CypressLoaderTest methodsFor: 'testing'!

testLoad

	| name |
	name := 'Cypress-Mocks'.
	(CypressSnapshot definitions: self targetDefinitions)
		 updatePackage: (CypressPackage new name: name)
! !

CypressAbstractTest subclass: #CypressPatchTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressPatchTest methodsFor: 'testing'!

testDictionaryOfPatchOperations
	"loader uses dictionary for managing patch operations ... ensure that Amber Dictionaries stand up"

	| dict |
	dict := Dictionary new.
	self baseTargetPatch do: [:each | 
		dict at: each put: each ].
	self baseTargetPatch do: [:each | 
		self assert: (dict at: each) = each ].
!

testPatch

	| baseSnapshot targetSnapshot patch operations |
	baseSnapshot := CypressSnapshot definitions: self baseDefinitions.
	targetSnapshot := CypressSnapshot definitions: self targetDefinitions.
	patch := CypressPatch fromBase: baseSnapshot toTarget: targetSnapshot.
	operations := patch operations.
	self assert: operations size = 3.
	self assert: operations = self baseTargetPatch
!

testPatchOperationEquality

	| className modification removal addition |
	className := 'CypressMockBasic'.
	modification := CypressModification 
			of: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'name:'
        			category: 'accessing'
        			source:'name: aString
	name := aString') 
			to: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'name:'
        			category: 'accessing'
        			source:'name: aString
	"changed method"
	name := aString').
	self assert: modification = modification.
	removal := CypressRemoval 
			of: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'extra'
        			category: 'accessing'
        			source:'extra
	"extra method"').
	self assert: removal = removal.
	addition := CypressAddition
			of: (CypressMethodDefinition
          			className: className
        			classIsMeta: false
        			selector: 'extra'
        			category: 'accessing'
        			source:'extra
	"extra method"').
	self assert: addition = addition.
! !

CypressAbstractTest subclass: #CypressSnapshotTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressSnapshotTest methodsFor: 'testing'!

testSnapshot
	| name pkg packageDefinitions expectedDefinitions |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	packageDefinitions := pkg snapshot definitions.
	expectedDefinitions := self baseDefinitions.
	self assert: (expectedDefinitions size = packageDefinitions size).
	packageDefinitions do: [:def |
		(expectedDefinitions includes: def)
			ifFalse: [ self assert: false ]].
!

testSnapshotEquality
	| name pkg packageDefinitions expectedDefinitions |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	packageDefinitions := pkg snapshot definitions.
	expectedDefinitions := self baseDefinitions.
	self assert: packageDefinitions = expectedDefinitions
! !

