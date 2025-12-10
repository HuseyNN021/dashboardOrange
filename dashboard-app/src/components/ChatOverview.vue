<script setup>
import userImg from '../assets/Images/userImg.webp'
</script>

<template>

    <section class="w-[20rem] bg-red-200 p-1 rounded-2xl mt-3">
        <div class="pl-3 flex flex-col gap-3">
            <div>
                <h3 class="font-semibold text-[1.25rem] text-[#131313]">
                    Chats
                </h3>
                <p class="text-[#454545] text-[0.875rem]">2 unread messages</p>
            </div>
            <div class="flex gap-3">
                <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
            </div>
        </div>
    </section>

</template>