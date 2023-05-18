export const handleView = (id: string) => {
  const Div = document.getElementById(id) as any;

  const classes = [...Div.classList].toString();

  const isOpen = classes.includes("slideIn");
  
  if (isOpen) {
    Div.classList.remove("slideIn");
    Div.classList.add("slideOut");
  } else {
    Div.classList.add("slideIn");
    Div.classList.remove("slideOut");

  }
};
