import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

export function myPlugin() {
  return function (tree: Root) {
    visit(tree, 'image', function (node) {
      console.log(node.url);
    });
  };
}
