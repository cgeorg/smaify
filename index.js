function smaify(str) {
    return str && [
            //one-offs
            [/ham/gi, 'smam'],
            [/fla/gi, 'sma'],
            //regular rules
            [/(s)[aeiou]m/gi, '$1ma'],
            [/(s)[a-ln-z]?[aei]/gi, '$1ma'],
            [/\bAm([^aA])/g, 'Sma$1'],
            [/(^|[^M])AM([^aA])/g, '$1SMA$2'],
            [/(^|[^m])am([^a])/gi, '$1sma$2'],
            [/\bA([^ ]{3})/g, 'Sma$1'],
            [/\ba([^ ]{3})/g, 'sma$1'],
            [/([^sS])m[aiou]/gi, '$1sma'],
            [/\b[BCDFGHJKLMNPQRSTVWXYZ]a/g, 'Sma'],
            [/\b[bcdfghjklmnpqrstvwxyz]a/gi, 'sma'],
            [/SM[EIOU]/g, 'SMA'],
            [/sm[eiou]/gi, 'sma'],
            [/SM([^aA]|$)/g, 'SMA$1'],
            [/sm([^a]|$)/gi, 'sma$1'],
        ].reduce(function (str, r) {
            //console.log(str+'.replace '+r[0]+': '+str.replace(r[0], r[1]));
            return str.replace(r[0], r[1]);
        }, str);
}

module.exports = smaify;