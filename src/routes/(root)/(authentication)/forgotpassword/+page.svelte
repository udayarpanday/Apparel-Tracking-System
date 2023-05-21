<script>
    import Icon from "$lib/assets/logo.png";
    import toast from "svelte-french-toast";
    import { applyAction, enhance } from "$app/forms";
    let loading = false;
</script>
<div class="w-full max-w-sm mx-auto h-screen flex items-center justify-center">
    <form
        class="bg-white p-8 rounded-lg shadow-md"
        method="POST"
        action="?/forgotPassword"
        use:enhance={() => {
            return async ({ result }) => {
                loading = true;
                if (result.type === "success") {
                    toast.success("Success", { duration: 2000 });
                }
                if (result.type === "failure") {
                    toast.error(result.data.error, { duration: 7000 });
                }

                await applyAction(result);
                loading = false;
            };
        }}
    >
        <div class="text-center w-6/12 m-auto h-auto">
            <img src={Icon} alt="logo" />
        </div>
        <div class="text-center m-3">
            <h1 class="text-3xl font-bold text-default">Forgot Password?</h1>
        </div>
        <div class="text-center">
            <p>
                Please enter your email address to receive a password reset
                link.
            </p>
        </div>
        <div class="form-control w-full max-w-xs mt-3 mb-6">
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
        <div class="flex items-center justify-center">
            <button disabled={loading} class={`btn btn-primary ${loading?"btn-disabled":""}`} type="submit">
                Send Email
            </button>
        </div>
        <div class="divider" />
        <div class="text-center text-info">
            <p>
                Go back to
                <a href="/login" class="font-semibold underline">
                    Login Page.
                </a>
            </p>
        </div>
    </form>
</div>
