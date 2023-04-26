<script>
    import { applyAction, enhance } from "$app/forms";
    import Icon from "$lib/assets/logo.png";
    import toast from "svelte-french-toast";
    let loading = false;
</script>

<div class="w-full max-w-sm mx-auto h-screen flex items-center justify-center">
    <form
        class="bg-white p-8 rounded-lg shadow-md"
        method="POST"
        action="?/login"
        use:enhance={() => {
            loading = true;
            return async ({ result }) => {
                if (result.type === "redirect") {
                    toast.success("Success", { duration: 2000 });
                }
                if (result.type === "failure") {
                    toast.error(result.data.error, { duration: 7000 });
                }
                loading = false;
                await applyAction(result);
            };
        }}
    >
        <div class="text-center w-6/12 m-auto h-auto">
            <img src={Icon} alt="logo" />
        </div>
        <div class="text-center m-3">
            <h1 class="text-4xl font-bold text-default">Login</h1>
        </div>
        <div class="form-control w-full max-w-xs mt-3 mb-3">
            <label class="label">
                <span class="label-text">Email</span>
            </label>
            <input
                type="text"
                placeholder="Type here"
                name="email"
                class="input input-bordered w-full max-w-xs"
            />
        </div>
        <div class="form-control w-full max-w-xs mb-6">
            <label class="label">
                <span class="label-text">Password</span>
            </label>
            <input
                type="password"
                placeholder="Type here"
                name="password"
                class="input input-bordered w-full max-w-xs"
            />
        </div>
        <div class="flex items-center justify-between">
            <button class="btn btn-primary" type="submit"> Log in </button>
            <a
                class="inline-block align-baseline font-medium text-sm text-primary hover:text-primary-dark"
                href="/forgotpassword"
            >
                Forgot Password?
            </a>
        </div>
    </form>
</div>
