<<<<<<< HEAD

var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
var AWSCognito = AmazonCognitoIdentity.AWSCognito;

=======
>>>>>>> parent of 9f223ee... agrgando funciones
var poolData = {
        UserPoolId : 'us-east-2_lSJDJsAdz',
        ClientId : '4m2o077tluja59k0k365i3vnat'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var attributeList = [];


    var dataEmail = {
        Name : 'email',
        Value : ''
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


    function registro (){
        userPool.signUp('q','123456789', attributeList, null, function(err, result){
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        cognitoUser = result.user;
        alert('Registro exitoso! Su nombre de usuario es' + cognitoUser.getUsername());
        document.getElementById("boton").innerHTML = "Ir a AWS";
       });
    }
<<<<<<< HEAD


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




function singIn (){
    var authenticationData = {
        Username : 'Antonio',
        Password : '12345678',
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
    var userData = {
        Username : 'Antonio',
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            /*Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
            console.log('idToken + ' + result.idToken.jwtToken);
        },

        onFailure: function(err) {
            alert(err);
        },

    });
}


        
=======
    
>>>>>>> parent of 9f223ee... agrgando funciones




     

   
    