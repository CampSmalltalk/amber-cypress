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
! !

