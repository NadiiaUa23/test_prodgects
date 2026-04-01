const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const reservationForms = document.querySelectorAll(".reservation-form");
reservationForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const checkin = form.querySelector('[name="checkin"]');
    const checkout = form.querySelector('[name="checkout"]');
    const guests = form.querySelector('[name="guests"]');

    if (
      !checkin.value ||
      !checkout.value ||
      !guests.value ||
      Number(guests.value) < 1
    ) {
      alert(
        "Por favor, completa todos los campos para continuar con la reserva.",
      );
      return;
    }

    alert(
      "Gracias. Tu consulta de disponibilidad ha sido enviada. Nos pondremos en contacto contigo pronto.",
    );
    form.reset();
  });
});
