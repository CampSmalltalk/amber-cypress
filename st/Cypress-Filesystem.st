Smalltalk current createPackage: 'Cypress-Filesystem' properties: #{}!
Object subclass: #CypressFilesystem
	instanceVariableNames: 'fs path wrench basePath'
	package: 'Cypress-Filesystem'!

!CypressFilesystem methodsFor: 'accessing'!

basePath
	^basePath ifNil: ['./']
!

basePath: aString
	basePath := aString
!

resolvePath: aFilename

	^path join: self basePath with: aFilename.
! !

!CypressFilesystem methodsFor: 'initialization'!

initialize
	super initialize.
	fs := self require: 'fs'.
	path := self require: 'path'.
	wrench := self require: 'wrench'.
! !

!CypressFilesystem methodsFor: 'operations'!

createWriteStream: aFilePath

	^fs createWriteStream: aFilePath
!

recursiveRmDir: aFilePath

	wrench rmdirSyncRecursive: aFilePath
! !

!CypressFilesystem methodsFor: 'private'!

require: aModuleString
	"call to the require function"
	"^require value: aModuleString"
! !

