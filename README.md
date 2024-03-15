npm i --save-dev jest
npm i --save-dev @babel/preset-env babel-jest
npm i @babel/preset-react

add .babelrc in root folder:

```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

modify .eslintrc.cjs, add `jest: true`

```cjs
...
env: { browser: true, es2020: true, jest: true},
...
```
