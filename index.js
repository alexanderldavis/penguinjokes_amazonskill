'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Penguin Jokes';

/**
 * Array containing programming jokes.
 */
var JOKES = [
	"What's a penguin's favorite relative? Aunt Arctica!",
	"What do penguins eat for lunch? Ice-burgers!",
	"What do you call a penguin in the desert? Lost!",
	"Where do penguins go swimming? At the South Pool!",
	"How do penguins drink their cola? On the rocks!",
	"What's black and white and goes round and round? A penguin in a revolving door!",
	"Why do two penguins in a nest always agree? Because they don't wanna fall out!",
	"What do penguins like to eat? Burrritos!",
	"Who is a penguin's favorite pop star? Seal!",
	"What kind of fish do Penguins catch at night? Starfish!",
	"Where do penguins keep their money? In a snow bank!",
	"What did one Emperor Penguin say to the other? Nothing, he just gave him the cold shoulder.",
	"What do Penguins sing on a birthday? Freeze a jolly good fellow!",
	"The devout zookeeper lost his favorite Bible while he was mending fences out at the zoo. Three weeks later, a penguin walked up to him carrying the Bible in its beak. The zookeeper couldn't believe his eyes.He took the precious book out of the penguin's beak, raised his eyes heavenward and exclaimed, It's a miracle! Not really, said the penguin. Your name is written inside the cover."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetJoke');
    },
    'GetNewJokeIntent': function () {
        this.emit('GetJoke');
    },
    'GetJoke': function () {
        var jokeIndex = Math.floor(Math.random() * JOKES.length);
        var randomJoke = JOKES[jokeIndex];

        // Create speech output
        var speechOutput = "Here's your joke: " + randomJoke;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomJoke)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a penguin joke, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};