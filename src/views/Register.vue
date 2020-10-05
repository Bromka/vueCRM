<template>
    <form @submit.prevent="onSubmit" class="card auth-card">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                        id="email"
                        type="text"
                        v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Введите Email</small>
                <small class="helper-text invalid" v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный Email</small>
            </div>
            <div class="input-field">
                <input
                        id="password"
                        type="password"
                        v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">Поле не должно быть пустым</small>
                <small class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength">Пароль не должен состоять из менее чем 6 символов</small>
            </div>
            <div class="input-field">
                <input
                        id="name"
                        type="text"
                        v-model.trim="name" :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}"
                >
                <label for="name">Имя</label>
                <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">Поле не должно быть пустым</small>
                <small class="helper-text invalid" v-else-if="$v.name.$dirty && !$v.name.minLength">Имя не должен состоять из менее чем 3 символов</small>
            </div>
            <p>
                <label>
                    <input type="checkbox" v-model="agree"/>
                    <span>С правилами согласен</span>
                </label>
            </p>
        </div>
        <div class="card-action">
            <div>
                <button
                        class="btn waves-effect waves-light auth-submit"
                        type="submit"
                >
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
                <router-link to="/login">Войти!</router-link>
            </p>
        </div>
    </form>
</template>
<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {Validate} from 'vuelidate-property-decorators';
    import {email, required, minLength} from 'vuelidate/lib/validators'

    @Component({})
    export default class Login extends Vue {



        @Validate({email, required})
        email = '';
        @Validate({required, minLength: minLength(6)})
        password = '';
        @Validate({required, minLength: minLength(3)})
        name = '';
        @Validate({checked: (v: boolean) => v})
        agree = false;

        async onSubmit(){
            if (this.$v.$invalid){
                this.$v.$touch()
                return
            }
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            try {
                await this.$store.dispatch('register', formData);
                await this.$router.push('/login')
            } catch (e) {
                console.log(e)
            }


        }

    }

</script>