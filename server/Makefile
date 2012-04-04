pserver.js: PackageServer.st ../st/Cypress-Definitions.st ../st/Cypress-Structure.st
	../lib/amber/bin/amberc \
		-l ../lib/js/wrench \
		-m PackageServer \
		../lib/amber/st/Compiler.st \
		../st/Cypress-Definitions.st ../st/Cypress-Structure.st ../st/Cypress-Filesystem \
		../lib/amber/server/FileServer.st \
		PackageServer.st \
		pserver

run: pserver.js
	./pserver

clean:
	rm -f ./pserver.js
