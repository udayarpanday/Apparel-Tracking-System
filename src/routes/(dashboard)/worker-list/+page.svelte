<script>
    import EditWorker from "$lib/components/EditWorker.svelte";
    import RegisterUser from "$lib/components/RegisterWorker.svelte";
    export let data;
    import { page } from "$app/stores";
    let user = $page.data.user;
    import toast from "svelte-french-toast";
    import { applyAction, enhance } from "$app/forms";
</script>

<div class="overflow-x-auto w-full">
    <div class="flex justify-between items-center mb-5">
        <h1 class="text-xl font-bold text-default">Worker List</h1>
        <RegisterUser modaltype="add" />
    </div>
    <div class="block p-3 bg-white border border-gray-200 rounded-lg shadow overflow-x-auto">
        <table class="table table-zebra w-full">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Join Date</th>
                    {#if user.role[0] === "admin"}
                        <th>Action</th>
                    {/if}
                </tr>
            </thead>
            <tbody>
                {#each data.data as worker, i}
                    <tr>
                        <td>{i + 1}</td>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div>
                                    <div class="font-bold">{worker.name}</div>
                                </div>
                            </div>
                        </td>

                        <td>{worker.email}</td>
                        <td>{worker.phone}</td>
                        <td>{worker.address}</td>
                        <td>{worker.joined_date}</td>

                        {#if user.role[0] === "admin"}
                            <td class="flex gap-2">
                                <EditWorker workerData={worker} />
                                <form
                                    method="POST"
                                    action={`?/deleteUser`}
                                    use:enhance={() => {
                                        return async ({ result }) => {
                                            if (result.type === "redirect") {
                                                toast.success("Success", {
                                                    duration: 7000,
                                                });
                                            }
                                            if (result.type === "failure") {
                                                toast.error(result.data.error, {
                                                    duration: 7000,
                                                });
                                            }

                                            await applyAction(result);
                                        };
                                    }}
                                >
                                    <div class="form-control hidden">
                                        <input
                                            type="hidden"
                                            name="id"
                                            value={worker?.id}
                                        />
                                    </div>
                                    <button type="submit">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </td>
                        {/if}
                    </tr>
                {/each}
            </tbody>
            <!-- foot -->
        </table>
        {#if data.data.length == 0}
            <div class="text-center pt-8">
                <h1 class="text-2xl">No records found</h1>
            </div>
        {/if}
    </div>
</div>
