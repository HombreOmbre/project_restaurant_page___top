const mealFactory = (mealImg, mealName, mealIngredients) => {
    return {mealImg, mealName, mealIngredients};
};

export default function createMenuContainer() {

    const htmlCardsContainer = document.createElement('div');
    htmlCardsContainer.classList.add('menu_module');

    let arrWithMeals = [
        mealFactory('https://static.vecteezy.com/system/resources/previews/022/911/684/non_2x/classic-chicken-burger-free-illustration-icon-free-png.png', 'Cheeseburger', 'brioche bun, beef, red onion, chees'),
        mealFactory('https://static.vecteezy.com/system/resources/previews/023/573/834/non_2x/burger-images-free-png.png', 'Texas Burger', 'brioche bun, beef, red onion, chees'),
        mealFactory('https://static.vecteezy.com/system/resources/previews/021/952/564/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png', 'Max Burger', 'brioche bun, beef, red onion, chees'),
        mealFactory('https://static.vecteezy.com/system/resources/previews/021/952/459/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png', 'Ohio Burger', 'brioche bun, beef, red onion, chees'),
        mealFactory('https://static.vecteezy.com/system/resources/previews/022/911/698/non_2x/colorful-burger-icon-free-illustration-free-png.png', 'Cosmo burger', 'brioche bun, beef, red onion, chees'),
        mealFactory('https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png', 'Just Burger', 'brioche bun, beef, red onion, chees')
    ];

    for (let i = 0; i < arrWithMeals.length; i++) {
        htmlCardsContainer.innerHTML += `
            <div class="card">
                <img src="${arrWithMeals[i].mealImg}" alt="" class="burger_img">
                <h2 class="burger_name">${arrWithMeals[i].mealName}</h2>
                <p class="ingredients">${arrWithMeals[i].mealIngredients}</p>
            </div>
        `;
    };

    return htmlCardsContainer;
};
