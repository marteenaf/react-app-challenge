import { useRef, useEffect, useState, useLayoutEffect } from "react";
import * as d3 from 'd3';

type BarChartProps = {
    data: { name: string, value: number }[],
    id: string,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    colour?: number | string
}

type Margins = {
    top: number,
    left: number,
    bottom: number,
    right: number
}

function useResizeEffect(svg: SVGSVGElement | null, margins: Margins) {
    const [size, setSize] = useState({ width: 400, height: 30 });
    useLayoutEffect(() => {
        function updateSize() {
            const svgRect = svg?.getBoundingClientRect();
            setSize({ width: (svgRect?.width || 0) - margins.left - margins.right, height: (svgRect?.height || 0) - margins.top - margins.bottom });
        }
        window.addEventListener('resize', updateSize);

        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [svg])
    return size;
}

function BarChart({ data, id, marginBottom = 45, marginTop = 10, marginLeft = 20, marginRight = 10, colour = 'var(--tertiary)' }: BarChartProps) {

    const graphRef = useRef<SVGSVGElement>(null);
    const size = useResizeEffect(graphRef.current, { top: marginTop, left: marginLeft, bottom: marginBottom, right: marginRight });

    useEffect(() => {

        if (size.width > 0 && size.height > 0) {
            const svg = d3.select(graphRef.current);

            //container group
            const g = svg.append('g')
                .attr('width', size.width)
                .attr('height', size.height)
                .attr("transform", `translate(${marginLeft},${marginTop})`);

            //xaxis
            const x = d3.scaleBand()
                .range([0, size.width])
                .domain(data.map(d => d.name))
                .padding(0.2);
            g.append("g")
                .attr("transform", `translate(0, ${size.height})`)
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

            //y axis
            const y = d3.scaleLinear()
                .domain([0, 10])
                .range([size.height, 0]);
            g.append("g")
                .call(d3.axisLeft(y))

            // Bars
            g.selectAll("mybar")
                .data(data)
                .join("rect")
                .attr("x", d => x(d.name)!)
                .attr("y", d => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", d => size.height - y(d.value))
                .attr("fill", colour)


            return () => {

                //clear chart
                svg.selectAll('*').remove();
            }
        }

    }, [data, graphRef, marginBottom, marginTop, marginLeft, marginRight, size, colour])
    return (
        <svg id={id} style={{ width: '100%', height: '100%' }} ref={graphRef}>
        </svg>
    )
}

export default BarChart;