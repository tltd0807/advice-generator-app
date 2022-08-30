const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-content");
const btnRandom = document.querySelector(".btn-random");

const getAdvice = async () => {
  // console.log("https://api.adviceslip.com/advice?t=" + Math.random());
  // const url = "https://api.adviceslip.com/advice?t=" + Math.random();
  const respone = await axios.get(
    "https://api.adviceslip.com/advice?t=" + Math.random()
  );
  console.log(respone.data);
  return respone.data.slip;
};

const setAdvice = async (adviceId, adviceContent) => {
  const data = await getAdvice();
  // console.log(data);
  adviceId.textContent = `${data.id}`;
  adviceContent.textContent = `${data.advice}`;
};
btnRandom.addEventListener("click", () => {
  setAdvice(adviceId, adviceContent);
});
setAdvice(adviceId, adviceContent);
