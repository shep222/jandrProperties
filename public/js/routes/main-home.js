(function() {
    'use strict'

    angular.module('app').component('landingPage', {
        controller: function(dataService, $interval) {
            const vm = this

            // vm.$onInit = function() {
            //     dataService.ready.then(function(){
            //         vm.myLocations = dataService.listOfLocation()
            //     })
            // }
        },
        template: `
        <main class = "landing-page-main">
            <div class="heading-wrapper landing-page-heading-wrapper">
                <h1>J and R Properties</h1>
            </div>

            <div class = "tagline-wrapper">
                <div></div>
            </div>
            <div class = "location-list-wrapper">
                <div ng-repeat="location in $ctrl.myLocations track by location.location" class="location-button">
                    <button class = "location-button-text-wrapper" ui-sref="environment({location:location.location})">
                        <div>HERE</div>
                    </div>
                </button>
            </div>
            </div>
        </main>

      `
    })

}());
