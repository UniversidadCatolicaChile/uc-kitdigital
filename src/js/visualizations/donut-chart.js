import * as d3 from "d3";

class DonutChart {
    constructor() {

        var width = 280;
        var height = 280;
        var radius = Math.min(width, height) / 2;

        var svg = d3.select("#donut-chart")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var data = [
            {"title": 'UC', "value": 53},
            {"title": 'U. Chile', "value": 31},
            {"title": 'Otras', "value": 14}
        ];

        var percentageFormat = d3.format(".1%");

        var total = d3.sum(data, function(d) {
            return d.value;
        });

        var color = d3.scaleOrdinal()
            .domain([data])
            //.range(["#FDE8DE", "#F79F73"])
            .range(["#625194","#440636", "#F24F4F"]);

        var pie = d3.pie()
            .value(function (d) {
                return d.value.value;
            });

        var data_ready = pie(d3.entries(data));

        data.forEach(function(d) {
            d.percentage = d.value  / total;
            console.log(percentageFormat(d.percentage));
        });

        svg
            .selectAll('arc')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(110)
                .outerRadius(radius)
            )
            .attr('fill', function (d) {
                return (color(d.data.key))
            });


        svg
            .append('g')
            .attr("transform", "translate(0,-30)")
            .attr("text-anchor", "middle")
            .attr("class", "center-group")
            .selectAll('sections')
            .data(data_ready)
            .enter()
            .append('text')
            .text(function (d) {
                return percentageFormat(d.data.value.percentage) + ' ' + d.data.value.title;
            })
            .attr("fill", function (d) {
                return (color(d.data.key))
            })
            .attr("transform", function(d, i) {
                return "translate(0,"+ i * 40 +")";
            })
            .attr("style", "font-size: 20px; font-weight: bold")

        /*
        svg .selectAll('lines')
            .data(data_ready)
            .enter()
            .append('line')
            .attr('x1', '-80')
            .attr('x2', 80)
            .attr('y1', function (d, i) {
                return (i+1) * -15;
            })
            .attr('y2', function (d, i) {
                return (i+1) * -15;
            })
            .attr("stroke-width", 1)
            .attr('stroke', "black")
        */

    }
}

export {DonutChart}
