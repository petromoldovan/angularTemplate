

angular.module('appFilt', [])

//Old dummy data
    .value('items', [
        {priority: 1, ordering1: '1195', ordering2: 'KVA',ordering3: 'DAT', adresse: "Max Mustermann, Musterstasse 42, 0, Unbekannt",sn:"16.815.680.0.00.00",kz: "TE-ST3",price:"123,94",status:"Expertenprüfung",status2:"automatisiert",status3:"01 Sptember 2015 14:48",eingang:"01 September 2015"},
        {priority: 1, ordering1: '1196', ordering2: 'KVA',ordering3: 'DAT', adresse: "Max Mustermann, Musterstasse 42, 0, Unbekannt",sn:"16.815.680.0.00.00",kz: "TE-ST3",price:"3.438,77",status:"Expertenprüfung",status2:"automatisiert",status3:"01 Sptember 2015 14:48",eingang:"01 September 2015"},
        {priority: 3, ordering1: '1197', ordering2: 'KVA',ordering3: 'DAT', adresse: "Max Mustermann, Musterstasse 42, 0, Unbekannt",sn:"16.815.680.0.00.00",kz: "TE-ST3",price:"5.438",status:"Expertenprüfung",status2:"automatisiert",status3:"01 Sptember 2015 14:48",eingang:"01 September 2015"},
        {priority: 4, ordering1: '1198', ordering2: 'KVA',ordering3: 'DAT', adresse: "Max Mustermann, Musterstasse 42, 0, Unbekannt",sn:"16.815.680.0.00.00",kz: "TE-ST3",price:"2.438",status:"Expertenvorbereitung",status2:"automatisiert",status3:"01 Sptember 2015 14:48",eingang:"01 September 2015"},
        {priority: 3, ordering1: '1199', ordering2: 'KVA',ordering3: 'DAT', adresse: "Max Mustermann, Musterstasse 42, 0, Unbekannt",sn:"16.815.680.0.00.00",kz: "TE-ST3",price:"2.438 ",status:"Expertenvorbereitung",status2:"automatisiert",status3:"01 Sptember 2015 14:48",eingang:"01 September 2015"},
        {priority: 3, ordering1: '119991', ordering2: 'KVA',ordering3: 'DAT', adresse: "Max Mustermann, Musterstasse 42, 0, Unbekannt",sn:"16.815.680.0.00.00",kz: "TE-ST3",price:"2.438",status:"Expertenvorbereitung",status2:"automatisiert",status3:"01 Sptember 2015 14:48",eingang:"01 September 2015"}
    ])

    .controller('ItemsController', function($scope, items) {
        $scope.items = items;

        $scope.remove = function(item){
            $scope.items.splice($scope.items.indexOf(item), 1);
        };
    })

//-----------------------------------------------------------------------

//AJAX call--------------------------------------------------------------

.value("url", "/strabag%20v2.1/js/json/info.js")             //<== insert the link to JSON here!!!

//GET
.controller("GetInfo",function($scope, $http, url){
    $http.get(url)
        .success(function(data, status, headers, config){
            $scope.allData=data;
        console.log($scope.allData)
    })
    .error(function(data, status, headers, config) {
        $scope.notice = status + " " + data.error;
    });

    $scope.remove = function(item){
        $scope.allData.splice($scope.allData.indexOf(item), 1);
    };
//-----------------------------------------------------------------------





//POST------------------------------------------------------------------
        $scope.addRowAsyncAsJSON = function(){

            $scope.allData.push({ 'priority':$scope.priority2, 'startedAt': $scope.startedAt2});

            // Writing it to the server
            var dataObj = {
                priority : $scope.priority2,
                startedAt : $scope.startedAt2
            };

            $http.post(url, dataObj)
                .success(function(data, status, headers, config) {
                    $scope.allData = data;
                    console.log($scope.allData)
                })

          // Making the fields empty
          $scope.priority2='';
          $scope.startedAt2='';

        };


    })
//------------------------------------------------------------------------

