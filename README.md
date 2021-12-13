# Weekend Movie Sagas

## Description

A list of movies that allows for a user to click a movie and get the details, or for the user to add a movie to the list.  Updated the provided code to use sagas and added features for the user.

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
    *  I know there is a way to query twice in the GET route but I do not know the syntax and I'd like to be smart about my battles.
    *  I used a workaround to give me only the first instance of title, poster, and description while mapping all of the genres.

5.  Added sugar, spice, and nothing very nice to style the pages.


## Reflection

1.  Things I Need To Learn/Improve

    *   I'm not sure how to GET multiple SELECTs in one route other than putting it in the .then.  Maybe there's a better way?
    *   

2.  Things To Do Better

    *   The current way I'm rendering my details page is pretty gross and I would love to do it in a cleaner way.
    *   I don't like how the alerts are used for input validation on the AddMovie page.  I wanted to use required but couldn't get it to work. 
    *   A lot of my HTML is slightly off center.
    *   I'd like to learn more CSS frameworks to improve and speed up my styling process.
    *   Got distracted by the code and didn't commit nearly enough.
    *   Left my README in the dust after making my components.

3.  Things I Would Add With More Time/Knowledge

    *   Ratings - Would've need a new table or column in the database. 
    *   User specific favorites.
    *   Sort by genres on the main page or search by title.
    *   Navigation bar at the top.
    *   Ability to remove/update movies.