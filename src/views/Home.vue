<script>
export default {
    name: 'Home',
    setup() {
        return {
            assistants: [
                { id: 10001, groupId: 1, groupName: "分组1", name: "家庭教师", environment: 0, description: "负责辅导我的初三数学科目，性格温和耐心", status: 0 },
                { id: 10002, groupId: 1, groupName: "分组1", name: "私人医生", environment: 0, description: "昨天好像得了些感冒，需要一些建议", status: 1 },
                { id: 10003, groupId: 1, groupName: "分组1", name: "家庭教师", environment: 1, description: "负责辅导我的初三英语科目，主要提供背单词技巧", status: 1 },
                { id: 10004, groupId: 2, groupName: "分组2", name: "家庭教师", environment: 1, description: "负责辅导我的初三语文科目，主要为我修改作文", status: 2 },
                { id: 10005, groupId: 2, groupName: "分组2", name: "健身教练", environment: 0, description: "这是一个居家的健身教练，为我提供瑜伽动作辅导", status: 1 },
                { id: 10006, groupId: 2, groupName: "分组2", name: "虚拟偶像", environment: 1, description: "我最喜欢的早柚！", status: 0 },
                { id: 10007, groupId: 3, groupName: "分组3", name: "产品经理", environment: 0, description: "辅助我完成学校的比赛项目，负责提供idea和发散思维", status: 1 },
                { id: 10008, groupId: 3, groupName: "分组3", name: "编程助手", environment: 0, description: "我的电脑导师，负责解决我的编程问题", status: 1 },
            ],
            feeds: [
                { avatar: "/src/assets/avatars/1.png", name: "小蓝", content: "身为公务员不能没有一个写作助手", time: "3m", href: "#" },
                { avatar: "/src/assets/avatars/2.png", name: "叮当", content: "我创建了一个恋爱导师哈哈哈哈🌹", time: "34m", href: "#" },
                { avatar: "/src/assets/avatars/3.png", name: "莹莹", content: "我发布了一个杰洛特的虚拟偶像💘！！！", time: "49m", href: "#" },
                { avatar: "/src/assets/avatars/4.png", name: "达达", content: "他是很好的编程助手，省了很多百度的时间", time: "1h2m", href: "#" },
                { avatar: "/src/assets/avatars/5.png", name: "小金", content: "身体才是革命的本钱，推荐私人医生！", time: "1h32m", href: "#" },
                { avatar: "/src/assets/avatars/6.png", name: "大鹏", content: "又发论文了，全靠我的翻译助手 :)", time: "2h26m", href: "#" },
                { avatar: "/src/assets/avatars/7.png", name: "阿银", content: "有了私人教练就不用花钱请私教了！", time: "2h57m", href: "#" },
                { avatar: "/src/assets/avatars/8.png", name: "小黑", content: "家庭教师让我很快的学习中文", time: "3h2m", href: "#" },
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
                <div class="flex mb-4">
                    <h1 class="text-lg font-bold flex-grow">助手列表</h1>
                    <div>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-3 mt-1" viewBox="0 0 24 24"
                            aria-labelledby="sortingIconTitle" stroke="currentColor" stroke-width="1"
                            stroke-linecap="square" stroke-linejoin="miter" fill="none">
                            <polyline points="8 8.333 12 4.333 16 8.333 16 8.333" />
                            <polyline points="16 15.667 12 19.667 8 15.667 8 15.667" />
                        </svg>
                    </div>
                </div>
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
                                        <p class="text-content-base opacity-60 text-sm mt-2">{{ assistant.description }}</p>
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
                <div class="flex">
                    <div class="text-lg font-bold mb-4 ml-4 flex-grow">社区动态</div>
                    <div class="text-sm opacity-40 mt-1 mr-2">更多</div>
                </div>
                <ul class="border-t border-b divide-y divide-gray-100">
                    <li class="flex items-center py-5 px-4" v-for="feed in feeds">
                        <div class="bg-gray-200 rounded-full w-10 h-10 flex-shrink-0">
                            <img :src="feed.avatar" class="w-10 h-10 rounded-full" />
                        </div>
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
