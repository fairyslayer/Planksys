/**
 * Created by LiAnG on 10/7/2016.
 */
var config = require('./config');
var mongoose = require("mongoose");

var connect = function(){
    var options = {
        server: {
            socketOptions:{
                keepAlive : 1
            }
        }
    };
    mongoose.connect(config.db,options);
};
connect();