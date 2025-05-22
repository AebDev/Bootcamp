let only_letters = document.getElementById("word_id");

only_letters.addEventListener("input", () => {
    only_letters.value = only_letters.value.replace(/[^a-zA-Z]/g, "");
});