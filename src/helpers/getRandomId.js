const getRandomId = () => {
  const id = Math.floor(Math.random() * 100) + 1;
  return id;
};

export default getRandomId;
