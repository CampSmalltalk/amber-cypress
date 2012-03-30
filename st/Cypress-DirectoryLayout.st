Smalltalk current createPackage: 'Cypress-DirectoryLayout' properties: #{}!
Object subclass: #CypressDirectoryLayout
	instanceVariableNames: ''
	package: 'Cypress-DirectoryLayout'!

!CypressDirectoryLayout class methodsFor: 'file access'!

get: ajaxUrl onComplete: completeBlock onError: errorBlock
	jQuery 
		ajax: ajaxUrl
        	options: #{
			'type' -> 'GET'.
			'contentType' -> 'text/plain; charset=utf-8'.
    			'complete' -> [ :jqXHR :textStatus |  completeBlock value: jqXHR value: textStatus ].
    			'error' -> [ :jqXHR :textStatus :errorThrown |  errorBlock value: jqXHR value: textStatus value: errorThrown ]
		}
! !

!CypressDirectoryLayout class methodsFor: 'instance creation'!

root: path

	| type file |
	type := (file := path,  '/',  'properties.json') exists
		ifTrue: [ self halt ]
		ifFalse: [ DefaultLayout ].
	^type new root: path
! !

