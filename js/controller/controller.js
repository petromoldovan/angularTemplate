var app = angular.module('App', ['pdf'])


//pdf viewer
    .controller('AppCtrl', [
        '$scope',
        'pdfDelegate',
        '$timeout',
        function($scope, pdfDelegate, $timeout) {
            $scope.pdfUrl = 'pdf/sample_pdf.pdf';

            $scope.loadNewFile = function(url) {
                pdfDelegate
                    .$getByHandle('my-pdf-container')
                    .load(url);
            };
        }])


//incrementer old (delete?)
    .value('randomScore', function() {
        return Math.ceil(Math.random() * 10);
    })
    .value('incrementer', function() {
        return (0.1);
    })
    .factory('score', function(randomScore) {
        return  {points: randomScore()};
    })

    .controller('ScoreController', function($scope, score, randomScore, incrementer) {
         $scope.score = score;
            $scope.incrementUp = function() {
            $scope.score.points += incrementer();
        };
        $scope.incrementDown = function() {
            $scope.score.points -= incrementer();
        };
    })




//Dummy Data
    .value('falls', [
        {pos: 21331, text: 'Beschreibung', anz: '01',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21332, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '01',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21333, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '02',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21334, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '01',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21335, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '03',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21336, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '01',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21337, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '04',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 21338, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '01',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."},
        {pos: 2139, text: 'Beschreibung nähere Beschreibung der Position in drei Reihen', anz: '06',ep: 18.19, gp: 9.95,etw:"...",etw2: "..."}
    ])



//Incrementer
    .controller('FallsController', function($scope, falls) {
        $scope.falls = falls;

        $scope.remove = function(fall){
            $scope.falls.splice($scope.falls.indexOf(fall), 1);
        };

        $scope.incrementUpEP = function(fall) {
            $scope.fall.ep += 0.1;
        };
        $scope.incrementDownEP = function(fall) {
            $scope.fall.ep -= 0.1;
        };
        $scope.incrementUpGP = function(fall) {
            $scope.fall.gp += 0.05;
        };
        $scope.incrementDownGP = function(fall) {
            $scope.fall.gp -= 0.05;
        };
    });

//Position changer
    app.controller('PositionController', ['$scope', function($scope){
        $scope.indexToShow = 3;
        $scope.positions = ['01','02','03','04 ','05','06','07','08','09','10'];

        $scope.changeUP = function(){
            $scope.indexToShow = ($scope.indexToShow + 1) % $scope.positions.length;
        };

        $scope.changeDown = function(){
            $scope.indexToShow = ($scope.indexToShow - 1) % $scope.positions.length;
        };
    }])


//AJAX call------------------------------------------------------------------
    .value("url", "/strabag%20v2.1/js/json/info.js");             //<== insert the link to JSON here!!!

    app.controller("GetInfo",function($scope, $http, url){
        $http.get(url)
            .success(function(data, status, headers, config){
                $scope.allData=data;
                console.log($scope.allData);
            })
            .error(function(data, status, headers, config) {
                $scope.notice = status + " " + data.error;
            });

        $scope.remove = function(item){
            $scope.allData.splice($scope.allData.indexOf(item), 1);
        };
    })
//----------------------------------------------------------------------------


//Notes-----------------------------------------------------------------------
    .value('notesExample', [
            {id:1,user:"Max",message:"hey you"},
            {id:2,user:"Neli",message:"we are going to"},
            {id:3,user:"Ferri",message:"let's do it"}
            ])

    .controller('notesBlog', function($scope,notesExample) {
            var counter = 3;
            $scope.notes=notesExample;
            $scope.date = new Date();

            $scope.addNote = function () {
                counter++;

                $scope.notes.push({
                    "id": counter,
                    "user": 'petro',
                    "message":$scope.newNote
                });

                $scope.newNote=""

            }
        });
//----------------------------------------------------------------------------

