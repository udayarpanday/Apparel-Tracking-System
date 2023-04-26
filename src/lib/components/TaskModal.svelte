<script>
  export let taskData;
  export let buttonType;
</script>

<div class="text-right">
  {#if buttonType == "add"}
    <label for="my-modal-3" class="btn btn-secondary btn-block btn-outline">
      +Add another card</label
    >
  {:else if buttonType == "update"}
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
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label
      for="my-modal-3"
      class="btn btn-sm btn-circle btn-secondary absolute right-2 top-2"
      >✕</label
    >
    <h1 class="text-lg font-bold">Add a new task</h1>
    <div class="form-control mt-3 mb-3">
      <label class="label">
        <span class="label-text">Category</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Pick one</option>
        <option>Hoodies</option>
        <option>Shirts</option>
        <option>Pants</option>
        <option>Jackets</option>
      </select>
    </div>
    <div class="form-control mt-3 mb-3">
      <label class="label">
        <span class="label-text">Title</span>
      </label>
      <input
        type="text"
        placeholder="Task Title"
        class="input input-bordered"
        value={taskData.name}
      />
    </div>
    <div class="form-control mt-3 mb-3">
      <label class="label">
        <span class="label-text">Description</span>
      </label>
      <input
        type="text"
        placeholder="Task Description"
        class="input input-bordered"
        value={taskData.description}
      />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">Task Priority</span>
      </label>
      <select class="select select-bordered">
        <option disabled selected>Pick one</option>
        <option>Urgent</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>
  </div>
</div>
