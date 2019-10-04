(function () {
    'use strict';

    angular
        .module('Examen')
        .controller('TaskNewDialogController', TaskNewDialogController);

        TaskNewDialogController.$inject = ['$timeout', '$uibModalInstance', 'Task'];

    function TaskNewDialogController($timeout, $uibModalInstance, Task) {
        var vm = this;

        vm.task = null;
        vm.clear = clear;
        vm.save = save;

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function save() {
            vm.isSaving = true;
            Task.save(vm.task).then(onSaveSuccess).catch(onSaveError);
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
