const cat_btn = document.getElementById('cat_btn');
const cat_result = document.getElementById('cat_result');
const cat_fact = document.getElementById('cat-fact');

cat_btn.addEventListener('click', getRandomCat);

function getRandomCat() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.url} alt="cat" />`
		});
    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            cat_fact.innerHTML = `"${data.fact}"`
        })
}
