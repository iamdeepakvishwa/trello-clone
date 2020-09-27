<template>
    <!--eslint-disable-->
    <v-container>
        <v-row class="text-center">
            <v-col cols="6">
                <v-form
                    ref="form"
                    v-model="valid"
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
                        :rules="userNameRules"
                        label="Name"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.confirmPassword"
                        :rules="passwordRules"
                        label="Confirm Password"
                        type="password"
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="user.imageUrl"
                        :rules="imageUrlRules"
                        label="Image Url"
                        required
                    ></v-text-field>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
/* eslint-disable */
export default {
    name: 'SignUp',
    data : ()=>({
        user: {
            username: '',
            displayName: '',
            password: '',
            confirmPassword: '',
            imageUrl: '',
        }
    }),
}
</script>

<style>

</style>