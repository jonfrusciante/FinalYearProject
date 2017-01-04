var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var findAccount = function(db, username, password) {
    //Get the accounts collection
    var collection = db.collection('accounts');
    //Find the account
    return collection.find( {username: username, password: password}).count();
}

var checkAccount = function(req, res) {
    // Connection URL
    var url = 'mongodb://localhost:27017/myproject';

    //console.log(req.body);

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected successfully to MongoDB server");

        var accountsNo = findAccount(db, req.body.username, req.body.password);
        db.close();

        if(accountsNo == 1) {
            console.log('valid account');
            res.send(true);
        } else {
            console.log('invalid account');
            res.send(false);
        }
    })
}

module.exports = checkAccount;