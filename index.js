/**
 * @import {Root} from 'mdast'
 */

import { visit } from 'unist-util-visit';

export function myPlugin() {
  /**
   * @param {Root} tree
   * @returns {undefined}
   */
  return function (tree) {
    visit(tree, 'image', function (node) {
      console.log(node.url);
    });
  };
}
