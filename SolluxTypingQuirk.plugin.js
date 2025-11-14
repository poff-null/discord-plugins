/**
 * @name SolluxTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Sollux's typing quirk. With ii and two! Now with STRONG URL protection. Works with caps.
 * @source https://github.com/poff-null/discord-plugins/blob/main/SolluxTypingQuirk.plugin.js
 */

module.exports = class SolluxTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
      {
        name: "i replacement",
        regex: /[i]/g,
        replace: "ii"
      },
      {
        name: "I replacement",
        regex: /[I]/g,
        replace: "II"
      },
      {
        name: "s replacement",
        regex: /[sS]/gi,
        replace: "2"
      },
      {
        name: "to",
        regex: /(to)/gi,
        replace: "two"
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