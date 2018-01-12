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
