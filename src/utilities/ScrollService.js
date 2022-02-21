export const scrollToHireMe = () => {
    let contactScreen = document.getElementById("contact");
    if (!contactScreen) return;
    contactScreen.scrollIntoView({ behavior: "smooth" })
}