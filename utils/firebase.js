// Admin SDK
const admin = require('firebase-admin');
const firebaseConfig = require('./firebaseConnection');
const fb = admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
})

module.exports = fb;