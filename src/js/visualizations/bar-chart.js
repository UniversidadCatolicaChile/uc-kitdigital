import * as d3 from "d3";

class BarChart {
    constructor() {
        console.log('barchart');

        var margin = {top: 30, right: 30, bottom: 70, left: 60},
            width = 1160 - margin.left - margin.right,
            height = 415 - margin.top - margin.bottom;

// append the svg object to the body of the page
        var svg = d3.select("#bar-chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv").then((data)=> {

            // sort data
            data.sort((b, a) => {
                return a.Value - b.Value;
            });

            // X axis
            var x = d3.scaleBand()
                .range([ 0, width ])
                .domain(data.map(function(d) { return d.Country; }))
                .padding(0.2);

            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0))")
                .style("text-anchor", "center");

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, 13000])
                .range([ height, 0]);

            // Bars
            svg.selectAll("mybar")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function(d) { return x(d.Country); })
                .attr("y", function(d) { return y(d.Value); })
                .attr("width", x.bandwidth())
                .attr("height", function(d) { return height - y(d.Value); })
                .attr("fill", "#625194")

        })
    }
}
export {BarChart}
