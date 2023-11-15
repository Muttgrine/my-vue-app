import Vue from 'vue';
import VueRouter from 'vue-router';
import SplashScreen from '../components/SplashScreen.vue';
import LoginSignUp from '../components/LoginSignUp.vue';
import StudentRegistration from '../components/StudentRegistration.vue';
import ParentRegistration from '../components/ParentRegistration.vue';
import TeacherRegistration from '../components/TeacherRegistration.vue';
import LiveTracking from '../views/LiveTracking.vue';
import LocationHistory from '../views/LocationHistory.vue';
import MainLayout from '../components/MainLayout.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: SplashScreen },
  {
    path: '/login',
    component: LoginSignUp,
    children: [
      { path: 'student', component: StudentRegistration },
      { path: 'parent', component: ParentRegistration },
      { path: 'teacher', component: TeacherRegistration },
    ],
  },
  {
    path: '/main',
    component: MainLayout,
    children: [
      { path: 'live-tracking', component: LiveTracking },
      { path: 'location-history', component: LocationHistory },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
