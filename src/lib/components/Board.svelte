<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import Column from "./Column.svelte";
    import AddTaskModal from "./AddTaskModal.svelte";
    const flipDurationMs = 100;

    export let columns;
    export let workerList;
    export let cookie;
    let updatedColumns = [];
    // will be called any time a card or a column gets dropped to update the parent data
    export let onFinalUpdate;
    function handleDndConsiderColumns(e) {
        columns = e.detail.tasks;
    }
    function handleDndFinalizeColumns(e) {
        onFinalUpdate(e.detail.tasks);
    }
    function handleItemFinalize(columnIdx, newItems, updatedId) {
        columns[columnIdx].tasks = newItems;
        onFinalUpdate([...columns]);
        updatedColumns.push(columnIdx);
        updateBoard(updatedId);
    }
    const updateBoard = async (updatedId) => {
        if (updatedColumns.length == 2) {
            const payload = {
                board_category_id: updatedColumns[0]+1,
            };
            const response = await fetch(`http://127.0.0.1:8000/api/tasks/${updatedId}`, {
                method: "PUT",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    authorization: cookie,
                },
            });
            updatedColumns = [];
        }
    };
</script>

<h1 class="text-xl font-bold text-default mb-5">Project Task Board</h1>
<section
    class="board"
    use:dndzone={{
        dragDisabled: true,
        items: columns,
        flipDurationMs,
        type: "column",
        dropTargetStyle: { outline: "rgba(0, 0, 0, 0.7) solid 5px" },
    }}
    on:consider={handleDndConsiderColumns}
    on:finalize={handleDndFinalizeColumns}
>
    {#each columns as { id, name, tasks }, idx (id)}
        <div class="column" animate:flip={{ duration: flipDurationMs }}>
            <Column
                {name}
                items={tasks}
                boardId={id}
                {workerList}
                onDrop={(newItems, updatedId) => {
                    handleItemFinalize(idx, newItems, updatedId);
                }}
            />

            <AddTaskModal boardId={id} {workerList} />
        </div>
    {/each}
</section>

<style>
    .board {
        height: calc(100% - 2.5em);
        width: 2100px;
        margin-bottom: 40px;
        display: flex;
        overflow-y: scroll;
    }
    .column {
        height: 100%;
        width: 30%;
        padding: 12px;
        margin-right: 12px;
        float: left;
        background-color: #ffffff;
        border-radius: 12px;
    }
</style>
