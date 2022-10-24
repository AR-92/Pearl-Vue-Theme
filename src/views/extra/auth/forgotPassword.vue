<template>
    <div class="flex">
        <div class="h-screen bg-blue-500 w-1/2 p-12 text-white flex flex-col">
            <div class="text-xl font-semibold">Basik</div>
            <div class="text-sm text-blue-200 flex grow">Tailwindcss Web Application</div>
            <div class="flex flex-row text-sm font-semibold text-blue-200 justify-between justify-end ">
                <div>About</div>
                <div>Terms Policy</div>
            </div>
        </div>
        <div class="h-screen flex flex-col p-12">
            <div class="font-semibold text-lg mb-2">Forgot your password?</div>
            <div class="text-gray-400 text-sm">Enter your email below and we will send you instructions on how to change your password.</div>
            <input type="text" placeholder="Email" class="py-1 px-2 my-2 mt-20 outline-0 border border-gray-200 rounded-md">
            <button class="bg-blue-500 text-white py-1 rounded-md my-2">Send</button>
            <div class="text-gray-500 text-sm mt-20">Return to <span class="text-blue-400">Sign in </span></div>
        </div>
    </div>
</template>