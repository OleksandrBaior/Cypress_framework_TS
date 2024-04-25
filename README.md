<div align="center"> 
<img <img src="https://static-00.iconduck.com/assets.00/cypress-icon-2048x2045-rgul477b.png" width="80"/>
 <h1>Cypress-framework</h1>
</div>

## ⚡️ Object for testing
Web site - [telnyx.com](https://telnyx.com/)

##  📦 Setup
1. Install [node.js](https://nodejs.org/en/) - JavaScript runtime environment
2. Clone git repository `git clone https://github.com/OleksandrBaior/Cypress_framework_TS.git`
3. Install project dependencies specified in the package.json `npm install`

## ⚙️ Running Tests

To open the cypress tool use command:

```
npm run open:cypress
```
To run test in chrome browser:
```
npm run e2e:chrome
```
To run test in edge browser:
```
npm run e2e:edge
```
To run test in electron browser:
```
npm run e2e:electron
```
To run the specific spec:
```
npm run e2e:chrome -- --spec "cypress/e2e/my-spec.cy.js"
```

## 📜 Allure Report

For reporting used Allure Report - Automation Test Reporting Tool  
Learn more about Allure Report at [Allure](https://allurereport.org/)

To generate allure report:

```
npm run generate:allure
```

To open allure report:

```
npm run open:HTMLallure
```
## 🔑 License

[MIT](https://github.com/OleksandrBaior/Cypress_framework_TS?tab=MIT-1-ov-file#)


