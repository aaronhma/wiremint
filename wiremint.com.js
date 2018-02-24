/*
  (C) Copyright 2018 Firebolt.life, Wiremint.com, Googlane.com Developers
  <!--------------------------------------------------------------------------------------->
  This file:
  This stores the URL the user was attempting to go to in sessionStorage,
  and then redirects all 404 responses to the app’s index.html page
*/
sessionStorage.redirect = location.href;
// noew use jQuery.js
(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();
