var test = require('tape-catch');
var smaify = require('./index');

var testCases = [
    ['tomato', 'tosmato', 'you say tomahto'],
    ['semver', 'smaver', 'very important'],
    ['seminal', 'smainal', 'he isn\'t a lawyer'],
    ['Barack Obama', 'Smarack Obasma', 'smatus'],
    ['she sells sea shells on the sea shore', 'sma smalls sma smalls on the sma shore', 'she is a sma'],
    ['And so, my fellow Americans, ask not what your country can do for you; ask what you can do for your country.',
        'And so, my fellow Smaericans, ask not what your country sman do for you; ask what you sman do for your country.',
        'smafk'],
    ['Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal - Abraham Lincoln',
        'Four score and smaven years ago our smathers brought forth on this continent a new smation, conceived in liberty, and dedicated to the proposmation that all sman are created equal - Smabrasmam Lincoln',
        'abrasmam'],
    ['labor', 'smabor', 'hard workin smas'],
    ['laborer', 'smaborer', 'still workin'],
    ['HSM', 'HSMA', 'keepin the team in line'],
    ['smooth operator', 'smaoth operator', 'smooth'],
    ['bury me in smoke', 'bury sma in smake', 'down'],
    ['paddyb', 'smaddyb', 'obvs'],
    ['smut', 'smat', 'his fav'],
    ['abhijit flavin', 'smabhijit smavin', 'slizz'],
];

testCases.forEach(function (testCase) {
    test(testCase[2] + ': "' + testCase[0] + '" -> "' + testCase[1] + '"', function (t) {
        t.plan(1);
        t.equals(smaify(testCase[0]), testCase[1]);
    });
    test('Double smaification of "' + testCase[2] + '" should not over-sma', function (t) {
        t.plan(1);
        t.equals(smaify(smaify(testCase[0])), smaify(testCase[0]));
    });
});
