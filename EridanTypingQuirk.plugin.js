/**
 * @name EridanTypingQuirk
 * @version 1.0.1
 * @author poff_null
 * @description Eridan's typing quirk. Now with URL Protection. Works with caps too!
 * @source https://github.com/poff-null/discord-plugins/blob/main/EridanTypingQuirk.plugin.js
 */

module.exports = class EridanTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
      {
        name: "v replacement",
        regex: /[v]/g,
        replace: "vv"
      },
      {
        name: "w replacement",
        regex: /[w]/g,
        replace: "ww"
      },
      {
        name: "V replacement",
        regex: /[V]/g,
        replace: "VV"
      },
      {
        name: "W replacement",
        regex: /[WW]/g,
        replace: "WW"
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
      "EridanTypingQuirk",
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
    BdApi.Patcher.unpatchAll("EridanTypingQuirk");
  }
};
