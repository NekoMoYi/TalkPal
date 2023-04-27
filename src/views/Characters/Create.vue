<script>
export default {
    name: 'CharacterCreate',
    data() {
        return {
            selectedIndex: undefined,
            characters: [
                { name: "", avatar: "1.png" },
                { name: "", avatar: "2.png" },
                { name: "", avatar: "3.png" },
                { name: "", avatar: "4.png" },
                { name: "", avatar: "5.png" },
                { name: "", avatar: "6.png" },
                { name: "", avatar: "7.png" },
                { name: "", avatar: "8.png" },
                { name: "", avatar: "9.png" },
                { name: "", avatar: "10.png" },
                { name: "", avatar: "11.png" },
                { name: "", avatar: "12.png" },
                { name: "", avatar: "13.png" },
                { name: "", avatar: "14.png" },
                { name: "", avatar: "15.png" },
                { name: "", avatar: "16.png" },
                { name: "", avatar: "17.png" },
                { name: "", avatar: "18.png" },
                { name: "", avatar: "19.png" },
                { name: "", avatar: "20.png" },
                { name: "", avatar: "21.png" },
                { name: "", avatar: "22.png" },
                { name: "", avatar: "23.png" },
                { name: "", avatar: "24.png" },
                { name: "", avatar: "25.png" },
                { name: "", avatar: "26.png" },
                { name: "", avatar: "27.png" }
            ]
        }
    },
    methods: {
        selectCharacter(idx) {
            this.selectedIndex = idx;
        }
    }
}
</script>

<template>
    <div class="flex h-[calc(100%-64px)] lg:h-[calc(100%-90px)]">
        <div class="w-full text-base-content overflow-y-auto">
            <div class="mx-5 mt-6">
                <div class="text-xl font-bold mb-4 ml-4 pt-2">新建助手</div>
                <div class="flex flex-wrap px-2 lg:px-4 justify-center">
                    <div v-for="(character, index) in characters" :key="index"
                        class="rounded-full bg-base-200 flex items-center justify-center w-32 h-32 m-5"
                        :class="{ 'border-4 border-primary border-opacity-60': selectedIndex === index }"
                        @click="selectCharacter(index)">
                        <img :src="`/src/assets/avatars/${character.avatar}`" :alt="character.name"
                            class="rounded-full w-full h-full object-cover">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
