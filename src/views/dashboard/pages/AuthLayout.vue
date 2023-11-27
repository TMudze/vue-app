<template>
  <div>
    <navbar :show-navbar="showMenu" id="nav">
      <div class="navbar-wrapper">
        <div class="navbar-toggle" :class="{ toggled: showMenu }">
          <navbar-toggle-button @click="toggleNavbar" target="#nav">
          </navbar-toggle-button>
        </div>
        <a class="navbar-brand" href="javascript:;">Now UI Dashboard Pro</a>
      </div>

      <template v-slot:navbar-menu>
        <router-link
          to="/dashboard"
          v-slot="{ href, isActive, isExactActive }"
          custom
        >
          <li
            class="nav-item"
            :class="[
              isActive && 'active router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" class="nav-link">
              <i class="now-ui-icons design_app"></i>
              Dashboard
            </a>
          </li>
        </router-link>

        <router-link
          to="/register"
          v-slot="{ href, isActive, isExactActive }"
          custom
        >
          <li
            class="nav-item"
            :class="[
              isActive && 'active router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" class="nav-link">
              <i class="now-ui-icons tech_mobile"></i>
              Register
            </a>
          </li>
        </router-link>

        <router-link
          to="/login"
          v-slot="{ href, isActive, isExactActive }"
          custom
        >
          <li
            class="nav-item"
            :class="[
              isActive && 'active router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" class="nav-link">
              <i class="now-ui-icons users_circle-08"></i>
              Login
            </a>
          </li>
        </router-link>

        <router-link
          to="/pricing"
          v-slot="{ href, isActive, isExactActive }"
          custom
        >
          <li
            class="nav-item"
            :class="[
              isActive && 'active router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" class="nav-link">
              <i class="now-ui-icons business_money-coins"></i>
              Pricing
            </a>
          </li>
        </router-link>

        <router-link
          to="/lock"
          v-slot="{ href, isActive, isExactActive }"
          custom
        >
          <li
            class="nav-item"
            :class="[
              isActive && 'active router-link-active',
              isExactActive && 'router-link-exact-active',
            ]"
          >
            <a :href="href" class="nav-link">
              <i class="now-ui-icons ui-1_lock-circle-open"></i>
              Lock
            </a>
          </li>
        </router-link>
      </template>
    </navbar>
    <div class="wrapper wrapper-full-page">
      <div
        class="full-page section-image"
        :class="pageClass"
        filter-color="black"
        data-image="/img/bg13.jpg"
      >
        <div class="content">
          <div class="container">
            <router-view></router-view>
          </div>
        </div>
        <footer class="footer">
          <div class="container-fluid">
            <nav>
              <ul>
                <li>
                  <a href=""> Button 1 </a>
                </li>
                <li>
                  <a href=""> Button 2 </a>
                </li>
                <li>
                  <a href=""> Button 3 </a>
                </li>
              </ul>
            </nav>
            <div class="copyright">
              &copy; {{ year }}
            </div>
          </div>
        </footer>

        <div
          class="full-page-background"
          style="background-image: url('/img/bg13.jpg')"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar, NavbarToggleButton } from "@/components";

export default {
  components: {
    Navbar,
    NavbarToggleButton,
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      pageClass: `${this.$route.name}-page`.toLowerCase(),
    };
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle("nav-open");
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove("nav-open");
      this.showMenu = false;
    },
    setPageClass(to) {
      this.pageClass = `${to.name}-page`.toLowerCase();
    },
  },
  beforeUnmount() {
    this.closeMenu();
  },
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  watch: {
    $route(to) {
      this.setPageClass(to);
    },
  },
};
</script>
<style lang="scss"></style>
