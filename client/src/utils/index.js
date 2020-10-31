const dateParser = (date) => {
  const d = date.split('T')[0].replaceAll('-', '');
  return Number(d);
};

export const sortArray = (array) => {
  let newArr = [];
  array.forEach((el) => {
    if (newArr.length > 0) {
      const i = newArr.findIndex(
        (item) => dateParser(item.created_at) < dateParser(el.created_at)
      );
      i >= 0 ? newArr.splice(i, 0, el) : newArr.push(el);
    }
    if (newArr.length === 0) {
      newArr.push(el);
    }
  });
  return newArr;
};

export const imgExist = (name) => {
  try {
    require(`../pictures/projects/${name}.png`);
    return true;
  } catch (e) {
    return false;
  }
};
