<template>
  <div class="app">
    <header class="topbar">
      <div class="topbar-content">
        <h1>Clima SPA</h1>
        <nav class="menu">
          <router-link to="/">Home</router-link>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #eef6ff 0%, #f8fbff 100%);
  color: #1f2937;
  font-family: Arial, Helvetica, sans-serif;
}

.topbar {
  background: white;
  border-bottom: 1px solid #dbe3ea;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.04);
}

.topbar-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.topbar h1 {
  margin: 0;
  font-size: 1.8rem;
}

.menu {
  display: flex;
  gap: 12px;
}

.menu a {
  text-decoration: none;
  color: #334155;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 10px;
  background: #e2e8f0;
}

.menu a.router-link-active {
  background: #2563eb;
  color: white;
}

.main-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 28px 16px 40px;
}
</style>