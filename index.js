const buster = require('gulp-buster');

module.exports = buster({
    fileName: 'cachebuster.php',
    formatter: function (hashes) {
        const buffer = [];
        Object.keys(hashes).sort().forEach((key) => {
            buffer.push("\t'" + key.replace(/^view\/layout\//, '') + "' => '" + hashes[key] + "',\n");
        });
        return '<?php\n/*! GENERATED FILE, DO NOT EDIT */\nreturn [\n' + buffer.join('') + '];';
    }
});