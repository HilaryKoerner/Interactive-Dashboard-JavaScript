d3.json("data/samples.json").then((data)=> {
    var samples = data.samples;
    console.log(samples);
    var names = data.names;
    console.log(names);
    var meta = data.metadata;
    console.log(meta);
    var ids = data.samples;
    console.log(ids); 

});


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





