module.exports = {
  "prompts": {
      "name"       : {
          "type"    : "string",
          "required": true,
          "message" : "Project name"
      },
      "description": {
          "type"    : "string",
          "required": false,
          "message" : "Project description",
          "default" : "A new Vue.js project"
      },
      "author"     : {
          "type"   : "string",
          "message": "Author"
      },
      "test": {
          "type": "confirm",
          "message": "Need test?"
      }
  },
  "filters":{
    "./test": "test"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/waka-templates/vue-webpack"
}
