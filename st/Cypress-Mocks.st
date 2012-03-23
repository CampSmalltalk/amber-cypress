Smalltalk current createPackage: 'Cypress-Mocks' properties: #{}!
Object subclass: #CypressMockBasic
	instanceVariableNames: 'name'
	category: 'Cypress-Mocks'!
!CypressMockBasic commentStamp!
This mock contains basic class and instance method selectors!

!CypressMockBasic methodsFor: 'accessing'!

name: aString
	name := aString
!

name
	^name
! !

!CypressMockBasic methodsFor: 'initialization'!

initialize
	super initialize.
	self name: 'Unknown'
! !

CypressMockBasic class instanceVariableNames: 'current'!

!CypressMockBasic class methodsFor: 'accessing'!

current
	^current
!

current: anObject
	current := anObject
! !

!CypressMockBasic class methodsFor: 'initialization'!

initialize
	self current: self new
! !

