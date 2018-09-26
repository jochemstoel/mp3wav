/* shortcut */
const { childProcess, fs, path } = require('internal.modules')

/* cmdmp3 (https://github.com/jimlawless/cmdmp3) */
module.exports = file => { 
    if(!fs.existsSync(file)) 
        throw new Error(`path "${file}" not found`)
    
    let cmdmp3 = childProcess.spawn(path.join(__dirname, 'bin', 'cmdmp3.exe'), [file], { shell: true })
    cmdmp3.stdout.setEncoding('utf8')
    //cmdmp3.stdout.pipe(process.stdout)
    cmdmp3.stderr.setEncoding('utf8')
    cmdmp3.stderr.pipe(process.stderr)
}