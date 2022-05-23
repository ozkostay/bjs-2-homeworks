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
    }

    if (cache.length >= 5) {
      cache.shift();
      console.log('Удаляем старый элемент');
    }
    
    let result = func(...args);
    cache.push({hash: hash, value: result});
    console.log('Вычисляем: ',result);
    return 'Вычисляем: ' + result;
  }

  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timeout;
  
  return function (...args) {
    if (!timeout) {
      func();
    }

    clearTimeout(timeout);
    timeout = setTimeout( () => {
      func.apply(this, args);
    }, ms);
  }
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let timeout;
  
  function wrapper(...args) {
    if (!timeout) {
      func();
      wrapper.counts += 1;
    }

    wrapper.counts += 1;
    clearTimeout(timeout);
    timeout = setTimeout( () => {
      func.apply(this, args);
    }, ms);
  }

  wrapper.counts = 0;
  return wrapper;
}
