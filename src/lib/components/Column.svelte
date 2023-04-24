<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import TaskModal from "$lib/components/TaskModal.svelte";
  const flipDurationMs = 150;
  export let name;
  export let items;
  export let onDrop;

  function handleDndConsiderCards(e) {
    console.warn("got consider", name);
    items = e.detail.items;
  }
  function handleDndFinalizeCards(e) {
    onDrop(e.detail.items);
  }
  function handleClick(item) {
    console.log(item);
  }
</script>

<div class="wrapper">
  <div class="column-title">
    {name}
  </div>
  <div
    class="column-content"
    use:dndzone={{ items, flipDurationMs, zoneTabIndex: -1 }}
    on:consider={handleDndConsiderCards}
    on:finalize={handleDndFinalizeCards}
  >
    {#each items as item (item.id)}
      <div
        class="card"
        animate:flip={{ duration: flipDurationMs }}
        on:click={() => handleClick(item)}
      >
        <div class="flex justify-between p-3">
          <div>
            {item.name}
            {item.description}
          </div>
          <TaskModal taskData={item} buttonType="update" />
        </div>
      </div>
    {/each}
    <TaskModal taskData="" buttonType="add" />
  </div>
</div>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
    /*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
    overflow-y: hidden;
  }
  .column-content {
    height: calc(100% - 2.5em);
    /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
    overflow-y: auto;
  }
  .column-title {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    height: 15%;
    width: 100%;
    margin: 0.4em 0;
    background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));
    border-radius: 0;
  }
</style>
