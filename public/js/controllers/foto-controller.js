angular.module('alurapic').controller('FotoController',function($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';
    //$scope.exibe = true;

    if($routeParams.fotoId){
      $http.get('V1/fotos/'+$routeParams.fotoId)
      .success(function(foto){
        $scope.foto = foto;
      })
      .error(function(erro){
        console.log(erro);
        $scope.mensagem = "Não foi possível obter a foto";
      })
      ;
    }

    $scope.submeter = function () {
          if($scope.foto._id){
            $http.put('V1/fotos/'+$scope.foto._id, $scope.foto)
            .success(function(){
              $scope.mensagem = "A foto "+$scope.foto.titulo + ' foi alterada com sucesso.';
            })
            .error(function(erro){
              console.log(erro);
              $scope.mensagem = "Não foi possível alterar a foto "+$scope.foto.titulo;
            })
            ;
          }else{

            if($scope.formulario.$valid){
              $http.post('V1/fotos', $scope.foto)
              .success(function(){
                $scope.foto = {};
                $scope.mensagem = 'Foto incluida com Sucesso';
                $scope.formulario.$setPristine();
              })
              .error(function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possivel incluir a foto';
              });

            }

          }
    };

});
