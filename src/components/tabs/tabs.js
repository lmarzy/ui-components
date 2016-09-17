/*
* Tabs component
* Function to take in a DOM selector
* @param {element selector}
*/

export default (el) => {
  'use strict';

  const $el = document.getElementById(el);

  // if no element found imediately return
  if (!$el) return;

  // Store list of DOM elements we will need access to
  const $tabLinks   = $el.querySelectorAll('.js-tabLink');
  const $tabContent = $el.querySelectorAll('.js-tabContent');
  let activeIndex   = 0;

  // create the 'click' and 'keyup' event handlers
  const handleEvent = (link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openTabClick(index, e);
    });
    link.addEventListener('keyup', (e) => {
      e.preventDefault();
      openTabFocus(index, e);
    });
  }

  // OpenTab Click function
  const openTabClick = index => {
    if(index !== activeIndex && index >= 0 && index <= $tabLinks.length) {
      closeActiveTab();
      setActiveTab(index);
      console.log(index);
      activeIndex = index;
    }
  };

  // OpenTab Focus function
  const openTabFocus = (index, e) => {
    let newNo = -1;
    let count = $tabLinks.length;
    const maxNo = $tabLinks.length - 1;

    if (e.keyCode === 37) { // left arrow
      newNo = (index === 0) ? maxNo : index - 1;
      console.log(newNo);
    }
    if (e.keyCode === 39) { // right arrow
      newNo = (index === maxNo) ? 0 : index + 1;
      console.log(newNo);
    }

    if (newNo > -1) {
      closeActiveTab();
      setActiveTab(newNo);
      activeIndex = newNo;
      $tabLinks[newNo].focus();
    }
  };

  // Function to handle the closing of the current tab
  const closeActiveTab = () => {
    $tabLinks[activeIndex].classList.remove('isActive');
    $tabLinks[activeIndex].setAttribute('aria-selected', false);
    $tabLinks[activeIndex].setAttribute('tabindex', '-1');

    $tabContent[activeIndex].classList.remove('isActive');
    $tabContent[activeIndex].setAttribute('aria-hidden', true);
  };

  // Function to handle to opening of the new tab
  const setActiveTab = index => {
    $tabLinks[index].classList.add('isActive');
    $tabLinks[index].setAttribute('aria-selected', true);
    $tabLinks[index].setAttribute('tabindex', '0');

    $tabContent[index].classList.add('isActive');
    $tabContent[index].removeAttribute('aria-hidden');
  };

  // Call the init function to kick things off
  return function() {
    $tabLinks.forEach((link, index) => {
      handleEvent(link, index);
    });
  };

  // return {
  //   init: init
  // };

}
