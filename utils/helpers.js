export default (context, inject) => {
  const substring = (description, number) => {
    let dots = "";
    if (description.length > 80)
      dots = description.substring(0, number) + "....";
    else dots = description;
    return dots;
  };

  inject("substring", substring);
};
