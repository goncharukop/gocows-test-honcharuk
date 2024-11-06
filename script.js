const data = [
    {
        image: 'img/sports_interaction_casino.png',
        isNew: true,
        label: 'Sports Interaction Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '20 Free Spins',
        firstBonus: '200% First deposit bonus + 250 FS',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    },
    {
        image: 'img/21_dukes_moons.png',
        isNew: false,
        label: '21 Dukes Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '20 Free Spins',
        firstBonus: '200% First deposit bonus + 250 FS',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    },
    {
        image: 'img/ac_casino.png',
        isNew: true,
        label: 'AC Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '50 Free Spins',
        firstBonus: '200% First deposit bonus',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    },
    {
        image: 'img/all_irish_casino.png',
        isNew: false,
        label: 'All Irish Casino Review',
        rating: 4.4,
        haveFreeSpins: false,
        freeSpins: '',
        firstBonus: '100% First deposit bonus + 70 FS',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    },
    {
        image: 'img/all_stars_games_casino.png',
        isNew: false,
        label: 'All Star Games Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '25 Free Spins',
        firstBonus: '200% First deposit bonus',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    },
    {
        image: 'img/all_stars_slots_casino.png',
        isNew: false,
        label: 'All Star Slots Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '20 Free Spins',
        firstBonus: '300% First deposit bonus',
        gamesAllowed: 'Slots',
        maxCashOut: '$1000',
        minDeposit: '$1'
    },
    {
        image: 'img/sports_interaction_casino.png',
        isNew: false,
        label: 'Sports Interaction Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '$25 No deposit bonus',
        firstBonus: '200% First deposit bonus',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    },
    {
        image: 'img/vip_stakes_casino.png',
        isNew: false,
        label: 'VIP Stakes Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '20 Free Spins',
        firstBonus: '200% First deposit bonus + 250 FS',
        gamesAllowed: 'Slots, Cards, Bingo',
        maxCashOut: '$500',
        minDeposit: '$5'
    },
    {
        image: 'img/jackpot_capital_casino.png',
        isNew: false,
        label: 'Jackpot Capital Casino Review',
        rating: 4.4,
        haveFreeSpins: true,
        freeSpins: '20 Free Spins',
        firstBonus: '400% First deposit bonus',
        gamesAllowed: 'Slots, Keno, Scratch, Cards, Bingo',
        maxCashOut: '$100',
        minDeposit: 'FREE'
    }
];

const container = document.getElementById('container');

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const copyMessage = document.getElementById('copyMessage');
const modalTitle = document.getElementById('modalTitle');
const modalCode = document.getElementById('modalCode');
const modalGamesAllowedValue = document.getElementById('modalGamesAllowedValue');
const modalMaxCashOutValue = document.getElementById('modalMaxCashOutValue');
const modalMinDepositValue = document.getElementById('modalMinDepositValue');


// Функція для створення зірок рейтингу
function createStars(rating) {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars_images';

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img');
        star.className = 'star_image';
        star.alt = `star ${i}`;
        star.src = i <= Math.floor(rating) ? 'img/star_full.png' : 'img/star_empty.png';
        starsContainer.appendChild(star);
    }
    return starsContainer;
}

function createBlock(item) {
    // Створення основного блоку
    const block = document.createElement('div');
    block.className = 'block';

    // Створення блоку зображення
    const blockImage = document.createElement('div');
    blockImage.className = 'block_image';
    blockImage.style.backgroundImage = `url(${item.image})`;

    // Створення блоку інформації
    const blockInfo = document.createElement('div');
    blockInfo.className = 'block_info';

    if (item.isNew) {
        const infoNew = document.createElement('div');
        infoNew.className = 'info_new';
        infoNew.textContent = 'NEW';
        blockInfo.appendChild(infoNew);
    }

    const infoText = document.createElement('div');
    infoText.className = 'info_text';
    infoText.textContent = item.label;
    blockInfo.appendChild(infoText);

    const infoBottom = document.createElement('div');
    infoBottom.className = 'info_bottom';

    const flag = document.createElement('div');
    flag.className = 'flag';
    infoBottom.appendChild(flag);

    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = item.rating;
    infoBottom.appendChild(rating);

    const stars = createStars(item.rating);
    infoBottom.appendChild(stars);

    blockInfo.appendChild(infoBottom);

    // Створення блоку бонусів
    const blockBonus = document.createElement('div');
    blockBonus.className = 'block_bonus';

    if (item.haveFreeSpins) {
        const bonusFreeSpin = document.createElement('div');
        bonusFreeSpin.className = 'bonus_free_spin';
        bonusFreeSpin.textContent = item.freeSpins;
        blockBonus.appendChild(bonusFreeSpin);

        // Додаємо обробник для показу модального вікна під елементом bonus_free_spin
        bonusFreeSpin.addEventListener('click', (event) => {
            modalTitle.textContent = item.freeSpins + ' at ' + item.label.slice(0, -7);
            modalCode.textContent = "WELCOME";
            modalGamesAllowedValue.textContent = item.gamesAllowed;
            modalMaxCashOutValue.textContent = item.maxCashOut;
            modalMinDepositValue.textContent = item.minDeposit;

            const rect = event.target.getBoundingClientRect();
            modal.style.top = `${rect.bottom + window.scrollY}px`;
            modal.style.left = `${rect.left + window.scrollX}px`;
            modal.style.display = 'flex';
        });
    }

    const bonusFirstDeposit = document.createElement('div');
    bonusFirstDeposit.className = 'bonus_first_deposit';
    bonusFirstDeposit.textContent = item.firstBonus;
    blockBonus.appendChild(bonusFirstDeposit);



    // Створення блоку з кнопкою
    const blockButton = document.createElement('div');
    blockButton.className = 'block_button';

    const button = document.createElement('div');
    button.className = 'button';
    button.textContent = 'VISIT';
    blockButton.appendChild(button);

    // Додавання всіх частин до основного блоку
    block.appendChild(blockImage);
    block.appendChild(blockInfo);
    block.appendChild(blockBonus);
    block.appendChild(blockButton);

    return block;
}

// Функція для відображення заданої кількості блоків
function displayBlocks(count) {
    container.innerHTML = ''; // Очищуємо контейнер
    data.slice(0, count).forEach(item => {
        const block = createBlock(item);
        container.appendChild(block);
    });
}

// Відображаємо перші 4 блоки при завантаженні сторінки
displayBlocks(4);

// Відображаємо всі блоки при натисненні кнопки
document.getElementById('showMoreButton').addEventListener('click', () => {
    displayBlocks(data.length);
    document.getElementById('showMoreButton').style.display = 'none'; // Приховуємо кнопку
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalCode.addEventListener('click', () => {
    const text = document.getElementById('modalCode').innerText;
    navigator.clipboard.writeText(text).then(() => {
        const message = document.getElementById('copyMessage');
        message.style.display = 'block';

        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Помилка при копіюванні: ', err);
    });
});
