Smalltalk current createPackage: 'Cypress-Tests' properties: #{}!
TestCase subclass: #CypressDefinitionTest
	instanceVariableNames: ''
	category: 'Cypress-Tests'!

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
	| name pkg packageDefinitions expectedDefinitions count |
	name := 'Cypress-Mocks'.
	pkg := CypressPackage new name: name.
	packageDefinitions := pkg snapshot definitions.
	expectedDefinitions := self expectedMockDefinitions.
	self assert: (expectedDefinitions size = packageDefinitions size).
packageDefinitions inspect.
expectedDefinitions inspect.
count := 1.
	packageDefinitions do: [:def |
Transcript cr; show: count printString.
count := count + 1. 
		self assert: (expectedDefinitions includes: def) ].
!

expectedMockDefinitions
	| className |
	className := 'CypressMockBasic'.
	^{
		(CypressClassDefinition
        		name: className
       		 	superclassName: 'Object'
       			category: className
                       	instVarNames: #('name')
			classInstVarNames: #('current')
        		comment: 'This mock contains basic class and instance method selectors').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: true
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	self current: self new').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: true
        		selector: 'current'
        		category: 'accessting'
        		source:'current
	^current').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: true
        		selector: 'current:'
        		category: 'accessting'
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
	name := aString')
	}
! !

