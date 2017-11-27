module.exports = {
  "verbose": true,
  "setupFiles": [ "<rootDir>/src/test/setup.js" ],
  "testRegex": "\\.(test|spec)\\.jsx?$",
  "testEnvironment": "jsdom",
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/test/empty.js",
    "\\.(css|s[ac]ss)$": "identity-obj-proxy"
  },
  "coverageDirectory": "./.coverage"
}
