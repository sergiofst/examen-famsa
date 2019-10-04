(function() {
    'use strict';

    angular
        .module('Examen')
        .controller('TasksController', TasksController);

        TasksController.$inject = ['$scope','$state', 'Task'];

    function TasksController ($scope, $state, Task) {
        var vm = this;

        vm.tasks = null;

        loadTasks();

        function loadTasks() {
            Task.findAll().then(function (response) {
                vm.tasks = response.data;
            })
        }

    }
})();
