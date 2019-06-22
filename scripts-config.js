const path = require('path')

require('dotenv').config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
})

module.exports = [
  {
    key: 'gtag',
    async: true,
    src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`,
    variables: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${process.env.GA_TRACKING_ID}');
`
  }
]
