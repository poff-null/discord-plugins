/**
 * @name SolluxTypingQuirk
 * @version 1.0.0
 * @author poff_null
 * @description Sollux's typing quirk. With ii and two! Now with URL protection.
 * @source https://github.com/poff-null/discord-plugins/blob/main/SolluxTypingQuirk.plugin.js
 */

module.exports = class SolluxTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      {
        name: "i replacement",
        regex: /[iI]/gi,
        replace: "ii"
      },
      {
        name: "s replacement",
        regex: /[sS]/gi,
        replace: "2"
      },
      {
        name: "to",
        regex: /\s(to)\s/gi,
        replace: "two "
      },
      {
        name: "too",
        regex: /\s(too)\s/gi,
        replace: "two "
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
      "SolluxTypingQuirk",
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
    BdApi.Patcher.unpatchAll("SolluxTypingQuirk");
  }
};