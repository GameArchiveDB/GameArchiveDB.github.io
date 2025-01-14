<template>
    <h3>할인률 계산기</h3>
    <div class="display">
        <div>
            <img src="@/assets/images/sims4/packs/expansion/TS4_Pack-Art_Life-and-Death_KR.avif" alt="팩 이미지" />
            <p>정가: {{ expansion.price }}원</p>
        </div>

        <div>
            <img src="@/assets/images/sims4/packs/expansion/TS4_Pack-Art_Life-and-Death_KR.avif" alt="팩 이미지" />
            <p>정가: {{ game.price }}원</p>
        </div>

        <div>
            <img src="@/assets/images/sims4/packs/expansion/TS4_Pack-Art_Life-and-Death_KR.avif" alt="팩 이미지" />
            <p>정가: {{ item.price }}원</p>
        </div>

        <div>
            <img src="@/assets/images/sims4/packs/expansion/TS4_Pack-Art_Life-and-Death_KR.avif" alt="팩 이미지" />
            <p>정가: {{ kit.price }}원</p>
        </div>

        <div>
            <input type="number" v-model="expansion.count">
        </div>

        <div>
            <input type="number" v-model="game.count">
        </div>

        <div>
            <input type="number" v-model="item.count">
        </div>

        <div>
            <input type="number" v-model="kit.count">
        </div>
    </div>

    <div>
        정가 <input type="text" v-model="originalPrice" readonly>
        할인가(입력)<input type="text" v-model="discountedPrice">
        할인 받은 금액<input type="text" v-model="discountAmount" readonly>
        할인률<input type="text" v-model="discountRate" readonly>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const expansion = ref({
    price: 0,
    count: 0
});
const game = ref({
    price: 0,
    count: 0
});
const item = ref({
    price: 0,
    count: 0
});
const kit = ref({
    price: 0,
    count: 0
});

const originalPrice = ref(0);
const discountedPrice = ref(0);
const discountAmount = ref(0);
const discountRate = ref(0);

</script>

<style scoped>
.display {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 2fr;
    width: 100%;
}

img {
    width: 150px;
}
</style>