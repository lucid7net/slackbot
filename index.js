/**
 * Your slackbot token is available as the global variable:

process.env.SLACKBOT_TOKEN

 * When deployed to now.sh, the URL of your application is available as the
 * global variable:

process.env.NOW_URL

 * The URL is useful for advanced use cases such as setting up an Outgoing
 * webhook:
 * https://github.com/howdyai/botkit/blob/master/readme-slack.md#outgoing-webhooks-and-slash-commands
 *
 */
var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
})
bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears(['hello'], ['mention'], function(whichBot, message) {
  whichBot.reply(message, 'Oh Hai! Did you say soomething?' + Date());
});

controller.hears(['hey'], ['mention'], function(whichBot, message) {
  whichBot.reply(message, 'Hey yourself, do you want to use Nicknames?' + Date());
});



/*controller.hears(['name'], ['mention'], function(whichBot, message) {
  whichBot.reply(message, "Hi, what's your name?");
});*/

