<template>
    <div class="login-box">
        <div class="avatar-box">
            <el-image class="img-box" :src="avatarUrl" fit="cover"></el-image>
        </div>
        <div class="from-box-register">
            <el-form ref="formRegister" label-position="left" :model="formRegister" label-width="70px" :rules="rules">
                <el-form-item label="账号" prop="userName">
                    <el-input v-model="formRegister.userName" size="small" prefix-icon="el-icon-user-solid">
                    </el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passWord">
                    <el-input v-model="formRegister.passWord" size="small" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="formRegister.email" size="small" prefix-icon="el-icon-message"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="formRegister.phone" size="small" prefix-icon="el-icon-phone-outline">
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="btn-box">
                <el-button type="primary" round @click="goRegister">注册</el-button>
            </div>
            <div class="register-box">
                <el-link type="primary" @click="goLoginView">去登录</el-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            };
        },
        props: {
            avatarUrl: {
                type: String,
                default: '../../assets/random/1.jpg'
            },
            formRegister: {
                type: Object,
            },
            rules: {
                type: Object,
            },
            isLogin: {
                type: Boolean,
                default: () => true
            }
        },
        created() {

        },
        mounted() {

        },
        methods: {
            goLoginView() {
                this.$emit('goLoginView')
            },
            goRegister() {
                this.$refs.formRegister.validate(isSuccess => {
                    if (isSuccess) {
                        this.$emit('goRegister', this.formRegister)
                    }
                })
            }
        }
    };
</script>

<style scoped lang="less">
    .login-box {
        position: absolute;
        width: 450px;
        min-height: 300px;
        border-radius: 20px;
        top: 50% !important;
        left: 50% !important;
        background: rgba(rgb(249, 249, 249), 0.5);
        transform: translate(-50%, -50%) !important;

        .avatar-box {
            position: absolute;
            top: -25%;
            left: 50%;
            transform: translate(-50%, 50%);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #fff;
            padding: 10px;
            box-shadow: 0 0 10px #ccc;

            .img-box {
                max-height: 100%;
                max-width: 100%;
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }

        .from-box-register {
            padding: 20px;
            margin-top: 60px;

            .btn-box {
                margin-top: 10px;
                display: flex;
                justify-content: center;
            }

            .register-box {
                position: absolute;
                right: 20px;
                bottom: 20px;
            }
        }
    }
</style>