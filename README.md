--- EL KILALI HAMZA --- Movie App

This small app lists searched movies from OMDb API.

### SEARCH Screen
I created a search screen that has an input mask which can either be used to search for a precise movie
or render a list of film that contains the word in the input.
Each entry contains the movie title, the poster, the type and the release Year.

### DETAILS Screen
This screen shows film details

### Design 
I took the designs of those links and did a mix :
https://dribbble.com/shots/11413278-Imdb-mobile-app-design
https://dribbble.com/shots/7879826-Movie-and-TV-shows-App

### Adding a movie to the list of favorites
For this task, I used redux to make the user add a movie to his favorite films

### Issues : 
* Unfortunetly, I was busy with my exams this week-end, I started the developement Monday morning. I didn't actually have enough time to return a 
  perfect code.

* I had unexpected issues with the navigation and couldn't find out what is wrong with this error :

     RNGesturehandlermodule.attach gesture handler got 3 arguments, expected 2
I couldn't manage the navigation right but know exactly how to implement it. Eventough the navigation didn't work, I developed the front-end of the
details screen, you can test it by replacing <Search/> by <Details/> components in App.js file. 

* Adding a movie to favorites is also disfunctionnal

### What I could improve : 

* Navigation :
-- For the navigation, I use a stack navigation between the Search screen and the detail screen. As you can see in stacknav.js, I included a 
back button arrow in the header left of navigation.
-- When the user press on a movie, he should be moved to the details screen of the movie selected, for this, I add the title name in the 
second parameter of navigation.navigate() method in order to render the right movie details, Then in the detail screen, I do an API request with
the title of the movie selected

* Favorites : 
-- Add the add to favorite Button, in the navigation's header right of the details screen

### Conclusion

Even if the application that I developed is not complete. Please consider that I developed it in about ten hours. I want to let you know that I know how to implement everything that has been requested. Waiting for your return.


