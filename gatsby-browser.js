// prismjs
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./gatsby-prismjs.css")

// polyfill
require("intersection-observer")

const metaConfig = require("./gatsby-meta-config")

exports.onInitialClientRender = () => {
  require("typeface-nunito")
}
