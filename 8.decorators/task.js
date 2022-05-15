function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(',');
    let sumArray; 
    console.log('cache', cache);
    let idx = cache.findIndex((item => item.hash === hash));
    if (idx !== -1 ) {
      console.log('Из кэша: ',cache[idx].value);
      return 'Из кэша: ' + cache[idx].value;
    } else {
      if (cache.length >= 5) {
        cache.shift();
        console.log('Удаляем старый элемент');
      }
      
      let result = func(...args);
      sumArray = 0;
      
      for (let i = 0; i < args.length; i++) {
        sumArray += args[i];
      }
      
      cache.push({hash: hash, value: sumArray });
      console.log('Вычисляем: ',result);
      return 'Вычисляем: ' + result;
    }
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout( () => {
      func.apply(this, args);
    }, ms);
  }
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let timeout;
  //let counts;
  function wrapper(...args) {
    wrapper.counts += 1;
    clearTimeout(timeout);
    timeout = setTimeout( () => {
      func.apply(this, args);
    }, ms);
  }

  wrapper.counts = 0;
  return wrapper;
}
