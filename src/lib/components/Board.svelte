<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import Column from "./Column.svelte";
  import TaskModal from "$lib/components/TaskModal.svelte";
  const flipDurationMs = 300;

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

<div class="modal-container">
  <div class="flex justify-between">
    <div class="form-control w-full max-w-xs">
      <select class="select select-bordered">
        <option disabled selected>Select Category</option>
        <option>Hoodies</option>
        <option>Shirts</option>
        <option>Pants</option>
        <option>Jackets</option>
      </select>
    </div>
    <TaskModal taskData="" buttonType="add"/>
  </div>
</div>
<section
  class="board"
  use:dndzone={{ items: columns, flipDurationMs, type: "column" }}
  on:consider={handleDndConsiderColumns}
  on:finalize={handleDndFinalizeColumns}
>
  {#each columns as { id, name, items }, idx (id)}
    <div class="column" animate:flip={{ duration: flipDurationMs }}>
      <Column
        {name}
        {items}
        onDrop={(newItems) => handleItemFinalize(idx, newItems)}
        onCl
      />
    </div>
  {/each}
</section>

<style>
  .board {
    height: 80vh;
    width: 100%;
    padding: 0.5em;
    margin-bottom: 40px;
  }
  .column {
    height: 100%;
    width: 353px;
    padding: 12px;
    margin: 12px;
    float: left;
    background-color: #ffffff;
    overflow-y: hidden;
  }
</style>
