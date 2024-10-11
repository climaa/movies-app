# The challenge

This is a technical test app for this challenge you will need to fix the following issues:
The movies-app it the react front end application
The api folder contains a small express api

1. Several images from the app are not loading properly
2. Fix the TODO list in order for the react application
3. Add the required unit testing for your fixes
4. Move to the backend challenge and complete the TODO list
5. Add to the front end a new feature to sell movies to another studio
6. Add a log (plain text file) with the issues that you faced during the test and how you solved them
7. (Optional) fix any vulnerabilities you find

## Tip

We recommended using the editor VS Code with suggested extensions. Keep eye into file `.vscode/extensions.json`

### For testing application

Please use node **v20**

Run backend:

```shell
cd api
npm install
npm run build
npm start
```

Run the front end

```shell
cd movies-app
npm install
npm run build
```

Read: <https://create-react-app.dev/docs/deployment/#static-server>

Continuing executing

```shell
npm install -g serve
serve -s build -l 3001
```
