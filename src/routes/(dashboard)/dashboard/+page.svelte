<script lang="ts">
    import HighestSaleCategoryChart from "$lib/components/Charts/HighestSaleCategoryChart.svelte";
    import ProfitGrowthChart from "$lib/components/Charts/ProfitGrowthChart.svelte";
    import Select from "svelte-select";

    export let data;
    let profitData = data.data.dashboard;
    let categoryItems = data.data.category;
    let totalCategories = data.data.category.length;

    let selectedCategory = 1;
    let selectedDates = "total_sales_this_month";
    let saleDates = [
        { value: "total_sales_this_month", label: "This Month" },
        { value: "total_sales_last_month", label: "Last Month" },
        { value: "total_sales_this_year", label: "This Year" },
    ];

    function handleProfitChange(e) {
        selectedCategory = e.detail.value;
    }

    function handleSalesChange(e) {
        selectedDates = e.detail.value;
    }
</script>

<div class="flex flex-row items-center justify-between mb-5">
    <h1 class="text-xl font-bold text-default">Dashboard</h1>
</div>
<div class="flex flex-row gap-5">
    <div class="card w-96 bg-white">
        <div class="card-body">
            <h2 class="card-title justify-center">Total Orders</h2>
            <div class="card-actions justify-center">
                <h1 class="text-3xl">{profitData.total_orders}</h1>
            </div>
        </div>
    </div>
    <div class="card w-96 bg-white">
        <div class="card-body">
            <h2 class="card-title justify-center">Total Profit</h2>
            <div class="card-actions items-end justify-center">
                <h1 class="text-3xl">Rs {profitData.total_profits}</h1>
            </div>
        </div>
    </div>
    <div class="card w-96 bg-white">
        <div class="card-body">
            <h2 class="card-title justify-center">Total Category</h2>
            <div class="card-actions justify-center">
                <h1 class="text-3xl">{totalCategories}</h1>
            </div>
        </div>
    </div>
</div>
<div class="mt-12">
    <div class="flex flex-row items-start justify-between">
        <h1 class="column-title font-bold text-base">
            Highest Orders for category
        </h1>
        <div class="form-control mb-3 w-1/3 max-w-xs">
            <Select
                value={saleDates[0]}
                on:change={handleSalesChange}
                items={saleDates}
                name="dates"
                searchable={true}
                class="card-dropdown bar "
                placeholder="Select Date"
            />
        </div>
    </div>
    <HighestSaleCategoryChart selectedDate={selectedDates} data={profitData} />
</div>

<div class="mt-12">
    <div class="flex flex-row items-start justify-between">
        <h1 class="column-title font-bold text-base">Profit Tracker</h1>
        <div class="form-control mb-3 w-1/3 max-w-xs">
            <Select
                value={categoryItems[0]}
                on:change={handleProfitChange}
                items={categoryItems}
                name="category_id"
                searchable={true}
                class="card-dropdown bar "
                placeholder="Choose category"
            />
        </div>
    </div>

    <ProfitGrowthChart {selectedCategory} data={profitData} />
</div>
