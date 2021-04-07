# plotly_challenge

This challenge encorporates javaScript and Plotly to create charts that take a user input and display the related results. To complete this challenge I created a table of demographic information and a bar chart and bubble chart each with a hover feature to dusplay additional information. 

To create the demographic table I filtered the data on the user ID input and pulled the key, value pairs for the data. I then .....

To create the bar chart I pulled the "option" input from the user to take the ID number and then fed it in to a function. Within the function, I created a trace that pulled in the top ten sample values and the corresponding otu IDs and labels. I reversed the top ten so they were in descending order and called them as a horitzontal bar. 

Similar to the bar chart, I created a bubble chart by feeding in the user input to a function. Within the function I created a trace that pulled all otu IDs and sample values. I used the samples values to create the size of the bible and set the color scale to Earth. 
