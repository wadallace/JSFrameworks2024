# Create Read Update Delete (CRUD) and Validation Challenge

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Reason for the Challenge

Managing state is often a source of heartache for many developers. In these next few challenges will help you improve your ability to manage your app's state.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/08-crud/
code . # if you would like to open this in a separate VSCode window
npm install
npm start
```

To stop the application, press `ctrl+c`.

To run the tests:

```shell
npm run test
```

If you do not see any test results, press `a` to run all tests. The tests will rerun whenever you make a change.

To stop the tests, press `ctrl+c`.

## User Story

As a user, I would like to have an app that allows me to record my food purchases. The app should allow me to add grocery items to a list, update grocery items, and remove items from the list.

## Acceptance criteria:

1. I should be able to add a grocery item with the cost of the item to my grocery list.
2. I should be able to see the total cost of my groceries.
3. I should be able to delete a single item from my grocery.
4. There should be validation. Both the name of the grocery item and the cost is required and the app should display some kind of feedback when these are not filled out.
5. I should be able to clear everything from the list by pressing a button.

![](crud-demo.gif)
