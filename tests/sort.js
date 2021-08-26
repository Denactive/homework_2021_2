'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		// Явная ошибка в тесте
		// было:
		// assert.strictEqual(sort('Rrrrrrrr'), 'rrrrrrrr');
		// стало:
		assert.strictEqual(sort('Rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция работает правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		// спасибо за латинскую букву "А" (третья: "Ан") в предложении, целиком состоящем из русских букв (тест пройти не возможно) | пруф: http://invitemsg.com/cyrillic_search.php
		// было:
		// assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Aн Еиийккмоссч Еилтт');
		// стало:
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
	});
});

// Турчин Денис
QUnit.module('Кастом-тесты на sort', () => {
	QUnit.test('Мучаем функцию sort локалями. Помним порядок букв в русском алфавите. Помним про обратный лексикографический порядок слов', (assert) => {
		assert.strictEqual(sort('абвгдеёёё абвгдеёё АБВГДЕЁ'), 'Абвгдеё Абвгдеёё Абвгдеёёё', 'Сортировка похожих слов');
		assert.strictEqual(sort('Абвгдеё абвгдеЁ аБвГдЕё'), 'Абвгдеё Абвгдеё Абвгдеё', 'Сортировка одинаковых слов (после преобразования к нижнему регистру)');
		assert.strictEqual(sort('Абвгдеё Ёбвгдеа вАБгЁДЕ'), 'Абвгдеё Абвгдеё Абвгдеё', 'Сортировка одинаковых слов (после преобразования к нижнему регистру и сортировки букв)');
	});

	QUnit.test('Работа одновременно и с латиницей (меньший приоритет), и с кириллицей (больший приоритет)', (assert) => {
		assert.strictEqual(sort('aбвгдеёёё aбвгдеёё AБВГДЕЁ'), 'Бвгдеёёёa Бвгдеёёa Бвгдеёa', 'Сортировка похожих слов (A - латинская)');
		assert.strictEqual(sort('Масе Window Obi Ван Кенobi'), 'Авн Аемс Екнbio Bio Dinoww', 'Масе, Ван - кириллица (больший приоритет), Кенobi - приоритет кириллических символов');
		assert.strictEqual(sort('Абакан Aист Аpбуз'), 'Ааабкн Абзуp Истa', 'А в "Аист" - латинская (меньший приоритет), р в "Арбуз" - латинская (меньший приоритет), "Абакан" - все русские - максимальный приоритет');
	});
})
