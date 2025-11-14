/**
 * @name Nepeta'sTypingQuirk
 * @version 1.2
 * @author poff_null
 * @description Nepeta's typing quirk. With even more cat puns! Now with STRONG URL Protection.
 * @source https://github.com/poff-null/discord-plugins/blob/main/NepetaTypingQuirk.plugin.js
 */

module.exports = class NepetaTypingQuirk {
  constructor() {
    this.quirkPatterns = [
      // theese are where the quirks will be defined
        // cat puns
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
        name: "furtunate",
        regex: /(fortunate)/gi,
        replace: "fur-tunate"
      },
      {
        name: "meowsterious",
        regex: /(mysterious)/gi,
        replace: "meowsterious"
      },
      {
        name: "pawrty",
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
        name: "furiend",
        regex: /(friend)/gi,
        replace: "furiend"
      },
      {
        name: "furreal",
        regex: /(for real|forreal)/gi,
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
        name: "adorapawl",
        regex: /(adorable)/gi,
        replace: "adorapawl"
      },
      {
        name: "afurraid",
        regex: /(afraid)/gi,
        replace: "afurraid"
      },
      {
        name: "ameow",
        regex: /(allow)/gi,
        replace: "ameow"
      },
      {
        name: "amewse",
        regex: /(amuse)/gi,
        replace: "amewse"
      },
      {
        name: "anofur",
        regex: /(another)/gi,
        replace: "anofur"
      },
      {
        name: "anyroar",
        regex: /(anymore)/gi,
        replace: "anyroar"
      },
      {
        name: "appawlled",
        regex: /(appalled)/gi,
        replace: "appawlled"
      },
      {
        name: "appurtite",
        regex: /(appetite)/gi,
        replace: "appurtite"
      },
      {
        name: "apurroach",
        regex: /(approach)/gi,
        replace: "apurroach"
      },
      {
        name: "appuropriate",
        regex: /(appropriate)/gi,
        replace: "appuropriate"
      },
      {
        name: "apurrove",
        regex: /(approve)/gi,
        replace: "apurrove"
      },
      {
        name: "apawlogy",
        regex: /(apology)/gi,
        replace: "apawlogy"
      },
      {
        name: "catitude",
        regex: /(attitude)/gi,
        replace: "catitude"
      },
      {
        name: "pawesome",
        regex: /(awesome)/gi,
        replace: "pawesome"
      },
      {
        name: "clawful",
        regex: /\b(awful)\b/gi,
        replace: "clawful"
      },
      {
        name: "pawful",
        regex: /\b(awful)\b/gi,
        replace: "pawful"
      },
      {
        name: "beclawse",
        regex: /(cause|because)/gi,
        replace: "beclawse"
      },
      {
        name: "cat_litter",
        regex: /(bullshit)/gi,
        replace: "cat litter"
      },
      {
        name: "camewmile",
        regex: /(camomile)/gi,
        replace: "camewmile"
      },
      {
        name: "claws",
        regex: /(cause)/gi,
        replace: "claws"
      },
      {
        name: "cheetah",
        regex: /(cheater)/gi,
        replace: "cheetah"
      },
      {
        name: "clawver",
        regex: /(clever)/gi,
        replace: "clawver"
      },
      {
        name: "clawsplay",
        regex: /(cosplay)/gi,
        replace: "clawsplay"
      },
      {
        name: "defurrmination",
        regex: /(determination)/gi,
        replace: "defurrmination"
      },
      {
        name: "diffurent",
        regex: /(different)/gi,
        replace: "diffurent"
      },
      {
        name: "disapurrance",
        regex: /(disappearance)/gi,
        replace: "disapurrance"
      },
      {
        name: "discrimeownate",
        regex: /(discriminate)/gi,
        replace: "discrimeownate"
      },
      {
        name: "empurress",
        regex: /(empress|emperess)/gi,
        replace: "empurress"
      },
      {
        name: "espeacpurrly",
        regex: /(especially)/gi,
        replace: "espeacpurrly"
      },
      {
        name: "efur",
        regex: /(ever)/gi,
        replace: "efur"
      },
      {
        name: "effurryone",
        regex: /(everyone)/gi,
        replace: "effurryone"
      },
      {
        name: "efurrything",
        regex: /(everything)/gi,
        replace: "efurrything"
      },
      {
        name: "furmiliar",
        regex: /(familiar)/gi,
        replace: "furmiliar"
      },
      {
        name: "favfurite",
        regex: /(favourite)/gi,
        replace: "favfurite"
      },
      {
        name: "feline",
        regex: /(feeling)/gi,
        replace: "feline"
      },
      {
        name: "furocious",
        regex: /(ferocious)/gi,
        replace: "furocious"
      },
      {
        name: "fur",
        regex: /\bfor\b/gi,
        replace: "fur"
      },
      {
        name: "furbid",
        regex: /(forbid)/gi,
        replace: "furbid"
      },
      {
        name: "furever",
        regex: /(forever)/gi,
        replace: "furever"
      },
      {
        name: "furget",
        regex: /(forget)/gi,
        replace: "furget"
      },
      {
        name: "furrtune",
        regex: /(fortune)/gi,
        replace: "furrtune"
      },
      {
        name: "furiend",
        regex: /(friend)/gi,
        replace: "furiend"
      },
      {
        name: "furrom",
        regex: /(from)/gi,
        replace: "furrom"
      },
      {
        name: "furown",
        regex: /(frown)/gi,
        replace: "furown"
      },
      {
        name: "cat",
        regex: /\b(got)\b/gi,
        replace: "cat"
      },
      {
        name: "paws",
        regex: /\b(hands)\b/gi,
        replace: "paws"
      },
      {
        name: "claws",
        regex: /\b(hands)\b/gi,
        replace: "claws"
      },
      {
        name: "hiss",
        regex: /\b(his)\b/gi,
        replace: "hiss"
      },
      {
        name: "hisstory",
        regex: /(history)/gi,
        replace: "hisstory"
      },
      {
        name: "hypurrcrite",
        regex: /(hypocrite)/gi,
        replace: "hypurrcrite"
      },
      {
        name: "hissterical",
        regex: /(hysterical)/gi,
        replace: "hissterical"
      },
      {
        name: "kitten",
        regex: /(kidding)/gi,
        replace: "kitten"
      },
      {
        name: "hiss_kiss",
        regex: /(kiss)/gi,
        replace: "hiss"
      },
      {
        name: "leijon",
        regex: /(legion)/gi,
        replace: "leijon"
      },
      {
        name: "litter",
        regex: /(letter)/gi,
        replace: "litter"
      },
      {
        name: "lion",
        regex: /(lying|liying)/gi,
        replace: "lion"
      },
      {
        name: "meowt",
        regex: /(me out)/gi,
        replace: "meowt"
      },
      {
        name: "memeowry",
        regex: /(memory)/gi,
        replace: "memeowry"
      },
      {
        name: "meowrail",
        regex: /(moirail)/gi,
        replace: "meowrail"
      },
      {
        name: "mewment",
        regex: /(moment)/gi,
        replace: "mewment"
      },
      {
        name: "mewd",
        regex: /(mood)/gi,
        replace: "mewd"
      },
      {
        name: "meowstly",
        regex: /(mostly)/gi,
        replace: "meowstly"
      },
      {
        name: "meowtherfurrker",
        regex: /(motherfucker)/gi,
        replace: "meowtherfurrker"
      },
      {
        name: "meowntain",
        regex: /(mountain)/gi,
        replace: "meowntain"
      },
      {
        name: "mewvie",
        regex: /(movie)/gi,
        replace: "mewvie"
      },
      {
        name: "mewsic",
        regex: /(music)/gi,
        replace: "mewsic"
      },
      {
        name: "nefur",
        regex: /(never)/gi,
        replace: "nefur"
      },
      {
        name: "mew",
        regex: /(new)/gi,
        replace: "mew"
      },
      {
        name: "nyaw",
        regex: /\b(now)\b/gi,
        replace: "nyaw"
      },
      {
        name: "opurressed",
        regex: /(oppressed)/gi,
        replace: "opurressed"
      },
      {
        name: "ofurr",
        regex: /(other)/gi,
        replace: "ofurr"
      },
      {
        name: "peopurr",
        regex: /(people)/gi,
        replace: "peopurr"
      },
      {
        name: "pawssage",
        regex: /(passage)/gi,
        replace: "pawssage"
      },
      {
        name: "purtty",
        regex: /(party)/gi,
        replace: "purtty"
      },
      {
        name: "purrticular",
        regex: /(particular)/gi,
        replace: "purrticular"
      },
      {
        name: "paws",
        regex: /(pause)/gi,
        replace: "paws"
      },
      {
        name: "purrchance",
        regex: /(perchance)/gi,
        replace: "purrchance"
      },
      {
        name: "purrfect",
        regex: /(perfect)/gi,
        replace: "purrfect"
      },
      {
        name: "purrhaps",
        regex: /(perhaps)/gi,
        replace: "purrhaps"
      },
      {
        name: "purrmission",
        regex: /(permission)/gi,
        replace: "purrmission"
      },
      {
        name: "purrform",
        regex: /(perform)/gi,
        replace: "purrform"
      },
      {
        name: "purrformance",
        regex: /(performance)/gi,
        replace: "purrformance"
      },
      {
        name: "prepurr",
        regex: /(prepare)/gi,
        replace: "prepurr"
      },
      {
        name: "purrpetrator",
        regex: /(perpetrator)/gi,
        replace: "purrpetrator"
      },
      {
        name: "purrsnickety",
        regex: /(persnickety)/gi,
        replace: "purrsnickety"
      },
      {
        name: "purrsist",
        regex: /(persist)/gi,
        replace: "purrsist"
      },
      {
        name: "purrson",
        regex: /(person)/gi,
        replace: "purrson"
      },
      {
        name: "purrsonal",
        regex: /(personal)/gi,
        replace: "purrsonal"
      },
      {
        name: "purrsuasion",
        regex: /(persuasion)/gi,
        replace: "purrsuasion"
      },
      {
        name: "pawlease",
        regex: /(please)/gi,
        replace: "pawlease"
      },
      {
        name: "purrleasure",
        regex: /(pleasure)/gi,
        replace: "purrleasure"
      },
      {
        name: "pawetry",
        regex: /(poetry)/gi,
        replace: "pawetry"
      },
      {
        name: "pawnder",
        regex: /(ponder)/gi,
        replace: "pawnder"
      },
      {
        name: "purr",
        regex: /\b(poor)\b/gi,
        replace: "purr"
      },
      {
        name: "pawpular",
        regex: /(popular)/gi,
        replace: "pawpular"
      },
      {
        name: "pawsitive",
        regex: /(positive)/gi,
        replace: "pawsitive"
      },
      {
        name: "pawssible",
        regex: /(possible)/gi,
        replace: "pawssible"
      },
      {
        name: "purray",
        regex: /(pray)/gi,
        replace: "purray"
      },
      {
        name: "purreach",
        regex: /(preach)/gi,
        replace: "purreach"
      },
      {
        name: "purrecious",
        regex: /(precious)/gi,
        replace: "purrecious"
      },
      {
        name: "pawfur",
        regex: /(prefer)/gi,
        replace: "pawfur"
      },
      {
        name: "prepurr",
        regex: /(prepare)/gi,
        replace: "prepurr"
      },
      {
        name: "purretend",
        regex: /(pretend)/gi,
        replace: "purretend"
      },
      {
        name: "purretty",
        regex: /(pretty)/gi,
        replace: "purretty"
      },
      {
        name: "purrey",
        regex: /(prey)/gi,
        replace: "purrey"
      },
      {
        name: "purroblem",
        regex: /(problem)/gi,
        replace: "purroblem"
      },
      {
        name: "purrcrastinate",
        regex: /(procrastinate)/gi,
        replace: "purrcrastinate"
      },
      {
        name: "puromise",
        regex: /(promise)/gi,
        replace: "puromise"
      },
      {
        name: "purropurr",
        regex: /(proper)/gi,
        replace: "purropurr"
      },
      {
        name: "purroud",
        regex: /(proud)/gi,
        replace: "purroud"
      },
      {
        name: "purrple",
        regex: /(purple)/gi,
        replace: "purrple"
      },
      {
        name: "purrplex",
        regex: /(purplex|perplex)/gi,
        replace: "purrplex"
      },
      {
        name: "rafur",
        regex: /(rather)/gi,
        replace: "rafur"
      },
      {
        name: "remempurr",
        regex: /(remember)/gi,
        replace: "remempurr"
      },
      {
        name: "sharpurr",
        regex: /(sharper)/gi,
        replace: "sharpurr"
      },
      {
        name: "simpurly",
        regex: /(simply)/gi,
        replace: "simpurly"
      },
      {
        name: "somefluff",
        regex: /(somewhat)/gi,
        replace: "somefluff"
      },
      {
        name: "supawrt",
        regex: /(support)/gi,
        replace: "supawrt"
      },
      {
        name: "suppurt",
        regex: /(support)/gi,
        replace: "suppurt"
      },
      {
        name: "tail",
        regex: /(tale|tell)/gi,
        replace: "tail"
      },
      {
        name: "tailent",
        regex: /(talent)/gi,
        replace: "tailent"
      },
      {
        name: "thankfur",
        regex: /(thankful)/gi,
        replace: "thankfur"
      },
      {
        name: "transpurrent",
        regex: /(transparent)/gi,
        replace: "transpurrent"
      },
      {
        name: "theatfurr",
        regex: /(theatre)/gi,
        replace: "theatfurr"
      },
      {
        name: "upawn",
        regex: /(upon)/gi,
        replace: "upawn"
      },
      {
        name: "warfurr",
        regex: /(warfare)/gi,
        replace: "warfurr"
      },
      {
        name: "whenefur",
        regex: /(whenever)/gi,
        replace: "whenefur"
      },
      {
        name: "whisker",
        regex: /(whisk her|whisper)/gi,
        replace: "whisker"
      },
      {
        name: "whispurr",
        regex: /(whisper)/gi,
        replace: "whispurr"
      },
      {
        name: "wonderfur",
        regex: /(wonderful)/gi,
        replace: "wonderfur"
      },

        // other replacements
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