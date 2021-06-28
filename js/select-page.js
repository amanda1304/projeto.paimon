'use strict';

(() => {

   const getPage = async () => {

      const current = location.hash;

      if (current?.trim().length === 0) return;
   
      document.querySelector('#body > menu ul > li.active').classList.remove('active');
      document.querySelector(`#body > menu ul > li > a[href="${current}"]`).parentElement.classList.add('active');

      const request = await fetch(`/pages/${current.replace(/#/, '')}.html`);
      const result = await request.clone().text();
      const content = result.match(/error/gim) ? '' : result;
      
      document.querySelector('#page').innerHTML = content;
   };

   getPage();
   window.addEventListener('hashchange', getPage);
})();