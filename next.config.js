const path = require('path');

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        _includePaths: [path.join(__dirname, 'styles')],
    }
};
