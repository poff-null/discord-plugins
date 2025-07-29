/**
 * @name Vriska'sTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Vriska's typing quirk. With 8 soundalikes! Now with URL protection.
 * @source https://github.com/poff-null/discord-plugins/blob/main/VriskaTypingQuirk.plugin.js
 */

module.exports = class VriskaTypingQuirk {
  constructor() {
    this.quirkPatterns = [
        // 8 Soundalikes
      {
        name: "b8",
        regex: /(bait)/gi,
        replace: "b8"
      },
      {
        name: "gr8",
        regex: /(great)/gi,
        replace: "gr8"
      },
      {
        name: "l8",
        regex: /(late)/gi,
        replace: "l8"
      },
      {
        name: "w8",
        regex: /(wait)/gi,
        replace: "w8"
      },
      {
        name: "br8k",
        regex: /(break)/gi,
        replace: "br8k"
      },
      {
        name: "st8k",
        regex: /(steak)/gi,
        replace: "st8k"
      },
      {
        name: "repl8ce",
        regex: /(replace)/gi,
        replace: "repl8ce"
      },
      {
        name: "sk8",
        regex: /(skate)/gi,
        replace: "sk8"
      },
      {
        name: "sk8r",
        regex: /(skater)/gi,
        replace: "sk8r"
      },
      {
        name: "g8k",
        regex: /(gatekeep)/gi,
        replace: "g8k"
      },
      {
        name: "g8r",
        regex: /(gator)/gi,
        replace: "g8r"
      },
      {
        name: "priv8",
        regex: /(private)/gi,
        replace: "priv8"
      },
      {
        name: "ultim8",
        regex: /(ultimate)/gi,
        replace: "ultim8"
      },
      {
        name: "prost8",
        regex: /(prostate)/gi,
        replace: "prost8"
      },
      {
        name: "w8r",
        regex: /(waiter)/gi,
        replace: "w8r"
      },
            // Basic B replacement
      {
        name: "B Replacement",
        regex: /[bB]/g,
        replace: "8"
      },
        // Ate, Ait, and Eight replacements
      {
        name: "ate Replacement",
        regex: /(ate)/gi,
        replace: "8"
      },
      {
        name: "ait Replacement",
        regex: /(ait)/gi,
        replace: "8"
      },
      {
        name: "eight Replacement",
        regex: /(eight)/gi,
        replace: "8"
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
      "VriskaTypingQuirk",
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
    BdApi.Patcher.unpatchAll("VriskaTypingQuirk");
  }
};
