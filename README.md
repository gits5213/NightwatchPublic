# README #
This repository contains the scripts intended for testing the remoteITUniversity website.
More details about configuration, running and developing tests in this repo can be found 
at: http://nightwatchjs.org/ (Visit : www.remoteituniversity.com) 

# WebSite 
	http://nightwatchjs.org/

# Execute the suite
	TestCases level
	- CMD>root of the project >nightwatch "tests\Functional Test\Admin Level Privileges\test.js" --e qa2 | qa1 --reporter html-reporter.js
	Group Level
	- CMD>root of the project >nightwatch "tests\Functional Test\Admin Level Privileges" --e qa2 --reporter html-reporter.js
	Suite Level
	- CMD>root of the project >nightwatch "tests\Functional Test" --e qa2 --reporter html-reporter.js
	