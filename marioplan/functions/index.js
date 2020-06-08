const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello, ninjas!");
});

const createNotification = async (notification) => {
  const doc = await admin
    .firestore()
    .collection("notifications")
    .add(notification);
  console.log("Notification added.", doc);
};

exports.projectCreated = functions.firestore
  .document("projects/{projectID}")
  .onCreate((doc) => {
    const project = doc.data();
    const notification = {
      content: "Added a new project",
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.firestore
  .document("users/{userID}")
  .onCreate((snap, context) => {
    const user = snap.data();
    const displayName = `${user.firstName} ${user.lastName}`;

    const notification = {
      content: "Joined the party",
      user: displayName,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });
