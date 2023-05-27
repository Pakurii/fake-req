const fakeRequestCallBack = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Connection TimeOut :(');
		} else {
			success(`Here is your fake data from ${url}`);
		}
	}, delay);
};

const fakeRequestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 4000) {
				reject('Connection TimeOut :(');
			} else {
				resolve(`Here is your fake data from ${url}`);
			}
		}, delay);
	});
};

const delayedColorChange = (color, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color;
			resolve();
		}, delay);
	});
};
// Callbacks With Async & Await Promise
async function rainbow() {
	await delayedColorChange('red', 1000);
	await delayedColorChange('orange', 1000);
	await delayedColorChange('yellow', 1000);
	await delayedColorChange('green', 1000);
	await delayedColorChange('blue', 1000);
	await delayedColorChange('indigo', 1000);
	await delayedColorChange('violet', 1000);
	return 'ALL DONE!';
}

async function printRainbow() {
	await rainbow();
	console.log('END OF RAINBOW!');
}

printRainbow();

// Nested 3 Callbacks On Request

// fakeRequestCallBack("books.com",function(response){
//     console.log("IT WORKED!!!!")
//     console.log(response)
//     fakeRequestCallBack("books.com/page1",function(response){
//         console.log("IT WORKED AGAIN!!!!")
//         console.log(response)
//         fakeRequestCallBack("books.com/page2",function(response){
//             console.log("IT WORKED AGAIN 3rd time!!!!")
//             console.log(response)
//         },function(err){
//             console.log("ERROR 3rd!!!!",err)
//         })
//     },function(err){
//         console.log("ERROR 2rd!!!!",err)
//     })
// }, function(err){
//     console.log("ERROR!!!!",err)
// })

// Callbacks With Promise

fakeRequestPromise('pakuri.com/page1')
	.then((data) => {
		console.log('IT WORKED!!!! (page1)');
		console.log(data);
		return fakeRequestPromise('pakuri.com/page2');
	})
	.then((data) => {
		console.log('IT WORKED!!!! (page2)');
		console.log(data);
		return fakeRequestPromise('pakuri.com/page3');
	})
	.then((data) => {
		console.log('IT WORKED!!! (page3)');
		console.log(data);
	})
	.catch((err) => {
		console.log('OH NO , A REQUEST FAILED!!!');
		console.log(err);
	});
