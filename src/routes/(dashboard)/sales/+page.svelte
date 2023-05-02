<script>
    import { applyAction, enhance } from "$app/forms";
    import { page } from "$app/stores";
    let user = $page.data.user;
    import Select from "svelte-select";
    export let data;
    let items = data.data.category;
    import toast from "svelte-french-toast";
    let value;
</script>

<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 class="title-font font-medium text-3xl text-gray-900">Sales</h1>
            <p class="leading-relaxed mt-4">
                Keep track of your products sales. You can use this form to
                generate valuabale data which project
            </p>
        </div>
        <div
            class="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
                Update sales history
            </h2>

            <form
                method="POST"
                action="?/addSalesDetails"
                use:enhance={(data) => {
                    data.data.delete("category_id")
                    data.data.set("category_id",value.value)
                    return async ({ result }) => {
                        if (result.type === "redirect") {
                            toast.success("Success", { duration: 7000 });
                        }
                        if (result.type === "failure") {
                            toast.error(result.data.error, { duration: 7000 });
                        }
                        await applyAction(result);
                    };
                }}
            >
                <div class="form-control mb-3">
                    <label class="label">
                        <span class="label-text">Category</span>
                    </label>
                    <Select
                        {items}
                        name="category_id"
                        searchable={true}
                        class="card-dropdown bar"
                        placeholder="Choose category"
                        bind:value
                    />
                </div>
                <div class="form-control mb-3">
                    <label class="label">
                        <span class="label-text">Total Orders</span>
                    </label>
                    <input
                        type="number"
                        name="total_orders"
                        placeholder="Total Orders"
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control mb-3">
                    <label class="label">
                        <span class="label-text">Cost Price</span>
                    </label>
                    <input
                        type="number"
                        name="cost_price"
                        placeholder="Cost Price"
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Selling Price</span>
                    </label>
                    <input
                        type="number"
                        name="selling_price"
                        placeholder="Selling Price"
                        class="input input-bordered"
                    />
                </div>
                <div class="text-center">

                    <button class="btn btn-primary mt-6" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</section>

<style>
    :global(.card-dropdown) {
        background: #eef3f6 !important;
    }
</style>
