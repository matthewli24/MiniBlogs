const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
};

exports.blogCreated = functions.firestore
  .document('blogs/{blogID}')
  .onCreate(doc => {
    // console.log(doc.data());
    const blog = doc.data();
    const notification = {
      content: "Added A New Blog",
      user: blog.author,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});

exports.userJoined = functions.auth.user()
  .onCreate(user => {
    return admin.firestore().collection('users')
      .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
          content: "Joined The Cool Club",
          user: newUser.username,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
      })
});

