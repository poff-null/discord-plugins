/**
 * @name Gamzee'sTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Gamzee's typing quirk. Now with URL Protection. This quirk will not keep track of the caps between each message.
 * @source https://github.com/poff-null/discord-plugins/blob/main/GamzeeTypingQuirk.plugin.js
 */

module.exports = class GamzeeTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
      {
        name: "Alternating Caps",
        regex: /[\s\S]*/,
        replace: (match) => {
          let upper = true;
          return match
            .split('')
            .map(char => {
              if (/[A-Za-z]/.test(char)) {
                const out = upper ? char.toUpperCase() : char.toLowerCase();
                upper = !upper;
                return out;
              }
              return char;
            })
            .join('');
        }
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
      "GamzeeTypingQuirk",
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
    BdApi.Patcher.unpatchAll("GamzeeTypingQuirk");
  }
};
