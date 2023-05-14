<script>
    import { applyAction, enhance } from "$app/forms";
    import toast from "svelte-french-toast";
    export let boardId;
    export let workerList;
    import { page } from "$app/stores";
    import { invalidateAll } from "$app/navigation";
    let user = $page.data.user;
    export let item;
    let openmodal = true;
    console.log(item)
</script>

{#if openmodal}
    <input type="checkbox" id="my-modal-4" class="modal-toggle" />
    <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box w-11/12 max-w-5xl" for="">
            <label
                for="my-modal-4"
                class="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
                >✕</label
            >
            <form
                method="POST"
                action="?/updateTask"
                use:enhance={() => {
                    return async ({ result }) => {
                        if (result.type === "success") {
                            toast.success("Success", { duration: 7000 });
                        }
                        if (result.type === "failure") {
                            toast.error(result.data.error, { duration: 7000 });
                        }

                        await applyAction(result);
                    };
                }}
            >
                <div class="text-left flex items-center mt-9">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="h-8 w-8"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Task Title"
                        class="ml-3 input input-bordered w-full min-w-max font-bold text-2xl input-ghost"
                        name="title"
                        value={item?.title}
                    />
                </div>
                <div class="flex justify-between">
                    <div class="w-5/6 pr-3 mt-5">
                        <div class="mb-5">
                            <div class="text-left flex items-center mb-3">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    class="h-8 w-8"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                                    />
                                </svg>

                                <h1 class="text-lg font-bold ml-3">
                                    Description
                                </h1>
                            </div>
                            <div class="ml-11">
                                <textarea
                                    placeholder="Add a more detailed description"
                                    class="textarea textarea-bordered w-full min-w-max p2 h-48"
                                    name="description"
                                    value={item.description}
                                />
                            </div>
                        </div>
                        <div>
                            <div class="text-left flex items-center mb-3">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    class="h-8 w-8"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                    />
                                </svg>
                                <h1 class="text-lg font-bold ml-3">Activity</h1>
                            </div>
                            <div class="flex items-center mb-6">
                                <div class="avatar placeholder text-center">
                                    <div
                                        class="bg-primary-focus text-neutral-content rounded-full h-8 w-8"
                                    >
                                        <span class="text-xl font-bold"
                                            >{user.name.substring(0, 1)}</span
                                        >
                                    </div>
                                </div>
                                <form
                                    class="w-full"
                                    method="POST"
                                    action="?/postComments"
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

                                            applyAction(result);
                                        };
                                    }}
                                >
                                    <div class="form-control mt-3 mb-3 hidden">
                                        <input
                                            type="hidden"
                                            name="task_id"
                                            value={item.id}
                                        />
                                    </div>
                                    <div class="form-control mt-3 mb-3 hidden">
                                        <input
                                            type="hidden"
                                            name="sender"
                                            value={user.id}
                                        />
                                    </div>
                                    <div class="form-control ml-3 w-full">
                                        <div class="input-group">
                                            <input
                                                type="text"
                                                name="message"
                                                placeholder="Write a comment"
                                                class="input input-bordered w-full"
                                            />
                                           
                                            <button
                                                class="btn btn-ghost btn-outline"
                                                type="submit"
                                            >
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="1.5"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    class="h-4 w-4"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <form>
                                {#if item.comments}
                                    {#each item.comments as comment}
                                        <form
                                            class="w-full"
                                            method="POST"
                                            action="?/updateComment"
                                            use:enhance={() => {
                                                return async ({ result }) => {
                                                    if (
                                                        result.type ===
                                                        "success"
                                                    ) {
                                                        toast.success(
                                                            "Success",
                                                            {
                                                                duration: 7000,
                                                            }
                                                        );
                                                    }
                                                    if (
                                                        result.type ===
                                                        "failure"
                                                    ) {
                                                        toast.error(
                                                            result.data.error,
                                                            {
                                                                duration: 7000,
                                                            }
                                                        );
                                                    }

                                                    applyAction(result);
                                                };
                                            }}
                                        >
                                            <div class="form-control hidden">
                                                <input
                                                    type="hidden"
                                                    name="task_id"
                                                    value={item.id}
                                                />
                                            </div>
                                            <div class="form-control hidden">
                                                <input
                                                    type="hidden"
                                                    name="comment_id"
                                                    value={comment.id}
                                                />
                                            </div>
                                            <div class="form-control mt-3 mb-3 hidden">
                                                <input
                                                    type="hidden"
                                                    name="sender"
                                                    value={comment.sender.id}
                                                />
                                            </div>
                                            <div class="flex items-start m-3">
                                                <div
                                                    class="avatar placeholder text-center"
                                                >
                                                    <div
                                                        class="bg-primary-focus text-neutral-content rounded-full h-8 w-8"
                                                    >
                                                        <span
                                                            class="text-xl font-bold"
                                                            >{comment.sender.name.substring(
                                                                0,
                                                                1
                                                            )}</span
                                                        >
                                                    </div>
                                                </div>
                                                <div
                                                    class="form-control ml-3 w-full"
                                                >
                                                    <label class="label pt-0">
                                                        <span
                                                            class="text-base font-bold"
                                                            >{comment.sender
                                                                .name}</span
                                                        >
                                                    </label>
                                                    <div
                                                        class="form-control w-full"
                                                    >
                                                        <div
                                                            class="input-group"
                                                        >
                                                            <input
                                                                type="text"
                                                                name="message"
                                                                value={comment.message}
                                                                placeholder="Write a comment"
                                                                class="input input-bordered w-full"
                                                            />
                                                            
                                                            <button
                                                                class="btn btn-ghost btn-outline"
                                                                type="submit"
                                                            >
                                                                <svg
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    stroke-width="1.5"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    aria-hidden="true"
                                                                    class="h-4 w-4"
                                                                >
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                        <div
                                                            class="text-left text-sm m-2 underline"
                                                        >
                                                            <form
                                                                class="w-full"
                                                                method="POST"
                                                                action="?/deleteComment"
                                                                use:enhance={() => {
                                                                    return async ({
                                                                        result,
                                                                    }) => {
                                                                        console.log(
                                                                            result
                                                                        );
                                                                        if (
                                                                            result.type ===
                                                                            "redirect"
                                                                        ) {
                                                                            toast.success(
                                                                                "Success",
                                                                                {
                                                                                    duration: 7000,
                                                                                }
                                                                            );
                                                                        }
                                                                        if (
                                                                            result.type ===
                                                                            "failure"
                                                                        ) {
                                                                            toast.error(
                                                                                result
                                                                                    .data
                                                                                    .error,
                                                                                {
                                                                                    duration: 7000,
                                                                                }
                                                                            );
                                                                        }

                                                                        applyAction(
                                                                            result
                                                                        );
                                                                    };
                                                                }}
                                                            >
                                                                <div
                                                                    class="form-control hidden"
                                                                >
                                                                    <input
                                                                        type="hidden"
                                                                        name="task_id"
                                                                        value={item.id}
                                                                    />
                                                                </div>
                                                                <div
                                                                    class="form-control hidden"
                                                                >
                                                                    <input
                                                                        type="hidden"
                                                                        name="comment_id"
                                                                        value={comment.id}
                                                                    />
                                                                </div>
                                                                <button
                                                                    >Delete</button
                                                                >
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    {/each}
                                {/if}
                            </form>
                        </div>
                    </div>
                    <div class="w-1/6 mt-5">
                        <div>
                            <h1 class="text-lg font-bold">Add to Card</h1>
                        </div>
                        <div class="form-control mt-3 mb-3">
                            <label class="label">
                                <span class="label-text">Assigned To</span>
                            </label>
                            <select
                                name="assignee"
                                class="select select-bordered"
                            >
                                <option
                                    value={item.assignee?.id}
                                    disabled
                                    selected>{item.assignee?.name}</option
                                >
                                {#each workerList as workers}
                                    <option value={workers.id}
                                        >{workers?.name}</option
                                    >
                                {/each}
                            </select>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Task Priority</span>
                            </label>
                            <select
                                name="priority"
                                class="select select-bordered"
                            >
                                <option value={item?.priority} disabled selected
                                    >{item?.priority}</option
                                >
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                        </div>
                        <div class="divider" />
                        <div class="form-control mt-3 mb-3 hidden">
                            <input type="hidden" name="id" value={item.id} />
                        </div>
                        <div class="form-control mt-3 mb-3 hidden">
                            <input
                                type="hidden"
                                name="board_category_id"
                                value={boardId}
                            />
                        </div>
                        <div class="flex items-center justify-center">
                            <button
                                class="btn btn-primary btn-sm w-20"
                                type="submit"
                            >
                                Save
                            </button>
                        </div>
                        <form
                            method="POST"
                            action="?/deleteTask"
                            use:enhance={() => {
                                return async ({ result }) => {
                                    if (result.type === "redirect") {
                                        toast.success("Task Deleted", {
                                            duration: 7000,
                                        });
                                        openmodal = false;
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
                            <div class="form-control mt-3 mb-3 hidden">
                                <input
                                    type="hidden"
                                    name="id"
                                    value={item.id}
                                />
                            </div>
                            <div class="flex items-center justify-center">
                                <button
                                    class="btn btn-error btn-sm w-20"
                                    type="submit"
                                >
                                    Delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </form>
        </label>
    </label>
{/if}

<style>
    :global(.card-dropdown) {
        background: #eef3f6 !important;
    }
</style>
