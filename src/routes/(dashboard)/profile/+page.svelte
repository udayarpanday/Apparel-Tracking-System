<script>
    import { page } from "$app/stores";
    let user = $page.data.user;
</script>

<h1 class="text-2xl font-bold text-default mb-3">Profile</h1>
<div class="flex n flex-row">
    <div
        class="block max-w-sm w-1/2 p-6 mr-4 bg-white border border-gray-200 rounded-lg "
    >
        <div class="avatar placeholder text-center">
            <div
                class="bg-neutral-focus text-neutral-content rounded-xl w-24"
            >
                <span class="text-3xl ">{user.name.substring(0, 1)}</span>
            </div>
        </div>
        <div class="pt-4 pb-4 pr-4">
            <h1 class="text-3xl font-bold text-default text-primary">{user.name}</h1>
        </div>
        <div class="pb-4 pr-4 ">
            <div class="flex items-center">
                <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-primary transition duration-75 dark:text-primary group-hover:text-primary dark:group-hover:text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                    /></svg
                >
                <h3 class="ml-3 text-lg font-bold">{user.role[0]}</h3>
            </div>
            <div class="flex items-center mt-1">
                <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-primary"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                </svg>
                <h3 class="ml-3 text-lg font-bold">{user.address}</h3>
            </div>
        </div>
        <div class="pb-4 pr-4 ">
            <p class="text-base font-light">Email Address</p>
            <h3 class="text-lg font-bold">{user.email}</h3>
        </div>
        <div class="pb-4 pr-4 ">
            <p class="text-base font-light">Phone Number</p>
            <h3 class="text-lg font-bold">{user.phone}</h3>
        </div>
    </div>
    <div
        class="block max-w-sm w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow"
    >
    <h1 class="text-xl font-bold text-default mb-3">Change Password</h1>
    <p class="text-sm">You can change your password here.</p>
        <div class="form-control mt-3 mb-3">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                class="input input-bordered"
                value=""
            />
        </div>
        <div class="form-control mt-3 mb-6">
            <label class="label">
                <span class="label-text">Password Confirmation</span>
            </label>
            <input
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                class="input input-bordered"
                value=""
            />
        </div>
        <div class="text-center">
            <button class="btn btn-secondary" type="submit"> Change </button>
        </div>
    </div>
</div>
