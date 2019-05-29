import * as d3 from "d3";

class sunburstChart {
    constructor() {
        /*
        // JSON data
        var nodeData = {
            "name": "comunidad", "children": [{
                "name": "Estudiantes",
                "children": [
                    {"name": "Pregrado", "size": 26197},
                    {"name": "Magíster", "size": 3160},
                    {"name": "Doctorado", "size": 1169},
                    {"name": "Postítulo", "size": 744}
                ]
            }, {
                "name": "Académicos",
                "children": [
                    {"name": "Jornada completa", "size": 1850},
                    {"name": "Media jornada", "size": 499},
                    {"name": "Jornada parcial", "size": 1206}
                ]
            }, {
                "name": "Personal",
                "children": [
                    {"name": "Profesionales", "size": 1545},
                    {"name": "Administrativos", "size": 1443},
                    {"name": "Personal de servicio", "size": 285}
                ]
            }]
        };

        // Variables
        var width = 500;
        var height = 500;
        var radius = Math.min(width, height) / 2;
        var color = d3.scaleOrdinal(["#ffffff","#625194","#440636", "#F24F4F"]);

        // Create primary <g> element
        var g = d3.select('#uc-sunburst-chart')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

        // Data structure
        var partition = d3.partition()
            .size([2 * Math.PI, radius]);

        // Find data root
        var root = d3.hierarchy(nodeData)
            .sum(function (d) { return d.size});

        // Size arcs
        partition(root);
        var arc = d3.arc()
            .startAngle(function (d) { return d.x0 })
            .endAngle(function (d) { return d.x1 })
            .innerRadius(function (d) { return d.y0 })
            .outerRadius(function (d) { return d.y1 });

        // Put it all together
        g.selectAll('g')
            .data(root.descendants())
            .enter().append('g').attr("class", "node").append('path')
            .attr("display", function (d) { return d.depth ? null : "none"; })
            .attr("d", arc)
            .style('stroke', '#fff')
            .style("fill", function (d) { return color((d.children ? d : d.parent).data.name); });


        // Populate the <text> elements with our data-driven titles.
        g.selectAll(".node")
            .append("text")
            .attr("class", "small-label")
            .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")rotate(" + computeTextRotation(d) + ")"; })
            .attr("dx", "-20") // radius margin
            .attr("dy", ".5em") // rotation align
            .text(function(d) { return d.parent ? d.data.name : "" });

        function computeTextRotation(d) {
            var angle = (d.x0 + d.x1) / Math.PI * 90;  // <-- 1

            // Avoid upside-down labels
            //return (angle < 90 || angle > 270) ? angle : angle + 180;  // <--2 "labels aligned with slices"

            // Alternate label formatting
            return (angle < 180) ? angle - 90 : angle + 90;  // <-- 3 "labels as spokes"
        }
        */

        var width = 960,
            height = 700,
            radius = (Math.min(width, height) / 2) - 10;

        var formatNumber = d3.format(",d");

        var x = d3.scaleLinear()
            .range([0, 2 * Math.PI]);

        var y = d3.scaleSqrt()
            .range([0, radius]);

        var color = d3.scaleOrdinal(["#ffffff","#625194","#440636", "#F24F4F"]);
        console.log(color);
        var partition = d3.partition();

        var arc = d3.arc()
            .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x0))); })
            .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x1))); })
            .innerRadius(function(d) { return Math.max(0, y(d.y0)); })
            .outerRadius(function(d) { return Math.max(0, y(d.y1)); });

        var svg = d3.select("#uc-sunburst-chart").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

        d3.json("./data-sunburst.json").then((root) => {

            root = d3.hierarchy(root);
            root.sum(function(d) { return d.size; });
            svg.selectAll("path")
                .data(partition(root).descendants())
                .enter().append("path")
                .attr("d", arc)
                .style("fill", function(d) { return color((d.children ? d : d.parent).data.name); })
                .attr("stroke", "white")
                .attr("stroke-width", "2")
                .on("click", click)
                .append("title")
                .text(function(d) { return d.data.name + "\n" + formatNumber(d.value); })

            svg.selectAll(".node")
                .data(partition(root).descendants())
                .enter()
                .append("text")
                .attr("class", "small-label")
                .attr("transform", function(d) {
                    return "translate(" + arc.centroid(d) + ")rotate(0)"; })
                .attr("dx", "-20") // radius margin
                .attr("dy", ".5em") // rotation align
                //.text(function(d) { return d.data.name + "\n" + formatNumber(d.value); });
        });

        function computeTextRotation(d) {
            var angle = (d.x0 + d.x1) / Math.PI * 90;  // <-- 1

            // Avoid upside-down labels
            //return (angle < 90 || angle > 270) ? angle : angle + 180;  // <--2 "labels aligned with slices"

            // Alternate label formatting
            return (angle < 180) ? angle - 90 : angle + 90;  // <-- 3 "labels as spokes"
        }

        function click(d) {
            svg.transition()
                .duration(750)
                .tween("scale", function() {
                    var xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                        yd = d3.interpolate(y.domain(), [d.y0, 1]),
                        yr = d3.interpolate(y.range(), [d.y0 ? 20 : 0, radius]);
                    return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
                })
                .selectAll("path")
                .attrTween("d", function(d) { return function() { return arc(d); }; });
        }

        d3.select(self.frameElement).style("height", height + "px");
    }
}

export {sunburstChart}
