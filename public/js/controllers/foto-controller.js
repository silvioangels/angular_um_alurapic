angular.module('alurapic').controller('FotoController',function($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';
    //$scope.exibe = true;

    $scope.submeter = function () {
          if($scope.formulario.$valid){
            $http.post('V1/fotos', $scope.foto)
            .success(function(){
              $scope.foto = {};
              $scope.mensagem = 'Foto incluida com Sucesso';
            })
            .error(function(erro){
              console.log(erro);
              $scope.mensagem = 'Não foi possivel incluir a foto';
            });
          }
    };

});
