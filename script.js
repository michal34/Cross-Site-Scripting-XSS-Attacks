const userMessages = [];
let userMessages2 = {};

const userMessageForm = document.querySelector("form");
const userMessagesList = document.querySelector("ul");

function renderMessages() {
  let messageItems = "";
  for (const message of userMessages) {
    messageItems = `
    ${messageItems}
    <li class="message-item">
      <div class="message-image">
        <img src="${message.image}" alt="${message.text}">
    </div>
    <p>${message.text}</p>
    </li>
    `;
  }

  userMessagesList.innerHTML = messageItems;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector("textarea");
  const messageImageInput = event.target.querySelector("input");
  const userMessage = userMessageInput.value;
  const imageUrl = messageImageInput.value;

  if (
    !userMessage ||
    !imageUrl ||
    userMessage.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert("Please insert a valid message and image.");
    return;
  }

  userMessages.push({
    text: userMessage,
    image: imageUrl,
  });

  userMessages2 = { text: userMessage, image: imageUrl };

  userMessageInput.value = "";
  messageImageInput.value = "";

  renderMessages();
  addData();
}

userMessageForm.addEventListener("submit", formSubmitHandler);

const fetchData = () => {
  fetch("https://herokunodeapp12.herokuapp.com/data/get")
    .then((response) => response.json())
    .then((data) => {
      data.data.map((dat) => {
        userMessages.push({
          text: dat.text,
          image: dat.img,
        });
      });
      renderMessages();
      console.log(userMessages);
    });
};

const addData = () => {
  const data = { userMessages2 };
  fetch("https://herokunodeapp12.herokuapp.com/data/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
fetchData();
