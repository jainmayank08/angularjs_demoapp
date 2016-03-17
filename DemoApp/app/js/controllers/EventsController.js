'use strict'

eventsApp.controller('EventsController',
   function EventsController($scope) {
       $scope.event = {
           name: 'AngularJS Bootcamp',
           date: '17/03/2016',
           time: '10:30 am',
           imageUrl:'/app/img/angularjs-logo.png',
           location : 
               {
                   address: 'Accenture India',
                   city: 'Mumbai',
                   province: 'Thane'
               },

           sessions:
               [   
                    {
                        name: "Directive Master Class",
                        creatorName: "Bob Smith",
                        duration: '1hr',
                        level: 'Advance',
                        abstract: "In this session you will learn the ins and outs of directives!!",
                        upVoteCount: 0
                    },
                    {
                        name: "Scopes for fun and profit",
                        creatorName: "John Doe",
                        duration: '30 mins',
                        level: 'Introductory',
                        abstract: 'This session takes a closure looks at scopes',
                        upVoteCount: 0
                    },
                    {
                        name: "Well Behaved Controllers",
                        creatorName: "John Doe",
                        duration: '2 hrs',
                        level: 'Intermediate',
                        abstract: 'Controllers arebegining of every angular js ',
                        upVoteCount: 0
                    }
               ]
       }

       $scope.upVoteSession = function (session) {
           session.upVoteCount++;
       }

       $scope.downVoteSession = function (session) {
           session.upVoteCount--;
       }
   }
)