const { prompt } = require('inquirer')

module.exports = async (markdown, metadata) => {
  console.log(markdown, 1)
  const { intro } = await prompt([{
    name: 'intro',
    message: 'One-Line Release Summary',
  }])
  
  if (!intro) {
    console.log('release summary is required!\ntry agian.')
    return process.exit(1)
  }
  
  return `${intro}\n\n${markdown}`
}
