d3.json("data/samples.json").then((data)=> {
    var samples = data.samples;
    console.log(samples);
    var names = data.names;
    console.log(names);
    var meta = data.metadata;
    console.log(meta);
    var sampleUTO = samples[0];
    console.log(sampleUTO)
});
// first bar chart set up
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





