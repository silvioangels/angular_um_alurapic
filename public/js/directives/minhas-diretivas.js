angular.module('minhasDiretivas',[])
.directive('meuPainel',function(){
  //directive definition object
  var ddo = {};
  //A -> Atributo
  //E -> Elemento
  ddo.restrict = "AE";

  ddo.scope = {
    titulo: '@'
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/meu-painel.html';
  /*
  ddo.template =
    '<div class="panel panel-default">'
    + '   <div class="panel-heading">'
    + '     <h3 class="panel-title text-center">{{titulo}}</h3>'
    + '   </div>'
    + '   <div class="panel-body" ng-transclude>'
    + '   </div>'
    + '</div>';*/

  return ddo;
})
.directive('minhaFoto',function(){
  //directive definition object
  var ddo = {};
  //A -> Atributo
  //E -> Elemento
  ddo.restrict = "AE";

  ddo.scope = {
    titulo: '@',
    url: '@'
  };

  ddo.transclude = true;

  ddo.templateUrl = 'js/directives/minha-foto.html';

  return ddo;
})
.directive('meuBotaoPerigo',function(){
  //directive definition object
  var ddo = {};
  //A -> Atributo
  //E -> Elemento
  ddo.restrict = "E";

  //@ -> Valor que passar dentro do texto
  //& -> Executa a expressao
  ddo.scope = {
    nome: '@',
    acao: '&'
  };

  ddo.transclude = true;

  ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';

  return ddo;
})
.directive('meuFocus', function(){
    var ddo = {};

    ddo.restrict = "A";

    //= -> qualquer alteracao que tiver, os 2 lados vao ficar sabendo
    ddo.scope = {
      focado: '='
    };

    ddo.link = function(scope, element){
        scope.$watch('focado', function(){
            if(scope.focado){
              element[0].focus();
              scope.focado = false;
            }
        });
    }

    return ddo;
})
;
