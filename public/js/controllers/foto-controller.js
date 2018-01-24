angular.module('alurapic').controller('FotoController',function($scope, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){

      recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
        $scope.foto = foto;
      }, function(){
        console.log(erro);
        $scope.mensagem = "Não foi possível obter a foto";
      });

    }

    $scope.submeter = function () {

          if($scope.foto._id){

            recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
              $scope.mensagem = "A foto "+$scope.foto.titulo + ' foi alterada com sucesso.';
            }, function(erro){
              console.log(erro);
              $scope.mensagem = "Não foi possível alterar a foto "+$scope.foto.titulo;
            });

          }else{

            if($scope.formulario.$valid){

              recursoFoto.save($scope.foto, function(){
                $scope.foto = {};
                $scope.mensagem = 'Foto incluida com Sucesso';
                $scope.formulario.$setPristine();
              }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possivel incluir a foto';
              });

            }

          }
    };

});
