var p = document.getElementById('text');
var textList = [
    'apple', 'banana', 'grape', 'orange', 'watermelon', 'strawberry', 
    'cherry', 'pineapple', 'blueberry', 'kiwi', 'mango', 'peach', 
    'pear', 'plum', 'apricot', 'nectarine', 'pomegranate', 'coconut',
    'avocado', 'lemon', 'lime', 'grapefruit', 'melon', 'papaya',
    'raspberry', 'blackberry', 'cranberry', 'gooseberry', 'date', 'fig',
    'jackfruit', 'lychee', 'passionfruit', 'persimmon', 'quince', 'starfruit',
    'carrot', 'broccoli', 'spinach', 'lettuce', 'cabbage', 'cauliflower',
    'zucchini', 'eggplant', 'tomato', 'cucumber', 'pepper', 'radish',
    'mushroom', 'potato', 'onion', 'garlic', 'ginger', 'pumpkin',
    'asparagus', 'beetroot', 'celery', 'coriander', 'parsley', 'rosemary',
    'thyme', 'basil', 'oregano', 'sage', 'chive', 'dill', 'mint',
    'tarragon', 'bayleaf', 'lemongrass', 'turmeric', 'cumin', 'curry',
    'cinnamon', 'clove', 'nutmeg', 'cardamom', 'paprika', 'saffron',
    'vanilla', 'peppermint', 'spearmint', 'chamomile', 'lavender',
    'rosemary', 'thyme', 'oregano', 'marjoram', 'basil', 'fennel',
    'dandelion', 'rose', 'sunflower', 'tulip', 'daisy', 'orchid',
    'lily', 'jasmine', 'cherryblossom', 'violet', 'magnolia', 'lotus',
    'daffodil', 'honeysuckle', 'peony', 'petunia', 'poppy', 'hibiscus',
    'forgetmenot', 'snowdrop', 'buttercup', 'bluebell', 'dahlia', 'holly',
    'ivy', 'mistletoe', 'pansy', 'primrose', 'snapdragon', 'violet',
    'wisteria', 'zinnia', 'acacia', 'azalea', 'begonia', 'camellia',
    'carnation', 'cosmos', 'dianthus', 'freesia', 'gardenia', 'geranium',
    'gladiolus', 'hyacinth', 'lilac', 'marigold', 'nasturtium', 'petunia',
    'rhododendron', 'sweetpea', 'tigerlily', 'trillium', 'yarrow'
];

var checkTexts = [];
var isPlaying = true

createText();
timeLimit(30);

function createText() {
    if (!isPlaying) return;

    var rnd = Math.floor(Math.random() * textList.length)

    p.textContent = '';
    checkTexts = textList[rnd].split('').map(function(value){
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

console.log(checkTexts)

document.addEventListener('keydown', keyDown)

function keyDown(e) {
    if (!isPlaying) return;
    if(e.key == checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue'

        checkTexts.shift();

        if(!checkTexts.length) createText();
    }
    else{
        checkTexts[0].className = 'add-red'
    }
}

function timeLimit(seconds) {
    var timer = setTimeout(function() {
        isPlaying = false;
    }, seconds * 1000)
}