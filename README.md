# Weekend Movie Sagas

## Description

Updated the provided code to use sagas and added features for the user.

### How I went about my work:

1.  Always initialize first:  npm install and split my terminal to npm run server and npm run client.

2.  I like to have my components set up and routed before diving any deeper.

    *   Made folders and files for each component I'd need.
    *   Added routes in the app.jsx for each component.
    *   Put in some buttons to route with using history.push

3.  I had a plan in mind for the form to add a movie so I tackled that next.

    *   Made a form with inputs and a select dropdown for the genres that required a map from the database table of genres.
    *   Used state object to capture my data and dispatch to the reducer/saga/database.

4.  The last bit of functionality for base mode was getting a view of the details for a specific movie on click from the MovieList(home) view page.

    *  Couldn't quite figure out the sql I'd need to avoid duplicates(DISTINCT was no help) of the title, poster, and description while getting all genres.
    *  I know there is a way to query twice in the GET route but I do not know the syntax and I'd prefer to learn the right way.
    *  I used a workaround to give me only the first instance of title, poster, and description while