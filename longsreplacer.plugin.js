//META{"name":"sreplacer"}*//
var sreplacer = function () {};
//Thanks to iamusername for the improvement.
sreplacer.prototype.convert = function () {
    $(".markup").each(function() {
        var msg = $(this).html();
        var replacements = {
            "ſ":"s",
            "shew":"show",
			"amn’t":"am not",
			"amn't":"am not",
			"chuse":"choose",
			"scissars":"scissors"
        };
        var replacementMade = false;
        for (var search in replacements) {
            var replacement = replacements[search];
            if (msg.indexOf(search) >= 0) {
                msg = msg.replaceAll(search, replacement, true);

                replacementMade = true;
            }
        }
        if (replacementMade !== false) {
            $(this).html(msg);
        }

    });
};


sreplacer.prototype.onMessage = function () {
    this.convert();
};
sreplacer.prototype.onSwitch = function () {
    this.convert();
};
sreplacer.prototype.start = function () {
    this.convert();
};

sreplacer.prototype.load = function () {};

sreplacer.prototype.unload = function () {};

sreplacer.prototype.stop = function () {};

sreplacer.prototype.getSettingsPanel = function () {
    return "";
};
sreplacer.prototype.getName = function () {
    return "ſ Replacer";
};
sreplacer.prototype.getDescription = function () {
    return "Replaces the long s (ſ) and turns it into a regular s.";
};
sreplacer.prototype.getVersion = function () {
    return "0.0.1";
};
sreplacer.prototype.getAuthor = function () {
    return "Iratu";
};

//Credits: http://stackoverflow.com/a/6714233
String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 