<template>
    <div class="content">
        <h1>Login new</h1>
            <div class="grid-x grid-margin-x">
            <div class="cell small-6">
                <div>User Name</div>
                <input v-model="userName" type="text" name="userName" id="userName">
            </div>
            <div class="cell small-6">
                <div>Please enter a Password</div>
                <input v-model="userPassword" type="text" name="userName" id="userPassword">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            userName: "",
            userPassword: "",
        }
    },
}
</script>