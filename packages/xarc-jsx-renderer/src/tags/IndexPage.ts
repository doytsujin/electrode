/**
 * @packageDocumentation
 * @module @xarc/jsx-renderer
 */

/* eslint-disable filenames/match-regex */

import { Component } from "../Component";

/**
 * Start the template with DOCTYPE tag
 *
 *
 */
export class IndexPage extends Component {
  static memoize(props) {
    return `<!DOCTYPE ${props.DOCTYPE || "html"}>`;
  }
}
