/// <reference path="../../definations/angular.d.ts" />
/// <reference path="../../definations/angular-ui-router.d.ts" />


module uikit{
   'use strict';
        export class config{
            constructor($stateProvider:ng.ui.IStateProvider,
                         $urlRouterProvider:ng.ui.IUrlRouterProvider){
                $stateProvider.state('launch', 
               { url:'/launch', 
                name:'launch',
                templateUrl:'/templates/launch/launch.html', 
                controller: 'launchCtrl'
               })
        
            $urlRouterProvider.otherwise('/launch');
            }
        }
        
       }