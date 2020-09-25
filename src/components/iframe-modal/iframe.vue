<template>
    <div class="iframe_container">
        <div class="iframe_box">
            <div>
                <iframe src="http://www.baidu.com" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.iframe_container {
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 99;
}
</style>