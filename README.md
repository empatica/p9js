# p9js
Lightweight js library

## Build
```
npm install
./node_modules/.bin/gulp build
```

## Usage
Import dist file, `p9.js` or the minified version `p9.min.js`. 

```
var selector = window.P9.get($QUERY);
selector.addClass($CLASS_NAME);
selector.removeClass($CLASS_NAME);
selector.hasClass($CLASS_NAME);
selector.hasClass($CLASS_NAME);
selector.click($CALLBACK);
selector.load($CALLBACK);
selector.event($EVENT_NAME, $CALLBACK);
selector.data($DATA_NAME);
```
