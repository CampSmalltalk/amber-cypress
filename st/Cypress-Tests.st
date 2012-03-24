Smalltalk current createPackage: 'Cypress-Tests' properties: #{}!
TestCase subclass: #CypressDefinitionTest
	instanceVariableNames: ''
	category: 'Cypress-Tests'!

!CypressDefinitionTest methodsFor: 'private'!

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
          		className: classClassName
        		classIsMeta: true
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	self current: self new').
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
          		className: className
        		classIsMeta: false
        		selector: 'extra'
        		category: 'accessing'
        		source:'extra
	"extra method"')
	}
!

targetDefinitions
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
          		className: classClassName
        		classIsMeta: true
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	self current: self new').
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
	name := aString')
	}
! !

!CypressDefinitionTest methodsFor: 'testing'!

testNameEquality
	| pkg name |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	self assert: pkg name equals: name.
	self deny: (pkg name = 'Nope.').
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

testPrintString
	| name pkg |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	self assert: 'a CypressPackage(', name, ')' equals: pkg printString.
!

testSnapshot
	| name pkg packageDefinitions expectedDefinitions |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	packageDefinitions := pkg snapshot definitions.
	expectedDefinitions := self baseDefinitions.
	self assert: (expectedDefinitions size = packageDefinitions size).
	packageDefinitions do: [:def |
		(expectedDefinitions includes: def)
			ifFalse: [ 
				def inspect.
				self assert: false ]].
!

testPatch

	| baseSnapshot targetSnapshot |
	baseSnapshot := CypressSnapshot definitions: self baseDefinitions.
	targetSnapshot := CypressSnapshot definitions: self targetDefinitions.
! !

