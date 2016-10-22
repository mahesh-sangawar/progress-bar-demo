'use strict';

describe('my app', function () {


	it('should automatically redirect to /progressbar when location hash/fragment is empty', function () {
		browser.get('index.html');
		expect(browser.getLocationAbsUrl()).toMatch("/progressbar");
	});

	describe('progressbar', function () {

		beforeEach(function () {
			browser.get('index.html#/progressbar');
		});


		it('should render progressbar when user navigates to /progressbar', function () {
			expect(element.all(by.css('[ng-view] progress-bar')).first().getText()).
			toMatch(/partial for view 1/);
		});

	});

});