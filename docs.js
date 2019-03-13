const fs = require('fs')
const { execSync } = require('child_process')
const es = fs.readFileSync('./README.md', 'utf-8')

const init = t => `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cobot</title>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@zeit-ui/style@latest/dist/style.css"</head><body class="hack"><div style="max-width: 1000px;margin: 0 auto;padding: 30px 0;">
${require('marked')(t)}<hr>This project is open-sourced on <a href="https://github.com/WittBulter/cobot">GitHub</a>.</div></body>`

execSync('(yarn add marked & mkdir dist) && cp -R .github ./dist')
fs.writeFileSync('dist/index.html', init(es))
