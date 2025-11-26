/**
 * @name FeferiTypingQuirk
 * @version 1.1
 * @author poff_null
 * @description Feferi' typing quirk. Now with STRONG URL Protection. Long list of fish puns!
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
    name: "reely",
    regex: /(really)/gi,
    replace: "reely"
  },
  {
    name: "reel",
    regex: /(real)/gi,
    replace: "reel"
  },
  {
    name: "gillty",
    regex: /(guilty)/gi,
    replace: "gillty"
  },
  {
    name: "cod",
    regex: /(god)/gi,
    replace: "cod"
  },
  {
    name: "krill",
    regex: /(kill)/gi,
    replace: "krill"
  },
  {
    name: "prawn",
    regex: /(pwn|pawn)/gi,
    replace: "prawn"
  },
  {
    name: "somefin",
    regex: /(something)/gi,
    replace: "somefin"
  },
  {
    name: "nofin",
    regex: /(nothing)/gi,
    replace: "nofin"
  },
  {
    name: "waterever",
    regex: /(whatever)/gi,
    replace: "waterever"
  },
  {
    name: "whatebber",
    regex: /(whatever)/gi,
    replace: "whatebber"
  },
  {
    name: "sardinonic",
    regex: /(sardonic)/gi,
    replace: "sardinonic"
  },
  {
    name: "eeling",
    regex: /(feeling)/gi,
    replace: "eeling"
  },
  {
    name: "heroe",
    regex: /(hero)/gi,
    replace: "heroe"
  },
  {
    name: "heroeine",
    regex: /(heroine)/gi,
    replace: "heroeine"
  },
  {
    name: "roe",
    regex: /(row)/gi,
    replace: "roe"
  },
  {
    name: "shrimpudent",
    regex: /(impudent)/gi,
    replace: "shrimpudent"
  },
  {
    name: "roetine",
    regex: /(routine)/gi,
    replace: "roetine"
  },
  {
    name: "opportunaty",
    regex: /(opportunity)/gi,
    replace: "opportunaty"
  },
  {
    name: "opperchtunaty",
    regex: /(opportunity)/gi,
    replace: "opperchtunaty"
  },
  {
    name: "perchase",
    regex: /(purchase)/gi,
    replace: "perchase"
  },
  {
    name: "whale",
    regex: /(well)/gi,
    replace: "whale"
  },
  {
    name: "whalecome",
    regex: /(welcome)/gi,
    replace: "whalecome"
  },
  {
    name: "gillarious",
    regex: /(hilarious)/gi,
    replace: "gillarious"
  },
  {
    name: "gillegal",
    regex: /(illegal)/gi,
    replace: "gillegal"
  },
  {
    name: "debait",
    regex: /(debate)/gi,
    replace: "debait"
  },
  {
    name: "fishbait",
    regex: /(bait)/gi,
    replace: "fishbait"
  },
  {
    name: "doofish",
    regex: /(doofus)/gi,
    replace: "doofish"
  },
  {
    name: "manta",
    regex: /(meant)/gi,
    replace: "manta"
  },
  {
    name: "salmon",
    regex: /(slammin|summon)/gi,
    replace: "salmon"
  },
  {
    name: "crayative",
    regex: /(creative)/gi,
    replace: "crayative"
  },
  {
    name: "crayture",
    regex: /(creature)/gi,
    replace: "crayture"
  },
  {
    name: "haddock",
    regex: /(had)/gi,
    replace: "haddock"
  },
  {
    name: "mackerel",
    regex: /(mack)/gi,
    replace: "mackerel"
  },
  {
    name: "coral",
    regex: /(choir|core)/gi,
    replace: "coral"
  },
  {
    name: "melancoley",
    regex: /(melancholic|melancholy)/gi,
    replace: "melancoley"
  },
  {
    name: "outraygeous",
    regex: /(outrageous)/gi,
    replace: "outraygeous"
  },
  {
    name: "cuttle",
    regex: /(cuddle)/gi,
    replace: "cuttle"
  },
  {
    name: "hullabeluga",
    regex: /(hullabaloo)/gi,
    replace: "hullabeluga"
  },
  {
    name: "pike",
    regex: /(pick|like)/gi,
    replace: "pike"
  },
  {
    name: "posshipbly",
    regex: /(possible)/gi,
    replace: "posshipbly"
  },
  {
    name: "possibubbly",
    regex: /(possibly)/gi,
    replace: "possibubbly"
  },
  {
    name: "porpoise",
    regex: /(purpose|prepose|propose)/gi,
    replace: "porpoise"
  },
  {
    name: "carppreciate",
    regex: /(appreciate)/gi,
    replace: "carppreciate"
  },
  {
    name: "carppreciation",
    regex: /(appreciation)/gi,
    replace: "carppreciation"
  },
  {
    name: "insmanatee",
    regex: /(insanity)/gi,
    replace: "insmanatee"
  },
  {
    name: "koi",
    regex: /(coy)/gi,
    replace: "koi"
  },
  {
    name: "hake",
    regex: /(hate)/gi,
    replace: "hake"
  },
  {
    name: "krilliant",
    regex: /(brilliant)/gi,
    replace: "krilliant"
  },
  {
    name: "crappie",
    regex: /(crappy)/gi,
    replace: "crappie"
  },
  {
    name: "herring",
    regex: /(hearing)/gi,
    replace: "herring"
  },
  {
    name: "ofishial",
    regex: /(official)/gi,
    replace: "ofishial"
  },
  {
    name: "betta",
    regex: /(bet|better|betcha|beta)/gi,
    replace: "betta"
  },
  {
    name: "shellfish",
    regex: /(selfish)/gi,
    replace: "shellfish"
  },
  {
    name: "eelmao",
    regex: /(lmao|lmfao)/gi,
    replace: "eelmao"
  },
  {
    name: "fintastic",
    regex: /(fantastic)/gi,
    replace: "fintastic"
  },
  {
    name: "fintasy",
    regex: /(fantasy)/gi,
    replace: "fintasy"
  },
  {
    name: "fin",
    regex: /(fun|fan|fine)/gi,
    replace: "fin"
  },
  {
    name: "halibut",
    regex: /(hell of it)/gi,
    replace: "halibut"
  },
  {
    name: "carping",
    regex: /(talking)/gi,
    replace: "carping"
  },
  {
    name: "glubbing",
    regex: /(chatting)/gi,
    replace: "glubbing"
  },
  {
    name: "lobsta",
    regex: /(lotsa)/gi,
    replace: "lobsta"
  },
  {
    name: "lobstervations",
    regex: /(observations)/gi,
    replace: "lobstervations"
  },
  {
    name: "floundering",
    regex: /(fumbling)/gi,
    replace: "floundering"
  },
  {
    name: "bereef",
    regex: /(believe)/gi,
    replace: "bereef"
  },
  {
    name: "pracfishing",
    regex: /(practicing)/gi,
    replace: "pracfishing"
  },
  {
    name: "moby",
    regex: /(body)/gi,
    replace: "moby"
  },
  {
    name: "swimmer",
    regex: /(simmer)/gi,
    replace: "swimmer"
  },
  {
    name: "oar",
    regex: /(or)/gi,
    replace: "oar"
  },
  {
    name: "sea eeled",
    regex: /(sealed)/gi,
    replace: "sea eeled"
  },
  {
    name: "bassically",
    regex: /(basically)/gi,
    replace: "bassically"
  },
  {
    name: "finaccurate",
    regex: /(inaccurate)/gi,
    replace: "finaccurate"
  },
  {
    name: "finportant",
    regex: /(important)/gi,
    replace: "finportant"
  },
  {
    name: "shrimple",
    regex: /(simple)/gi,
    replace: "shrimple"
  },
  {
    name: "shrimply",
    regex: /(simply)/gi,
    replace: "shrimply"
  },
  {
    name: "myshellf",
    regex: /(myself)/gi,
    replace: "myshellf"
  },
  {
    name: "yourshellf",
    regex: /(yourself)/gi,
    replace: "yourshellf"
  },
  {
    name: "schoalder",
    regex: /(shoulder)/gi,
    replace: "schoalder"
  },
  {
    name: "minnow",
    regex: /(me know)/gi,
    replace: "minnow"
  },
  {
    name: "basshole",
    regex: /(asshole)/gi,
    replace: "basshole"
  },
  {
    name: "prawn",
    regex: /(pawn|pwn)/gi,
    replace: "prawn"
  },
  {
    name: "shoal",
    regex: /(show)/gi,
    replace: "shoal"
  },
  {
    name: "dolphinitely",
    regex: /(definitely)/gi,
    replace: "dolphinitely"
  },
  {
    name: "eelated",
    regex: /(elated)/gi,
    replace: "eelated"
  },
  {
    name: "conchvienent",
    regex: /(convienent)/gi,
    replace: "conchvienent"
  },
  {
    name: "conchcerned",
    regex: /(concerned)/gi,
    replace: "conchcerned"
  },
  {
    name: "conchfused",
    regex: /(confused)/gi,
    replace: "conchfused"
  },
  {
    name: "clamscray",
    regex: /(amscray)/gi,
    replace: "clamscray"
  },
  {
    name: "moray",
    regex: /(more)/gi,
    replace: "moray"
  },
  {
    name: "moor",
    regex: /(more)/gi,
    replace: "moor"
  },
  {
    name: "moireel",
    regex: /(moirail)/gi,
    replace: "moireel"
  },
  {
    name: "morayrail",
    regex: /(moirail)/gi,
    replace: "morayrail"
  },
  {
    name: "moray-eel",
    regex: /(moirail)/gi,
    replace: "moray-eel"
  },
  {
    name: "fishmesis",
    regex: /(kismesis)/gi,
    replace: "fishmesis"
  },
  {
    name: "ausfishtice",
    regex: /(auspistice)/gi,
    replace: "ausfishtice"
  },
  {
    name: "snapper",
    regex: /(snap)/gi,
    replace: "snapper"
  },
  {
    name: "mast",
    regex: /(must)/gi,
    replace: "mast"
  },
  {
    name: "whaling",
    regex: /(wailing)/gi,
    replace: "whaling"
  },
  {
    name: "speshell",
    regex: /(special)/gi,
    replace: "speshell"
  },
  {
    name: "shell",
    regex: /(sell|hell)/gi,
    replace: "shell"
  },
  {
    name: "mussel",
    regex: /(muscle)/gi,
    replace: "mussel"
  },
  {
    name: "goby",
    regex: /(go be)/gi,
    replace: "goby"
  },
  {
    name: "kelp",
    regex: /(help)/gi,
    replace: "kelp"
  },
  {
    name: "gill",
    regex: /(girl)/gi,
    replace: "gill"
  },
  {
    name: "endolphins",
    regex: /(endorphins)/gi,
    replace: "endolphins"
  },
  {
    name: "endorsal",
    regex: /(endorse)/gi,
    replace: "endorsal"
  },
  {
    name: "frond",
    regex: /(friend|fond)/gi,
    replace: "frond"
  },
  {
    name: "probubbly",
    regex: /(probably)/gi,
    replace: "probubbly"
  },
  {
    name: "flippering",
    regex: /(flipping)/gi,
    replace: "flippering"
  },
  {
    name: "squidding",
    regex: /(kidding)/gi,
    replace: "squidding"
  },
  {
    name: "shore",
    regex: /(sure)/gi,
    replace: "shore"
  },
  {
    name: "mola",
    regex: /(moola)/gi,
    replace: "mola"
  },
  {
    name: "sea",
    regex: /(see)/gi,
    replace: "sea"
  },
  {
    name: "weaprawn",
    regex: /(weapon)/gi,
    replace: "weaprawn"
  },
  {
    name: "appier",
    regex: /(appear)/gi,
    replace: "appier"
  },
  {
    name: "disappier",
    regex: /(disappear)/gi,
    replace: "disappier"
  },
  {
    name: "disaspeared",
    regex: /(disappear)/gi,
    replace: "disaspeared"
  },
  {
    name: "aspear",
    regex: /(aspire)/gi,
    replace: "aspear"
  },
  {
    name: "fishcernable",
    regex: /(discernible)/gi,
    replace: "fishcernable"
  },
  {
    name: "discernabubble",
    regex: /(discernible)/gi,
    replace: "discernabubble"
  },
  {
    name: "fishues",
    regex: /(issues)/gi,
    replace: "fishues"
  },
  {
    name: "fishnet",
    regex: /(net)/gi,
    replace: "fishnet"
  },
  {
    name: "plaice",
    regex: /(place)/gi,
    replace: "plaice"
  },
  {
    name: "discus",
    regex: /(discuss)/gi,
    replace: "discus"
  },
  {
    name: "clamering",
    regex: /(clamoring)/gi,
    replace: "clamering"
  },
  {
    name: "beach",
    regex: /(each|bitch)/gi,
    replace: "beach"
  },
  {
    name: "pacific",
    regex: /(specific)/gi,
    replace: "pacific"
  },
  {
    name: "sturgeon",
    regex: /(surgeon)/gi,
    replace: "sturgeon"
  },
  {
    name: "water",
    regex: /(what are)/gi,
    replace: "water"
  },
  {
    name: "alwaves",
    regex: /(always)/gi,
    replace: "alwaves"
  },
  {
    name: "attitide",
    regex: /(attitude)/gi,
    replace: "attitide"
  },
  {
    name: "tidal",
    regex: /(title)/gi,
    replace: "tidal"
  },
  {
    name: "aquainted",
    regex: /(accquianted)/gi,
    replace: "aquainted"
  },
  {
    name: "searious",
    regex: /(serious)/gi,
    replace: "searious"
  },
  {
    name: "seacret",
    regex: /(secret)/gi,
    replace: "seacret"
  },
  {
    name: "sean",
    regex: /(seen)/gi,
    replace: "sean"
  },
  {
    name: "naut",
    regex: /(not)/gi,
    replace: "naut"
  },
  {
    name: "nauty",
    regex: /(naughty)/gi,
    replace: "nauty"
  },
  {
    name: "actshoally",
    regex: /(actually)/gi,
    replace: "actshoally"
  },
  {
    name: "tidey",
    regex: /(tidy)/gi,
    replace: "tidey"
  },
  {
    name: "shad",
    regex: /(tad)/gi,
    replace: "shad"
  },
  {
    name: "tidally",
    regex: /(totally)/gi,
    replace: "tidally"
  },
  {
    name: "sanditary",
    regex: /(sanitary)/gi,
    replace: "sanditary"
  },
  {
    name: "teamfork",
    regex: /(teamwork)/gi,
    replace: "teamfork"
  },
  {
    name: "seagullible",
    regex: /(gullible)/gi,
    replace: "seagullible"
  },
  {
    name: "puffin",
    regex: /(puffing)/gi,
    replace: "puffin"
  },
  {
    name: "craysea",
    regex: /(crazy)/gi,
    replace: "craysea"
  },
  {
    name: "tern",
    regex: /(turn)/gi,
    replace: "tern"
  },
  {
    name: "fish",
    regex: /(wish)/gi,
    replace: "fish"
  },
  {
    name: "fishes",
    regex: /(wishes)/gi,
    replace: "fishes"
  },
  {
    name: "lunasea",
    regex: /(lunacy)/gi,
    replace: "lunasea"
  },
  {
    name: "otterwise",
    regex: /(otherwise)/gi,
    replace: "otterwise"
  },
  {
    name: "asshoal",
    regex: /(asshole)/gi,
    replace: "asshoal"
  },
  {
    name: "shark",
    regex: /(shirk|stark)/gi,
    replace: "shark"
  },
  {
    name: "tuna",
    regex: /(tone of|tune)/gi,
    replace: "tuna"
  },
  {
    name: "buoy",
    regex: /(boy)/gi,
    replace: "buoy"
  },
  {
    name: "aboat",
    regex: /(about)/gi,
    replace: "aboat"
  },
  {
    name: "boat",
    regex: /(bout)/gi,
    replace: "boat"
  },
  {
    name: "jellyfish",
    regex: /(jealous)/gi,
    replace: "jellyfish"
  },
  {
    name: "waterboat",
    regex: /(what about)/gi,
    replace: "waterboat"
  },
  {
    name: "keel",
    regex: /(kill)/gi,
    replace: "keel"
  },
  {
    name: "hull",
    regex: /(hell|haul)/gi,
    replace: "hull"
  },
  {
    name: "schooner",
    regex: /(sooner)/gi,
    replace: "schooner"
  },
  {
    name: "sail",
    regex: /(sell)/gi,
    replace: "sail"
  },
  {
    name: "glubbin",
    regex: /(fucking|fuckin)/gi,
    replace: "glubbin"
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