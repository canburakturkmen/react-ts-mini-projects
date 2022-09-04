import Faq from "./Faq";
import classes from "./FaqSection.module.css";

const FAQ_LIST = [
  { title: "Why shouldn't we trust atoms?", text: "They make up everything." },
  {
    title: "What do you call someone with no body no nose?",
    text: "Nobody knows.",
  },
  {
    title: "What's the object-oriented way to become wealthy?",
    text: "Inheritance.",
  },
  { title: "What is 1 + 1?", text: "Depends on who are you asking." },
];

const FaqSection = () => {
  return (
    <div className={classes.container}>
      <h1>Frequently Asked Questions</h1>
      {FAQ_LIST.map((faq) => (
        <Faq title={faq.title} text={faq.text} />
      ))}
    </div>
  );
};

export default FaqSection;
