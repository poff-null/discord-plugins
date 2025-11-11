/**
 * @name Equius'sTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Equius's typing quirk. Now with URL Protection.
 * @source https://github.com/poff-null/discord-plugins/blob/main/EquiusTypingQuirk.plugin.js
 */

module.exports = class EquiusTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
      {
        name: "loo",
        regex: /(loo)/gi,
        replace: "100"
      },
      {
        name: "ool",
        regex: /(ool)/gi,
        replace: "001"
      },
      {
        name: "nay",
        regex: /(nay)/gi,
        replace: "neigh"
      },
      {
        name: "strong",
        regex: /(strong)/gi,
        replace: "STRONG"
      },
      {
        name: "strength",
        regex: /(strength)/gi,
        replace: "STRONGNESS"
      },
      {
        name: "strongnesscaps",
        regex: /(strongness)/gi,
        replace: "STRONGNESS"
      },
      {
        name: "cross",
        regex: /(cross)/gi,
        replace: "%"
      },
      {
        name: "E Replacement",
        regex: /[xX]/g,
        replace: "%"
      },
      {
        name: "Prefix",
        regex: /^/,
        replace: "D --> "
      }
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
      "EquiusTypingQuirk",
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
    BdApi.Patcher.unpatchAll("EquiusTypingQuirk");
  }
};
