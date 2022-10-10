# Tests
Chai decrit le test, les assertions

Mocha va chercher tous les fichiers pour tester
```javascript
"scripts": {
    "test": "cross-env NODE_PATH=./ mocha --require tests/.setup.js tests/**/*.test.js",
    "test:watch": "cross-env NODE_PATH=./ mocha --watch --require tests/.setup.js tests/**/*.test.js",
  },

```

Should c’est execute d’abord puis donne a la fonction que je veux tester

Mocha

1. Describe permet de parler a mocha

2. It c’est 1 test


npm test : manuel

npm run test:watch : automatique
