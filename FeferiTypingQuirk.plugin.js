/**
 * @name FeferiTypingQuirk
 * @version 1.0.1
 * @author poff_null
 * @description Feferi' typing quirk. Now with URL Protection. 
 * @source https://github.com/poff-null/discord-plugins/blob/main/EridanTypingQuirk.plugin.js
 */

module.exports = class FeferiTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
{
  name: "H replacement",
  regex: /H/g,
  replace: ")("
},
{
  name: "capital E sequences",
  // match one or more capital E's in a row
  regex: /E+/g,
  replace: (match) => {
    if (match.length === 1) return "-E"; // single E
    return "-".repeat(match.length - 1) + "E"; // e.g. EEEEEE -> -----E
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
      "FeferiTypingQuirk",
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
    BdApi.Patcher.unpatchAll("FeferiTypingQuirk");
  }
};
