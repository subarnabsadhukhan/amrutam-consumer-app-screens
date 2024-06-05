import DisplayCategories from "./DisplayCategories";

const QuestionContent = () => {
  return (
    <div className="flex flex-col gap-3 pr-5 md:pr-16">
      <div className="font-poppins text-lg text-black sm:text-xl">
        <span className="font-semibold">Question:</span>
        <span className="text-justify font-medium">{` Can Ayurveda help with stress and mental health issues?`}</span>
      </div>
      <div className="text-justify font-poppins text-[18px] leading-[24.8px] tracking-[0.01em] text-[#1F1F1F]">
        Explores the potential benefits of traditional Ayurvedic practices in
        managing stress and improving mental well-being, examining holistic
        approaches like herbal remedies, meditation, and lifestyle adjustments.
      </div>
      <DisplayCategories
        category={{
          main: "General Ayurveda",
          sub: "Basics of Ayurveda",
        }}
      />
    </div>
  );
};

export default QuestionContent;
