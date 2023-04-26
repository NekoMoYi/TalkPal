<script>
export default {
    name: 'Home',
    setup() {
        return {
            assistants: [
                { id: 10001, groupId: 1, groupName: "分组1", name: "助手1", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 0 },
                { id: 10002, groupId: 1, groupName: "分组1", name: "助手2", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 1 },
                { id: 10003, groupId: 1, groupName: "分组1", name: "助手3", environment: 1, description: "这是一个一个助手简介啊啊啊", status: 1 },
                { id: 10004, groupId: 2, groupName: "分组2", name: "助手4", environment: 1, description: "这是一个一个助手简介啊啊啊", status: 2 },
                { id: 10005, groupId: 2, groupName: "分组2", name: "助手5", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 1 },
                { id: 10006, groupId: 2, groupName: "分组2", name: "助手6", environment: 1, description: "这是一个一个助手简介啊啊啊", status: 0 },
                { id: 10007, groupId: 3, groupName: "分组3", name: "助手7", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 1 },
                { id: 10008, groupId: 3, groupName: "分组3", name: "助手8", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 1 },
                { id: 10009, groupId: 3, groupName: "分组3", name: "助手9", environment: 1, description: "这是一个一个助手简介啊啊啊", status: 2 },
                { id: 10010, groupId: 4, groupName: "分组4", name: "助手10", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 2 },
                { id: 10011, groupId: 4, groupName: "分组4", name: "助手11", environment: 0, description: "这是一个一个助手简介啊啊啊", status: 1 }
            ],
            feeds: [
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"},
                { avatar: "", name: "助手1", content: "发布了一个一个助手模板啊啊啊啊啊", time: "3m", href: "#"}
            ]
        }
    },
    methods: {
    }
}
</script>

<template>
    <div class="flex h-[calc(100%-64px)] lg:h-[calc(100%-90px)]">
        <div class="w-full lg:w-7/12 text-base-content overflow-y-auto">
            <div class="mx-5 mt-6">
                <div class="text-lg font-bold mb-4 ml-4">助手列表</div>
                <ul class="border-t border-b divide-y divide-gray-100">
                    <li class="flex items-center py-4 cursor-pointer hover:bg-base-200 bg-opacity-60"
                        v-for="assistant in assistants">
                        <a :href='"/assistants/" + assistant.id' class="flex-grow px-3">
                            <div class="flex justify-between items-center w-full">
                                <div class="flex items-center">
                                    <span v-if="assistant.status == 0"
                                        class="w-3 h-3 ml-2 rounded-full bg-red-500 opacity-75"></span>
                                    <span v-if="assistant.status == 1"
                                        class="w-3 h-3 ml-2 rounded-full bg-green-500 opacity-75"></span>
                                    <span v-if="assistant.status == 2"
                                        class="w-3 h-3 ml-2 rounded-full bg-gray-500 opacity-75"></span>
                                    <div class="ml-5">
                                        <p class="text-content-base font-medium">
                                            <a :href='"/groups/" + assistant.groupId' class="text-base-content">
                                                {{ assistant.groupName ? assistant.groupName + " / " : "" }}
                                            </a>
                                            {{ assistant.name }}
                                        </p>
                                        <p class="text-content-base opacity-60 text-sm">{{ assistant.description }}</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div v-if="assistant.environment == 0"
                                        class="badge badge-neutral badge-outline opacity-60 mr-4">测试</div>
                                    <div v-if="assistant.environment == 1"
                                        class="badge badge-primary badge-outline opacity-90 mr-4">正式</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="w-4 h-4 mr-2">
                                        <path fill-rule="evenodd"
                                            d="M14.707 10l-4.147-4.146a.5.5 0 11.708-.708l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L14.707 10z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>

                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="w-0 lg:w-5/12 bg-base-200 bg-opacity-40 text-base-content overflow-y-auto hidden lg:block">
            <div class="mx-5 mt-6">
                <div class="text-lg font-bold mb-4 ml-4">社区动态</div>
                <ul class="border-t border-b divide-y divide-gray-100">
                    <li class="flex items-center py-5 px-4" v-for="feed in feeds">
                        <div class="bg-gray-200 rounded-full w-10 h-10 flex-shrink-0"></div>
                        <div class="ml-5 flex-grow">
                            <div class="flex justify-between items-center">
                                <div class="text-base-content font-medium">{{ feed.name }}</div>
                                <div class="text-base-content text-opacity-30 text-sm">{{ feed.time }}</div>
                            </div>
                            <div class="text-base-content mt-1 text-opacity-60">{{ feed.content }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
