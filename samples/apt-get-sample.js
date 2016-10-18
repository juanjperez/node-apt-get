var apt = require('../');
apt.update().on('close', function() {
    apt.install('vim', {
        'assume-yes': true
    }).on('close', function(code) {
        if (code !== 0) return console.error('Vim not installed');
        console.log('Vim installed');
    });
});