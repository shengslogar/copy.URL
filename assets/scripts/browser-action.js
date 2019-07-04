(function () {
  let badgeIndicatorTimeout = null;

  const showBadgeIndicator = () => {
    clearTimeout(badgeIndicatorTimeout);
    this.setBadgeText({ text: '\u2713' });

    badgeIndicatorTimeout = setTimeout(() => {
      this.setBadgeText({ text: '' });
    }, 500);
  };

  this.onClicked.addListener(({ url }) => {

    console.log(url);
    if (url == null) {
      return;
    }

    const input = document.createElement('input');
    input.value = url;

    document.body.appendChild(input);
    input.select();

    try {
      if (document.execCommand('copy')) {
        showBadgeIndicator();
      }
    } catch {
    }

    input.remove();
  });
}).apply(chrome.browserAction);
