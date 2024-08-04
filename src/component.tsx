interface ComponentProps {
     question: string;
     select1: string;
     select2: string;
     select3: string;
}

export default function Component({
     question,
     select1,
     select2,
     select3,
}: ComponentProps) {
     return (
          <div className="review__tag--container">
               <form action="#">
                    <fieldset className="review__tag--column">
                         <legend className="review__tag--h1">{question}</legend>
                         <input
                              type="radio"
                              className="review__tag review__tag--input"
                              id="select1"
                              name="select"
                         />
                         <label
                              className="review__tag--label"
                              htmlFor="select1"
                         >
                              {select1}
                         </label>

                         <input
                              type="radio"
                              className="review__tag review__tag--input"
                              id="select2"
                              name="select"
                         />
                         <label
                              className="review__tag--label"
                              htmlFor="select2"
                         >
                              {select2}
                         </label>

                         <input
                              type="radio"
                              className="review__tag review__tag--input"
                              id="select3"
                              name="select"
                         />
                         <label
                              className="review__tag--label"
                              htmlFor="select3"
                         >
                              {select3}
                         </label>
                    </fieldset>
               </form>
          </div>
     );
}
