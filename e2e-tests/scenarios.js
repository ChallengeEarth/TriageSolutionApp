'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /language-chooser-view when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/language-chooser-view");
  });



  //Todo: write proper test
  describe('language-chooser-view', function() {

    beforeEach(function() {
      browser.get('index.html#/language-chooser-view');
    });

    //browser.pause();
    //
    //it('should load the five defined languages for the user to choose', function() {
    //
    //  var allLanguages = element.all(by.repeater('lang in languages'));
    //  expect(allLanguages.count()).toBe(5)
    //});

    //it('should expect the german language to be available', function() {
    //  expect(element.all(by.css('h3.panel-title')).first().getText()).
    //    toMatch(/Guten Tag/);
    //});

  });
});
