sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"employeemanagementfrontend/test/integration/pages/employeeList.gen",
	"employeemanagementfrontend/test/integration/pages/employeeObjectPage.gen",
	"employeemanagementfrontend/test/integration/pages/leave_balanceObjectPage.gen"
], function (JourneyRunner, employeeListGenerated, employeeObjectPageGenerated, leave_balanceObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('employeemanagementfrontend') + '/test/flp.html#app-preview',
        pages: {
			onTheemployeeListGenerated: employeeListGenerated,
			onTheemployeeObjectPageGenerated: employeeObjectPageGenerated,
			onTheleave_balanceObjectPageGenerated: leave_balanceObjectPageGenerated
        },
        async: true
    });

    return runner;
});

