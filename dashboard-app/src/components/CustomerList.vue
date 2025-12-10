<script setup>
import starIcon from '../assets/Images/starIcon.webp'
import penIcon from '../assets/Images/penIcon.webp'
import detailedIcon from '../assets/Images/detailedIcon.webp'
import userImg from '../assets/Images/userImg.webp'

</script>

<template>
    <section class="w-[35rem] h-[25rem] bg-fuchsia-200 rounded-2xl p-3 ">
        <div class="flex flex-col justify-between gap-1 h-[23rem]">
            <!-- header -->
            
            <div class="flex justify-between">
                <h3>Customers</h3>
                <select name="" id="">
                    <option value="">Sort by News</option>
                    <option value="">Sort by Olds</option>
                </select>
            </div>

            <!-- Customer List -->

            <div>
                <div class="flex justify-between items-center hover:bg-fuchsia-700 rounded-2xl p-2 h-[4rem]">
                    <div class="flex items-center gap-4">
                        <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                        <div>
                            <p class="font-medium text-[0.875rem]">Chris Friedkly</p>
                            <p class="text-[#454545] text-[0.75rem]">Supermarket Villanova</p>
                        </div>
                    </div>
                    <div class="flex h-[2rem] gap-3 items-center">
                        <img class="w-[1rem] h-[1rem]" :src="starIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="penIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="detailedIcon" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-center hover:bg-fuchsia-700 rounded-2xl p-2 h-[4rem]">
                    <div class="flex items-center gap-4">
                        <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                        <div>
                            <p class="font-medium text-[0.875rem]">Chris Friedkly</p>
                            <p class="text-[#454545] text-[0.75rem]">Supermarket Villanova</p>
                        </div>
                    </div>
                    <div class="flex h-[2rem] gap-3 items-center">
                        <img class="w-[1rem] h-[1rem]" :src="starIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="penIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="detailedIcon" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-center hover:bg-fuchsia-700 rounded-2xl p-2 h-[4rem]">
                    <div class="flex items-center gap-4">
                        <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                        <div>
                            <p class="font-medium text-[0.875rem]">Chris Friedkly</p>
                            <p class="text-[#454545] text-[0.75rem]">Supermarket Villanova</p>
                        </div>
                    </div>
                    <div class="flex h-[2rem] gap-3 items-center">
                        <img class="w-[1rem] h-[1rem]" :src="starIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="penIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="detailedIcon" alt="">
                    </div>
                </div>
                <div class="flex justify-between items-center hover:bg-fuchsia-700 rounded-2xl p-2 h-[4rem]">
                    <div class="flex items-center gap-4">
                        <img class="w-[2rem] h-[2rem] rounded-full" :src="userImg" alt="">
                        <div>
                            <p class="font-medium text-[0.875rem]">Chris Friedkly</p>
                            <p class="text-[#454545] text-[0.75rem]">Supermarket Villanova</p>
                        </div>
                    </div>
                    <div class="flex h-[2rem] gap-3 items-center">
                        <img class="w-[1rem] h-[1rem]" :src="starIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="penIcon" alt="">
                        <img class="w-[1rem] h-[1rem]" :src="detailedIcon" alt="">
                    </div>
                </div>
            </div>

            <!-- Link -->

            <p><a href="#" class="text-[#734A00] text-[0.875rem]">All customers →</a></p>

        </div>
    </section>
</template>