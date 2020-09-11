const createMessage = (from, text) => {
  return {
    from,
    text,
    time: new Date().getTime(),
  };
};

module.exports = {
  createMessage,
};
