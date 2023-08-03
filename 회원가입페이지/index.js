let data = [];

const generate = () => {
  // 아이디, 비밀번호, 비밀번호 재확인, 이름, 성별, 이메일을 가져옴
  const id = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const repassword = document.getElementById("confirm-password").value;
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const email = document.getElementById("email").value;

  const user = {
    id: id,
    password: password,
    repassword: repassword,
    name: name,
    gender: gender,
    email: email,
  };

  data.push(user);

  // 데이터를 백엔드로 전송
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
        // 여기서 다음 작업을 수행하거나 페이지를 이동할 수 있습니다.
      } else {
        console.error("Failed to send user data");
      }
    })
    .catch(error => {
      console.error("Error sending user data:", error);
    });
};
