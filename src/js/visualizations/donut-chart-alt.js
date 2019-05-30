import * as d3 from "d3";

class DonutChartAlt{
    constructor() {

        var width = 280;
        var height = 280;
        var radius = Math.min(width, height) / 2;

        var svg = d3.select("#donut-chart-alt")
            .append("svg")
            .attr("viewBox", "0 0 " + width + " " + height)
            .attr("width", width)
            .attr("height", height)
            .attr("class", "uc-donutchart")
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var obj = [
            {"title": "UC", "value": 70, "max": 100},
            {"title": "otro", "value": 30, "max": 100}
        ];

        var data = [];
        for (var key in obj) {
            data.push({
                name: obj[key].title,
                value: obj[key].value
            });
        }

        console.log(data);

        var percentageFormat = d3.format(".0%");

        var total = d3.sum(data, (d) => d.value);

        var color = d3.scaleOrdinal()
            .domain([data])
            .range(["#FDE8DE", "#F79F73"]);

        var pie = d3.pie()
            .value((d) => d.value.value);

        var data_ready = pie(d3.entries(data));

        data.forEach((d) => d.percentage = d.value  / total);

        svg
            .selectAll('arc')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', d3.arc()
                .innerRadius(110)
                .outerRadius(radius)
            )
            .attr('fill',  (d) => color(d.data.key));

        svg
            .append('g')
            .attr("transform", "translate(0,-30)")
            .attr("text-anchor", "middle")
            .attr("class", "center-group")
            .selectAll('sections')
            .data(data_ready)
            .enter()
            .append('text')
            //.text((d) => percentageFormat(d.data.value.percentage))
            .attr("fill", "#440636")
            //.attr("transform", (d, i) => "translate(0,"+ i * 40 +")")
            .attr("style", "font-size: 20px; font-weight: bold")

        // svg .append('g')
        //     .selectAll('.lines')
        //     .data(data_ready)
        //     .enter()
        //     .append('line')
        //     .attr('x1', '-80')
        //     .attr('x2', 80)
        //     .attr('y1', function (d, i) {
        //         return (i+1) * -15;
        //     })
        //     .attr('y2', function (d, i) {
        //         return (i+1) * -15;
        //     })
        //     .attr("stroke-width", 1)
        //     .attr('stroke', "black")

    }
}

export {DonutChartAlt}
