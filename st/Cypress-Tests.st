Smalltalk current createPackage: 'Cypress-Tests' properties: #{}!
TestCase subclass: #CypressAbstractTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressAbstractTest methodsFor: 'private'!

baseDefinitions
	| className |
	className := 'CypressMockBasic'.
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
          		className: className
        		classIsMeta: true
        		selector: 'current'
        		category: 'accessing'
        		source:'current
	^current').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: true
        		selector: 'current:'
        		category: 'accessing'
        		source:'current: anObject
	current := anObject').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: true
        		selector: 'initialize'
        		category: 'initialization'
        		source:'initialize
	self current: self new').
   	 	(CypressMethodDefinition
          		className: 'Object'
        		classIsMeta: false
        		selector: 'isCypressMockBasic'
        		category: '*Cypress-Mocks'
        		source:'isCypressMockBasic
	^false')
	}
!

basePackageStructureJson

	^'{
  "name" : "Cypress-Mocks.package",
  "contents" : [
      { "name" : "Object.extension",
        "instance" : [
            { "name" : "isCypressMockBasic.json", 
              "contents" : { "category" : "*Cypress-Mocks" } },
            { "name" : "isCypressMockBasic.st", 
              "contents" : "isCypressMockBasic%0A%09^false"},
	],
        "properties.json" : {
            "name" : "Object",
        }
	},
      { "name" : "CypressMockBasic.class",
        "class" :  [
            { "name" : "current.json", 
              "contents" : { "category" : "accessing" }},
            { "name" : "current.st", 
              "contents" : "current%0A%09^current" },
            { "name" : "current..json", 
              "contents" : { "category" : "accessing" }} ,
            { "name" : "current..st", 
              "contents" : "current: anObject%0A%09current := anObject"},
            { "name" : "initialize.json", 
              "contents" : { "category" : "initialization"}},
            { "name" : "initialize.st", 
              "contents" : "initialize%0A%09self current: self new"}
        ],
        "instance" : [
            { "name" : "extra.json", 
              "contents" : { "category" : "accessing" } },
            { "name" : "extra.st", 
              "contents" : "extra%0A%09%22extra method%22"},
            { "name" : "initialize.json", 
              "contents" : { "category" : "initialization" } },
            { "name" : "initialize.st", 
              "contents" : "initialize%0A%09super initialize.%0A%09self name: ''Unknown''" },
            { "name" : "name.json", 
              "contents" : { "category" : "accessing" } } ,
            { "name" : "name.st", 
              "contents" : "name%0A%09^name" },
            { "name" : "name..json", 
              "contents" : { "category" : "accessing" } } ,
            { "name" : "name..st", 
              "contents" : "name: aString%0A%09name := aString" }
        ],
	"README" : "This mock contains basic class and instance method selectors",
        "properties.json" : {
            "instvars" : [ "name" ],
            "classinstvars" : [ "current" ],
            "name" : "CypressMockBasic",
            "super" : "Object"
        }
    }
    ],
  "properties.json" : {
  }
}'
!

baseTargetPatch
	| className |
	className := 'CypressMockBasic'.
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
	"extra method"')).
		(CypressRemoval 
			of: (CypressMethodDefinition
          			className: 'Object'
        			classIsMeta: false
        			selector: 'isCypressMockBasic'
        			category: '*Cypress-Mocks'
        			source:'isCypressMockBasic
	^false'))
	}
!

targetDefinitions
	"remove #extra method and modify #name: method"

	| className |
	className := 'CypressMockBasic'.
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
          		className: className
        		classIsMeta: true
        		selector: 'current'
        		category: 'accessing'
        		source:'current
	^current').
   	 	(CypressMethodDefinition
          		className: className
        		classIsMeta: true
        		selector: 'current:'
        		category: 'accessing'
        		source:'current: anObject
	current := anObject').
   	 	(CypressMethodDefinition
          		className: className
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
	pkg1 := CypressPackageDefinition new name: name.
	pkg2 := CypressPackageDefinition new name: name.
	pkg3 := CypressPackageDefinition new name: 'Nope!!'.

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
	pkg := CypressPackageDefinition new name: name.
	self assert: pkg name equals: name.
	self deny: (pkg name = 'Nope.').
!

testPrintString
	| name pkg |
	name := 'Cypress-Mocks'.
	pkg := CypressPackageDefinition new name: name.
	self assert: 'a CypressPackageDefinition(', name, ')' equals: pkg printString.
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
		 updatePackage: (CypressPackageDefinition new name: name)
! !

!CypressLoaderTest methodsFor: 'testing'!

testLoad

	| name |
	name := 'Cypress-Mocks'.
	(CypressSnapshot definitions: self targetDefinitions)
		 updatePackage: (CypressPackageDefinition new name: name)
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
	self assert: operations size = 4.
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
	pkg := CypressPackageDefinition new name: name.
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
	pkg := CypressPackageDefinition new name: name.
	packageDefinitions := pkg snapshot definitions.
	expectedDefinitions := self baseDefinitions.
	self assert: packageDefinitions = expectedDefinitions
! !

CypressAbstractTest subclass: #CypressStructureTest
	instanceVariableNames: ''
	package: 'Cypress-Tests'!

!CypressStructureTest methodsFor: 'private'!

compileJSON: aJsonString

	^(Compiler new eval: '(', aJsonString , ')')
!

sampleJson

	^'{
     "name": "John Smith",
     "age"      : 25,
     "registered" : true,
    "phoneNumber":
     [
         {
           "type"  : "home",
           "number": "212 555-1234"
         },
         {
           "type"  : "fax",
           "number": "646 555-4567"
         }
     ]
 }'
! !

!CypressStructureTest methodsFor: 'tests'!

testClassStructure

	| jsObject packageStructure classStructure classProperties |
	jsObject := self compileJSON: self basePackageStructureJson.
	packageStructure := CypressPackageStructure fromJs: jsObject.
	classStructure := packageStructure classes first.
	self assert: classStructure name = 'CypressMockBasic'.
	self deny: classStructure isClassExtension.
	self assert: classStructure comment = 'This mock contains basic class and instance method selectors'.
	classProperties := classStructure properties.
	self assert: classProperties size = 4.
	self assert: (classProperties at: 'instvars') = #('name').
	self assert: (classProperties at: 'classinstvars') = #('current').
	self assert: (classProperties at: 'name') = 'CypressMockBasic'.
	self assert: (classProperties at: 'super') = 'Object'.
	self assert: classStructure instanceMethods size = 4.
	self assert: classStructure classMethods size = 3.
	classStructure := packageStructure extensions first.
	self assert: classStructure name = 'Object'.
	self assert: classStructure isClassExtension.
	self assert: classStructure comment = ''.
	classProperties := classStructure properties.
	self assert: classProperties size = 1.
	self assert: (classProperties at: 'name') = 'Object'.
	self assert: classStructure instanceMethods size = 1.
	self assert: classStructure classMethods size = 0.
!

testJson
	"Let's compile the JSON without errors"

	self compileJSON: self basePackageStructureJson
!

testPackageStructureFromJson

	| jsObject packageStructure classStructure classProperties |
	jsObject := self compileJSON: self basePackageStructureJson.
	packageStructure := CypressPackageStructure fromJs: jsObject.
	self assert: packageStructure name = 'Cypress-Mocks.package'.
	self assert: packageStructure packageName = 'Cypress-Mocks'.
	self assert: packageStructure properties isEmpty.
	self assert: packageStructure extensions size = 1.
	self assert: packageStructure classes size = 1.
!

testPackageStructureFromPackage

	| packageStructure packageDefinitions expectedDefinitions |
	packageStructure := CypressPackageStructure fromPackage: (CypressPackageDefinition new name: 'Cypress-Mocks').
	packageDefinitions := packageStructure snapshot definitions.
	expectedDefinitions := self baseDefinitions.
	self assert: (expectedDefinitions size = packageDefinitions size).
	packageDefinitions do: [:def |
		(expectedDefinitions includes: def)
			ifFalse: [ 
				def inspect.
				self assert: false ]].
!

testPackageStructureSnapshot

	| packageStructure packageDefinitions expectedDefinitions |
	packageStructure := CypressPackageStructure fromJs: (self compileJSON: self basePackageStructureJson).
	packageDefinitions := packageStructure snapshot definitions.
	expectedDefinitions := self baseDefinitions.
	self assert: (expectedDefinitions size = packageDefinitions size).
	packageDefinitions do: [:def |
		(expectedDefinitions includes: def)
			ifFalse: [ 
				def inspect.
				self assert: false ]].
!

testPackageStructureToJson

	| packageStructure stream json |
	packageStructure := CypressPackageStructure fromPackage: (CypressPackageDefinition new name: 'Cypress-Mocks').
	stream := StringStream on: String new.
	packageStructure writeJsonOn: stream.
	json := stream contents inspect.
	self assert: self basePackageStructureJson = json
!

testPropertyDictionary

	| propertyDictionary phoneNumbers |
	propertyDictionary := (self compileJSON: self sampleJson) asCypressPropertyObject.
	self assert: (propertyDictionary at: 'name') = 'John Smith'.
	self assert: (propertyDictionary at: 'age') = 25.
	self assert: (propertyDictionary at: 'registered').
	phoneNumbers := propertyDictionary at: 'phoneNumber'.
	self assert: phoneNumbers size = 2.
	self assert: ((phoneNumbers at: 1) at: 'number') = '212 555-1234'.
	self assert: ((phoneNumbers at: 2) at: 'number') = '646 555-4567'.
! !

