(function () {
    const colorList = ["#e87d7d", "#e88a7d", "#e8977d", "#e8a47d", "#e8b07d", "#e8bd7d", "#e8ca7d", "#e8d77d", "#e8e47d", "#dfe87d", "#d3e87d", "#c6e87d", "#b9e87d", "#ace87d", "#9fe87d", "#92e87d", "#86e87d", "#7de881", "#7de88e", "#7de89b", "#7de8a8", "#7de8b5", "#7de8c1", "#7de8ce", "#7de8db", "#7de8e8", "#7ddbe8", "#7dcee8", "#7dc1e8", "#7db5e8", "#7da8e8", "#7d9be8", "#7d8ee8", "#7d81e8", "#867de8", "#927de8", "#9f7de8", "#ac7de8", "#b97de8", "#c67de8", "#d37de8", "#df7de8", "#e87de4", "#e87dd7", "#e87dca", "#e87dbd", "#e87db0", "#e87da4", "#e87d97", "#e87d8a", "#e87d7d"];

    const root = document.querySelector(':root');
    const setSelectionColor = color => root.style.setProperty('--selection-color', color);

    let index = 0;

    const rainbowAnimation = () => {
        setSelectionColor(colorList[index]);
        index = (++index) % colorList.length;
        setTimeout(rainbowAnimation, 50);
    }

    rainbowAnimation();
})();