<template>
    <form class="card auth-card" @submit.prevent="onSubmit">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input id="email" type="text" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"/>
                <label for="email">Email</label>
                <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Введите Email</small>
                <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный Email</small>
            </div>
            <div class="input-field">
                <input id="password" type="password" v-model="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"/>
                <label for="password">Пароль</label>
                <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">Поле не должно быть пустым</small>
                <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль не должен состоять из менее чем 6 символов</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button class="btn waves-effect waves-light auth-submit" type="submit" >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Validate} from 'vuelidate-property-decorators';
    import {email, required, minLength} from 'vuelidate/lib/validators'
    import messages from "@/utils/messages";

    @Component({})
    export default class Login extends Vue {
        [x: string]: any;



        @Validate({email, required})
        email = '';
        @Validate({required, minLength: minLength(6)})
        password = '';

        async onSubmit(){
            if (this.$v.$invalid){
                this.$v.$touch()
                return
            }

            const formData = {
                email: this.email,
                password: this.password,
            }
            /*eslint no-useless-catch: "off"*/
            try {
                const a = await this.$store.dispatch('login', formData)
                this.$router.push('/')
            } catch (e) {
                const b = 1211;
            }

        }

        mounted(){
            const b:string = this.$route.query.message
            const k:string = messages[b]
            if (k){
                this.$message(k)
            }

        }
    }
</script>
