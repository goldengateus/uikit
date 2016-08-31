/// <reference path="../../definations/angular.d.ts" />
/// <reference path="../../definations/angular-ui-router.d.ts" />
var uikit;
(function (uikit) {
    'use strict';
    var config = (function () {
        function config($stateProvider, $urlRouterProvider) {
            $stateProvider.state('launch', { url: '/launch',
                name: 'launch',
                templateUrl: '/templates/launch/launch.html',
                controller: 'launchCtrl'
            });
            $urlRouterProvider.otherwise('/launch');
        }
        return config;
    }());
    uikit.config = config;
})(uikit || (uikit = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvYXBwL2FwcE1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEO0FBQ3ZELGlFQUFpRTtBQUdqRSxJQUFPLEtBQUssQ0FnQko7QUFoQlIsV0FBTyxLQUFLLEVBQUEsQ0FBQztJQUNWLFlBQVksQ0FBQztJQUNSO1FBQ0ksZ0JBQVksY0FBbUMsRUFDbEMsa0JBQTJDO1lBQ3BELGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM5QixFQUFFLEdBQUcsRUFBQyxTQUFTO2dCQUNkLElBQUksRUFBQyxRQUFRO2dCQUNiLFdBQVcsRUFBQywrQkFBK0I7Z0JBQzNDLFVBQVUsRUFBRSxZQUFZO2FBQ3hCLENBQUMsQ0FBQTtZQUVMLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0wsYUFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksWUFBTSxTQVlsQixDQUFBO0FBRUYsQ0FBQyxFQWhCRCxLQUFLLEtBQUwsS0FBSyxRQWdCSiIsImZpbGUiOiJzY3JpcHRzL2FwcC9hcHBNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL2RlZmluYXRpb25zL2FuZ3VsYXIuZC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vZGVmaW5hdGlvbnMvYW5ndWxhci11aS1yb3V0ZXIuZC50c1wiIC8+XG5cblxubW9kdWxlIHVpa2l0e1xuICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICBleHBvcnQgY2xhc3MgY29uZmlne1xuICAgICAgICAgICAgY29uc3RydWN0b3IoJHN0YXRlUHJvdmlkZXI6bmcudWkuSVN0YXRlUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyOm5nLnVpLklVcmxSb3V0ZXJQcm92aWRlcil7XG4gICAgICAgICAgICAgICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2xhdW5jaCcsIFxuICAgICAgICAgICAgICAgeyB1cmw6Jy9sYXVuY2gnLCBcbiAgICAgICAgICAgICAgICBuYW1lOidsYXVuY2gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOicvdGVtcGxhdGVzL2xhdW5jaC9sYXVuY2guaHRtbCcsIFxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdsYXVuY2hDdHJsJ1xuICAgICAgICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvbGF1bmNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
