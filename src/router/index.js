import { createRouter, createWebHistory } from 'vue-router';
import SplashScreen from '@/components/SplashScreen.vue';
import ParentRegistration from '@/components/ParentRegistration.vue';
import TeacherRegistration from '@/components/TeacherRegistration.vue';
import StudentRegistration from '@/components/StudentRegistration.vue';
import RoleSelection from '@/components/RoleSelection.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import LocationTracker from '@/components/LocationTracker.vue'; // Import LocationTracker component

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/select-role', component: RoleSelection },
  { path: '/parent-registration', component: ParentRegistration },
  { path: '/teacher-registration', component: TeacherRegistration },
  { path: '/student-registration', component: StudentRegistration },
  { path: '/profile', component: ProfilePage, name: 'ProfilePage' },
  { path: '/location-tracker', component: LocationTracker }, // Add LocationTracker route
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
