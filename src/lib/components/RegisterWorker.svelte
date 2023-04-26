<script>
    let userData = {
        name: "",
        email: "",
        position: "",
        phone: 9841183671,
        password: "",
        password_confirmation: "",
    };
    export let modaltype;
    import { applyAction, enhance } from "$app/forms";
    import toast from "svelte-french-toast";
    let loading = false;
    let openmodal = true;
</script>

<div class="text-right">
    {#if modaltype == "add"}
        <label for="my-modal-3" class="btn btn-secondary btn-block btn-outline">
            Register an User</label
        >
    {:else if modaltype == "update"}
        <label for="my-modal-3" class="cursor-pointer">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                /></svg
            >
        </label>
    {/if}
</div>

<!-- Put this part before </body> tag -->
{#if openmodal}
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />

    <div class="modal">
        <div class="modal-box relative">
            <label
                for="my-modal-3"
                class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2"
                >✕</label
            >
            {#if modaltype == "add"}
                <h1 class="text-lg font-bold">Add a new user</h1>
            {:else if modaltype == "update"}
                <h1 class="text-lg font-bold">Edit user</h1>
            {/if}

            <form
                method="POST"
                action="?/registerUser"
                use:enhance={() => {
                    loading = true;
                    return async ({ result }) => {
                        if (result.type === "redirect") {
                            toast.success("Success", { duration: 7000 });
                            openmodal = false;
                        }
                        if (result.type === "failure") {
                            toast.error(result.data.error, { duration: 7000 });
                        }
                        loading = false;
                        await applyAction(result);
                    };
                }}
            >
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="User Name"
                        class="input input-bordered"
                        value={userData?.name}
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="User Email"
                        class="input input-bordered"
                        value={userData?.email}
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Phone</span>
                    </label>
                    <input
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        class="input input-bordered"
                        value={userData?.phone}
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Address</span>
                    </label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        class="input input-bordered"
                        value={userData?.address}
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        class="input input-bordered"
                        value={userData?.password}
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Password Confirmation</span>
                    </label>
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        class="input input-bordered"
                        value={userData?.password_confirmation}
                    />
                </div>
                <div class="text-center">
                    <button class="btn btn-secondary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}
