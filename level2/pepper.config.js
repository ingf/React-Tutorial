module.exports = {
    // debug host
    "host": "0.0.0.0",

    // debug port
    "port": "9527",

    // pepper src entry, also inner webpack entry, default to `src/pages/index.js`
    "base": "src",

    // target build dir
    "build": "dist",

    // CDN domain, or just leave it blank if not using
    "static": {
        "start"         :   "",                         // here use relative path
        "test"          :   "",
        "pre"           :   "http://static.wepiao.com/",// here use CDN domain
        "release"       :   "http://static.wepiao.com/" // here use CDN domain
    },

    // API base entry
    // config `mock.js` for CROS solution
    "api": {
        "start"         :   "",                         // local api base entry
        "test"          :   "",
        "pre"           :   "http://wx.wepiao.com",     // online api base entry
        "release"       :   "http://wx.wepiao.com"
    },

    // third patry libs to bundle
    "vendor": ["react", "react-dom"],

    // dir alias, could use globally, despite of CWD
    "alias": {
        "scss"          :   "scss",
        "wepiao"        :   "components",
        "utils"         :   "utils"
    },

    // source map options
    "devtool": "source-map",

    // switch for CSS Modules
    "css_modules": true,

    // switch for eslint
    "eslist": false,

    // template settings
    "template": {
        "title"         :   "",                         // inner template document title
        "keywords"      :   "",                         // inner template meta keywords
        "description"   :   "",                         // inner template meta description
        "viewport"      :   "",                         // inner template meta viewport
        "path"          :   "template.html"             // custom template path, omit it if your desire to use inner template
    },

    // custom default page dir
    "pages": "pages",

    // custom default component dir
    "components": "components",

    // custom default scss dir
    "scss": "scss",

    // switch template ES mode, ['es5' or 'es6']
    "esmode": "es6"
}
