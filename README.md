# yetanothersermonhost-rss-reader

Read RSS feeds from Yet Another Sermon Host to add API functions

WordPress HTML Integration
```html
<p style="text-align: center;" id="latest-sermon-text">
    Listen now to the latest sermon or browse through all of our sermons.
</p>
<script>
    const element = document.querySelector("#latest-sermon-text");
    if(element) fetch("https://{YOUR-API-URL}/latest-sermon/text/{TEXT-PRESET-ID}")
        .then(response => response.text())
        .then(text => {
            if(text) element.innerHTML = text;
        })
        .catch((err) => console.log(err));
</script>
```
