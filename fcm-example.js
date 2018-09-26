var FCM = require('fcm-push');

var serverKey = '{your-server-key}';
var fcm = new FCM(serverKey);

var message = {
    to: '{your-device-registration-token}',
    notification: {
        title: '{Your push title}',
        body: '{Your push body}'
    }
};

//promise style
fcm.send(message)
    .then(function(response){
        console.log("Successfully sent with response: ", response);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    })
