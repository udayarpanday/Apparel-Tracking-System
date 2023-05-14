<script>
    import { applyAction, enhance } from "$app/forms";
    import toast from "svelte-french-toast";
    export let workerList;
    export let boardId;
    let openmodal = true;
</script>

<label
    for="my-modal-3"
    class="min-h-6 justify-start h-1 btn btn-secondary btn-block btn-ghost text-xs"
>
    + Add a card</label
>
{#if openmodal}
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative">
            <label
                for="my-modal-3"
                class="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
                >✕</label
            >
            <h1 class="text-lg font-bold">Add a new task</h1>
            <form
                method="POST"
                action="?/createTask"
                use:enhance={() => {
                    return async ({ result }) => {
                        if (result.type === "redirect") {
                            toast.success("Success", { duration: 7000 });
                            openmodal = false;
                        }
                        if (result.type === "failure") {
                            toast.error(result.data.error, { duration: 7000 });
                        }

                        await applyAction(result);
                    };
                }}
            >
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add task title"
                        class="input input-bordered"
                        value=""
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea
                        class="textarea textarea-bordered h-24"
                        placeholder="Add a more detailed description"
                        name="description"
                    />
                </div>
                <div class="form-control mt-3 mb-3">
                    <label class="label">
                        <span class="label-text">Assign To</span>
                    </label>
                    <select name="assignee" class="select select-bordered">
                        {#each workerList as workers}
                            <option value={workers.id}>{workers.name}</option>
                        {/each}
                    </select>
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Task Priority</span>
                    </label>
                    <select name="priority" class="select select-bordered">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
                <div class="form-control mt-3 mb-3 hidden">
                    <input
                        type="hidden"
                        name="board_category_id"
                        value={boardId}
                    />
                </div>

                <div class="mt-6 text-center">
                    <button class="btn btn-primary" type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    </div>
{/if}
