import { type Signal, type Setter, onCleanup } from "solid-js";

export const animateProgress = (transitioning: Signal, timeToAnimate: string, cardsContainer: HTMLElement, selected: Signal, setSelected: Setter, cards: any) => {
    if (transitioning()) {
        const progressBar =
          cardsContainer.querySelectorAll(".ProgressBar")[selected()];
  
        setTimeout(() => {
          progressBar.style.transition = "width " + timeToAnimate + " linear";
          progressBar.style.width = "100%";
        }, 0); // Even though the delay is 0, wrapping in a function ensures it's set in the next event loop tick
  
        // Define the transition end handler
        const handleTransitionEnd = () => {
          // Update the selected index
          progressBar.style.transition = "none";
          progressBar.style.width = "0%";
  
          if (selected() + 1 === cards.length) {
            setSelected(0); // If it's the last card, loop back to the first
          } else {
            setSelected(selected() + 1); // Otherwise, move to the next card
          }
          // Remove the event listener to prevent it from being called multiple times
          progressBar.removeEventListener("transitionend", handleTransitionEnd);
        };
  
        // Add the event listener to the progress bar
        progressBar.addEventListener("transitionend", handleTransitionEnd);
  
        onCleanup(() => {
          // Clean up the event listener when the component unmounts or the effect re-runs
          progressBar.removeEventListener("transitionend", handleTransitionEnd);
        });
      }
}

