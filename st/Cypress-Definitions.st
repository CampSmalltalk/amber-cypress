Smalltalk current createPackage: 'Cypress-Definitions' properties: #{}!
Object subclass: #CypressDefinition
	instanceVariableNames: ''
	category: 'Cypress-Definitions'!

Object subclass: #CypressPackage
	instanceVariableNames: 'name'
	category: 'Cypress-Definitions'!

!CypressPackage methodsFor: 'not yet classified'!

= other
	^ other species = self species and: [other name sameAs: name]
!

name
	^ name
!

name: aString
	name := aString
!

snapshot
	| package definitions name  |
	package := self class package.
	definitions := OrderedCollection new.
	package sortedClasses do: [:cls |
        	definitions add: cls asCypressClassDefinition.
                cls methodDictionary values do: [:method |
			(method category match: '^\*') ifFalse: [ definitions add: method asCypressMethodDefinition ]]].
	name := package name.
	Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |
		each methodDictionary values do: [:method |
			method category = ('*', name) ifTrue: [
				definitions add: method asCypressMethodDefinition ]]].
	^ CypressSnapshot definitions: definitions
!

printString
	^super printString, '(', name, ')'
! !

Object subclass: #CypressSnapshot
	instanceVariableNames: 'definitions'
	category: 'Cypress-Definitions'!

!CypressSnapshot methodsFor: 'not yet classified'!

definitions: aDefinitions

	definitions := aDefinitions
! !

!CypressSnapshot class methodsFor: 'not yet classified'!

definitions: aDefinitions

	^(self new) definitions: aDefinitions
! !

CypressDefinition subclass: #CypressClassDefinition
	instanceVariableNames: 'name superclassName variables category type comment instVarNames classInstVarNames'
	category: 'Cypress-Definitions'!

!CypressClassDefinition methodsFor: 'not yet classified'!

name: aClassName 
superclassName: aSuperclassName
category: aCategory
instVarNames: anInstanceVariableNames
classInstVarNames: aClassInstanceVariableNames
comment: aComment

	name := aClassName.
	superclassName := aSuperclassName.
	category := aCategory.
	instVarNames := anInstanceVariableNames.
	classInstVarNames := aClassInstanceVariableNames.
	comment := aComment
! !

!CypressClassDefinition class methodsFor: 'not yet classified'!

name: aClassName 
superclassName: aSuperclassName
category: aCategory
instVarNames: anInstanceVariableNames
classInstVarNames: aClassInstanceVariableNames
comment: aComment

	^(self new) 
		name: aClassName 
		superclassName: aSuperclassName
		category: aCategory
		instVarNames: anInstanceVariableNames
		classInstVarNames: aClassInstanceVariableNames
		comment: aComment
! !

CypressDefinition subclass: #CypressMethodDefinition
	instanceVariableNames: 'classIsMeta source category selector className'
	category: 'Cypress-Definitions'!

!CypressMethodDefinition methodsFor: 'not yet classified'!

className: aName
classIsMeta: isMetaclass
selector: aSelector
category: aCategory
source: aSource

	className := aName.
	classIsMeta := isMetaclass.
	selector := aSelector.
	category := aCategory.
	source := aSource.
! !

!CypressMethodDefinition class methodsFor: 'not yet classified'!

className: aName
classIsMeta: isMetaclass
selector: aSelector
category: aCategory
source: aSource

	^(self new)
		className: aName
		classIsMeta: isMetaclass
		selector: aSelector
		category: aCategory
		source: aSource
! !

!Object methodsFor: '*Cypress-Definitions'!

species

	^self class
! !

!Class methodsFor: '*Cypress-Definitions'!

asCypressClassDefinition
	^CypressClassDefinition
		name: self name
		superclassName: self superclass name
		category: self category 
		instVarNames: self instanceVariableNames
		classInstVarNames: self class instanceVariableNames
		comment: self comment
! !

!CompiledMethod methodsFor: '*Cypress-Definitions'!

asCypressMethodDefinition

	CypressMethodDefinition 
        	className: self methodClass name
		classIsMeta: self methodClass isMetaclass
		selector: self selector
		category: self category
		source: self source
! !

!CharacterArray methodsFor: '*Cypress-Definitions'!

sameAs: aString

	^self asUppercase = aString asUppercase
! !

