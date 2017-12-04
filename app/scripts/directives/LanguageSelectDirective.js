angular.module('translateApp')
  .directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''+
        '<div class="language-select" ng-if="visible">'+
          '<label style="color: floralwhite; margin-top: 10%;">'+
            '{{"directives.language-select.Language" | translate}}:'+
            '<select ng-model="currentLocaleDisplayName"'+
              'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
              'ng-change="changeLanguage(currentLocaleDisplayName)" style="color: black;">'+
            '</select>'+
          '</label>'+
        '</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 0;

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };
      }
    };
  });
