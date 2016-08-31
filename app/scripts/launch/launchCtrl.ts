/// <reference path="../launchMod.ts" />
/// <reference path="../../definations/launch.d.ts" />

'use strict';
module launch{
        
        export class launchCtrl{
            
            constructor(public $state:ng.ui.IStateService,
                        public $scope:ILaunchScope){
              
            }
        }
       }