<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import EditTaskModal from "./EditTaskModal.svelte";
    const flipDurationMs = 150;
    export let name;
    export let items;
    export let onDrop;
    export let boardId;
    export let workerList;
    let openmodal = false;
    let cardData = {};

    function handleDndConsiderCards(e) {
        items = e.detail.items;
    }
    function handleDndFinalizeCards(e) {
        onDrop(e.detail.items, e.detail.info.id);
    }
    function handleClick(item) {
        cardData = item;
        openmodal = true;
    }
</script>

<div class="wrapper">
    <div class="column-title font-bold text-base">
        {name}
    </div>
    <div
        class="column-content"
        use:dndzone={{
            items,
            flipDurationMs,
            zoneTabIndex: -1,
            dropTargetStyle: {
                border: "2px solid #EEF3F6",
                borderRadius: "8px",
            },
        }}
        on:consider={handleDndConsiderCards}
        on:finalize={handleDndFinalizeCards}
    >
        {#each items as item (item.id)}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
                class="card hover:bg-gray-300"
                animate:flip={{ duration: flipDurationMs }}
            >
                <div on:click={() => handleClick(item)}>
                    <div class="text-right">
                        <label for={`my-modal-${item.id}`} class="cursor-pointer">
                            <div class="flex justify-between p-3 w-100">
                                <div class="w-full">
                                    <div class="flex justify-between">
                                        <h1 class="text-base">
                                            {item.title}
                                        </h1>
                                    </div>
                                    <div class="pt-2 pb-0">
                                        <div
                                            class="badge {item.priority ==
                                                'high' && 'badge-error w-8'}
                                        {item.priority == 'low' &&
                                                'badge-warning w-8'} {item.priority ==
                                                'medium' &&
                                                'badge-primary w-12'} lowercase p-2 rounded-2xl"
                                        >
                                            <p class="text-xs">
                                                {item.priority}
                                            </p>
                                        </div>
                                        <div class="avatar placeholder pl-1">
                                            <div
                                                class="bg-primary-focus text-neutral-content rounded-xl w-6"
                                            >
                                                <span class="text-sm font-bold"
                                                    >{item.assignee.name.substring(
                                                        0,
                                                        1
                                                    )}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        {/each}
        {#if items.length == 0}
            <div class="opacity-0">
                <span class="text-3xl">DRAG HERE</span>
            </div>
        {:else}
            <div class="opacity-0">
                <span class="text-sm">DRAG HERE</span>
            </div>
        {/if}
    </div>
</div>
{#if openmodal}
    <EditTaskModal {boardId} item={cardData} {workerList} />
{/if}

<style>
    .wrapper {
        min-height: 90px;
        width: 100%;
        overflow-y: hidden;
    }
    .column-content {
        height: calc(100% - 2.5em);
        /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
        overflow-y: auto;
    }
    .column-title {
        padding-left: 12px;
        margin-bottom: 10px;
    }
    .card {
        margin: 0px 5px;
        margin-bottom: 10px;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        border-radius: 8px;
    }
</style>
