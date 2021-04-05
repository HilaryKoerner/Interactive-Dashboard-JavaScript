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

//loop thorugh data to grab data, create functions to be called later
function optionChanged(id) {
    for (var i=0; i<metadata.length; i++) {
        if (metadata[i].id == id) {
            break;
        }
    }
    //create demographic chart
    createDemo(metadata[i]);
    //create plotly bar chart
    createBarChart(samples[i], names[i]);
    //create bubblechart
    createBubble(samples[i], names[i]);

    console.log(i);

};
 
function createDemo(data) {
    console.log("hello from create demo");
    console.log(data.id);
    console.log(data.ethnicity);
    console.log(data.gender);
    console.log(data.age);
    console.log(data.location);
    console.log(data.bbtype);
    console.log(data.wfreq);
}

function createBarChart(data) {
    console.log("hello from create bar");
    console.log(data.id);
    console.log(data.otu_ids);
    console.log(data.sample_values);
    console.log(data.otu_labels);

    var trace1 = {
        x: data.sample_values.slice(0,10).reverse(),
        y: data.otu_ids.slice(0,10).map(otu=> `OTU${otu}`).reverse(),
        text: data.otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"
    }
    var data = [trace1];

    var layout = {
      title: "OTU Chart"
    };
    Plotly.newPlot("bar", data, layout);
};

function createBubble(data, names) {
    console.log("hello from create bubble");
    console.log(data.otu_ids);
    console.log(data.sample_values);
    console.log(data.otu_labels);
    
    var trace1 = {
        x: data.otu_ids,
        y: data.sample_values,
        text: data.sample_values.map(samp_values =>`size:${samp_values}`),
        mode: 'markers',
        marker: {
          color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
          size: data.sample_values
        }
    } 
      var data = [trace1];
      
      var layout = {
        title: 'Bubble Chart Hover Text',
        showlegend: false,
        height: 600,
        width: 600
      };
      
      Plotly.newPlot('bubble', data, layout);

}


