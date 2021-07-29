![bellyb-bubbles](https://user-images.githubusercontent.com/74504885/127412089-71562469-59f6-4e0f-9abd-be9d3e297caa.PNG)


## Running the script on local host

![bellyb-http](https://user-images.githubusercontent.com/74504885/127411877-16539b82-40fd-459b-b79e-a849bdb5fdb0.PNG)

![bellyb-vsc1](https://user-images.githubusercontent.com/74504885/127411898-99431069-6245-483f-8fd7-15d934f15dc4.PNG)

![bellyb-vsc2](https://user-images.githubusercontent.com/74504885/127411910-456808f0-4296-4cc2-ade7-9a89c8be2004.PNG)

![bellyb-vsc3](https://user-images.githubusercontent.com/74504885/127411925-b6c20c14-aad2-425d-b405-9b0096bc3140.PNG)

![bellyb-vsc4](https://user-images.githubusercontent.com/74504885/127411941-baf6d3dd-b205-4aa3-a33e-f56987151856.PNG)

Similar to the bar chart, I created a bubble chart by feeding in the user input to a function. Within the function I created a trace that pulled all otu IDs and sample values. I used the samples values to create the size of the bubble and set the color scale to Earth. 

![bellyb-vsc](https://user-images.githubusercontent.com/74504885/127411975-c8199a96-b538-4527-b6c0-f643f761161c.PNG)



This challenge encorporates javaScript and Plotly to create charts that take a users input and displays the related results. To complete this challenge I created a table of demographic information and a bar chart and bubble chart each with a hover feature to display additional information. 

To create the demographic table I filtered the data on the user ID input and pulled the key, value pairs for the data. I then appended the pulled info as text. 

To create the bar chart I pulled the "option" input from the user to take the ID number and then fed it in to a function. Within the function, I created a trace that pulled in the top ten sample values and the corresponding otu IDs and labels. I reversed the top ten so they were in descending order and called them as a horitzontal bar. 

