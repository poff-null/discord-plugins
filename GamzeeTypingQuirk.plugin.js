/**
 * @name Gamzee'sTypingQuirk
 * @version 1.2
 * @author poff_null
 * @description Gamzee's typing quirk. Now with STRONG URL Protection. This quirk will not keep track of the caps between each message.
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