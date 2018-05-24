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
    




     

   
    