<script>
    import { page } from "$app/stores";
</script>

<label for="my-modal-3" class="min-h-6 justify-start h-1 btn btn-secondary btn-block btn-ghost text-xs ">
    + Add a card</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
    <div class="modal-box relative">
        <label
            for="my-modal-3"
            class="btn btn-sm btn-circle btn-primary absolute right-2 top-2"
            >✕</label
        >
        <h1 class="text-lg font-bold">Add a new task</h1>
        <div class="form-control mt-3 mb-3">
            <label class="label">
                <span class="label-text">Title</span>
            </label>
            <input
                type="text"
                placeholder="Add task title"
                class="input input-bordered"
                value=""
            />
        </div>
        <div class="form-control mt-3 mb-3">
            <label class="label">
              <span class="label-text">Description</span>
            </label>
            <textarea class="textarea textarea-bordered h-24" placeholder="Add a more detailed description"></textarea>
          </div>
        <div class="form-control mt-3 mb-3">
            <label class="label">
                <span class="label-text">Assign To</span>
            </label>
            <select class="select select-bordered">
                <option disabled selected>Pick one</option>
                <option>Bidhan</option>
                <option>Ram</option>
                <option>Harry</option>
            </select>
        </div>
        <div class="form-control">
            <label class="label">
                <span class="label-text">Task Priority</span>
            </label>
            <select class="select select-bordered">
                <option disabled selected>Pick one</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
        </div>
        <div class="mt-6 text-center">
            <button class="btn btn-primary" type="submit"> Create </button>
        </div>
    </div>
</div>
