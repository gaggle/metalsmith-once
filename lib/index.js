"use strict";

module.exports = once

/**
 * @param {Function} func
 * @param {Object} [ctx]
 * @returns {Function}
 */
function once(func, ctx) {
  return function (files, metalsmith) {
    func.call(ctx, files, metalsmith)
  }
}
