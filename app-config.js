/* ============================================================================
   app-config.js  —  THE ONLY FILE YOU NEED TO EDIT
   ----------------------------------------------------------------------------
   Transformative Justice Community / ReGroup — Silent Auction
   ----------------------------------------------------------------------------
   There are three things to change in here. They are marked
   "EDIT 1", "EDIT 2" and "EDIT 3". Everything below the line that says
   "ADVANCED" should be left alone.

   If you have not set up Firebase yet, DO NOT EDIT ANYTHING.
   Leave this file exactly as it is, double-click index.html, and the app
   runs in DEMO MODE with six pretend items so you can try it out.
   ========================================================================== */

window.AUCTION_CONFIG = {

  /* ---------------------------------------------------------------------- */
  /* EDIT 1 — The name of your event. Shown at the top of the app.          */
  /* ---------------------------------------------------------------------- */
  eventName: "TJC Silent Auction",

  /* ---------------------------------------------------------------------- */
  /* EDIT 2 — Your Firebase settings.                                        */
  /*                                                                         */
  /* Firebase gives you a block of text that looks exactly like this.        */
  /* Replace the whole block below with the one Firebase gives you.          */
  /* While any value still starts with "PASTE_", the app stays in DEMO MODE. */
  /* ---------------------------------------------------------------------- */
  firebase: {
    apiKey:            "AIzaSyDYDhDD3Ma6O4G1BP-TcMUvmcUGY4Gp_Kc",
    authDomain:        "tjc-silent-auction.firebaseapp.com",
    projectId:         "tjc-silent-auction",
    storageBucket:     "tjc-silent-auction.firebasestorage.app",
    messagingSenderId: "150004130965",
    appId:             "1:150004130965:web:816c89e174ab1e04c2279c"
  },

  /* ---------------------------------------------------------------------- */
  /* EDIT 3 — Who can open admin.html.                                       */
  /*                                                                         */
  /* These email addresses must ALSO be listed in firestore.rules.           */
  /* Changing them here alone does NOT make someone an admin — the real      */
  /* lock is in firestore.rules. Change both, or neither.                    */
  /* ---------------------------------------------------------------------- */
  adminEmails: [
    "chayes@tjcoregon.org",
    "cameronrthayes@gmail.com"
  ],

  /* ---------------------------------------------------------------------- */
  /* OPTIONAL — the web address bidders type or scan.                        */
  /* Leave as "" and type it into the QR screen by hand instead.             */
  /* Example: "https://tjc-auction.netlify.app"                              */
  /* ---------------------------------------------------------------------- */
  bidderUrl: "",

  /* ======================================================================= */
  /* ADVANCED — leave this alone unless a developer tells you otherwise.     */
  /* ======================================================================= */

  // Pinned Firebase SDK version. Both pages load these three files.
  // They are loaded ONLY when the firebase settings above are real, so
  // DEMO MODE works with no internet at all.
  sdk: {
    app:       "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
    auth:      "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js",
    firestore: "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js"
  },

  // QR code drawing library, used by admin.html only.
  qrLib: "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",

  // Photo compression. Firestore's hard limit for one item is 1 MB.
  photo: {
    maxEdge: 1000,   // longest side of the saved photo, in pixels
    quality: 0.72,   // JPEG quality, 0 to 1
    warnKB:  700     // refuse to save a photo bigger than this
  },

  // How long to wait for a bid to reach the server before we put it in the
  // retry queue and keep trying in the background. Venue wifi is bad.
  bidTimeoutMs: 9000
};

/* --------------------------------------------------------------------------
   Everything below is machinery. Do not edit.
   -------------------------------------------------------------------------- */
(function () {
  var c = window.AUCTION_CONFIG;
  var f = c.firebase || {};
  var vals = [f.apiKey, f.authDomain, f.projectId, f.appId];
  var unset = false;
  for (var i = 0; i < vals.length; i++) {
    var v = vals[i];
    if (typeof v !== "string" || v === "" || v.indexOf("PASTE_") === 0) unset = true;
  }
  // DEMO MODE is on whenever the Firebase settings have not been filled in.
  c.demoMode = unset;
})();
