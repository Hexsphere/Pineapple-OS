import { elements } from './base'
elements.feedbackAssistantCancelButton.addEventListener("click", () => {
    transitionBootScreen(elements.feedbackAssistant, elements.desktop)
})
elements.feedbackAssistantSubmitButton.addEventListener("click", () => {
    open("mailto:smileycreations15%3Cdeveloper@smileycreations15.com%3E,%20Hexsphere%3Cethanhanderson1@gmail.com%3E?subject=Feedback%20on%20Pineapple%20OS&body=" + encodeURIComponent(elements.feedbackAssistantTextarea.value) + "%0A---%0AUser%20info:%0AUsername:%20" + encodeURIComponent(localStorage.getItem("username")));
    elements.feedbackAssistantTextarea.value = ""
    transitionBootScreen(elements.feedbackAssistant, elements.fullScreenPrompt)
    var listener = () => {
        document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.webkitRequestFullscreen()
        transitionBootScreen(elements.fullScreenPrompt, elements.desktop)
        removeEventListener("click", listener)
    }
    setTimeout(() => {
        addEventListener("click", listener)
    }, 500);
})
elements.feedbackAssistantTopbarButton.addEventListener("click", () => {
    transitionBootScreen(elements.desktop, elements.feedbackAssistant)
})