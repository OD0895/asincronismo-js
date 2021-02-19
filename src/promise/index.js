const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
        resolve("Hey!");
      } else {
        reject("Whoops!");
      }
  });
};

somethingWillHappen()
.then( response => console.log(response))
.catch( err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
      if (true) {
          setTimeout(() => {
              resolve("Hey!");
          }, 3000);
        } else {
          reject("Whoops!");
        }
    });
  };
  
Promise.all( [somethingWillHappen(), somethingWillHappen2()] )
.then(response => {
    console.log('Array of results' , response)
}).catch(err => {
    console.console.error(err);
})