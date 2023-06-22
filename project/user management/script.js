const users = [];

function getUser() {
  const userIdInput = document.getElementById("userIdInput");
  const userId = parseInt(userIdInput.value);

  const user = users.find((user) => user.id === userId);
  if (user) {
    document.getElementById("userId").textContent = user.id;
    document.getElementById("userName").textContent = user.name;
  } else {
    document.getElementById("userId").textContent = "User not found";
    document.getElementById("userName").textContent = "";
  }
}

function addUser() {
  const userIdInput = document.getElementById("userIdInput");
  const userId = parseInt(userIdInput.value);
  const userNameInput = document.getElementById("userNameInput");
  const userName = userNameInput.value;

  const user = users.find((user) => user.id === userId);
  if (user) {
    alert("User with the same ID already exists!");
  } else {
    const newUser = { id: userId, name: userName };
    users.push(newUser);
    alert("User added successfully!");
  }
}

function editUser() {
  const userIdInput = document.getElementById("userIdInput");
  const userId = parseInt(userIdInput.value);
  const userNameInput = document.getElementById("userNameInput");
  const userName = userNameInput.value;

  const user = users.find((user) => user.id === userId);
  if (user) {
    user.name = userName;
    alert("User updated successfully!");
  } else {
    alert("User not found!");
  }
}

function deleteUser() {
  const userIdInput = document.getElementById("userIdInput");
  const userId = parseInt(userIdInput.value);

  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    alert("User deleted successfully!");
  } else {
    alert("User not found!");
  }
}
