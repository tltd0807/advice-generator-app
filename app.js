const adviceId = document.querySelector(".advice-id");
const adviceContent = document.querySelector(".advice-content");
const btnRandom = document.querySelector(".btn-random");

const getAdvice = async () => {
  const respone = await axios.get("https://api.adviceslip.com/advice");
  console.log(respone);
  return respone.data.slip;
};

const setAdvice = async (adviceId, adviceContent) => {
  const data = await getAdvice();
  adviceId.textContent = `${data.id}`;
  adviceContent.textContent = `${data.advice}`;
};
btnRandom.addEventListener("click", () => {
  setAdvice(adviceId, adviceContent);
});
getAdvice();
