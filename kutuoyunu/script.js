// Dizi meyveler
var fruits = ['elma', 'armut', 'portakal', 'çilek', 'muz', 'üzüm', 'kiraz', 'karpuz', 'erik', 'şeftali', 'elma', 'armut', 'portakal', 'çilek', 'muz', 'üzüm', 'kiraz', 'karpuz', 'erik', 'şeftali'];

// Meyveleri karıştır
fruits.sort(() => Math.random() - 0.5);

// Açılan kutuların indekslerini ve içindeki meyveleri tutacak değişkenler
var openedIndexes = [];
var openedFruits = [];

function openBox(index) {
    // Kutu zaten açıldıysa veya oyun tamamlandıysa işlem yapma
    if (openedIndexes.includes(index) || openedIndexes.length === 2) {
        return;
    }

    var fruit = fruits[index];

    // Kutuyu aç
    document.querySelectorAll('.box')[index].querySelector('.box-content').innerHTML = fruit;

    // Kutuyu açık kutular listesine ekle
    openedIndexes.push(index);

    // Açılan meyveyi listeye ekle
    openedFruits.push(fruit);

    // İki kutu açıldıysa kontrol et
    if (openedIndexes.length === 2) {
        setTimeout(checkMatch, 1000); // Eşleşmeyi kontrol et
    }
}

function checkMatch() {
    // Eşleşme kontrolü
    if (openedFruits[0] === openedFruits[1]) {
        // Eğer eşleşiyorsa, kutuları kalıcı olarak açık bırak
        openedIndexes = [];
        openedFruits = [];
    } else {
        // Eğer eşleşmiyorsa, kutuları kapat
        closeBoxes();
    }

    // Oyunun tamamlanıp tamamlanmadığını kontrol et
    checkGameCompletion();
}

function closeBoxes() {
    // Açılan kutuları kapat
    openedIndexes.forEach(function(index) {
        document.querySelectorAll('.box')[index].querySelector('.box-content').innerHTML = '';
    });

    openedIndexes = [];
    openedFruits = [];
}

function checkGameCompletion() {
    // Tüm meyveler eşleşti mi kontrol et
    if (document.querySelectorAll('.box').length === document.querySelectorAll('.box[style=""] .box-content').length) {
        document.getElementById('result').innerHTML = "Tebrikler! Oyunu tamamladınız.";
    }
}
