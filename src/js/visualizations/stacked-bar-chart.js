import * as d3 from "d3";

class StackedBarChart {
    constructor() {
        d3.csv("/data-stacked-bar.csv").then(d => chart(d))

        function chart(csv) {

            var keys = csv.columns.slice(1);

            var margin = {top: 30, right: 30, bottom: 70, left: 60},
                width = 1160,
                height = 415;

            var svg = d3.select("#uc-stackedbar-chart")
                .append("svg")
                .attr("class", "uc-barchart")
                .attr("viewBox", "0 0 " + width + " " + height)
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

            var x = d3.scaleBand()
                .range([0, width])
                .padding(0.4)

            var y = d3.scaleLinear()
                .rangeRound([height - margin.bottom, margin.top])

            var xAxis = svg.append("g")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .attr("class", "x-axis");

            var yAxis = svg.append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .attr("class", "y-axis");

            var z = d3.scaleOrdinal()
                .range(["#625194", "#F24F4F"])
                .domain(keys);

            var data = csv;

            data.forEach(function(d) {
                d.total = d3.sum(keys, k => +d[k]);
                return d
            });

            y.domain([0, d3.max(data, d => d3.sum(keys, k => +d[k]))]).nice();

            x.domain(data.map(d => d.Title));

            svg.selectAll(".x-axis")
                .call(d3.axisBottom(x)
                .tickSizeOuter(1))

            var group = svg.selectAll("g.layer")
                .data(d3.stack().keys(keys)(data), d => d.key)

            group.enter().append("g")
                .classed("layer", true)
                .attr("fill", d => z(d.key));

            var bars = svg.selectAll("g.layer").selectAll("rect")
                .data(d => d, e => e.data.Title);

            bars.enter().append("rect")
                .attr("width", x.bandwidth())
                .attr("x", d => x(d.data.Title))
                .attr("y", d => y(d[1]))
                .attr("height", d => y(d[0]) - y(d[1]))
                .attr("class", "uc-tooltip")
                .attr("data-tippy-content", d => d.data.Title)


            var text = svg.selectAll(".text")
                .data(data, d => d.Title);

            text.enter().append("text")
                .attr("class", "textlabel")
                .attr("text-anchor", "middle")
                .attr("x", d => x(d.Title) + x.bandwidth() / 2)
                .attr("y", d => y(d.total) - 5)
                .text(d => d.total)

        }
    }
}

export {StackedBarChart}
