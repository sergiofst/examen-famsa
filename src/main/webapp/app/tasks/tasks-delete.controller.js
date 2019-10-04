(function () {
    'use strict';

    angular
        .module('Examen')
        .controller('TaskDeleteDialogController', TaskDeleteDialogController);

    TaskDeleteDialogController.$inject = ['$uibModalInstance', 'entity', 'Task'];

    function TaskDeleteDialogController($uibModalInstance, entity, Task) {
        var vm = this;

        vm.task = entity.data;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear() {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete(id) {
            Task.delete(id).then(function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
