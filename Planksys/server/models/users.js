/**
 * Created by LiAnG on 10/7/2016.
 */

exports.userlist = function(userid, callback) {
    db.once('open', function() {
        var userSchema = new mongoose.Schema({
            UserId: Number,
            FirstName: String,
            LastName: String,
            DOB: String,
            Comments: [{ body: String, date: Date }]
        });
        var User = db.model('User', userSchema);
        User.find({
            'UserId': userid
        }, function(err, users) {
            if (err) {
                onErr(err, callback);
            } else {
                mongoose.connection.close();
                console.log(users);
                callback("", users);
            }
        }); // end Team.find
    }); // end db.once open
};

var onErr = function(err, callback) {
    mongoose.connection.close();
    callback(err);
};