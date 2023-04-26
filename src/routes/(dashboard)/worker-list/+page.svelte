<script>
    import RegisterUser from "$lib/components/RegisterWorker.svelte";
    export let data;
</script>

<div class="overflow-x-auto w-full">
    
    <div class="flex justify-between items-center m-3">
        <h1 class="text-3xl font-bold text-default">Worker List</h1>
        <RegisterUser modaltype="add" />
    </div>
    <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow">
        <table class="table table-zebra w-full">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {#each data.data as { id, name, email, phone, address, role }, i}
                    <tr>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div>
                                    <div class="font-bold">{name}</div>
                                </div>
                            </div>
                        </td>
                        <td>{role[0]}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{address}</td>
                    </tr>
                {/each}
            </tbody>
            <!-- foot -->
        </table>
    </div>
</div>
