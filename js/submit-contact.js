function handleSubmit(event) {
  event.preventDefault();
  alert(translations[currentLang].success_message);
  event.target.reset();
}
