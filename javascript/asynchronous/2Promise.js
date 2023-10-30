/**
 * 异步
 * Promise 是一个 ECMAScript 6 提供的类，目的是更加优雅地书写复杂的异步任务。
 * 
new Promise(function (resolve, reject) {
    // do something...
});
 */


/**
1. then() 
  异步操作成功会调用 then()
  then() 本身也会返回一个 Promise，这个 Promise 将指示 then() 中调用的异步函数的完成状态

  可用来Promise链 优化函数瀑布写法
  (new Promise(step1))
    .then(step2)
    .then(step3)
    .then(step4);
 */
{
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("First");
      resolve();
    }, 1000);
  }).then(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log("Second");
        resolve();
      }, 4000);
    });
  }).then(function () {
    setTimeout(function () {
      console.log("Third");
    }, 3000);
  });
}

/**
2. catch()
  异步操作失败会调用 catch()

  将 catch() 添加到 Promise 链的末尾，它就可以在任何异步函数失败时被调用
 */
{
  const promise = new Promise((resolve, reject) => {
    // 异步操作
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('success');
      } else {
        reject('error');
      }
    }, 1000);
  });

  promise.then(result => {
    console.log("成功" + result);
  }).catch(error => {
    console.log(error);
  });
}

//3. Promise.all() :合并使用多个Promise, 无前后依赖关系, 但要都实现
{
  const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );

  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses) => {
      for (const response of responses) {
        console.log(`成功 ${response.url}：${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`某个获取失败：${error}`);
    });
}





