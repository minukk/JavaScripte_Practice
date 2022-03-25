const userModule = (function() {
  const users = [];
  let userId = 0;

  return {
    create: (username, password) => {
      const user = { id: userId, username, password };
      users.push(user);
      userId += 1;

      return user;
    },
    get: username => {
      let targetUser;

      users.forEach(user => {
        if (user.username === username) {
          targetUser = user;
        }
      });

      return targetUser;
    }
  };
})();

