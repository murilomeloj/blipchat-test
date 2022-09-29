(function () {
    window.onload = function () {
        new BlipChat()
            .withAppKey('cm91dGVybXVyaWxvOmYxNjY3MTQ0LTkwNzctNDYzZS04M2NlLTI2OGU4MThiZmJmYg==')
            .withButton({ "color": "#909090", "icon": "" })
            .withCustomCommonUrl('https://blip-cda.chat.blip.ai/')
            .build();
    }
})();

