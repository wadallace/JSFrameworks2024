# Project 2: Book Store (Final Project)

This is one of the options that you have for your final project. Please be sure to read the [instructions on getting started, project submission, and other information you need to know](../README.md).

For this project, you will be creating a book store web application, similar to Barnes & Noble and Amazon. Users who visit your book store signin, search for books, select books and view detailed book information. They can also save books to three different lists or “shelves”:

1. “Want to Read”
2. “Currently Reading”
3. “Read”

Together, these shelves will make up their “bookshelf”. You will include functionality for users to manage the contents of their bookshelves.

## Project Requirements

Your project must meet the following application setup, UI and coding requirements.

### Application Setup Requirements

- You must create a git repository for your application and it must be hosted publicly on Github.
- Your application should be easy to install and start. **IF WE CANNOT INSTALL OR START YOUR APPLICATION, IT IS AN AUTOMATIC FAILURE.**
- Your application should not crash at any point.
- You should include a _README.md_ file within the root of the git repository. The _README.md_ should have clear instructions on how to install and start the project.
- You must have a demo of your project hosted somewhere that is publicly accessible.

Note that we will go over setting up the project in class.

### Screens & UI Requirements

Your project should have four screens:

1. Signin
2. Search
3. Book Details
4. Bookshelf

#### Signin Screen

- Users should be able to signin with a username and password.
- If a user enters the wrong credentials, display a message telling the user that their credentials are not correct.

#### Search Screen

![Searching for a book](book-store-search-screen.png)

- Users should be able to search for different book titles.
- At least the book title, author(s) and a thumbnail of the book cover should appear in the search results. The API does not include the same information every time, so use conditional rendering; check to see if the data is there before displaying it on the screen.
- If there are no matching titles, display a message on the screen telling the user that no search results are found.
- Each book should link to the _Book Details_ screen.

#### Book Details Screen

![The Book Details screen](book-store-book-details-screen.png)

- Users will be able to view more detailed information on a single book.
- You will be getting the book information from an API. In addition to the book title, author(s) and cover image, include at least three other types of information about the book. Again, the API does not include the same information every time, so use conditional rendering; check to see if the data is there before displaying it on the screen.
- Users should be able to change which "shelf" a book belongs to.

#### Bookshelf Screen

- This page should contain three book lists or “shelves”:
  1. Want to Read
  2. Currently Reading
  3. Read

![The bookshelf](book-store-bookshelf-screen.png)

- Users should be able to see which shelf each book belongs to.
- Users should be able to move a book from one shelf to another.
- Users should be able to remove a book from their bookshelf.
- Each book should link to the _Book Details_ screen.

#### AJAX UI Requirements

- Loading and AJAX errors should not crash your application.
- Display error messages when AJAX requests fail.

### Routing & Navigational Requirements

Routing is a system for resource navigation. When a user clicks on a link, they navigate to the screen. Our router is what controls what screen the user gets.

- The application should have the following paths:

| Screen       | Must Be Logged In | Route              | Notes                                           |
| ------------ | ----------------- | ------------------ | ----------------------------------------------- |
| Signin       | No                | /                  |                                                 |
| Search       | Yes               | /search            |                                                 |
| Book Details | Yes               | /book/evuwdDLfAyYC | where _evuwdDLfAyYC_ is an example of a book ID |
| Bookshelf    | Yes               | /bookshelf         |                                                 |

- When a user successfully signs in, they should be redirected to their bookshelf.
- The user must be logged in to view the _Search_, _Book Details_ or _Bookshelf_ screens. If they are not, redirect them to the _Signin_ screen. (Hint: use protected routes.)
- When logged in, the user should be able to navigate to their _Bookshelf_ and the _Search_ screens from every page except the _Signin_ screen.

![An example of navigating to the Bookshelf and Search screens with a navbar](book-store-navbar-screen.png)

- In both the _Search_ and _Bookshelf_ screens, clicking on the book should navigate to the _Book Details_ screen.

![Navigating to the Book Details screen from the Bookshelf and Search screens](book-store-link-to-book-details-screen.png)

### Coding Requirements

- Your project must be written in TypeScript. (If you need to, you can use type of `any`, but this is not the best practice.)
- This application should contain at least four React components. Each of the four screens outlined earlier should be a separate, high-level React Component.
- You must use the React Router library.
- You must have a signin form and authenticate users.
- You must have protected routes (routes that the user must be logged in to see).
- You must use the Context API to store state that is shared universally between most components.
- For components that are functions, you should handle AJAX calls using styles that we covered in class. (`useEffect()` hook, a custom asynchronous hook, or Tanstack Query). You can mix different styles together.
- AJAX errors should be caught.
- Styling must be included, but you will not be graded on how visually appealing your application is or how well your CSS is written.

## API Documentation

As a part of this project, you will be making AJAX requests to the back-end book store server. The server has an API that will allow you to signin, search for books, find details about a single book, look up books in a user’s book store and update books in a user’s book store. In order for this to be a part of your Github portfolio, we have a written a server in Node.js, which you will install and run locally. We also have it setup so that you can easily upload the application to a hosting service.

The API is a REST based API that will return JSON data. Here is an overview of the API end-points. You will need to plugin the _bookId_, _shelfKey_ and _bookTitle_ into the URL.

| Action                                | Method | URL                                | Need JWT?   |
| ------------------------------------- | :----: | ---------------------------------- | ----------- |
| Signin and get a JWT token            |  POST  | /api/signin                        | No          |
| Get a list of books in a bookshelf    |  GET   | /api/bookshelf                     | Yes         |
| Add a book to the bookshelf           |  PUT   | /api/bookshelf/_bookId_/_shelfKey_ | Yes         |
| Remove a book from the bookshelf      | DELETE | /api/bookshelf/_bookId_            | Yes         |
| Move a book from one shelf to another |  PUT   | /api/bookshelf/_bookId_/_shelfKey_ | Yes         |
| View details on a single book         |  GET   | /api/book/_bookId_                 | Recommended |
| Search for books                      |  GET   | /api/book/search/_bookTitle_       | No          |

### Signin

Send a GET request to _/api/login_. You will need to include the username and password in the request in the JSON body.

```json
{
  "username": "hermione",
  "password": "granger"
}
```

You have two users you can signin with:

> Username: harry \
> Password: potter

> Username: hermione \
> Password: granger

POST a request the URL _/api/signin_. If the username and password is correct, you will get a response with a JWT token like this:

```json
{
  "message": "You did it! Success!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzI1IiwiaWF0IjoxNTg3MjQ1MzMxfQ.lC7PVh4Miwc_r6GO6UWelJAqDYBvaInC-qepdX_7Jdw"
}
```

If they are not correct, you will get a response like this below. The server will return a _401 Unauthorized_ error and, if you are using Axios, you must handle it within the catch block.

```json
{
  "message": "Unauthorized. Your username or password is not correct."
}
```

**One thing to note about the tokens is that they will be different each time you restart the back-end server. This means you will need to signin and get a new JWT token every time you restart.**

In many of the other APIs, you are required to included the JWT token you received in the _Authorization_ header. Here is an example with Axios:

```javascript
// You should not hardcode this
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNzI1IiwiaWF0IjoxNTg3MjQ1MzMxfQ.lC7PVh4Miwc_r6GO6UWelJAqDYBvaInC-qepdX_7Jdw";

axios("/api/bookshelf", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
```

See the AJAX requests in your [auth assignment](../../exercises/18-auth) and the [final project example](../../examples/final-project) for an example of authentication with JWT tokens.

### Get a List of Books in a User's Bookshelf

To lookup books in a user’s bookshelf, you will make a GET request to
_/api/bookshelf_. A token must be in the request, or you will get a _401 Unauthorized_ error.

Here is an example of a success response:

```json
{
  "books": {
    "wantToRead": [],
    "currentlyReading": [],
    "read": [
      {
        "id": "dgYvDwAAQBAJ", // This is the book ID, which you will use in other AJAX requests
        "title": "Eloquent JavaScript, 2nd Ed.",
        // Additional information
        "shelf": "read"
      }
    ]
  }
}
```

### Add a Book to the Bookshelf

In order to add a book to a bookshelf, you need both the book ID and shelf key. The three shelf keys are:

- wantToRead
- currentlyReading
- read

This is a PUT request. You will need to plug in both the book ID and shelf key into the URL. For example, if I had a book with the ID _dgYvDwAAQBAJ_ and I wanted to add it to my “Currently Reading” bookshelf, I would send the request to: \
_/api/bookshelf/dgYvDwAAQBAJ/currentlyReading_

A token must be in the request, or you will get a _401 Unauthorized_.

The response will be the same as getting all books in a bookshelf.

### Remove a Book from the Bookshelf

You will need to send a DELETE request with the _bookId_ in the URL. For example, if I'm removing a book with the ID _dgYvDwAAQBAJ_ from my bookshelf, I would send a DELETE request to: \
_/api/bookshelf/dgYvDwAAQBAJ_

A token must be in the request, or you will get a _401 Unauthorized_.

The response will be the same as getting all books in a bookshelf.

### Move a Book from One Shelf to Another

An example of when you would make this request is when a user wants to move a book from the “Currently Reading” to the “Read” category. In order to do this, you will need both the book ID and the new desired book shelf. If my book ID is _dgYvDwAAQBAJ_, and I want to move it to the "Read" shelf, I would send a PUT request to: \
_/api/bookshelf/dgYvDwAAQBAJ/read_

A token must be in the request, or you will get a _401 Unauthorized_.

The response will be the same as getting books in a bookshelf.

### View Details on a Single Book

In order to get the complete details on a single book, you need the book ID. If the book ID is _dgYvDwAAQBAJ_, you would send a GET request to this URL: \
_/api/book/dgYvDwAAQBAJ_

Here is an example response:

```json
{
  "book": {
    "id": "jAUODAAAQBAJ", // This is the book ID, which you will use in other AJAX requests
    "title": "Needful Things",
    "authors": ["Stephen King"],
    // Additional information
    "shelf": "currentlyReading"
  }
}
```

Although you are not required, you should send the JWT access token. Without it, the shelf will be omitted from the response.

### Search for Books

You will need to make a GET request.

If the user types text into the search bar, (e.g. "salmon fishing"), replace any white space with "+" and plugin the search entry into the url like this:
_/api/book/search/salmon+fishing_

Here is an example of a response:

```json
{
  "message": "Showing first 20 results",
  "books": [
    {
      "id": "0ETIjwEACAAJ",
      "title": "The Fisherman"
      // Additional information
    },
    {
      /* Book # 2 */
    },
    {
      /* Book # 3 */
    }
  ]
}
```

If no search results are found, your response will contain an empty array of books like this:

```json
{
  "message": "No books matching \"agskdjaghsdgd\" found.",
  "books": []
}
```

Our API is a wrapper around the Google API, which is rate limited. This means that after a certain number of requests per day (in the thousands), you will not be able to search for books. If you are performing a search for books on every keystroke, it is possible that you can reach this limit. In order to help with this, the server's API will not search for books on every single request. However, if would like your app to search for books with an `onChange`, `onInput`, or keyboard event, it is recommended that you [_debounce_](https://dev.to/jeetvora331/javascript-debounce-easiest-explanation--29hc) the search query. The [useDebounce library](https://usehooks.com/usedebounce) can help with this.
