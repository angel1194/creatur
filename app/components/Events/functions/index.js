const moment = require('moment');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addMessage = functions.https.onRequest((req, res) => {
  var endTime= moment().format()
  var starTime = moment().subtract(10,'m').format()

  admin.database().ref('/temporal').once('value').then((snap) => {
    var temp = snap.val()
    Object.keys(temp).map((item, i)=>{
      if (item != 'description') {
        let comparation = moment(temp[item].time).isBetween(starTime, endTime, null, '[]');
        console.log(comparation);
        if (comparation === false) {
          admin.database().ref().child('tickets').child(item).set(temp[item])
          admin.database().ref().child('temporal').child(item).remove()
        }
      }else {
        console.log('description');
      }
    })
    // res.redirect(303, admin.database().ref('/temporal'));
  })
});
