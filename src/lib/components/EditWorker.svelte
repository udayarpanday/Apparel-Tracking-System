<script>
    let userData = {};
    import { applyAction, enhance } from "$app/forms";
    import toast from "svelte-french-toast";
    let loading = false;
    let openmodal = true;
    export let workerData;
    $: {
        userData = workerData;
    }
</script>

<div class="text-right">
    <label
        for={`my-modal-${userData?.id}`}
        on:click={() => {
            openmodal = true;
        }}
        class="cursor-pointer"
    >
        <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-5 h-5"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
        </svg>
    </label>
</div>

{#if openmodal}
    <input
        type="checkbox"
        id={`my-modal-${userData?.id}`}
        class="modal-toggle"
    />

    <div class="modal">
        <div class="modal-box relative">
            <label
                for={`my-modal-${userData?.id}`}
                class="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                >✕</label
            >

            <h1 class="text-lg font-bold">Edit user</h1>

            <form
                method="POST"
                action="?/updateUser"
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
                        <span class="label-text">* Name</span>
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
                        <span class="label-text">* Phone</span>
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

                <div class="form-control mb-3">
                    <label class="label">
                        <span class="label-text">* Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="User Email"
                        class="input input-bordered"
                        value={userData?.email}
                    />
                </div>
                <div class="form-control hidden">
                    <input type="hidden" name="id" value={userData?.id} />
                </div>
                <div class="text-center mt-6">
                    <button class="btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}
