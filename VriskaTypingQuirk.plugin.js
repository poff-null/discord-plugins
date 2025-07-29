/**
 * @name Vriska'sTypingQuirk
 * @version 1.0
 * @author poff_null
 * @description Vriska's typing quirk. With 8 soundalikes!
 * @source https://github.com/poff-null/discord-plugins/blob/main/VriskaTypingQuirk.plugin.js
 */

module.exports = class VriskaTypingQuirk {
  constructor() {
    this.quirkPatterns = [
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
        name: "m8",
        regex: /(mate)/gi,
        replace: "m8"
      },
      {
        name: "str8",
        regex: /(straight)/gi,
        replace: "str8"
      },
      {
        name: "h8",
        regex: /(hate)/gi,
        replace: "h8"
      },
      {
        name: "f8",
        regex: /(fate)/gi,
        replace: "f8"
      },
      {
        name: "pl8",
        regex: /(plate)/gi,
        replace: "pl8"
      },
      {
        name: "d8",
        regex: /(date)/gi,
        replace: "d8"
      },
      {
        name: "st8",
        regex: /(state)/gi,
        replace: "st8"
      },
      {
        name: "r8",
        regex: /(rate)/gi,
        replace: "r8"
      },
      {
        name: "g8",
        regex: /(gate)/gi,
        replace: "g8"
      },
      {
        name: "cr8",
        regex: /(create)/gi,
        replace: "cr8"
      },
      {
        name: "sk8",
        regex: /(skate)/gi,
        replace: "sk8"
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
        name: "deb8",
        regex: /(debate)/gi,
        replace: "deb8"
      },
      {
        name: "rel8",
        regex: /(relate)/gi,
        replace: "rel8"
      },
      {
        name: "transl8",
        regex: /(translate)/gi,
        replace: "transl8"
      },
      {
        name: "activ8",
        regex: /(activate)/gi,
        replace: "activ8"
      },
      {
        name: "appreci8",
        regex: /(appreciate)/gi,
        replace: "appreci8"
      },
      {
        name: "calcul8",
        regex: /(calculate)/gi,
        replace: "calcul8"
      },
      {
        name: "celebr8",
        regex: /(celebrate)/gi,
        replace: "celebr8"
      },
      {
        name: "communic8",
        regex: /(communicate)/gi,
        replace: "communic8"
      },
      {
        name: "complic8",
        regex: /(complicate)/gi,
        replace: "complic8"
      },
      {
        name: "congratul8",
        regex: /(congratulate)/gi,
        replace: "congratul8"
      },
      {
        name: "cooper8",
        regex: /(cooperate)/gi,
        replace: "cooper8"
      },
      {
        name: "cre8",
        regex: /(create)/gi,
        replace: "cre8"
      },
      {
        name: "demonstr8",
        regex: /(demonstrate)/gi,
        replace: "demonstr8"
      },
      {
        name: "educ8",
        regex: /(educate)/gi,
        replace: "educ8"
      },
      {
        name: "estim8",
        regex: /(estimate)/gi,
        replace: "estim8"
      },
      {
        name: "evalu8",
        regex: /(evaluate)/gi,
        replace: "evalu8"
      },
      {
        name: "gener8",
        regex: /(generate)/gi,
        replace: "gener8"
      },
      {
        name: "indic8",
        regex: /(indicate)/gi,
        replace: "indic8"
      },
      {
        name: "investig8",
        regex: /(investigate)/gi,
        replace: "investig8"
      },
      {
        name: "loc8",
        regex: /(locate)/gi,
        replace: "loc8"
      },
      {
        name: "neg8",
        regex: /(negate)/gi,
        replace: "neg8"
      },
      {
        name: "oper8",
        regex: /(operate)/gi,
        replace: "oper8"
      },
      {
        name: "particip8",
        regex: /(participate)/gi,
        replace: "particip8"
      },
      {
        name: "penetr8",
        regex: /(penetrate)/gi,
        replace: "penetr8"
      },
      {
        name: "regener8",
        regex: /(regenerate)/gi,
        replace: "regener8"
      },
      {
        name: "replic8",
        regex: /(replicate)/gi,
        replace: "replic8"
      },
      {
        name: "specul8",
        regex: /(speculate)/gi,
        replace: "specul8"
      },
      {
        name: "termin8",
        regex: /(terminate)/gi,
        replace: "termin8"
      },
      {
        name: "upd8",
        regex: /(update)/gi,
        replace: "upd8"
      },
      {
        name: "valid8",
        regex: /(validate)/gi,
        replace: "valid8"
      },
      {
        name: "anticip8",
        regex: /(anticipate)/gi,
        replace: "anticip8"
      },
      {
        name: "approxim8",
        regex: /(approximate)/gi,
        replace: "approxim8"
      },
      {
        name: "assimil8",
        regex: /(assimilate)/gi,
        replace: "assimil8"
      },
      {
        name: "collabor8",
        regex: /(collaborate)/gi,
        replace: "collabor8"
      },
      {
        name: "compens8",
        regex: /(compensate)/gi,
        replace: "compens8"
      },
      {
        name: "concentr8",
        regex: /(concentrate)/gi,
        replace: "concentr8"
      },
      {
        name: "decim8",
        regex: /(decimate)/gi,
        replace: "decim8"
      },
      {
        name: "decor8",
        regex: /(decorate)/gi,
        replace: "decor8"
      },
      {
        name: "deleg8",
        regex: /(delegate)/gi,
        replace: "deleg8"
      },
      {
        name: "desol8",
        regex: /(desolate)/gi,
        replace: "desol8"
      },
      {
        name: "devast8",
        regex: /(devastate)/gi,
        replace: "devast8"
      },
      {
        name: "differenti8",
        regex: /(differentiate)/gi,
        replace: "differenti8"
      },
      {
        name: "dil8",
        regex: /(dilate)/gi,
        replace: "dil8"
      },
      {
        name: "domin8",
        regex: /(dominate)/gi,
        replace: "domin8"
      },
      {
        name: "duplic8",
        regex: /(duplicate)/gi,
        replace: "duplic8"
      },
      {
        name: "elev8",
        regex: /(elevate)/gi,
        replace: "elev8"
      },
      {
        name: "emul8",
        regex: /(emulate)/gi,
        replace: "emul8"
      },
      {
        name: "enumer8",
        regex: /(enumerate)/gi,
        replace: "enumer8"
      },
      {
        name: "evacu8",
        regex: /(evacuate)/gi,
        replace: "evacu8"
      },
      {
        name: "excav8",
        regex: /(excavate)/gi,
        replace: "excav8"
      },
      {
        name: "exacerb8",
        regex: /(exacerbate)/gi,
        replace: "exacerb8"
      },
      {
        name: "exagger8",
        regex: /(exaggerate)/gi,
        replace: "exagger8"
      },
      {
        name: "exoner8",
        regex: /(exonerate)/gi,
        replace: "exoner8"
      },
      {
        name: "extermin8",
        regex: /(exterminate)/gi,
        replace: "extermin8"
      },
      {
        name: "extirp8",
        regex: /(extirpate)/gi,
        replace: "extirp8"
      },
      {
        name: "extrad8",
        regex: /(extradite)/gi,
        replace: "extrad8"
      },
      {
        name: "fabric8",
        regex: /(fabricate)/gi,
        replace: "fabric8"
      },
      {
        name: "fascin8",
        regex: /(fascinate)/gi,
        replace: "fascin8"
      },
      {
        name: "fluctu8",
        regex: /(fluctuate)/gi,
        replace: "fluctu8"
      },
      {
        name: "formul8",
        regex: /(formulate)/gi,
        replace: "formul8"
      },
      {
        name: "frustr8",
        regex: /(frustrate)/gi,
        replace: "frustr8"
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
        name: "gener8r",
        regex: /(generator)/gi,
        replace: "gener8r"
      },
      {
        name: "gravit8",
        regex: /(gravitate)/gi,
        replace: "gravit8"
      },
      {
        name: "hesit8",
        regex: /(hesitate)/gi,
        replace: "hesit8"
      },
      {
        name: "humili8",
        regex: /(humiliate)/gi,
        replace: "humili8"
      },
      {
        name: "illustr8",
        regex: /(illustrate)/gi,
        replace: "illustr8"
      },
      {
        name: "im8",
        regex: /(imate)/gi,
        replace: "im8"
      },
      {
        name: "immigr8",
        regex: /(immigrate)/gi,
        replace: "immigr8"
      },
      {
        name: "implic8",
        regex: /(implicate)/gi,
        replace: "implic8"
      },
      {
        name: "inaugur8",
        regex: /(inaugurate)/gi,
        replace: "inaugur8"
      },
      {
        name: "inciner8",
        regex: /(incinerate)/gi,
        replace: "inciner8"
      },
      {
        name: "incorpor8",
        regex: /(incorporate)/gi,
        replace: "incorpor8"
      },
      {
        name: "indic8r",
        regex: /(indicator)/gi,
        replace: "indic8r"
      },
      {
        name: "infiltr8",
        regex: /(infiltrate)/gi,
        replace: "infiltr8"
      },
      {
        name: "infuri8",
        regex: /(infuriate)/gi,
        replace: "infuri8"
      },
      {
        name: "initi8",
        regex: /(initiate)/gi,
        replace: "initi8"
      },
      {
        name: "innov8",
        regex: /(innovate)/gi,
        replace: "innov8"
      },
      {
        name: "instig8",
        regex: /(instigate)/gi,
        replace: "instig8"
      },
      {
        name: "insul8",
        regex: /(insulate)/gi,
        replace: "insul8"
      },
      {
        name: "integr8",
        regex: /(integrate)/gi,
        replace: "integr8"
      },
      {
        name: "intimid8",
        regex: /(intimidate)/gi,
        replace: "intimid8"
      },
      {
        name: "intoxic8",
        regex: /(intoxicate)/gi,
        replace: "intoxic8"
      },
      {
        name: "irrit8",
        regex: /(irritate)/gi,
        replace: "irrit8"
      },
      {
        name: "isol8",
        regex: /(isolate)/gi,
        replace: "isol8"
      },
      {
        name: "legitim8",
        regex: /(legitimate)/gi,
        replace: "legitim8"
      },
      {
        name: "liber8",
        regex: /(liberate)/gi,
        replace: "liber8"
      },
      {
        name: "liquid8",
        regex: /(liquidate)/gi,
        replace: "liquid8"
      },
      {
        name: "mand8",
        regex: /(mandate)/gi,
        replace: "mand8"
      },
      {
        name: "manipul8",
        regex: /(manipulate)/gi,
        replace: "manipul8"
      },
      {
        name: "medi8",
        regex: /(mediate)/gi,
        replace: "medi8"
      },
      {
        name: "migr8",
        regex: /(migrate)/gi,
        replace: "migr8"
      },
      {
        name: "moder8",
        regex: /(moderate)/gi,
        replace: "moder8"
      },
      {
        name: "modific8",
        regex: /(modificate)/gi,
        replace: "modific8"
      },
      {
        name: "navig8",
        regex: /(navigate)/gi,
        replace: "navig8"
      },
      {
        name: "negoti8",
        regex: /(negotiate)/gi,
        replace: "negoti8"
      },
      {
        name: "nomin8",
        regex: /(nominate)/gi,
        replace: "nomin8"
      },
      {
        name: "obliter8",
        regex: /(obliterate)/gi,
        replace: "obliter8"
      },
      {
        name: "observ8",
        regex: /(observe)/gi,
        replace: "observ8"
      },
      {
        name: "obstin8",
        regex: /(obstinate)/gi,
        replace: "obstin8"
      },
      {
        name: "oper8r",
        regex: /(operator)/gi,
        replace: "oper8r"
      },
      {
        name: "origin8",
        regex: /(originate)/gi,
        replace: "origin8"
      },
      {
        name: "orn8",
        regex: /(ornate)/gi,
        replace: "orn8"
      },
      {
        name: "oscill8",
        regex: /(oscillate)/gi,
        replace: "oscill8"
      },
      {
        name: "outd8",
        regex: /(outdate)/gi,
        replace: "outd8"
      },
      {
        name: "overestim8",
        regex: /(overestimate)/gi,
        replace: "overestim8"
      },
      {
        name: "p8",
        regex: /(pate)/gi,
        replace: "p8"
      },
      {
        name: "penetr8r",
        regex: /(penetrator)/gi,
        replace: "penetr8r"
      },
      {
        name: "perme8",
        regex: /(permeate)/gi,
        replace: "perme8"
      },
      {
        name: "perpetu8",
        regex: /(perpetuate)/gi,
        replace: "perpetu8"
      },
      {
        name: "pl8d",
        regex: /(plated)/gi,
        replace: "pl8d"
      },
      {
        name: "pollin8",
        regex: /(pollinate)/gi,
        replace: "pollin8"
      },
      {
        name: "popul8",
        regex: /(populate)/gi,
        replace: "popul8"
      },
      {
        name: "precipit8",
        regex: /(precipitate)/gi,
        replace: "precipit8"
      },
      {
        name: "pred8",
        regex: /(predate)/gi,
        replace: "pred8"
      },
      {
        name: "predic8",
        regex: /(predicate)/gi,
        replace: "predic8"
      },
      {
        name: "priv8",
        regex: /(private)/gi,
        replace: "priv8"
      },
      {
        name: "procrastin8",
        regex: /(procrastinate)/gi,
        replace: "procrastin8"
      },
      {
        name: "procre8",
        regex: /(procreate)/gi,
        replace: "procre8"
      },
      {
        name: "prolifer8",
        regex: /(proliferate)/gi,
        replace: "prolifer8"
      },
      {
        name: "propag8",
        regex: /(propagate)/gi,
        replace: "propag8"
      },
      {
        name: "prost8",
        regex: /(prostate)/gi,
        replace: "prost8"
      },
      {
        name: "radi8",
        regex: /(radiate)/gi,
        replace: "radi8"
      },
      {
        name: "r8d",
        regex: /(rated)/gi,
        replace: "r8d"
      },
      {
        name: "r8r",
        regex: /(rator)/gi,
        replace: "r8r"
      },
      {
        name: "recapitul8",
        regex: /(recapitulate)/gi,
        replace: "recapitul8"
      },
      {
        name: "rec8",
        regex: /(recate)/gi,
        replace: "rec8"
      },
      {
        name: "regener8r",
        regex: /(regenerator)/gi,
        replace: "regener8r"
      },
      {
        name: "reiter8",
        regex: /(reiterate)/gi,
        replace: "reiter8"
      },
      {
        name: "reloc8",
        regex: /(relocate)/gi,
        replace: "reloc8"
      },
      {
        name: "replic8r",
        regex: /(replicator)/gi,
        replace: "replic8r"
      },
      {
        name: "repudi8",
        regex: /(repudiate)/gi,
        replace: "repudi8"
      },
      {
        name: "reson8",
        regex: /(resonate)/gi,
        replace: "reson8"
      },
      {
        name: "resuscit8",
        regex: /(resuscitate)/gi,
        replace: "resuscit8"
      },
      {
        name: "retali8",
        regex: /(retaliate)/gi,
        replace: "retali8"
      },
      {
        name: "rot8",
        regex: /(rotate)/gi,
        replace: "rot8"
      },
      {
        name: "s8",
        regex: /(sate)/gi,
        replace: "s8"
      },
      {
        name: "s8d",
        regex: /(sated)/gi,
        replace: "s8d"
      },
      {
        name: "s8r",
        regex: /(sator)/gi,
        replace: "s8r"
      },
      {
        name: "satur8",
        regex: /(saturate)/gi,
        replace: "satur8"
      },
      {
        name: "sed8",
        regex: /(sedate)/gi,
        replace: "sed8"
      },
      {
        name: "separ8",
        regex: /(separate)/gi,
        replace: "separ8"
      },
      {
        name: "simul8",
        regex: /(simulate)/gi,
        replace: "simul8"
      },
      {
        name: "sk8r",
        regex: /(skater)/gi,
        replace: "sk8r"
      },
      {
        name: "specul8r",
        regex: /(speculator)/gi,
        replace: "specul8r"
      },
      {
        name: "st8d",
        regex: /(stated)/gi,
        replace: "st8d"
      },
      {
        name: "st8r",
        regex: /(stator)/gi,
        replace: "st8r"
      },
      {
        name: "stimul8",
        regex: /(stimulate)/gi,
        replace: "stimul8"
      },
      {
        name: "str8n",
        regex: /(straiten)/gi,
        replace: "str8n"
      },
      {
        name: "subordin8",
        regex: /(subordinate)/gi,
        replace: "subordin8"
      },
      {
        name: "substanti8",
        regex: /(substantiate)/gi,
        replace: "substanti8"
      },
      {
        name: "termin8r",
        regex: /(terminator)/gi,
        replace: "termin8r"
      },
      {
        name: "toler8",
        regex: /(tolerate)/gi,
        replace: "toler8"
      },
      {
        name: "transl8r",
        regex: /(translator)/gi,
        replace: "transl8r"
      },
      {
        name: "ultim8",
        regex: /(ultimate)/gi,
        replace: "ultim8"
      },
      {
        name: "und8",
        regex: /(undate)/gi,
        replace: "und8"
      },
      {
        name: "upd8d",
        regex: /(updated)/gi,
        replace: "upd8d"
      },
      {
        name: "upd8r",
        regex: /(updater)/gi,
        replace: "upd8r"
      },
      {
        name: "valid8r",
        regex: /(validator)/gi,
        replace: "valid8r"
      },
      {
        name: "vapor8",
        regex: /(vaporate)/gi,
        replace: "vapor8"
      },
      {
        name: "veget8",
        regex: /(vegetate)/gi,
        replace: "veget8"
      },
      {
        name: "vener8",
        regex: /(venerate)/gi,
        replace: "vener8"
      },
      {
        name: "ventil8",
        regex: /(ventilate)/gi,
        replace: "ventil8"
      },
      {
        name: "vibr8",
        regex: /(vibrate)/gi,
        replace: "vibr8"
      },
      {
        name: "viol8",
        regex: /(violate)/gi,
        replace: "viol8"
      },
      {
        name: "vitri8",
        regex: /(vitriate)/gi,
        replace: "vitri8"
      },
      {
        name: "w8r",
        regex: /(waiter)/gi,
        replace: "w8r"
      },
      {
        name: "B Replacement",
        regex: /[bB]/g,
        replace: "8"
      }
];  
  }

start() {
BdApi.Patcher.before("VriskaTypingQuirk",
BdApi.Webpack.getModule(m => m?.sendMessage), "sendMessage",
(_, args) => {
const message = args[1];
  if (!message.content) return;           
    this.quirkPatterns.forEach(pattern => {
      message.content = message.content.replace(pattern.regex, pattern.replace);
    });

    if (message.content.trim() === "") {
        message.content = "‎";
    }
});
    }

    stop() {
        BdApi.Patcher.unpatchAll("VriskaTypingQuirk");
    }
};