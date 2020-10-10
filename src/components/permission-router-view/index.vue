<template>
    <div class="permission_router_view">
        <template v-if="$_hasPermisson(permissionCode)">
            <router-view></router-view>
        </template>
        <template v-else>
            <div>暂无权限</div>
        </template>
    </div>
</template>

<script>
export default {
    name:'permissionRouterView',
    props: {
        permissionCode: {
            type:String,
            required:true
        }
    }
}
</script>

<style>

</style>