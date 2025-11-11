/**
 * @name TereziTypingQuirk
 * @version 1.0.0
 * @author poff_null
 * @description Terezi's typing quirk. Now with URL Protection.
 * @source https://github.com/poff-null/discord-plugins/blob/main/TereziTypingQuirk.plugin.js
 */

module.exports = class TereziTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
      {
        name: "a",
        regex: /[A]/gi,
        replace: "4"
      },
      {
        name: "i",
        regex: /[I]/gi,
        replace: "1"
      },
      {
        name: "e",
        regex: /[E]/gi,
        replace: "3"
      },
    ];
  }

  // Function to process text while protecting URLs
  processText(content) {
    // First, extract and store all URLs
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    const urls = [];
    let urlMatch;
    // Store all URLs and replace them with placeholders
    let protectedText = content.replace(urlRegex, (match) => {
      urls.push(match);
      return `__URL_PLACEHOLDER_${urls.length - 1}__`;
    });
    this.quirkPatterns.forEach(pattern => {
      protectedText = protectedText.replace(pattern.regex, pattern.replace);
    });
    protectedText = protectedText.replace(/__URL_PLACEHOLDER_(\d+)__/g, (_, index) => {
      return urls[parseInt(index)];
    });

    return protectedText;
  }

  start() {
    BdApi.Patcher.before(
      "TereziTypingQuirk",
      BdApi.Webpack.getModule(m => m?.sendMessage),
      "sendMessage",
      (_, args) => {
        const message = args[1];
        if (!message.content) return;
        message.content = this.processText(message.content);

        if (message.content.trim() === "") {
          message.content = "‎";
        }
      }
    );
  }

  stop() {
    BdApi.Patcher.unpatchAll("TereziTypingQuirk");
  }
};
