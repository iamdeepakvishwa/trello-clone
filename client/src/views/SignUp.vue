<template>
    <!--eslint-disable-->
    <v-container>
        <v-row class="text-center">
            <v-col cols="6">
                <v-form
                    ref="form"
                    v-if="!loading"
                    v-model="valid"
                    @submit.prevent = "signUp"
                    @keydown.prevent.enter
                    lazy-validation
                >
                    <v-text-field
                        v-model="user.username"
                        :rules="userNameRules"
                        label="username"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.displayName"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        autocomplete="off"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.confirmPassword"
                        :rules="passwordRules"
                        label="Confirm Password"
                        autocomplete="off"
                        type="password"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.imageUrl"
                        :rules="notEmptyRules"
                        label="Image Url"
                        required
                    ></v-text-field>
                    <v-btn type= "submit" :disabled="!valid">SignUp</v-btn>
                </v-form>
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                ></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex';

export default {
    name: 'SignUp',
    data : (vm)=>({
        valid: false,
        user: {
            username: '',
            displayName: '',
            password: '',
            confirmPassword: '',
            imageUrl: '',
        },
        notEmptyRules: [
            v => !!v || 'This field cannot be empty'
        ],
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 20) || 'Name must be less than 20 characters',
        ],
        userNameRules: [
            v => !!v || 'Username is required',
            v => /^[a-zA-Z\_.]+$/.test(v) || 'UserName is Not valid ',
            v => v.length > 5 || 'UserName must be atleast 5 characters',
        ],
        passwordRules: [
            (confirmPassword) => confirmPassword === vm.user.password || 'Password must match'
        ]

    }),
    computed: {
        ...mapState('users', { loading: 'isCreatePending' }),
    },
    methods: {
        signUp(){
            if(this.valid){
                const {User} = this.$FeathersVuex;
                const user = new User(this.User);
                user.save()
                .then((user)=>{
                    console.log(user);
                    this.$router.push('/login');
                });
            }
        },
    }
}
</script>

<style>

</style>