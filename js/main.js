const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

function deactivateTabItem (){
    elsTabsItem.forEach(function (elsTabsItem){
        elsTabsItem.classList.remove('tabs__item--active');
    });
}

function deactivateTabPanels (){
    elsTabsPanel.forEach(function (elTabsPanel){
        elTabsPanel.classList.remove('tabpanels__item--active');
    });
}

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function (evt) {
        // Prevent page move
        evt.preventDefault();

        // Remove active class form tabs__item elements
        deactivateTabItem();
        
        // Add active class to current tabs__item
        elTabLink.parentElement.classList.add('tabs__item--active');

        // Remove active class form tabs__panel elements
                deactivateTabPanels();

        // Show active panel
        const elTargetPanel  = document.querySelector(elTabLink.dataset.tabTarget);
        
        elTargetPanel.classList.add('tabpanels__item--active');
    });
});
