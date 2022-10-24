<template>
  <div class="flex">
    <div class="bg-slate-50 h-screen w-52 p-2">
      <a class="text-blue-500 text-xl p-2" href="/indexDocs/Introduction"
        >Basik <span class="text-gray-400 text-xs">docs 1.1.1</span></a
      >
      <hr class="my-4" />
      <ul class="text-sm mt-2">
        <li class="text-gray-400 p-2 py-4">
          <a href="" class="">Get started</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/Introduction" class="">Indroduction</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/FileStructure" class="">File Structure</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/Build" class="">Build</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/Scripts" class="">Scripts</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/Plugins" class="">Plugins</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/Components" class="">Components</a>
        </li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/RTL" class="">RTL</a>
        </li>
        <li class="text-gray-400 p-2 py-4"><a href="" class="">Other</a></li>
        <li class="p-2 text-gray-600 hover:text-blue-600">
          <a href="/indexDocs/ChangeLog" class="">Changelog</a>
        </li>
      </ul>
      <hr class="my-4" />
      <a href="" class="text-gray-400 p-2 py-4 text-xs">© Copyright. Basik</a>
    </div>
    <div class="grow">
      <RouterView />
    </div>
  </div>
</template>
