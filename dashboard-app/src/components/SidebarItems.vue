<script setup>
import dashboardIcon from '../assets/Images/dashboardIcon.webp'
import userIcon from '../assets/Images/userIcon.webp'
import clipboardIcon from '../assets/Images/clipboardIcon.webp'
import globalIcon from '../assets/Images/globalIcon.webp'
import chatIcon from '../assets/Images/chatIcon.webp'
import basketIcon from '../assets/Images/basketIcon.webp'
import exportIcon from '../assets/Images/exportIcon.webp'

</script>

<template>
    <section class="h-[70vh]  flex flex-col gap-5">
        <input class="bg-gray-200 w-[15rem] p-3 rounded-xl" type="search" placeholder="Search">
        <div>
            <ul class="flex flex-col gap-5">
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl"><img class="" :src="dashboardIcon" alt="">Dashboard</a></li>
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl"><img :src="userIcon" alt="">Customers</a></li>
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl "><img :src="clipboardIcon" alt="">All reports</a></li>
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl "><img :src="globalIcon" alt="">Geography</a></li>
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl "><img :src="chatIcon" alt="">Conversations</a></li>
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl "><img :src="basketIcon" alt="">Deals</a></li>
                <li><a href="" class="flex items-center gap-3 hover:bg-gray-300 p-1.5 rounded-2xl "><img :src="exportIcon" alt="">Export</a></li>
            </ul>
        </div>
    </section>
</template>