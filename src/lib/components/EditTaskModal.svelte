<script>
    export let taskData;
    import { page } from "$app/stores";
    let user = $page.data.user;
    import Select from "svelte-select";

    let assignItems = [
        { value: "bidhan", label: "Bidhan" },
        { value: "ram", label: "Ram" },
        { value: "hari", label: "hari" },
    ];
    
    let prorityItems = [
        { value: "high", label: "High" },
        { value: "low", label: "Low" },
    ];
</script>

<div class="text-right">
    <label for="my-modal-4" class="cursor-pointer">
        <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="h-6 w-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
        </svg>
    </label>
</div>

<input type="checkbox" id="my-modal-4" class="modal-toggle" />
<label for="my-modal-4" class="modal cursor-pointer">
    <label class="modal-box w-11/12 max-w-5xl" for="">
        <label
            for="my-modal-4"
            class="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
            >✕</label
        >
        <div class="text-left flex items-center mt-5">
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
            <h1 class="text-2xl font-bold ml-2">{taskData.name}</h1>
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

                        <h1 class="text-lg font-bold ml-3">Description</h1>
                    </div>
                    <div class="ml-11">
                        <textarea
                            placeholder="Add a more detailed description"
                            class="textarea textarea-bordered w-full min-w-max p2 h-48"
                            value={taskData.description}
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
                        <div class="form-control ml-3 w-full">
                            <input
                                type="text"
                                name="new-comment"
                                placeholder="Write a comment..."
                                class="input input-bordered"
                            />
                        </div>
                    </div>
                    <div class="flex items-start">
                        <div class="avatar placeholder text-center">
                            <div
                                class="bg-primary-focus text-neutral-content rounded-full h-8 w-8"
                            >
                                <span class="text-xl font-bold"
                                    >{user.name.substring(0, 1)}</span
                                >
                            </div>
                        </div>
                        <div class="form-control ml-3 w-full">
                            <label class="label pt-0">
                                <span class="text-base font-bold"
                                    >Bidhan Adhikari</span
                                >
                            </label>
                            <input
                                type="text"
                                name="comment-id"
                                value="Is the materials available"
                                class="input input-bordered"
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-1/6 mt-5">
                <div>
                    <h1 class="text-lg font-bold">Add to Card</h1>
                </div>
                <div class="bg-gray mt-3">
                    <Select
                        value={assignItems[0]}
                        items={assignItems}
                        searchable={true}
                        class="card-dropdown bar"
                        placeholder="Assign"
                    />
                </div>
                <div class="bg-gray mt-3">
                    <Select
                        value={prorityItems[0]}
                        items={prorityItems}
                        searchable={true}
                        class="card-dropdown bar"
                        placeholder="Priority"
                    />
                </div>
                <div class="divider" />
                <div class="flex items-center justify-center">
                    <button class="btn btn-primary btn-sm mr-3" type="submit">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </label>
</label>

<style>
    :global(.card-dropdown) {
        background: #eef3f6 !important;
    }
</style>
