# Weather-Dashboard

User Story:

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly


Acceptance Criteria:

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city


Screenshots:

Below is an image of what the User will see the first time they load the site.
![site intro](https://user-images.githubusercontent.com/107973681/184713523-a65cc639-b7d9-4e37-bcca-42c4611ce426.png)

Image below shows link to Bulma CSS API (Non-Bootstrap) 
![Bulma](https://user-images.githubusercontent.com/107973681/184714761-6d513ae0-dc9d-4ba9-bfb6-22e0e16182d3.png)

The image below shows the Javascript used to create the search function accessing the Open Weather API
![JS Search Function](https://user-images.githubusercontent.com/107973681/184714885-6b6991c3-473a-462f-89ad-6b4283da8ffc.png)

The image below shows the HTML used to create the framework for the searched lcoation weather box.
![HTML - Weather Search box](https://user-images.githubusercontent.com/107973681/184715045-4aed53b8-ef3d-43c1-ae6d-2490104047c6.png)

The image below shows the HTML used to create the framework for the Forecast weather box.
![HTML - Forecast Weather box](https://user-images.githubusercontent.com/107973681/184714972-a81ff355-1e72-4a07-8052-1358a5951586.png)

The image below shows the Javascript used to create the forecast variables
![js - forecast var](https://user-images.githubusercontent.com/107973681/184715168-6f178558-5240-4d1d-a46e-4a08c341ae10.png)

Below shows the Javascript used to create the weather varaibles for the forecast by day (1-5)
![JS - Get variables for forecast](https://user-images.githubusercontent.com/107973681/184715224-ad7011a7-96ee-426d-9454-04d82fb2a498.png)

The below image shows the method used to call the data pulled from Open Weather and how it is depicted in the forecast tiles.
![JS - post variables for forecast](https://user-images.githubusercontent.com/107973681/184715672-79a9411b-dfd8-4c60-a838-c3b4d1d0abb6.png)

The Image below shows the function for listing the cities from the search function and the click event for the button to clear the list.
![JS - Clear btn and city list](https://user-images.githubusercontent.com/107973681/184715322-63e528bc-5da5-4470-8900-d63eb51b33c6.png)

Below is an image of the site as the User would see it with locations searched.
![site intro w  data](https://user-images.githubusercontent.com/107973681/184715462-b0c5e0aa-0a7c-4602-aad9-1174c84768ca.png)


Site Link: https://salmandanesh93.github.io/Weather-Dashboard/

GitHub Link: https://github.com/SalmanDanesh93/Weather-Dashboard
