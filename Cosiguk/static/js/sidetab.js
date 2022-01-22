// show the section active
$('div>a').click(function() {
  selectTab($(this).attr('id'));
  sessionStorage.setItem("tab", $(this).attr('id'))
})

$('nav>button').click(function() {
  sessionStorage.clear();
})

$('.textWrap>a').click(function() {
  sessionStorage.clear();
})

// On load
const loadedTab = sessionStorage.getItem("tab");
if (loadedTab) {
  selectTab(loadedTab);
}

function selectTab(tabId) {
  $('.main.container>section').removeClass('active')
  $('.main.container>section>span>span').removeClass('info')
  $('.nav>a').removeClass('clicked')

  $('.main.container>section.' + tabId).addClass('active')
  $('.main.container>section>span>span.' + tabId).addClass('info')
  $('.nav>a.' + tabId).addClass('clicked')
}