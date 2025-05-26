# cypress-framework-ABAutomation
Cypress framework created using ABAutomation Hub 

you can clone the repository on local machine or

# create new repo from command line ---

echo "# Cypress-Framework-ABAutomation" >> README.md
git init
git add README.md
git commit -m "first commit" 
git branch -M main 
git remote add origin https://github.com/milanmmore2025/cypress-framework-ABAutomation.git 
git push -u origin main

# Cypress automation changes - 
1. Open git repository folder in editor (VS Code)
2. Open Terminal window & Give Following commands
npm init -y
npm install Cypress --save-dev
3. Open Cypress Testrunner and set E2E configuration and create default spec file
npx cypress open
4. remove all the files from e2e folder.
5. create folder pages where you can store class objects for all teh pages in the application
6. To start with application - 
    a. Register Flow
    base url - https://naveenautomationlabs.com/opencart
    register url - base url + /index.php?route=account/register 
    create class object named registerPage.js in pages folder where create web elements get method and action methods required to access the page
    create data file in fixture folder.
    create test file in e2e folder.
    Testing steps are as follows
        1. Launch URL
        2. Enter values for all the fields
        3. Select policy checkbox as checked.
        4. Click on Continue button.
    Expected result:
    Success message should be displayed on the screen.

    


