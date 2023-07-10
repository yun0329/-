let data = [];

const generate = () => {
  const id = document.getElementById("id").value;
  const password = document.getElementById("password").value;

  const user = {
    id: id,
    password: password,
  };

  data.push(user);

  //백엔드 URL
  fetch("YOUR_BACKEND_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        console.log("User data sent successfully");
      } else {
        console.error("Failed to send user data");
      }
    })
    .catch(error => {
      console.error("Error sending user data:", error);
    });

  console.log(data);
};
