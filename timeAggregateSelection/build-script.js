const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/timeAggregateSelection/runtime.js',
        './dist/timeAggregateSelection/polyfills.js',
        './dist/timeAggregateSelection/main.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/TimeAggregateSelection.js')
    console.info('Element created successfully!')

})()