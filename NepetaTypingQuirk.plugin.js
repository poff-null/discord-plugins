/**
 * @name Nepeta'sTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Nepeta's typing quirk. With cat puns! Now with URL Protection.
 * @source https://github.com/poff-null/discord-plugins/blob/main/NepetaTypingQuirk.plugin.js
 */

module.exports = class NepetaTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      {
        name: "purrfect",
        regex: /(perfect)/gi,
        replace: "purrfect"
      },
      {
        name: "pawsome",
        regex: /(awesome)/gi,
        replace: "pawsome"
      },
      {
        name: "meowscles",
        regex: /(muscles)/gi,
        replace: "meowscles"
      },
      {
        name: "meowntain",
        regex: /(mountain)/gi,
        replace: "meowntain"
      },
      {
        name: "purrsonal",
        regex: /(personal)/gi,
        replace: "purrsonal"
      },
      {
        name: "fur-tunate",
        regex: /(fortunate)/gi,
        replace: "fur-tunate"
      },
      {
        name: "clawsome",
        regex: /(awesome)/gi,
        replace: "clawsome"
      },
      {
        name: "meowsterious",
        regex: /(mysterious)/gi,
        replace: "meowsterious"
      },
      {
        name: "paw-rty",
        regex: /(party)/gi,
        replace: "paw-rty"
      },
      {
        name: "hisstory",
        regex: /(history)/gi,
        replace: "hisstory"
      },
      {
        name: "purrchase",
        regex: /(purchase)/gi,
        replace: "purrchase"
      },
      {
        name: "meowtivation",
        regex: /(motivation)/gi,
        replace: "meowtivation"
      },
      {
        name: "furreal",
        regex: /(for real|fr)/gi,
        replace: "furreal"
      },
      {
        name: "cattitude",
        regex: /(attitude)/gi,
        replace: "cattitude"
      },
      {
        name: "purrsuade",
        regex: /(persuade)/gi,
        replace: "purrsuade"
      },
      {
        name: "pawsitive",
        regex: /(positive)/gi,
        replace: "pawsitive"
      },
      {
        name: "mewtiful",
        regex: /(beautiful)/gi,
        replace: "mewtiful"
      },
      {
        name: "furbidden",
        regex: /(forbidden)/gi,
        replace: "furbidden"
      },
      {
        name: "purrception",
        regex: /(perception)/gi,
        replace: "purrception"
      },
      {
        name: "furmidable",
        regex: /(formidable)/gi,
        replace: "furmidable"
      },
      {
        name: "purrmanent",
        regex: /(permanent)/gi,
        replace: "purrmanent"
      },
      {
        name: "pawsible",
        regex: /(possible)/gi,
        replace: "pawsible"
      },
      {
        name: "furrari",
        regex: /(ferrari)/gi,
        replace: "furrari"
      },
      {
        name: "purrsonality",
        regex: /(personality)/gi,
        replace: "purrsonality"
      },
      {
        name: "pawse",
        regex: /(pause)/gi,
        replace: "pawse"
      },
      {
        name: "pawlice",
        regex: /(police)/gi,
        replace: "pawlice"
      },
      {
        name: "meowlody",
        regex: /(melody)/gi,
        replace: "meowlody"
      },
      {
        name: "purrseverance",
        regex: /(perseverance)/gi,
        replace: "purrseverance"
      },
      {
        name: "furever",
        regex: /(forever)/gi,
        replace: "furever"
      },
      {
        name: "meowment",
        regex: /(moment)/gi,
        replace: "meowment"
      },
      {
        name: "pawtograph",
        regex: /(autograph)/gi,
        replace: "pawtograph"
      },
      {
        name: "purrplexed",
        regex: /(perplexed)/gi,
        replace: "purrplexed"
      },
      {
        name: "ameowzing",
        regex: /(amazing)/gi,
        replace: "ameowzing"
      },
      {
        name: "E Replacement",
        regex: /[eE][eE]/g,
        replace: "33"
      },
      {
        name: "Prefix",
        regex: /^/,
        replace: ":33 < "
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
      "NepetaTypingQuirk",
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
    BdApi.Patcher.unpatchAll("NepetaTypingQuirk");
  }
};
