import React from "react";
import "./styles.css";
import faqList from "../../data/faqList";

const classes = "flex justify-content-between align-items-center";

const FaqItem = ({faqItemData, onDelete}) => {
  const {question , answer} = faqItemData;

  const [itemClicked, setItemClicked] = React.useState(false);
  
  const itemTitleClickHandler = () => setItemClicked(!itemClicked);

  return (
  <>
  <div className="flex justify-content-center mt-75 w-100 h-50">
    <div className="w-50" data-testid="faq-list">
      <div className="item my-10">
        <div className={`ques ${classes} pa-15 mb-3`} onClick={itemTitleClickHandler}>
          <h4 className="flex align-items-center my-2">
            {question}
          </h4>
          <span>{itemClicked ? '-' : '+'}</span>
        </div>
        <div className={`${itemClicked ? 'open' : 'closed'} ${classes}`}>
          <p className="my-0">
            {answer}
          </p>
          <div className={classes}>
            <button className="danger small" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
      <div className={classes}>
        <div>
          <textarea
            className="ma-8 w-100"
            placeholder="Enter the question"
            data-testid="add-question"
            value=""
          />
          <textarea
            className="ma-8 w-100"
            placeholder="Enter the answer"
            data-testid="add-answer"
            value=""
          />
        </div>
        <button data-testid="add-faq-button">Add</button>
      </div>
    </div>
  </div>
  </>
)} 

const Faqs = () => {
  const [availableFaq, setAvailableFaq] = React.useState(faqList)

  const itemDeleteHandler = (faqItemDataAnswer) => setAvailableFaq(availableFaq.filter(faq => faq.answer !== faqItemDataAnswer))
  return (
  <>
  {availableFaq.map((faqItemData, i) =>
   <FaqItem
    faqItemData={faqItemData}
    key={i}
    onDelete={itemDeleteHandler(faqItemData.answer)} />
    )}
  </>
  )
}

export default Faqs;
