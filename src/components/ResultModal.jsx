import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";


// for passing ref thwough rollupVersion, we use forwardRef
const ResultModal = forwardRef(({ remainigTime, targetTime, onReset }, ref) => {
  const userLost = remainigTime <= 0;
    const fromttedRemainingTime = (remainigTime / 1000).toFixed(2);
    const score =Math.round(( 1-remainigTime/(targetTime*1000))*100)
  const dialog_ref = useRef();
  useImperativeHandle(ref, () => {
    return {
      openTheDialog() {
        dialog_ref.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog_ref} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your score : {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{fromttedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>, document.getElementById('modal')
  );
});
export default ResultModal