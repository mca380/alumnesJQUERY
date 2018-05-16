function validarDni(inputDni){ //Aquesta funció comprova que el DNI sigui vàlid.
   
    var lletres = 'TRWAGMYFPDXBNJZSQVHLCKET';
 
    var dniPatro = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;

    var str = inputDni.toString().toUpperCase();

    
    if (!dniPatro.test(str)) return false;

    var dni = str
    var lletra = str.substr(-1);
    var posicioLletres = parseInt(dni.substr(0, 8)) % 23;


    if (lletres.charAt(posicioLletres) === lletra) return true;

    return false;
}

var app = angular.module("alumnes", []);
app.controller("AlumneController", 
function ($scope) {
    $scope.alumnes = [];
    $scope.Insertar=function(){
        if (validarDni($scope.nouAlumne.dni)){
            //Funció per a insertar les dades la taula. 
            $scope.alumnes.push({
                dni: $scope.nouAlumne.dni,
                nom: $scope.nouAlumne.nom, 
                llinatges: $scope.nouAlumne.llinatges,  
                mail: $scope.nouAlumne.mail, 
                nota: $scope.nouAlumne.nota
            });
            
            $scope.nouAlumne = null;
            
        }else{
            //DNI incorrecte
            alert("El DNI no és correcte! Revisa'l.");
          
            
        }
        
        //Funció per eliminar una fila a la taula. 
        $scope.borrar = function(i){
            $scope.alumnes.splice(i, 1);
        }
    }
    
    
});

$(function(nota) {
    $('#table td:last-child:contains(1)').closest('tr').css('background-color', 'red');
    $('#table td:last-child:contains(2)').closest('tr').css('background-color', 'blue');
    $('#table td:last-child:contains(3)').closest('tr').css('background-color', 'green');
    // Así sucesivamente hasta llegar al 10
  });