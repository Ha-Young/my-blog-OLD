// prismjs
require("prismjs/themes/prism-solarizedlight.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css")
require("./gatsby-prismjs.css")

// polyfill
require("intersection-observer")

exports.onInitialClientRender = () => {
  require("typeface-nunito")
}
