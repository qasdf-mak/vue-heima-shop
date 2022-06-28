<template>
    <div>
        <el-button type="primary" plain @click="logout">退出登录</el-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        created() {

        },
        mounted() {

        },
        methods: {
            logout() {
                this.$message({
                    type: 'success',
                    message: '退出登录成功'
                })
                sessionStorage.clear()
                this.$router.push('/login')
            }
        }
    };
</script>

<style scoped lang="">

</style>