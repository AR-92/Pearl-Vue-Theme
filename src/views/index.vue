<template>
  <div class="overflow-hidden">
    <div class="flex p-4 items-center justify-between fixed bg-white w-screen">
      <div class="flex items-center">
        <smLogo />
        <ul class="flex text-sm">
          <li class="my-2 mx-4">
            <a class="hover:text-blue-500 cursor-pointer" href="#categories"
              >Categories</a
            >
          </li>
          <li class="my-2 mx-4">
            <a class="hover:text-blue-500 cursor-pointer" href="#features"
              >Features</a
            >
          </li>
          <li class="my-2 mx-4">
            <a class="hover:text-blue-500 cursor-pointer" href="#demo">Demo</a>
          </li>
        </ul>
      </div>
      <ul class="flex items-center text-sm">
        <li class="my-2 mx-4">
          <a class="hover:text-blue-500 cursor-pointer" href="/indexDocs/Introduction"
            >Docs</a
          >
        </li>

        <li class="my-2 mx-4">
          <button
            class="bg-blue-500 px-4 py-1 text-white font-semibold text-sm rounded-full cursor-pointer"
          >
            Download
          </button>
        </li>
      </ul>
    </div>
    <div class="flex flex-col items-center my-40">
      <div class="text-4xl font-bold m-5 mt-20 w-1/2 text-center">
        Responsive Bootstrap Web Application and Customizable Admin Template
      </div>
      <div class="text-xl font-thin m-5 text-gray-500 w-1/2 text-center">
        Basik responsive bootstrap template is a useful front-end components
        that helps the developers build beautiful and functional web application
        fast and easy.
      </div>
      <div class="flex m-5">
        <button
          class="m-1 p-2 border border-gray-300 text-gray-500 text-sm rounded-md"
        >
          View The Demo
        </button>
        <button
          class="m-1 p-2 border border-blue-500 text-blue-500 text-sm rounded-md"
        >
          Buy This Theme
        </button>
      </div>
    </div>
    <div class="flex justify-center my-20">
      <img class="w-1/2" src="@/assets/img/_b.png" />
    </div>
    <div class="bg-slate-900" id="categories">
      <div class="px-52 py-20">
        <div class="text-white text-4xl font-bold py-2">Categories</div>
        <div class="text-gray-500 text-sm">
          Basik give three categories to build web applications
        </div>
        <div class="flex justify-between mt-8">
          <a href="/LayoutDefault/DashBoard">
            <div class="text-gray-500 text-sm my-2">.01</div>
            <div class="text-white text-lg font-semibold my-2">Admin</div>
            <img class="w-72 my-2" src="@/assets/img/_a.png" />
          </a>
          <a href="">
            <div class="text-gray-500 text-sm my-2">.01</div>
            <div class="text-white text-lg font-semibold my-2">Music</div>
            <img class="w-72 my-2" src="@/assets/img/_music.png" />
          </a>
          <a href="">
            <div class="text-gray-500 text-sm my-2">.01</div>
            <div class="text-white text-lg font-semibold my-2">Video</div>
            <img class="w-72 my-2" src="@/assets/img/_video.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="bg-gray-50" id="features">
      <div class="px-72 py-20">
        <div class="text-4xl font-bold py-2">Features</div>
        <div class="text-gray-500 text-sm">Bootstrap 4 framework template</div>
        <div class="flex mt-8">
          <div class="w-1/4 mx-3">
            <div class="text-gray-300 text-sm my-2">.01</div>
            <div class="text-lg font-semibold my-2">Ajax Loading</div>
            <div class="text-gray-300 text-sm my-2">
              Using Html5 pushState without reloading your page's layout or any
              resources (JS, CSS), giving the appearance of a fast, full page
              load.
            </div>
          </div>
          <div class="w-1/4 mx-3">
            <div class="text-gray-300 text-sm my-2">.02</div>
            <div class="text-lg font-semibold my-2">Lazy load modules</div>
            <div class="text-gray-300 text-sm my-2">
              Load modules & components on demand (lazy load) with jQuery.
            </div>
          </div>
          <div class="w-1/4 mx-3">
            <div class="text-gray-300 text-sm my-2">.03</div>
            <div class="text-lg font-semibold my-2">SASS CSS</div>
            <div class="text-gray-300 text-sm my-2">
              Its source code utilizes Sass, a popular CSS preprocessor. Quickly
              get started with precompiled CSS or build on the source.
            </div>
          </div>
          <div class="w-1/4 mx-3">
            <div class="text-gray-300 text-sm my-2">.04</div>
            <div class="text-lg font-semibold my-2">NPM & Grunt</div>
            <div class="text-gray-300 text-sm my-2">
              Automate development tasks, like compiling Sass to CSS,
              concatenating and minifying js files; NPM manages frameworks,
              libraries, assets, and utilities.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-52 flex flex-col items-center" id="demo">
      <div class="mt-40 my-8 text-3xl font-semibold">
        Templates with Dark & Light colors
      </div>
      <div class="my-8 text-xl text-gray-500 w-1/2 leading-10 text-center">
        Basik provides two color styles for your porject. All components have
        dark and white style.
      </div>
      <div class="grid grid-cols-3 gap-8 place-content-center mb-20">
        <a href="/LayoutDefault/DashBoard"><img class="w-80 my-2" src="@/assets/img/_c.png" /></a>
        <a href="/LayoutDefault/Calaneder"><img class="w-80 my-2" src="@/assets/img/_d.png" /></a>
        <a href="/LayoutDefault/Users"><img class="w-80 my-2" src="@/assets/img/_e.png" /></a>
        <a href="/LayoutDefault/Messages"><img class="w-80 my-2" src="@/assets/img/_f.png" /></a>
        <a href="/LayoutDefault/Email"><img class="w-80 my-2" src="@/assets/img/_g.png" /></a>
        <a href="/LayoutDefault/Profile"><img class="w-80 my-2" src="@/assets/img/_h.png" /></a>
      </div>
    </div>
    <div class="bg-slate-900">
      <div class="w-screen h-screen p-32 flex justify-between">
        <smLogo class="text-white hover:text-blue-500 self-start" />
        <div class="w-2/3">
          <div
            class="text-gray-500 hover:text-white text-sm m-5 leading-6 text-lg"
          >
            Basik is a responsive bootstrap web application and customizable
            admin template that helps the developers build beautiful and
            functional web application fast and easy. It comes with four
            applications and lot of useful components which can help you to
            build CMS system, Project management and other web applications.
          </div>
          <div class="flex justify-between m-5">
            <div>
              <div class="my-5 font-semibold text-lg text-gray-500">
                Applications
              </div>
              <ul class="text-white font-thin text-sm">
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/LayoutDefault/Calaneder"
                    >Calender</a
                  >
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/LayoutDefault/Email"
                    >Email</a
                  >
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/LayoutDefault/Messages"
                    >Message</a
                  >
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/LayoutDefault/Users"
                    >User Management</a
                  >
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/Innvoice">Invoice</a>
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/Search">Search</a>
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/FAQ">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <div class="my-5 font-semibold text-lg text-gray-500">Help</div>
              <ul class="text-white font-thin text-sm">
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/indexDocs/Build"
                    >Documentation</a
                  >
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/indexDocs/ChangeLog"
                    >Changelog</a
                  >
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500" href="/indexDocs/ChangeLog"
                    >update</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <div class="my-5 font-semibold text-lg text-gray-500">
                Folw Us
              </div>
              <ul class="text-white font-thin text-sm">
                <li class="my-1">
                  <a class="hover:text-blue-500">Dribbble</a>
                </li>
                <li class="my-1">
                  <a class="hover:text-blue-500">Themeforest</a>
                </li>
                <li class="my-1">
                  <a class="text-sm text-gray-500">© Copyright. Basik</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
