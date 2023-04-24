<template>
    <div class="h-full">
        <div class="drawer drawer-mobile">
            <input id="side-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex-col items-center justify-center">
                <div class="navbar border-b-gray-300 border-opacity-20 bg-base-100 border-b-2">
                    <div class="flex-none lg:hidden">
                        <label for="side-drawer" class="btn btn-square btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-5 h-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16">
                                </path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-1 hidden lg:flex pl-6 py-3">
                        <div class="relative rounded-md">
                            <input type="text" placeholder="Search" class="pl-10 input input-bordered w-96 text-base-content" />
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                                    <path d="m19 19-3.5-3.5"></path>
                                    <circle cx="11" cy="11" r="6"></circle>
                                </svg>
                            </div>
                        </div>

                    </div>
                    <div class="flex-none hidden lg:flex">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-5 h-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <router-view />
            </div>
            <div class="drawer-side border-r-gray-300 border-opacity-20 border-r-2">
                <label for="side-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-72 bg-base-100 text-base-content">
                    <li class="pb-5 disabled">
                        <div class="flex flex-row">
                            <div class="flex-1 self-center">
                                <img src="./../assets/vue.svg" />
                            </div>
                            <div class="flex-none">
                                <button class="btn btn-square btn-ghost border-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        class="inline-block w-5 h-5 stroke-current">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </li>
                    <!-- sidebar image-->
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>