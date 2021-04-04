var metadata; 
var names; 
var samples;
d3.json("data/samples.json").then((data)=> {

     samples = data.samples;
    // console.log(samples);
     names = data.names;
    // console.log(names);
     metadata = data.metadata;
    // console.log(meta);
    // console.log(Object.keys(samples));
    // console.log(Object.values(samples));
    // console.log(Object.entries(samples));

    var drop = document.getElementById("selDataset"); 

    names.forEach(function(item) {
        var o = document.createElement("option");
        var attr = document.createAttribute("value");
        attr.value = item;
        o.setAttributeNode(attr);
        o.text=item;
        drop.appendChild(o);
    });
});


//use this to build out metadata
function optionChanged(id) {
    for (var i=0; i<metadata.length; i++) {
        if (metadata[i].id == id) {
            break;
        }
    }

    //clears demographic chart
    refreshDemo(metadata[i]);
    //create plotly bar chart
    createBarChart(samples[i], names[i]);
    //create bubblechart
    createBubble(samples[i], names[i]);

    console.log(i);

};
 
function refreshDemo(data) {
    console.log("hello from refresh demo");
    console.log(data.id);
    console.log(data.ethnicity);
    console.log(data.gender);
    console.log(data.age);}

function createBarChart(data, names) {
    console.log("hello from create bar");
    console.log(data);
    var trace1 = {
        x: data.otu_ids,
        y: data.sample_values,
        type: "bar",
        orientation: "h"
      };
      
      var data = [trace1];
      
      var layout = {
        title: "'Bar' Chart"
      };
      
      Plotly.newPlot("bar", data, layout);
      
}

// function createBubble(data, names) {
//     console.log("hello from create bubble");
//     console.log(data);
// }


//
// d3.json("data/samples.json").then((data)=> {






// d3.json("data/samples.json").then((data)=> {
//     var sampleData = data.samples
//     console.log(sampleData)
// });

// sampleData.forEach((sample) => {
//     console.log(sample[1]);
  
//     // Get the entries for each object in the array
//     Object.entries(sample).forEach(([key, value]) => {
//     //   Log the key and value
//       console.log(`Key: ${key} and Value ${value}`);
//     });
//   });
  
  
// var sampleID = data.map(sample => sample[0]);
// var sampleOTU = data.map(sample => sample[1]);
  
// console.log(sampleID);
// console.log(sampleOTU);



// var ids = [];
// var OTU_ids = [];
// var OTU_labels =[];

// // Iterate through each recipe object
// sampleData.forEach((sample) => {

//   // Iterate through each key and value
//   Object.entries(sample).forEach(([key, value]) => {

//     // Use the key to determine which array to push the value to
//     if (key === "id") {
//         ids.push(value);
//     }
//     else if (key === "otu_ids" {
//         OTU_ids.push(value);
//     }
//     else {
//         OTU_labels.push(value);
//      });
//   });
  






// let trace1 = {
//     x: [],
//     y: [],
//     mode: "bar"
// };
// var data = [trace1];

// data.forEach(function(samp) {
// trace1.x.push(samp["sample_values"]);
// trace1.y.push(samp["otu_ids"]);
// });
// var layout = {
//     title: "enter bar title here"
// };
// Plotly.newPlot('bar', data, layout);

//  bar chart set up
// var trace1 = {
//     x: otu_ids,
//     y: sample_values,
//     type: "bar",
//     orientation: "h",
// };

// var data = [trace1];

// var layout = {
//     title: "enter bar title here"
// };
// Plotly.newPlot("bar", data, layout);





