<template>
    <div class="p-6">
        <div class="font-semibold text-2xl my-2">Build tools</div>
        <div class="text-gray-400 text-sm my-2">Use the task to build Basik</div>
        <hr>
        <div class="text-sm text-gray-400 my-2">Basik uses <span class="text-blue-400">Grunt</span> for its CSS and JavaScript build system, it's optional, you can use this theme without grunt tools, we included all the dependencies in this project.</div>
        <ul class="text-sm text-gray-400 my-6 ml-6">
            <li>1. <span class="text-blue-400">Download and install Node</span>, which we use to manage our dependencies.</li>
            <li>2. Run <span class="text-red-400">npm install</span> to install dependencies.</li>
            <li>3. Run <span class="text-red-400">grunt build:sass</span> to build css file.</li>
            <li>4. Run <span class="text-red-400">grunt build:dist</span> to build dist with minified js and css.</li>
        </ul>
        <div class="text-sm text-gray-400 my-2">Note: any commands we tell you to run must be ran from the project's root folder.</div>
        <div class="font-semibold text-lg my-2">Starter template</div>
        <div class="text-sm text-gray-400 my-2">Upload the unpacked files on to your server. eg. <span class="text-blue-400">Apache</span> or <span class="text-blue-400">IIS</span></div>
        <div class="text-sm text-gray-400 my-2">Note: This template is built with Ajax. you need put the files on a server for the lazyload plugins to work</div>

    </div>
</template>