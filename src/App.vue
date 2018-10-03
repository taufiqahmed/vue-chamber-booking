<template>
  <div id="app">
    <app-drawer-layout>
      <app-drawer slot="drawer">
        <app-toolbar>Vue Chamber</app-toolbar>
        <nav class="side-nav">
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="">Item 2</a></li>
            <li><a href="">Item 3</a></li>
          </ul>
        </nav>
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
  background-color: #fafafa;
  color: #333;
}

app-drawer {
  border-right: 1px solid #ccc;
}
</style>
