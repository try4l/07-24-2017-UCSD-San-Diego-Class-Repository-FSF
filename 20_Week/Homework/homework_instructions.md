# NYT React Search

### Overview

In this activity, you'll create a new React-based rendition of the New York Times Article Search application. This assignment requires you to create React components, work with helper/util functions, and utilize the React mounting lifecycle to query and display articles based on user searches. You'll also use Node, Express and MongoDB so that users can save articles to read later.

### Instructions

1. [Check out this mockup image](HW_Assignment.png). This explains how your site's components should function.

2. Create a MongoDB database called `nytreact`.

3. Using mongoose, then create an Article schema and model

4. At a minimum, articles should have each of the following fields:

   * `title` (Title of the stored article from nytimes.com)

   * `date` (publish date and time of the article)

   * `url` (URL of the article on nytimes.com)

   * Creating `documents` in your `articles` collection similar to  
     ```js
     {
       title: 'Ali Sells Jersey House And Moves to Chicago',
       date: '1974-07-18T00:00:00Z',
       url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
     }
     ```

5. Create a Node/Express/MongoDB/ReactJS app called `nytreact`. This will be a recreation of the [NYT Articles Search](https://nytarticle-search-fsf.herokuapp.com/) exercise application we built back in [Week 6](../../../06-ajax/01-Activities/16-NYTSearch/Solved/NYTArticleSearch_Best_Solution/nyt-example.html). Running this application will:

   * Create a Bootstrap layout similar to that displayed in [HW_Assignment.png](HW_Assignment.png). This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

     * If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.

   * You'll need several Express routes for your app:

     * `/api/articles` (get) - your components will use this to query MongoDB for all saved articles

     * `/api/articles` (post) - your components will use this to save an article to the database

     * `/api/articles` (delete) - your components will use this to delete a saved article in the database

     * `*` (get) - will load your single HTML page (with ReactJS) in `client/build/index.html`. Make sure you put this after all other GET routes

   * The layout should include at least two React Components for each page `Home` and `Saved`.

     * **Home** - contains all of the JSX to be rendered on the homepage. This component may contain other smaller components or JSX that renders plain HTML elements. This component should be able to query the NYT API for articles. It displays the results from the API search in a rendered list that displays the article title, publication date, and allows the user to visit an article's url or save the article to the MongoDB.

     * **Saved** - Renders articles that are saved in the MongoDB and allows the user to visit the article's url or delete it from the MongoDB. This page may be made up of multiple smaller components or JSX that renders plain HTML elements.

* Deploy your application to Heroku once complete. Feel free to use the [Mern Example](../../01-Activities/07-Ins_Mern) as a starting point. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

- - -

### Bonus Live Updates to Saved Articles

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
  
  * Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
  
  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

- - -

### Hosting on Heroku

Now that we have a backend to our applications, we use Heroku for hosting. Please note that while **Heroku is free**, it will request credit card information if you have more than 5 applications at a time or are adding a database.

Please see [Heroku’s Account Verification Information](https://devcenter.heroku.com/articles/account-verification) for more details.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
