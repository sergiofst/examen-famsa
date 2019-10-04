(function() {
    'use strict';

    angular
        .module('Examen')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('tasks', {
            parent: 'app',
            url: '/tasks',
            views: {
                'content@': {
                    templateUrl: 'app/tasks/tasks.html',
                    controller: 'TasksController',
                    controllerAs: 'vm'
                }
            }
        })
        .state('tasks.new', {
            parent: 'tasks',
            url: '/new',
            onEnter: ['$state', '$uibModal', function($state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/tasks/task-new-dialog.html',
                    controller: 'TaskNewDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                }).result.then(function() {
                    $state.go('tasks', null, { reload: 'tasks' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('tasks.edit', {
            parent: 'tasks',
            url: '/edit/{taskId}',
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/tasks/task-edit-dialog.html',
                    controller: 'TaskEditDialogController',
                    controllerAs: 'vm',
                    backdrop: 'static',
                    size: 'lg',
                    resolve: {
                        entity: ['Task', function(Task) {
                            return Task.findById($stateParams.taskId);
                        }]
                    }
                }).result.then(function() {
                    $state.go('tasks', null, { reload: 'tasks' });
                }, function() {
                    $state.go('^');
                });
            }]
        })
        .state('tasks.delete', {
            parent: 'tasks',
            url: '/{taskId}/delete',
            onEnter: ['$stateParams', '$state', '$uibModal', function($stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: 'app/tasks/task-delete-dialog.html',
                    controller: 'TaskDeleteDialogController',
                    controllerAs: 'vm',
                    size: 'md',
                    resolve: {
                        entity: ['Task', function(Task) {
                            return Task.findById($stateParams.taskId);
                        }]
                    }
                }).result.then(function() {
                    $state.go('tasks', null, { reload: 'tasks' });
                }, function() {
                    $state.go('^');
                });
            }]
        });
    }
})();
