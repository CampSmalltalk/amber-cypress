Smalltalk current createPackage: 'AmberProjectPage' properties: #{}!
Widget subclass: #AmberProjectPage
	instanceVariableNames: ''
	category: 'AmberProjectPage'!

!AmberProjectPage methodsFor: 'rendering'!

renderOn: html

	html div class:'container'; with:[ 
		html div
			id: 'header';
			class: 'span-24 last';
			with: [ :div | div h1: 'Amber Project Name' ].
		html hr.
		html div
			id: 'subheader';
			class: 'span-24 last';
			with: [:div | 
				div h3
					class: 'alt';
					with: 'Amber Project description' ].
		html hr.
		html with: 'by Project Author' ]
! !

!AmberProjectPage class methodsFor: 'instance creation'!

open
	(self new)
          	appendToJQuery: 'body' asJQuery
! !

