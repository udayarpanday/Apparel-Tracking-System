<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import Column from "./Column.svelte";
    import AddTaskModal from "./AddTaskModal.svelte";
  const flipDurationMs = 100;

  export let columns;
  // will be called any time a card or a column gets dropped to update the parent data
  export let onFinalUpdate;

  function handleDndConsiderColumns(e) {
    columns = e.detail.items;
  }
  function handleDndFinalizeColumns(e) {
    onFinalUpdate(e.detail.items);
  }
  function handleItemFinalize(columnIdx, newItems) {
    columns[columnIdx].items = newItems;
    onFinalUpdate([...columns]);
  }
</script>

<h1 class="text-xl font-bold text-default mb-5">Project Task Board</h1>
<section
  class="board"
  use:dndzone={{ items: columns, flipDurationMs, type: "column",dropTargetStyle:{outline: 'rgba(0, 0, 0, 0.7) solid 5px'} }}
  on:consider={handleDndConsiderColumns}
  on:finalize={handleDndFinalizeColumns}
>
  {#each columns as { id, name, items }, idx (id)}
    <div class="column" animate:flip={{ duration: flipDurationMs }}>
      <Column
        {name}
        {items}
        onDrop={(newItems) => handleItemFinalize(idx, newItems)}
      />
      <AddTaskModal />
    </div>
  {/each}
</section>

<style>
  .board {
    height: calc(100% - 2.5em);
    width: 1500px;
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
