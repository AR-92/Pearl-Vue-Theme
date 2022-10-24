<template>
    <div class="bg-gray-100 h-screen grid grid-cols-1 place-items-center">
      <smLogo />
      <div class="bg-white p-8 rounded-md">
        <div class="font-semibold text-lg">Welcome back</div>
        <div class="text-sm font-thin text-gray-400 mb-4">Login to manage your account</div>
        <span class="block font-thin text-sm">Email</span>
        <input
          class="outline-0 my-2 placeholder:text-sm py-1 px-3 placeholder:text-gray-300 placeholder:font-thin border-gray-300 border-solid border rounded"
          placeholder="Please Enter Your Email"
          type="email"
        />
        <span class="block font-thin text-sm">Password</span>
        <input
          type="password"
          placeholder="Please Enter Your Password"
          class="outline-0 my-2 placeholder:text-sm py-1 px-3 placeholder:text-gray-300 placeholder:font-thin border-gray-300 border-solid border rounded"
        />
        <div class="text-sm font-thin text-gray-400 mb-8">Forgot password?</div>
        <div class="text-sm flex items-center"><input class="appearance-none h-4 w-4 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox">Remember me</div>
        <button
          class="bg-blue-500 text-white py-2 rounded-md font-semibold text-sm my-6 px-4"
        >
          Sign In
        </button>
        <div class="text-sm text-gray-400">
          Do not have an account? <a class="text-blue-400 cursor-pointer hover:text-blue-500">Sign up</a>
        </div>
      </div>
      <div class="text-sm font-thin text-gray-400">© Copyright. Basik</div>
    </div>
  </template>
  