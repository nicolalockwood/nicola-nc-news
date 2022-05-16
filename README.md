# Link to hosted page

This web application has been hosted with netlify:

https://nicolas-nc-news-app.netlify.app/articles

# What is this project

This project was created using the api built with a series of end points that pull articles, users and article comments from a sql database https://nicola-nc-news.herokuapp.com/api/endpoints

Using react, a UI has been built to disply articles, with the ability to like and see more. Seeing more will allow the user to view the full article and its corresponding commnets. Users are able to sort the articles by date created, comment ammount, and vote ammount in ascending or decending order. Results are defaulted to descending by time created, with a limit of 10 articles/comments per page and the ability swap pages to view more articles/comments using pagination.

If the user logs in, they are able to add articles and comments, or delete any article or comment that they have posted.

Users can add any new topic they wish, to allow other users to add articles and comments.

## To run locally

Please git clone this repo, then ensure you are in the correct file in your terminal command line by using cd/ls

### `npm install`

This will ensure all the correct dependencies are copied onto your machine.

### `npm start`

This will launch a local version of the web app onto a mock page.
