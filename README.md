# Google maps api integrated with openweathermap api to display weather info of a particular location with user's input.

> ##Objective

* A simple google map is displayed.
*	A search box is provided to the user, to input the location.
*	A marker is dropped on the location upon input.
*	An info window is opened with the current weather details upon clicking on the marker.
*	The user is given an option to close the info window while the marker is still visible and opening the info window upon clicking the marker again.
*	The application allows the user to search multiple locations.
*	The marker is removed from a location once the user types in a new location name and sets the marker on the new location

> ##Use Cases

1.	User inputs the location in the search box provided. 
2.	User can search current weather details for more than one location.
3.	Map drops a marker once the user inputs the location. User can click on the marker to show an info window where current weather details of the location is displayed.
4.	User can also close the info window by clicking the “x” mark on the corner of the info window. User can click on the marker to show the info window again.

> ##Test cases

|User Input|	Expected output|	Result|
| ------------- |:-------------:| -----:|
|Location name|	Auto fills the location| Success|
|Auto filled location + enter or mouse click| Focus on the location with a marker dropped|	Success|
|Click on the marker|	Info window pops up on the marker|	Success|
|Clicks on “x” on the info window|	Info window closes|	Success|
|Clicks on the marker again|	Info window opens|	Success|

