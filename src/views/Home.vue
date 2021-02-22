<template>
    <div class="topNav">
        <div class="logo">LOGO</div>
        <ul class="menu">
            <li>菜单1</li>
            <li>菜单2</li>
        </ul>
    </div>
    <div class="banner">
        <h1>EVue-ui</h1>
        <h3>一个厉害的UI框架</h3>
        <p class="actions">
            <a >Github</a>
            <a >开始</a>
        </p>
    </div>
</template>
<style lang="scss" scoped>
    .topNav {
        background: pink;
        display: flex;
        padding: 16px;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }
        }
    }

</style>
