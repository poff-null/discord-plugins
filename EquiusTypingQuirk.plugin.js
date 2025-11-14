/**
 * @name Equius'sTypingQuirk
 * @version 1.2
 * @author poff_null
 * @description Equius's typing quirk. Now with STRONG URL Protection.
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
      },
    ];
  }

  processText(content) {
    // Use symbol-based placeholders that won't match any word patterns
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    const urlPlaceholders = [];
    let placeholderId = 0;
    let protectedText = content.replace(urlRegex, (match) => {
      const placeholder = `§${placeholderId}¶${Date.now()}¤`;
      urlPlaceholders.push({ placeholder, url: match });
      placeholderId++;
      return placeholder;
    });
    this.quirkPatterns.forEach(pattern => {
      protectedText = protectedText.replace(pattern.regex, pattern.replace);
    });
    urlPlaceholders.forEach(({ placeholder, url }) => {
      protectedText = protectedText.replace(new RegExp(this.escapeRegExp(placeholder), 'g'), url);
    });

    return protectedText;
  }
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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