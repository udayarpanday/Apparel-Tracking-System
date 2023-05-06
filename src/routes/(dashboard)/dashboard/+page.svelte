<script lang="ts">
    import { page } from "$app/stores";
    export let data;
    let totalCategories = data.data.category.length;
</script>

<div class="flex flex-row items-center justify-between mb-5">
    <h1 class="text-xl font-bold text-default">Dashboard</h1>
    <select class="select select-primary">
        <option disabled selected>Show Data from</option>
        <option>This Month</option>
        <option>Last Month</option>
        <option>This Year</option>
    </select>
</div>
<div class="flex flex-row gap-5">
    <div class="card w-96 bg-white">
        <div class="card-body">
            <h2 class="card-title justify-center">Total Orders</h2>
            <div class="card-actions justify-center">
                <h1 class="text-5xl">200</h1>
            </div>
        </div>
    </div>
    <div class="card w-96 bg-white">
        <div class="card-body">
            <h2 class="card-title justify-center">Total Profit</h2>
            <div class="card-actions justify-center">
                <h1 class="text-5xl">$20,000</h1>
            </div>
        </div>
    </div>
    <div class="card w-96 bg-white">
        <div class="card-body">
            <h2 class="card-title justify-center">Total Category</h2>
            <div class="card-actions justify-center">
                <h1 class="text-5xl">{totalCategories}</h1>
            </div>
        </div>
    </div>
</div>
