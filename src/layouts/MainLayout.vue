<template>
    <div class="h-full">
        <div class="drawer drawer-mobile bg-base-100">
            <input id="side-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex-col items-center justify-center">
                <div class="navbar border-b-gray-300 border-opacity-20 bg-base-100 border-b-2 text-base-content">
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
                    <div class="flex-1 pl-6 py-3">
                        <div class="relative rounded-md hidden lg:flex ">
                            <input type="text" placeholder="搜索" class="pl-10 input input-bordered w-96 text-base-content" />
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

                    <div class="flex-none">
                        <ul class="menu menu-horizontal px-5 hidden lg:flex">
                            <li><a>文档</a></li>
                            <li><a>社区</a></li>
                            <li><a>支持</a></li>
                        </ul>
                        <a class="btn btn-primary btn-sm lg:btn-md mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 pr-3" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
                                    d="M20 12L4 12M12 4L12 20" />
                            </svg>
                            新建
                        </a>
                    </div>
                </div>
                <router-view />
            </div>
            <div class="drawer-side border-r-gray-300 border-opacity-20 border-r-2 ">
                <label for="side-drawer" class="drawer-overlay"></label>
                <ul class="flex flex-col menu p-4 w-72 text-base-content font-medium text-opacity-60 bg-base-200">
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
                    <li class="menu-title"><span>导航</span></li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path
                                    d="M1 18C1 15.75 4 15.75 5.5 14.25 6.25 13.5 4 13.5 4 9.75 4 7.25025 4.99975 6 7 6 9.00025 6 10 7.25025 10 9.75 10 13.5 7.75 13.5 8.5 14.25 10 15.75 13 15.75 13 18M12.7918114 15.7266684C13.2840551 15.548266 13.6874862 15.3832994 14.0021045 15.2317685 14.552776 14.9665463 15.0840574 14.6659426 15.5 14.25 16.25 13.5 14 13.5 14 9.75 14 7.25025 14.99975 6 17 6 19.00025 6 20 7.25025 20 9.75 20 13.5 17.75 13.5 18.5 14.25 20 15.75 23 15.75 23 18" />
                                <path stroke-linecap="round"
                                    d="M12,16 C12.3662741,15.8763472 12.6302112,15.7852366 12.7918114,15.7266684" />
                            </svg>
                            我的助手
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="9" r="5" />
                                <circle cx="9" cy="14" r="5" />
                                <circle cx="15" cy="14" r="5" />
                            </svg>
                            形象合成
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path d="M12 7L12 17" />
                                <path d="M15 10L15 14" />
                                <path d="M18 8L18 16" />
                                <path d="M21 13L21 11" />
                                <path d="M9 4L9 20" />
                                <path d="M6 9L6 15" />
                                <path d="M3 13L3 11" />
                            </svg>
                            声音合成
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path d="M6 6h15l-1.5 9h-12z" />
                                <circle cx="9" cy="19" r="1" />
                                <circle cx="18" cy="19" r="1" />
                                <path d="M6 6H3" />
                            </svg>
                            素材商店
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <polygon points="2 12 2 21 6 21 6 12" />
                                <polygon points="18 7 18 21 22 21 22 7" />
                                <polygon points="10 3 10 21 14 21 14 3" />
                            </svg>
                            流量监控
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path
                                    d="M5.03506429,12.7050339 C5.01187484,12.4731696 5,12.2379716 5,12 C5,11.7620284 5.01187484,11.5268304 5.03506429,11.2949661 L3.20577137,9.23205081 L5.20577137,5.76794919 L7.9069713,6.32070904 C8.28729123,6.0461342 8.69629298,5.80882212 9.12862533,5.61412402 L10,3 L14,3 L14.8713747,5.61412402 C15.303707,5.80882212 15.7127088,6.0461342 16.0930287,6.32070904 L18.7942286,5.76794919 L20.7942286,9.23205081 L18.9649357,11.2949661 C18.9881252,11.5268304 19,11.7620284 19,12 C19,12.2379716 18.9881252,12.4731696 18.9649357,12.7050339 L20.7942286,14.7679492 L18.7942286,18.2320508 L16.0930287,17.679291 C15.7127088,17.9538658 15.303707,18.1911779 14.8713747,18.385876 L14,21 L10,21 L9.12862533,18.385876 C8.69629298,18.1911779 8.28729123,17.9538658 7.9069713,17.679291 L5.20577137,18.2320508 L3.20577137,14.7679492 L5.03506429,12.7050339 Z" />
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                            控制面板
                        </a>
                    </li>
                    <li class="opacity-0"></li>
                    <li class="opacity-0"></li>
                    <li class="menu-title"><span>我的助手</span></li>
                    <li v-for="assistant in myAssistants">
                        <a>
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-6">
                                    <span class="text-xs">{{ assistant.name.charAt(0) }}</span>
                                </div>
                            </div>
                            {{ assistant.description }}
                        </a>
                    </li>
                    <div class="flex-grow"></div>
                    <div class="flex items-center px-3 py-3">
                        <div class="avatar">
                            <div class="w-10 h-10 rounded-full">
                                <img :src="user.avatar" />
                            </div>
                        </div>
                        <div class="flex-auto ml-7">
                            <div class="font-semibold text-base-content">
                                {{ user.name }}
                                <div class="badge badge-primary" v-if="user.vip">VIP</div>
                            </div>
                            <div class="mt-0.5 text-opacity-50">{{ user.description }}</div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "用户名",
                description: "付费用户",
                avatar: "https://picsum.photos/id/1005/200/200",
                vip: true
            },
            myAssistants: [
                {
                    name: "Aiso",
                    description: "家庭教师"
                },
                {
                    name: "Peter",
                    description: "私人医生"
                },
                {
                    name: "Sam",
                    description: "健身教练"
                }
            ]
        }
    },
    methods: {
    }
}
</script>