(function () {
  let badgeTextTimeout = null;

  this.onClicked.addListener(async ({ url }) => {
    const input = document.createElement('input');
    input.value = url;

    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');

    input.remove();

    clearTimeout(badgeTextTimeout);
    this.setBadgeText({ text: '\u2713' });

    badgeTextTimeout = setTimeout(() => {
      this.setBadgeText({ text: '' });
    }, 500);
  });
}).apply(chrome.browserAction);
