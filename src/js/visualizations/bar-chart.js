import * as d3 from "d3";

class BarChart {
    constructor() {

        var margin = {top: 30, right: 30, bottom: 70, left: 60},
            width = 1160,
            height = 415;

        var svg = d3.select("#uc-barchart")
            .append("svg")
            .attr("class", "uc-barchart")
            .attr("viewBox", "0 0 " + width + " " + height)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g");

        d3.csv("/data-barchart.csv").then((data)=> {

            data.sort((b, a) => a.Value - b.Value);

            var x = d3.scaleBand()
                .range([ 0, width ])
                .domain(data.map(d => d.Label))
                .padding(0.2);

            var y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.Value)])
                .range([ height, 0]);

            svg.append("g")
                .attr("class", "uc-barchart-x-axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .style("text-anchor", "center");

            svg.selectAll(".bar")
                .data(data)
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.Label))
                .attr("y", (d) => y(d.Value))
                .attr("width", x.bandwidth())
                .attr("height", (d) => height - y(d.Value))
                .attr("fill", "#625194");

            svg.selectAll(".textlabel")
                .data(data)
                .enter()
                .append("text")
                .text((d) => d.Value)
                .attr("class", "textlabel")
                .style("text-anchor", "middle")
                .attr("x", (d) => x(d.Label) + (x.bandwidth()/2))
                .attr("y", (d) => y(d.Value) - 10)
        })
    }
}
export {BarChart}
