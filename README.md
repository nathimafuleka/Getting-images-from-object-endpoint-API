## Fetching image from API every 10 seconds
    Using MetmuseumAPI, fetching a bunch of information of the object from the API, then display it and swping every 10 seconds.

# Libraries
  1. Axois
  2. MaterialUI
  3. TailwindCSS
  4. ReactCountDown
  
# Project structure
  
The website should change artworks every 10 seconds
When tapping on an artwork, display additional information about the artwork -- When displaying the art information, the timer should stop
Build the frontend with the templating language that is included with the framework.
  
 # Code Explanation
  First of all, creating an axios request function to get the data from API. But, some of the objects are missing and some of the images are missing in some parts. Totally, over 100,000 out of 400,000 objects did not have images.
  So, if we make a request on that missing object, we will end up with some errors.
  
  1. <b> Creating Axios Request </b> -
      On axios request, we must create a request with a single random number (object ID), which is not exceeded the total amount of 400,000 objects. Then, we may encounter the error becaues of missing object and images. At the situation, the best way is to change the object ID and then retry the request again.
      
  3. <b> Countdown Process </b> -
  On the countdown part, you can use setInterval function, or whatever libraries related to countdown. For me, react-countdown is easy to interact and re-render, so I recreate a countdown component and set it 10s timers, and configure pause and play on picture interaction.
   
  4. <b> Display </b> - I simply used MaterialUI & TailwindCSS on that part, UI may not on the stage of high attraction because I'm on rush. It may take time to add every entries to  the details, so I chose to display some of the data as the Dialog on clicking the image. You may change it later to add more items.
  

