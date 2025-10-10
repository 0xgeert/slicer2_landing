import { createApp } from "vue"
import posthog from "posthog-js"

import App from "./App.vue"
import "./assets/main.css"

const app = createApp(App)

// // Initialize PostHog
// function setupPosthog() {
//   posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
//     api_host: import.meta.env.VITE_POSTHOG_HOST,
//     ui_host: "https://eu.posthog.com",
//     defaults: "2025-05-24",
//     person_profiles: "identified_only",

//     autocapture: true, // Enable autocapture for landing page (clicks, form submits)
//     capture_pageview: true, // Auto-capture pageviews for landing page
//     capture_pageleave: true,
//     capture_dead_clicks: true,

//     // Disable PostHog RRWeb console interception in development
//     enable_recording_console_log: import.meta.env.MODE === "production",
//   })
//   return posthog
// }

// // Setup PostHog and make it available globally
// app.config.globalProperties.$posthog = setupPosthog()

app.mount("#app")
