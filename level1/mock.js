module.exports = [{
    path: /\/apis/,
    method: 'get',
    data: function(options) {
        return [{ // response data
            id: 1,
            first: '@FIRST',
        }, {
            id: 2,
            first: '@FIRST',
        }, {
            id: 3,
            first: '@FIRST',
        }]
    }
}, {
    path: /\/api/,
    method: 'get',
    data: {
        'list|1-10': [{
            'id|+1': 1
        }]
    }
}, {
    path: '/cgi',
    proxy: 'http://192.168.101.34:6789/'
}];
