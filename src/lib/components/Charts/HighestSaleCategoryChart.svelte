<script>
// @ts-nocheck

    import { Bar, Line } from "svelte-chartjs";
    import {
        Chart,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale,
        LineElement,
        PointElement,
    } from "chart.js";

    Chart.register(
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    );

    export let data;
    export let selectedDate;

    let profitData = {};
    $: {
        let dataValues = [];
        let dataLabels = [];
        data?.[selectedDate].map((values) => {
            dataLabels.push(values.category.name);
            dataValues.push(values.total_sales);
        });
        profitData = {
            labels: dataLabels,
            datasets: [
                {
                    label: "Orders",
                    data: dataValues,
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)",
                        "rgba(98,  182, 239,0.4)",
                        "rgba(255, 218, 128,0.4)",
                        "rgba(113, 205, 205,0.4)",
                        "rgba(170, 128, 252,0.4)",
                        "rgba(255, 177, 101,0.4)",
                        "rgba(115, 134,159,0.4)",
                        "rgba(198,  182, 239,0.4)",
                        "rgba(55, 218, 128,0.4)",
                        "rgba(13, 205, 205,0.4)",
                        "rgba(70, 128, 252,0.4)",
                        "rgba(155, 177, 101,0.4)",
                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)",
                        "rgba(98,  182, 239, 1)",
                        "rgba(255, 218, 128, 1)",
                        "rgba(113, 205, 205, 1)",
                        "rgba(170, 128, 252, 1)",
                        "rgba(255, 177, 101, 1)",
                        "rgba(115, 134,159,1)",
                        "rgba(198,  182, 239,1)",
                        "rgba(55, 218, 128,1)",
                        "rgba(13, 205, 205,1)",
                        "rgba(70, 128, 252,1)",
                        "rgba(155, 177, 101,1)",
                    ],
                },
            ],
        };
    }
</script>

<Bar data={profitData} width={30} height={10} options={{ responsive: true }} />
