
export const optionsChart = {
    stroke: { curve: 'smooth', width: 1.5 },
    legend: { position: 'top' },
    xaxis: { 
        type: 'datetime', 
        categories: [],
        labels: {
            datetimeUTC: true,
            datetimeFormatter: {
                year: 'yyyy',
                month: "MMM yyyy",
                day: 'dd MMM',
            },
        }
    },
    yaxis: { min: 0 },
    chart: { 
        toolbar: {
            show: window.innerWidth < 500 ? false : true,
            tools: { download: false },
        },
    },
}