var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: false,
    reportsDirectory: __dirname + '/reports'
    uniqueFilename: true,
    reportFilename: "generatedTestResults.html",
    themeName: "default"
});


module.exports = {
    reporter: reporter.fn
};