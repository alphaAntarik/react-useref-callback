import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallange = ({ title, targerTime }) => {
    const [timeRemainig, settimeRemainig] = useState(targerTime*1000);

     const dialog = useRef();
    const timer = useRef(); //basically a pointer tht we can use in clearTimeout
    //if we use userState here, then it will reexecute for every instances and initialize the timer value , hence
    //instances of the component will not work parallelly properly... 
    //also we dont need to reexecute the ui cuz timer variable has no direct impact on ui
    const timeIsActive = timeRemainig > 0 && timeRemainig < targerTime * 1000
    
    if (timeRemainig <= 0) {
        clearInterval(timer.current);
        // settimeRemainig(targerTime * 1000)
        dialog.current.openTheDialog();
    }
    function handleReset() {
    settimeRemainig(targerTime * 1000);
}

    function handleTimer() {
     timer.current=   setInterval(() => {
      settimeRemainig(previousTimeRenaining=>previousTimeRenaining-10)
        }, 10);

    }
    function handleStop() {
        dialog.current.openTheDialog();
        clearInterval(timer.current)
    }
    return (
      <>
        {/* {timerExpired && */}
        <ResultModal
          ref={dialog}
          targetTime={targerTime}
          remainigTime={timeRemainig}
          onReset={handleReset}
        />
        {/* } */}
        <section className="challenge">
          <h2>{title}</h2>

          <p className="challenge-time">
            {targerTime} second{targerTime > 1 ? "s" : ""}
          </p>

          <p>
            <button onClick={timeIsActive ? handleStop : handleTimer}>
              {timeIsActive ? "Stop" : "Start"} Challenge
            </button>
          </p>
          <p className={timeIsActive ? "active" : undefined}>
            {timeIsActive ? "Time is running..." : "Timer inactive"}
          </p>
        </section>
      </>
    );
}

export default TimerChallange