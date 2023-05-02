<script>
    import RegisterUser from "$lib/components/RegisterWorker.svelte";
    export let data;
</script>

<div class="overflow-x-auto w-full">
    
    <div class="flex justify-between items-center mb-5">
        <h1 class="text-xl font-bold text-default">Worker List</h1>
        <RegisterUser modaltype="add" />
    </div>
    <div class="block p-3 bg-white border border-gray-200 rounded-lg shadow">
        <table class="table table-zebra w-full">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Join Date</th>
                </tr>
            </thead>
            <tbody>
                {#each data.data as { id, name, email, phone, address, role,joined_date }, i}
                    <tr>
                        <td>{i+1}</td>
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
                        <td>{joined_date}</td>
                    </tr>
                {/each}
            </tbody>
            <!-- foot -->
        </table>
    </div>
</div>
