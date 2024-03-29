<script lang="ts">
    import { applyAction, enhance } from "$app/forms";
    import "../../app.css";
    import Icon from "$lib/assets/logo.png";
    import toast from "svelte-french-toast";
    let loading = false;
    import { Toaster } from "svelte-french-toast";
    import { page } from "$app/stores";
    let user = $page.data.user;
</script>

<nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start">
                <a href="#" class="flex ml-2 md:mr-24">
                    <img src={Icon} class="h-8 mr-3" alt="Logo" />
                </a>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ml-3">
                    <div class="flex justify-end md:w-full">
                        <div class="dropdown dropdown-end">
                            <button
                                tabindex="0"
                                class="avatar placeholder mr-4"
                            >
                                <div
                                    class="bg-primary-focus text-neutral-content rounded-full w-12"
                                >
                                    <span>{user.name.substring(0, 1)}</span>
                                </div>
                            </button>
                            <ul
                                tabindex="0"
                                class="menu dropdown-content p-2 shadow bg-white rounded-box w-52 mt-4 mr-2"
                            >
                                <form
                                    method="POST"
                                    action="/login?/logout"
                                    use:enhance={() => {
                                        loading = true;
                                        return async ({ result }) => {
                                            if (result.type === "failure") {
                                                toast.error(result.data.error, {
                                                    duration: 7000,
                                                });
                                            }
                                            loading = false;
                                            await applyAction(result);
                                        };
                                    }}
                                >
                                    <li>
                                        <button>Sign Out</button>
                                    </li>
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
    aria-label="Sidebar"
>
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white ">
        <ul class="space-y-2 font-medium">
            {#if user.role[0] === "admin"}
                <li>
                    <a
                        href="/dashboard"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                            /><path
                                d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                            /></svg
                        >
                        <span class="ml-3">Dashboard</span>
                    </a>
                </li>
            {/if}
            <li>
                <a
                    href="/board"
                    class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                    <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        /></svg
                    >
                    <span class="flex-1 ml-3 whitespace-nowrap">Board</span>
                </a>
            </li>
            {#if user.role[0] === "admin"}
                <li>
                    <a
                        href="/worker-list"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd"
                            /></svg
                        >
                        <span class="flex-1 ml-3 whitespace-nowrap">Workers</span>
                    </a>
                </li>
                <li>
                    <a
                        href="/sales"
                        class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                        <svg
                            aria-hidden="true"
                            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            ><path
                                fill-rule="evenodd"
                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                clip-rule="evenodd"
                            /></svg
                        >
                        <span class="flex-1 ml-3 whitespace-nowrap">Sales</span>
                    </a>
                </li>
            {/if}
            <li>
                <a
                    href="/profile"
                    class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                >
                    <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            fill-rule="evenodd"
                            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                            clip-rule="evenodd"
                        /></svg
                    >
                    <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </a>
            </li>
        </ul>
    </div>
</aside>

<div class="p-4 sm:ml-64">
    <div class="p-4 mt-14">
        <Toaster />
        <slot />
    </div>
</div>
