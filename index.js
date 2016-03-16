'use strict';
const cssReqRegex = /^require\(['"].+?\.css['"]\);?/gm;
class WrapRequireCompiler {
  constructor (config) {
    this.config = config && config.plugins && config.plugins.wrapRequire || {};
    if (this.config.pattern) {
      this.pattern = this.config.pattern;
    }
    if (this.config.requireExt) {
      const regexStr = `^require\\(['"].+?\\.${this.config.requireExt}['"]\\);?`;
      this.regex = new RegExp(regexStr, 'gm');
    } else {
      this.regex = cssReqRegex;
    }
  }

  compile (file) {
    file.data = file.data.replace(this.regex, '(function (require) { $& }(function () {}));');
    return Promise.resolve(file);
  }

}

WrapRequireCompiler.prototype.brunchPlugin = true;
WrapRequireCompiler.prototype.type = 'javascript';
WrapRequireCompiler.prototype.pattern = /\.[tj]sx?$/;

module.exports = WrapRequireCompiler;
