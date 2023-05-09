<script>
// @ts-nocheck

    import { Line } from "svelte-chartjs";

    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale,
    } from "chart.js";
    ChartJS.register(
        Title,
        Tooltip,
        Legend,
        LineElement,
        LinearScale,
        PointElement,
        CategoryScale
    );
    export let data;
    export let selectedCategory;
    let selectedItem;
    let dates = [];
    let values = [];
    let profitData = {};
    $: {
        selectedItem = data.profit_growth_this_year.filter((categoryIds) => {
            return categoryIds.category_id === selectedCategory;
        });
        dates = Object.keys(selectedItem[0]?.month_profits);
        values = Object.values(selectedItem[0]?.month_profits);
        profitData = {
            labels: dates,
            datasets: [
                {
                    label: selectedItem[0].category.name,
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: values,
                },
            ],
        };
    }
</script>

<Line data={profitData} width={30} height={10} options={{ responsive: true }} />
