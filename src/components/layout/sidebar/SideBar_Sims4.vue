<template>
    <div class="sidebar">
        <h3>Menu</h3>
        <ul>
            <li>팩 정보
                <ul>
                    <li>확장팩</li>
                    <li>게임팩</li>
                    <li>아이템팩</li>
                    <li>키트팩</li>
                </ul>
            </li>
            <li> 할인 정보
                <ul>
                    <li @click="$router.push('/sims4/discount/calculator')">할인률 계산기</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.sidebar {
    height: 100%;
    background-color: #82D923;
    color: white;
}

.sidebar ul {
    list-style-type: none;
}

.sidebar li {
    
}
</style>