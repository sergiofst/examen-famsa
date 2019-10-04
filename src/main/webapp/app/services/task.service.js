(function () {
    'use strict';

    angular
        .module('Examen')
        .factory('Task', Task);

    Task.$inject = ['$http'];

    function Task($http) {
        var service = {
            findAll: findAll,
            findById: findById,
            save: saveTask,
            update: updateTask,
            delete: deleteTask
        };

        return service;

        function findAll() {
           return $http.get('api/tasks');
        }

        function findById(id) {
            return $http.get('api/tasks/' + id);
        }

        function saveTask(task) {
            return $http.post('api/tasks', task);
        }

        function updateTask(task, id) {
            return $http.put('api/tasks/' + id, task);
        }

        function deleteTask(id) {
            return $http.delete('api/tasks/' + id);
        }
    }
})();