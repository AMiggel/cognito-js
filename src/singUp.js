
var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

var poolData = {
        UserPoolId : 'us-east-2_lSJDJsAdz',
        ClientId : '4m2o077tluja59k0k365i3vnat'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];


    var dataEmail = {
        Name : 'email',
        Value : 'amarin@unac.edu.co'
    };

    //console.log(dataEmail)

    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : '+15555555555',
    };

    var alias = {
        Name :'nickname',
        Value: 'Antonio'

    }

    //console.log(dataPhoneNumber)


    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
    var attributeAlias = new AmazonCognitoIdentity.CognitoUserAttribute(alias);

    attributeList.push(attributeEmail);
    attributeList.push(attributeAlias);
    attributeList.push(attributePhoneNumber);


    function registrar (){

        userPool.signUp('Antonio','12345678', attributeList, null, function(err, result){

        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        cognitoUser = result.user;
        alert('Registro exitoso! Su nombre de usuario es' + cognitoUser.getUsername());
        document.getElementById("boton").innerHTML = "Ir a AWS";
        document.getElementById("datos").innerHTML= attributeList;
       

       });
    }


// Funciones adicionales**********************************************
 
var userData = {
        Username : 'Antonio',
        Pool : userPool
};

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);



function autenticar(){
    cognitoUser.confirmRegistration('356851', true, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        document.getElementById("autenticado").innerHTML="usuario autenticado correctamente"
        console.log('call result: ' + result);
    });
}

function eliminar(){
    cognitoUser.deleteUser(function(err, result) {
        if (err) {
            alert(err);
            return;
        }
        console.log('call result: ' + result);
    });

}

        




     

   
    