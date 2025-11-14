/**
 * @name TereziTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Terezi's typing quirk. Now with STRONG URL Protection.
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