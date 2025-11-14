/**
 * @name EridanTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Eridan's typing quirk. Now with STRONG URL Protection. Works with caps too!
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