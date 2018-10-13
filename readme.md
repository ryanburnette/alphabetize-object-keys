# alphabetize object keys

[![npm version](https://badge.fury.io/js/%40ryanburnette%2Falphabetize-object-keys.svg)](https://badge.fury.io/js/%40ryanburnette%2Falphabetize-object-keys)

Turn this...

```javascript
var obj = {
  c: 'c',
  b: 'b',
  a: {
    b: 'b',
    a: 'a'
  }
}
```

...into this...

```javascript
var obj = {
  a: {
    a: 'a',
    b: 'b'
  }
  b: 'b',
  c: 'c',
}
```
