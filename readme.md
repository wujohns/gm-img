# gm-img
A tool to merge images for game maker studio 2

## Install
using `npm install -g gm-img` to install  

## Usage
```
Usage: gmm [options] [command]

a tools to merge images for game maker studio 2

Options:
  -V, --version        output the version number
  -n, --name <name>    the name of the result image (default: "result")
  -s, --start <start>  the index of start image which is sorted by name，start f rom 0 (default: 1)
  -d, --dir <dir>      the dir of the images (default: "E:\\github\\merge-img")
  -h, --help           output usage information

Commands:
  m [imgs...]          merge images
```

## Use With Node
```js
const gmImg = require('gm-img');

gmImg({
    name: 'result', // String, the result file name
    start: 1,       // Number, the start image
    dir: `${process.cwd}`,  // String, the path of the images' dir
    imgs: [imagePath...],   // the images' path list, when it's not empty, the params 'start' and 'dir' will not work
}, () => {
    // callback function
});
```