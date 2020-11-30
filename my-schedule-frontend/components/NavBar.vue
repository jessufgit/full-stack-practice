<template>
    <div class="nav">
        <nuxt-link to="/" class="route">Home</nuxt-link>
        <nuxt-link to="/appt/create" class="route">Create</nuxt-link>
    </div>
</template>

<style>
.nav {
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

}
.route {
    font-size: 20px;
    color: black;
    padding: 20px 30px;
    text-decoration: none;
}
.route:hover {
    color: green;
}
</style>
