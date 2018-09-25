<template>
  <div id="app">
    <app-drawer-layout>
    <app-drawer slot="drawer">
      <app-toolbar>Getting Started</app-toolbar>
    </app-drawer>
    <app-header-layout>
      <app-header slot="header">
        <app-toolbar>
          <div main-title>Title</div>
        </app-toolbar>
      </app-header>
      <div class="content">
        <router-view/>
      </div>
    </app-header-layout>
  </app-drawer-layout>
    
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

app-header {
  background-color: #00897b;
  color: #fff;
}
</style>
