'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('AAAA'), 'A4');
		assert.strictEqual(rle("AAAA   AAAA    "), 'A4 3A4 4');
		assert.strictEqual(rle(''), '');
		assert.strictEqual(rle(), undefined);
		assert.strictEqual(rle(null), undefined);
		assert.strictEqual(rle(2), undefined);
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
});
