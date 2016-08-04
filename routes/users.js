var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');

    var Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: 'xL8S30cO1jBgd3CgoxRs7VsWW',
        consumer_secret: '5WDqhc6FVbYUIyQO7jWfGA6WsGuhS4VXHzztEMNUYCsJJ7RhAb',
        access_token_key: '760947836246716416-pOAdZc9ql84L7WjpBpxsaFmwMqsJrQd',
        access_token_secret: 'MGoR3vw7x5pMF6PmV8396sMybo7qFSyrZenK9SVuyKGZd'
    });

    var params = {screen_name: 'sulaimanmalik14'};
    var tweetArray = [];
    client.get('statuses/home_timeline', {}, function (error, tweets, response) {
        console.log(error)
        if (!error) {
            console.log(tweets);
            for (var i = 0; i < 10; i++) {
                var tweetsObj = {};
                tweetsObj['tweet'] = tweets[i].text;
                tweetArray.push(tweetsObj);
            }
            res.status(200).send(tweetArray);
        }
    });
});

module.exports = router;
