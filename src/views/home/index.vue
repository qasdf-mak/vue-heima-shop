<template>
    <el-container class="container">
        <el-header class="header">
            <div></div>
            <div class="">
                <el-button type="primary" plain size="mini" @click="logout">退出登录</el-button>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px" class="aside">Aside</el-aside>
            <el-main class="main">Main</el-main>
        </el-container>
    </el-container>
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

<style scoped lang="less">
    .container {
        height: 100%;
        color: #fff;
        background-color: #f2f4f6;

        .header {
            display: flex;
            justify-content: space-between;
            align-content: center;
            background-color: #000;
        }

        .aside {
            background-color: #000;
        }

        .main {
            margin: 15px;
            background-color: #fff;
        }
    }
</style>