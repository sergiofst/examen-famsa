(function () {
    'use strict';

    angular
        .module('Examen')
        .controller('TaskEditDialogController', TaskEditDialogController);

    TaskEditDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Task'];

    function TaskEditDialogController($timeout, $scope, $stateParams, $uibModalInstance, entity, Task) {
        var vm = this;

        vm.task = entity.data;
        vm.clear = clear;
        vm.save = save;

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;
            Task.update(vm.task, vm.task.id).then(onSaveSuccess).catch(onSaveError);
        }

        function onSaveSuccess(result) {
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError() {
            vm.isSaving = false;
        }

    }
})();
