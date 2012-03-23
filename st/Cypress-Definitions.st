Smalltalk current createPackage: 'Cypress-Definitions' properties: #{}!
Object subclass: #CypressSnapshot
	instanceVariableNames: 'definitions'
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
			(method category match: '^\*') ifFalse: [ method asCypressMethodDefinition ]]].
	name := package name.
	Smalltalk current classes, (Smalltalk current classes collect: [:each | each class]) do: [:each |
		each methodDictionary values do: [:method |
			method category = ('*', name) ifTrue: [
				definitions add: (self methodDefinition: method for: each) ]]].
	^ CypressSnapshot fromDefinitions: definitions
!

printString
	^super printString, '(', name, ')'
! !

Object subclass: #CypressDefinition
	instanceVariableNames: ''
	category: 'Cypress-Definitions'!

CypressDefinition subclass: #CypressClassDefinition
	instanceVariableNames: 'name superclassName variables category type comment'
	category: 'Cypress-Definitions'!

CypressDefinition subclass: #CypressMethodDefinition
	instanceVariableNames: 'classIsMeta source category selector className'
	category: 'Cypress-Definitions'!

!Object methodsFor: '*Cypress-Definitions'!

species

	^self class
! !

!Class methodsFor: '*Cypress-Definitions'!

asCypressClassDefinition
	^MCClassDefinition
		name: self name
		superclassName: self superclass name
		traitComposition: self traitCompositionString
		classTraitComposition: self class traitCompositionString
		category: self category 
		instVarNames: self instVarNames
		classVarNames: self classVarNames
		poolDictionaryNames: self poolDictionaryNames
		classInstVarNames: self class instVarNames
		type: self typeOfClass
		comment: self organization classComment	 asString
		commentStamp: self organization commentStamp
! !

!CompiledMethod methodsFor: '*Cypress-Definitions'!

asCypressMethodDefinition

	CypressMethodDefinition 
        	className: self classSymbol
		classIsMeta: self classIsMeta
		selector: self methodSymbol
		category: self category
		source: self source
! !

!CharacterArray methodsFor: '*Cypress-Definitions'!

sameAs: aString

	^self asUppercase = aString asUppercase
! !

