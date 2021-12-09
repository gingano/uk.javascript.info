describe("truncate", function() {
  it("урізає довгий рядок до заданої довжини (включаючи три крапки)", function() {
    assert.equal(
      truncate("Що я хотів би розповісти на цю тему:", 20),
      "Що я хотів би розпо…"
    );
  });

  it("doesn't change short strings", function() {
    assert.equal(
      truncate("Всім привіт!", 20),
      "Всім привіт!"
    );
  });

});
