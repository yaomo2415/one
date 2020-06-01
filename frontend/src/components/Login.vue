<template>
  <div class="login_container">
    <div class="slogan">
      <h1>一個短篇</h1>
      <h3>簡單的生活何嘗不是一場華麗的冒險。</h3>
    </div>
    <div class="login_box">
      <!--:model 表单数据绑定属性-->
      <!--:model 表单校验绑定属性-->
      <!--ref 表单对象属性-->
      <el-form ref="login_form_ref" :model="login_form" :rules="login_form_rules" label-width="0px">
        <el-form-item class="form_item">
          <span>登录</span>
        </el-form-item>
        <el-form-item class="form_item" prop="username">
          <el-input placeholder="请输入用户名" v-model="login_form.username" prefix-icon="iconfont icon-icon-1"></el-input>
        </el-form-item>
        <el-form-item class="form_item" prop="password">
          <el-input placeholder="请输入密码" v-model="login_form.password" prefix-icon="iconfont icon-icon-"
                    show-password></el-input>
        </el-form-item>
        <!-- 内部组件置右-->
        <el-form-item class="form_item btns">
          <a class="a_register" href="#">注册</a>
          <a class="a_forget" href="#">忘记密码</a>
          <el-button type="danger" icon="el-icon-delete" circle @click="empty_form_info"></el-button>
          <el-button class="success_button" type="success" icon="el-icon-check" circle @click="login"></el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      login_form: {
        username: '123123',
        password: '123123'
      },
      login_form_rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '用户名长度在 6 到 15 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '密码长度在 6 到 15 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    empty_form_info: function () {
      // 获取ref对象
      this.$refs.login_form_ref.resetFields()
    },
    login: function () {
      console.log(this)
      // validate参数为回调函数，
      this.$refs.login_form_ref.validate(async (valid) => {
        if (!valid) return
        try {
          const result = await this.$http.post('/login/', this.login_form)
          // 将返回的token保存至sessionStorage中
          // sessionStorage,会话期间有效
          window.sessionStorage.setItem('token', result.data.token)
          // 编程式导航跳转至首页
          await this.$router.push('/home')
          this.$message.success('登录成功')
        } catch (e) {
          console.log(e)
          this.$message.error('登录失败：账户名或密码错误！')
        }
      })
    }
  }
}
</script>

<!--利用vue脚手架 添加开发依赖 less-loader和less-->
<style lang="less" scoped>
  .login_container {
    height: 100%;
  }

  .slogan {
    position: absolute;
    left: 15%;
    top: 50%;
    transform: translate(0, -50%);
    width: 500px;
    height: 385px;
    color: #fff;
    cursor: default;

    h1 {
      font-size: 40px;
      font-family: 'font-title';
    }
  }

  .login_box {
    position: absolute;
    right: 15%;
    top: 50%;
    /*配合position实现居中*/
    transform: translate(0, -50%);
    width: 400px;
    height: 385px;
    background-color: #fff;
    border-radius: 4px;

    .el-form {
      /*padding-top: 30px;*/

      span {
        font-size: 30px;
        color: #3B3B3B;
      }

      a {
        text-decoration: none;
        color: #00C4B4;
      }

      a:hover {
        color: #03DAC5;
      }

      .a_forget {
        padding-right: 150px;
        padding-left: 10px;
      }
    }

    .form_item {
      padding-top: 30px;
      padding-right: 20px;
      padding-left: 20px;
    }

    .btns {
      display: flex;
      justify-content: flex-end;

      .success_button {
        background-color: #00C4B4;
        border: 1px solid #00C4B4;
      }

      .success_button:hover {
        background-color: #03DAC5;
        border: 1px solid #03DAC5;
      }
    }
  }

</style>
