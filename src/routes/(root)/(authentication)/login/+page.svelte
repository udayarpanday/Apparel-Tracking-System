<script>
  import Icon from "$lib/assets/logo.png";
</script>

<div class="w-full max-w-sm mx-auto h-screen flex items-center justify-center">
  <form
    class="bg-white p-8 rounded-lg shadow-md"
    method="POST"
    action="?/login"
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
        class="input input-bordered w-full max-w-xs"
      />
    </div>
    <div class="form-control w-full max-w-xs mb-6">
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
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
    <div class="divider" />
    <div class="text-center text-info">
      <p>
        Don&#x27;t have an account?
        <a href="/register" class="font-semibold underline"> Register here. </a>
      </p>
    </div>
  </form>
</div>
