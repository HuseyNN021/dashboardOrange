<script setup>
import userImg from '../assets/Images/userImg.webp'
import settingIcon from '../assets/Images/settingIcon.webp'
import logoutIcon from '../assets/Images/logoutIcon.webp'
</script>

<template>
    <section class="h-[15vh] ">
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4">
                <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                <div>
                    <p class="text-[0.875rem]">Gustavo Xavier</p>
                    <span class="p-0.5 bg-[#FFCD71] rounded-[1.5rem]  text-[0.625rem]">Admin</span>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex items-center gap-0.5">
                    <img :src="settingIcon" alt="">
                    <p class="text-[#131313] text-[0.875rem]">Settings</p>
                </div>
                <div class="flex items-center gap-0.5">
                    <img :src="logoutIcon" alt="">
                    <p class="text-[#B01212] text-[0.875rem]">Log Out</p>
                </div>
            </div>
        </div>
    </section>
</template>